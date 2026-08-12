import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const {
      user_name,
      user_email,
      phone,
      project_type,
      message,
    } = await request.json();

    if (!user_name || !user_email || !phone || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    if (
      !process.env.ZOHO_EMAIL ||
      !process.env.ZOHO_APP_PASSWORD
    ) {
      console.error("Zoho environment variables are missing.");

      return Response.json(
        {
          success: false,
          message: "Email configuration is missing.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"ARK AQUATECH Website" <${process.env.ZOHO_EMAIL}>`,
      to: "info@arkaquatech.com",
      replyTo: user_email,
      subject: `New Project Enquiry - ${user_name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

          <h2 style="color:#0A6EBD;">
            New Project Enquiry
          </h2>

          <p>
            A new enquiry has been submitted from the ARK AQUATECH website.
          </p>

          <hr />

          <h3>Customer Details</h3>

          <p>
            <strong>Name:</strong><br />
            ${user_name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${user_email}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${phone}
          </p>

          <p>
            <strong>Project Type:</strong><br />
            ${project_type || "Not specified"}
          </p>

          <p>
            <strong>Project Details:</strong><br />
            ${String(message).replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p style="color:#666;">
            This enquiry was submitted from the ARK AQUATECH website.
          </p>

        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Zoho email error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send enquiry.",
      },
      { status: 500 }
    );
  }
}