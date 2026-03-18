import { Resend } from "resend";
import { verifyTurnstileToken } from "@/lib/turnstile";

const resend = new Resend(process.env.RESEND_API_KEY);

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
		const { email, turnstileToken } = body;

		// Verify Turnstile Token
		const isVerified = await verifyTurnstileToken(turnstileToken);
		if (!isVerified) {
			return Response.json(
				{ error: "Captcha verification failed. Please try again." },
				{ status: 400 },
			);
		}

		// Validate required field
		if (!email) {
			return Response.json(
				{ error: "Email address is required" },
				{ status: 400 },
			);
		}

		// Validate email format
		if (!isValidEmail(email)) {
			return Response.json({ error: "Invalid email address" }, { status: 400 });
		}

		// Sanitize email for header
		const sanitizedEmail = sanitizeHeaderValue(email);

		const adminEmails = [
			"Luca@jwsecurity.co.uk",
			"Kyle@jwsecurity.co.uk",
			"Help@jwsecurity.co.uk",
		];

		const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

		for (const adminEmail of adminEmails) {
			await resend.emails.send({
				from: "JW Security Newsletter <no-reply@jwsecurity.co.uk>",
				to: adminEmail,
				subject: "New Newsletter Subscription",
				html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1c2e4a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Newsletter Subscription</h1>
          </div>

          <div style="padding: 30px; background-color: #f5f5f5;">
            <p style="font-size: 16px; line-height: 1.6;">
              A new visitor has subscribed to your newsletter:
            </p>
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            </div>
          </div>

          <div style="background-color: #00c6d7; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0; font-size: 12px;">JW Security Newsletter Subscription</p>
          </div>
        </div>
      `,
			});
			await sleep(600);
		}

		// Send welcome email to subscriber
		const welcomeEmail = await resend.emails.send({
			from: "JW Security <no-reply@jwsecurity.co.uk>",
			to: sanitizedEmail,
			replyTo: "Luca@jwsecurity.co.uk",
			subject: "Welcome to JW Security Newsletter",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1c2e4a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Welcome to JW Security Newsletter</h1>
          </div>

          <div style="padding: 30px; background-color: #f5f5f5;">
            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for subscribing to our newsletter!
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
              You'll now receive regular updates about:
            </p>

            <ul style="font-size: 16px; line-height: 1.8;">
              <li>Security tips and advice</li>
              <li>New services and offerings</li>
              <li>Special promotions</li>
              <li>Industry news and updates</li>
            </ul>

            <p style="font-size: 16px; line-height: 1.6;">
              If you have any questions or need immediate assistance, don't hesitate to contact us:
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
			message: "Successfully subscribed to newsletter",
		});
	} catch (error) {
		console.error("Error processing newsletter subscription:", error);
		return Response.json(
			{
				error:
					"Failed to process subscription. Please try again or contact us directly.",
			},
			{ status: 500 },
		);
	}
}
