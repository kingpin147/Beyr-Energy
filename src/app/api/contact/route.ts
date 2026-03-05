import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'BEYR Energy <leads@beyrenergy.com>',
      to: ['info@beyrenergy.com'],
      subject: `New Lead: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #001A3D;">New Business Inquiry from BEYR Energy Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: #F8F9FA; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #EEE;" />
          <p style="font-size: 12px; color: #999;">This lead was captured from the official BEYR Energy website contact form.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
