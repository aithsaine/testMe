import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import connect from "@/db/db.config";
import User from "@/models/User";


connect()
export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { firstname, lastname, email, password, confirmPsd } = data;
        if (firstname == null || lastname == null || password == null || confirmPsd == null || email == null) {
            return NextResponse.json({ message: "Fill all informations", status: 401 })

        }
        const salt = await bcrypt.genSalt(10)
        const hashedPsd = await bcrypt.hash(password, salt)

        if (password !== confirmPsd) {
            return NextResponse.json({ message: "The password and the Confirm password doesn't the same", status: 401 })
        }
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ message: "email already in use", status: 401 })
        }
        const newUser = new User({ firstname, lastname, email, password: hashedPsd })
        const save = await newUser.save();
        if (save) {
            return NextResponse.json({ message: "Your Account has been created", status: 200 })
        }
        return NextResponse.json(hashedPsd);


    } catch (error: any) {
        return NextResponse.json({ error, status: 500 })

    }
}