import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// HTML escape function to prevent XSS
function escapeHtml(text) {
	if (!text) return "";
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

// Email validation
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Strip CRLF characters from headers
function sanitizeHeaderValue(value) {
	if (!value) return "";
	return value.replace(/[\r\n]/g, "");
}

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, phone, subject, message } = body;

		// Validate required fields
		if (!name || !email || !subject || !message) {
			return Response.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		// Validate email format
		if (!isValidEmail(email)) {
			return Response.json({ error: "Invalid email address" }, { status: 400 });
		}

		// Sanitize inputs for headers
		const sanitizedEmail = sanitizeHeaderValue(email);
		const sanitizedSubject = sanitizeHeaderValue(subject);

		// Escape HTML in all user inputs
		const escapedName = escapeHtml(name);
		const escapedEmail = escapeHtml(email);
		const escapedPhone = escapeHtml(phone || "Not provided");
		const escapedSubject = escapeHtml(subject);
		const escapedMessage = escapeHtml(message);

		const adminEmails = [
			"Luca@jwsecurity.co.uk",
			"Kyle@jwsecurity.co.uk",
			"Help@jwsecurity.co.uk",
		];

		const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
		const jwSecurityEmails = [];

		for (const adminEmail of adminEmails) {
			const response = await resend.emails.send({
				from: "JW Security Contact Form <no-reply@jwsecurity.co.uk>",
				to: adminEmail,
				replyTo: sanitizedEmail,
				subject: `New Contact Form: ${sanitizedSubject}`,
				html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1c2e4a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
          </div>

          <div style="padding: 30px; background-color: #f5f5f5;">
            <h2 style="color: #1c2e4a; margin-bottom: 20px;">Contact Details</h2>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${escapedName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${escapedPhone}</p>
              <p style="margin: 10px 0;"><strong>Subject:</strong> ${escapedSubject}</p>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1c2e4a; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${escapedMessage}</p>
            </div>
          </div>

          <div style="background-color: #00c6d7; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0; font-size: 12px;">This email was sent from the JW Security website contact form</p>
          </div>
        </div>
      `,
			});
			jwSecurityEmails.push(response);
			await sleep(600); // Small delay to avoid rate limiting
		}

		// Send confirmation email to customer
		const customerEmail = await resend.emails.send({
			from: "JW Security <no-reply@jwsecurity.co.uk>",
			to: sanitizedEmail,
			replyTo: "Luca@jwsecurity.co.uk",
			subject: "Thank you for contacting JW Security",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1c2e4a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You for Contacting JW Security</h1>
          </div>

          <div style="padding: 30px; background-color: #f5f5f5;">
            <p style="font-size: 16px; line-height: 1.6;">Dear ${escapedName},</p>

            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for getting in touch with JW Security. We have received your enquiry and one of our
              team members will get back to you within 24 hours.
            </p>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1c2e4a; margin-top: 0;">Your Message</h3>
              <p style="margin: 10px 0;"><strong>Subject:</strong> ${escapedSubject}</p>
              <p style="white-space: pre-wrap; line-height: 1.6;">${escapedMessage}</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
              If you need immediate assistance, please don't hesitate to call us:
            </p>

            <div style="background-color: #00c6d7; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <p style="margin: 5px 0; font-size: 18px;"><strong>0208 646 7931</strong></p>
              <p style="margin: 5px 0; font-size: 14px;">Emergency: 07860 606 151</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              The JW Security Team
            </p>
          </div>

          <div style="background-color: #1c2e4a; color: white; padding: 20px; text-align: center;">
            <p style="margin: 5px 0; font-size: 14px;">JW Security - Locksmiths & Security Specialists</p>
            <p style="margin: 5px 0; font-size: 12px;">Serving London & Surrey since 1991</p>
          </div>
        </div>
      `,
		});

		return Response.json({
			success: true,
			message: "Emails sent successfully",
			ids: {
				jwSecurity: jwSecurityEmails.map((e) => e.data?.id),
				customer: customerEmail.data?.id,
			},
		});
	} catch (error) {
		console.error("Error sending email:", error);
		return Response.json(
			{
				error: "Failed to send email. Please try again or contact us directly.",
			},
			{ status: 500 },
		);
	}
}
