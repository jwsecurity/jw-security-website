import React from "react";
import LegalPage from "@/components/LegalPage";

export const metadata = {
	title: "Privacy Policy | JW Security | London Locksmiths",
	description: "Privacy Policy for JW Security. We are committed to protecting your personal data and privacy.",
};

export default function PrivacyPolicy() {
	return (
		<LegalPage
			title="Privacy Policy"
			subtitle="Last updated: March 18, 2026">
			<section>
				<p>
					At JW Security, we are committed to protecting and respecting your privacy. This policy explains when and why we collect personal information about people who visit our website, how we use it, the conditions under which we may disclose it to others and how we keep it secure.
				</p>
			</section>

			<section>
				<h2>1. Who are we?</h2>
				<p>
					JW Security is a professional locksmith and security specialist company based in London, serving London and Surrey since 1991. We are the data controller for the purposes of the General Data Protection Regulation (GDPR).
				</p>
			</section>

			<section>
				<h2>2. How do we collect information from you?</h2>
				<p>
					We obtain information about you when you use our website, for example, when you contact us about products and services, register to receive our newsletter, or request a quote.
				</p>
			</section>

			<section>
				<h2>3. What type of information is collected from you?</h2>
				<p>
					The personal information we collect might include your name, email address, phone number, postcode, and details of your security requirements. If you make a payment, your card information is not held by us, it is collected by our third-party payment processors.
				</p>
			</section>

			<section>
				<h2>4. How is your information used?</h2>
				<p>We may use your information to:</p>
				<ul>
					<li>Process a quote request you have submitted;</li>
					<li>Carry out our obligations arising from any contracts entered into by you and us;</li>
					<li>Seek your views or comments on the services we provide;</li>
					<li>Notify you of changes to our services;</li>
					<li>Send you communications which you have requested and that may be of interest to you.</li>
				</ul>
			</section>

			<section>
				<h2>5. Security Precautions</h2>
				<p>
					When you give us personal information, we take steps to ensure that it&apos;s treated securely. Non-sensitive details (your email address etc.) are transmitted normally over the Internet, and this can never be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk.
				</p>
			</section>

			<section>
				<h2>6. Use of Cookies</h2>
				<p>
					Like many other websites, the JW Security website uses cookies. &quot;Cookies&quot; are small pieces of information sent by an organisation to your computer and stored on your hard drive to allow that website to recognise you when you visit. They collect statistical data about your browsing actions and patterns and do not identify you as an individual.
				</p>
				<p>
					For more information, please see our <a href="/cookies">Cookie Policy</a>.
				</p>
			</section>

			<section>
				<h2>7. Your Choices</h2>
				<p>
					You have a choice about whether or not you wish to receive information from us. If you do not want to receive direct marketing communications from us about our services, then you can select your choices by ticking the relevant boxes situated on the form on which we collect your information.
				</p>
			</section>
		</LegalPage>
	);
}
