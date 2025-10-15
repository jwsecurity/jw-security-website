const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Strip CRLF characters from headers
function sanitizeHeaderValue(value) {
  if (!value) return '';
  return value.replace(/[\r\n]/g, '');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate required field
  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Sanitize email for header
  const sanitizedEmail = sanitizeHeaderValue(email);

  try {
    // Send notification to JW Security about new subscriber
    const adminEmail = await resend.emails.send({
      from: 'JW Security Newsletter <no-reply@jwsecurity.co.uk>',
      to: ['help@jwsecurity.co.uk'],
      subject: 'New Newsletter Subscription',
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
      `
    });

    // Send welcome email to subscriber
    const welcomeEmail = await resend.emails.send({
      from: 'JW Security <no-reply@jwsecurity.co.uk>',
      to: [sanitizedEmail],
      replyTo: 'help@jwsecurity.co.uk',
      subject: 'Welcome to JW Security Newsletter',
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
      `
    });

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });

  } catch (error) {
    // Log error server-side only, don't expose details to client
    console.error('Error processing newsletter subscription:', error);
    res.status(500).json({
      error: 'Failed to process subscription. Please try again or contact us directly.'
    });
  }
}
