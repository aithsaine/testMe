import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
        user: process.env.MAILTRAP_USER!,
        pass: process.env.MAILTRAP_PASSWORD!,
    },
});

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const mailOptions = {
            from: email,
            to: 'aithsaine3@gmail.com', // Replace with your email
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
