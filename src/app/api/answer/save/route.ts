import { connect } from "http2";
import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getSession, useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";


export async function POST(request: NextRequest) {
    try {
        const secret = process.env.JWT_SECRET;
        const { answer } = await request.json();
        const token = await getToken({ req: request, secret });
        await prisma.$connect()
        await prisma.answer.create({ data: { ...answer, userId: token?.id } })

        return NextResponse.json({ answer, success: true })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    } finally {
        await prisma.$disconnect()
    }
}