import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: String(process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Mikereations Website" <${process.env.CONTACT_FROM}>`,
      to: process.env.CONTACT_TO,
      subject: `New request from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { ok: false, error: "Email send failed" },
      { status: 500 },
    );
  }
}
