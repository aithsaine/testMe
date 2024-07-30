import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';
import { connect } from '../../../../helpers/connectToDatabase';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const { firstname, lastname, email, password, confirmPsd } = await request.json();

        if (!firstname || !lastname || !email || !password || !confirmPsd) {
            return NextResponse.json({ success: false, message: 'Fill all items!!' }, { status: 422 });
        }

        if (password !== confirmPsd) {
            return NextResponse.json({ success: false, message: 'Confirm Password mismatch!!' }, { status: 422 });
        }

        await connect();

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: { firstname: String(firstname), lastname: String(lastname), email: String(email), password: hashedPassword },
        });

        if (newUser) {
            return NextResponse.json({ success: true, message: 'Account created successfully' });
        }

    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ success: false, message: 'Sorry! Something went wrong!!', error }, { status: 400 });
    } finally {
        await prisma.$disconnect();
    }
}
