import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    const data = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_SENDER_EMAIL!,
      to: email,
      subject: 'Welcome to Our Newsletter!',
      html: '<p>Thanks for subscribing! Here’s your exclusive content.</p>',
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}