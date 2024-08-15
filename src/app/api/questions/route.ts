import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { getToken } from "next-auth/jwt";
import { ObjectId } from "mongodb";

export async function GET(req: NextRequest) {
    try {
        const secret = process.env.JWT_SECRET;
        const token = await getToken({ req, secret });

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Check if token.id is a valid ObjectId
        let userId: string | ObjectId = token.id;

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
        }

        // Fetch questions and user's answers
        const questions = await prisma.question.findMany();
        const answers = await prisma.answer.findMany({
            where: { userId: userId },
        });

        return NextResponse.json({ questions, answers }, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    } finally {
        await prisma.$disconnect(); // Ensure database connection is closed
    }
}
