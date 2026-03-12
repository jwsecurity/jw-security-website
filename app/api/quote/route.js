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

const SERVICE_LABELS = {
	"locksmith": "Locksmith Visit",
	"cctv": "CCTV Installation",
	"alarm": "Alarm System",
	"fire-door": "Fire Door Inspection",
};

const PROPERTY_LABELS = {
	residential: "Residential",
	commercial: "Commercial",
};

const URGENCY_LABELS = {
	standard: "Standard (within 1-2 weeks)",
	urgent: "Urgent (within 72 hours)",
};

function formatPreferredDate(preferredDate) {
	if (!preferredDate) return "No preference provided";
	try {
		const date = new Date(preferredDate);
		if (Number.isNaN(date.getTime())) return preferredDate;
		return date.toLocaleDateString("en-GB", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} catch (error) {
		return preferredDate;
	}
}

export async function POST(request) {
	try {
		const body = await request.json();
		const {
			name,
			email,
			phone,
			postcode,
			propertyType,
			service,
			urgency,
			preferredDate,
			details,
		} = body;

		if (!name || !email || !service || !details) {
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
		const sanitizedService = sanitizeHeaderValue(service);

		// Escape HTML in all user inputs
		const escapedName = escapeHtml(name);
		const escapedEmail = escapeHtml(email);
		const escapedPhone = escapeHtml(phone || "Not provided");
		const escapedPostcode = escapeHtml(postcode || "Not provided");
		const escapedDetails = escapeHtml(details);

		const formattedService = SERVICE_LABELS[service] || escapeHtml(service);
		const formattedProperty =
			PROPERTY_LABELS[propertyType] ||
			escapeHtml(propertyType) ||
			"Not specified";
		const formattedUrgency =
			URGENCY_LABELS[urgency] || escapeHtml(urgency) || "Not specified";
		const formattedDate = escapeHtml(formatPreferredDate(preferredDate));

		const adminEmails = [
			"Luca@jwsecurity.co.uk",
			"Kyle@jwsecurity.co.uk",
			"Help@jwsecurity.co.uk",
		];

		const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
		const jwSecurityEmails = [];

		for (const adminEmail of adminEmails) {
			const response = await resend.emails.send({
				from: "JW Security Quote Form <no-reply@jwsecurity.co.uk>",
				to: adminEmail,
				replyTo: sanitizedEmail,
				subject: `New Quote Request: ${sanitizeHeaderValue(formattedService)}`,
				html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
          <div style="background-color: #1c2e4a; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Quote Request</h1>
          </div>

          <div style="padding: 28px; background-color: #f5f7fb;">
            <h2 style="color: #1c2e4a; margin: 0 0 20px;">Client Details</h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${escapedName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${escapedPhone}</p>
              <p style="margin: 10px 0;"><strong>Postcode:</strong> ${escapedPostcode}</p>
            </div>

            <h2 style="color: #1c2e4a; margin: 0 0 20px;">Project Overview</h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 10px;">
              <p style="margin: 10px 0;"><strong>Service:</strong> ${formattedService}</p>
              <p style="margin: 10px 0;"><strong>Property Type:</strong> ${formattedProperty}</p>
              <p style="margin: 10px 0;"><strong>Urgency:</strong> ${formattedUrgency}</p>
              <p style="margin: 10px 0;"><strong>Preferred Date:</strong> ${formattedDate}</p>
              <div style="margin-top: 20px;">
                <h3 style="color: #1c2e4a; margin: 0 0 10px;">Project Details</h3>
                <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${escapedDetails}</p>
              </div>
            </div>
          </div>

          <div style="background-color: #00c6d7; color: #ffffff; padding: 16px; text-align: center;">
            <p style="margin: 0; font-size: 12px;">This email was sent from the JW Security quote form</p>
          </div>
        </div>
      `,
			});
			jwSecurityEmails.push(response);
			await sleep(600);
		}

		const customerEmail = await resend.emails.send({
			from: "JW Security <no-reply@jwsecurity.co.uk>",
			to: sanitizedEmail,
			replyTo: "Luca@jwsecurity.co.uk",
			subject: "We have received your quote request",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
          <div style="background-color: #1c2e4a; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You for Your Quote Request</h1>
          </div>

          <div style="padding: 28px; background-color: #f5f7fb;">
            <p style="font-size: 16px; line-height: 1.6;">Dear ${escapedName},</p>
            <p style="font-size: 16px; line-height: 1.6;">
              Thanks for reaching out to JW Security. Our team is reviewing your requirements for ${formattedService.toLowerCase()} and will be in touch within one business day.
            </p>

            <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #1c2e4a; margin: 0 0 10px;">Summary of Your Request</h3>
              <p style="margin: 8px 0;"><strong>Service:</strong> ${formattedService}</p>
              <p style="margin: 8px 0;"><strong>Property Type:</strong> ${formattedProperty}</p>
              <p style="margin: 8px 0;"><strong>Urgency:</strong> ${formattedUrgency}</p>
              <p style="margin: 8px 0;"><strong>Preferred Date:</strong> ${formattedDate}</p>
              <p style="margin: 8px 0;"><strong>Postcode:</strong> ${escapedPostcode}</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
              In the meantime, if you need to update any details or have urgent security needs, call us on <strong>0208 646 7931</strong> or reply to this email.
            </p>

            <div style="background-color: #00c6d7; color: #ffffff; padding: 16px; border-radius: 10px; text-align: center; margin-top: 20px;">
              <p style="margin: 4px 0; font-size: 18px; font-weight: bold;">0208 646 7931</p>
              <p style="margin: 4px 0; font-size: 14px;">Emergency: 07860 606 151</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
              Best regards,<br />
              The JW Security Team
            </p>
          </div>

          <div style="background-color: #1c2e4a; color: #ffffff; padding: 20px; text-align: center;">
            <p style="margin: 5px 0; font-size: 14px;">JW Security - Locksmiths & Security Specialists</p>
            <p style="margin: 5px 0; font-size: 12px;">Serving London & Surrey since 1991</p>
          </div>
        </div>
      `,
		});

		return Response.json({
			success: true,
			message: "Quote request submitted successfully",
			ids: {
				jwSecurity: jwSecurityEmails.map((e) => e.data?.id),
				customer: customerEmail.data?.id,
			},
		});
	} catch (error) {
		console.error("Error sending quote email:", error);
		return Response.json(
			{
				error:
					"Failed to send quote request. Please try again or contact us directly.",
			},
			{ status: 500 },
		);
	}
}
