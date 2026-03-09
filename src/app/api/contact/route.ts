import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    // We only try to send if RESEND_API_KEY is defined
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: "BEYR Energy Website <onboarding@resend.dev>", // Change to verified domain later
        to: "info@beyrenergy.com",
        subject: `New Inquiry from ${name} - ${service}`,
        html: `
          <h2>New Website Contact Form Submission</h2>
          <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td width="30%"><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td><strong>Phone:</strong></td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td><strong>Company:</strong></td>
              <td>${company || "N/A"}</td>
            </tr>
            <tr>
              <td><strong>Service of Interest:</strong></td>
              <td>${service}</td>
            </tr>
            <tr>
              <td colspan="2">
                <strong>Project Details/Message:</strong><br/>
                <p style="white-space: pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>
        `,
      });
    } else {
      // Stub simulating success if key isn't provided yet
      console.log("No Resend API Key provided. Simulated sending email:", body);
    }

    return NextResponse.json({ success: true, message: "Email sent." }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
