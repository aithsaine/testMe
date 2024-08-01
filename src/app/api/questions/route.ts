import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req: NextRequest) {
    try {
        const questions = await prisma.question.findMany()
        return NextResponse.json({ questions }, { status: 201 })

    } catch (error: any) {

        return NextResponse.json({ error }, { status: 500 })

    } finally {

    }
}