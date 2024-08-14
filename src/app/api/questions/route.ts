import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
    try {
        const secret = process.env.JWT_SECRET;
        const token = await getToken({ req, secret });

        const questions = await prisma.question.findMany()
        const answers = await prisma.answer.findMany({
            where: { userId: token?.id }
        })
        return NextResponse.json({ questions, answers }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ error }, { status: 500 })
    } finally {

    }
}