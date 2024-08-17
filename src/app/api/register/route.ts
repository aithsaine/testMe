import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';
import { connect } from '../../../../helpers/connectToDatabase';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        const { firstname, lastname, email, password, confirmPsd } = await request.json();

        if (!firstname || !lastname || !email || !password || !confirmPsd) {
            return NextResponse.json({ success: false, message: 'Fill all items!!' }, { status: 422 });
        }

        if (password !== confirmPsd) {
            return NextResponse.json({ success: false, message: 'Confirm Password mismatch!!' }, { status: 422 });
        }

        await connect();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const existingUser = await prisma.user.findFirst({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ success: false, message: 'Email already in use!!' }, { status: 422 });
        }

        const newUser = await prisma.user.create({
            data: {
                firstname: String(firstname),
                lastname: String(lastname),
                email: String(email),
                password: hashedPassword,
            },
        });

        if (newUser) {
            return NextResponse.json({ success: true, message: 'Account created successfully' });
        } else {
            return NextResponse.json({ success: false, message: 'Sorry! Something went wrong!!' }, { status: 400 });
        }

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Sorry! Something went wrong!!' }, { status: 400 });
    } finally {
        await prisma.$disconnect();
    }
}
