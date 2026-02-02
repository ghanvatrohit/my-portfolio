import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio: ${subject}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
