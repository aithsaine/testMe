import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { connect } from "../../../../helpers/connectToDatabase";

export async function GET(req: NextRequest) {

    try {
        await connect()
        const subject: string | null = req.nextUrl.searchParams.get('subject')
        const questions = await prisma.question.findMany({ where: { subject: (subject as string) } })
        if (questions.length) {
            return NextResponse.json({ questions, success: true }, { status: 200 })
        }
        return NextResponse.json({ questions, success: false }, { status: 401 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })

    } finally {
        await prisma.$disconnect();
    }
}