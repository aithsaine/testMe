import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { getToken } from "next-auth/jwt";



export async function GET(req: NextRequest) {
    try {
        await prisma.$connect()
        const secret = process.env.JWT_SECRET;
        const subject: string | null = req.nextUrl.searchParams.get('subject')
        const token = await getToken({ req, secret });
        const answer = await prisma.answer.findFirst({
            where: {
                subject: decodeURIComponent(subject as string),
                userId: token?.id
            }
        })
        console.log(answer)
        if (answer) {
            return NextResponse.json({ success: true })
        }
        return NextResponse.json({ success: false }, { status: 401 })


    } catch (error) {

    } finally {
        await prisma.$disconnect()
    }
}