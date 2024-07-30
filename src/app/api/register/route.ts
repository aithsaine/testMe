import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { connect } from "../../../../helpers/connectToDatabase";


export async function POST(request: Request) {

    try {
        const { firstname, lastname, email, password, confirmPsd } = await request.json();

        if (firstname == null || lastname == null || email == null || password == null || confirmPsd == null) {
            return NextResponse.json({ success: false, message: "Fill all items!!" }, { status: 422 })
        }
        if (password !== confirmPsd) {
            return NextResponse.json({ success: false, message: "Confirm Password mismatch!!" }, { status: 422 })

        }
        await connect()
        const newUser = await prisma.user.create({
            data: { firstname: String(firstname), lastname: String(lastname), email: String(email), password: String(password) }
        })
        if (newUser) {
            return NextResponse.json({ success: true, message: "Account created successfully" })

        }






    } catch (e) {
        return NextResponse.json({ success: false, message: "Sorry! Somthink went wrong!!", e }, { status: 400 })
    }
    finally {
        prisma.$disconnect()
    }
}