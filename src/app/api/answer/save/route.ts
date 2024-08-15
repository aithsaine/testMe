import { connect } from "http2";
import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { ObjectId } from 'mongodb'

export async function POST(request: NextRequest) {
    try {
        const { answer } = await request.json();
        const secret = process.env.JWT_SECRET;
        const token = await getToken({ req: request, secret });

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Check if token.id is a valid ObjectId
        let userId: string | ObjectId | any = token.id;

        if (ObjectId.isValid(userId)) {
            userId = new ObjectId(userId);
        } else if (token.email) {
            // If token.id is not a valid ObjectId, fallback to email or another unique identifier
            const user = await prisma.user.findUnique({
                where: { email: token.email },
            });

            if (user) {
                userId = user.id; // Assuming `id` is stored in the user object
            } else {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }
        } else {
            return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
        } await prisma.$connect()
        await prisma.answer.create({ data: { ...answer, userId } })

        return NextResponse.json({ answer: { ...answer, userId }, success: true })

    } catch (error: any) {
        return NextResponse.json({ success: false, error: error?.message }, { status: 500 });

    } finally {
        await prisma.$disconnect()
    }
}