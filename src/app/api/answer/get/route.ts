import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { getToken } from "next-auth/jwt";
import { ObjectId } from "mongodb"



export async function GET(req: NextRequest) {
    try {
        await prisma.$connect()
        const subject: string | null = req.nextUrl.searchParams.get('subject')
        const secret = process.env.JWT_SECRET;
        const token = await getToken({ req, secret });

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Check if token.id is a valid ObjectId
        let userId: string | ObjectId | any = token.id;

        if (ObjectId.isValid(userId)) {
            userId = new ObjectId(userId);
        } else if (token.email) {
            // If token.id is not a valid ObjectId, fallback to email or another unique identifier
            const user = await prisma.user.findFirst({
                where: { email: token.email },
            });

            if (user) {
                userId = user.id; // Assuming `id` is stored in the user object
            } else {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }
        } else {
            return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
        } const answer = await prisma.answer.findFirst({
            where: {
                subject: decodeURIComponent(subject as string),
                userId
            }
        })
        if (answer) {
            return NextResponse.json({ success: true, answer })
        }
        return NextResponse.json({ success: false }, { status: 401 })


    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 })

    } finally {
        await prisma.$disconnect()
    }
}