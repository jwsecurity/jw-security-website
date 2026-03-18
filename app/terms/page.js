import React from "react";
import LegalPage from "@/components/LegalPage";

export const metadata = {
	title: "Terms of Service | JW Security | London Locksmiths",
	description: "Terms of Service for JW Security. Professional locksmith and security services in London.",
};

export default function TermsOfService() {
	return (
		<LegalPage
			title="Terms of Service"
			subtitle="Last updated: March 18, 2026">
			<section>
				<p>
					Welcome to JW Security. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions of use.
				</p>
			</section>

			<section>
				<h2>1. Service Engagement</h2>
				<p>
					All requests for services (Locksmith, CCTV, Alarms, etc.) are subject to a professional assessment or survey. While we provide free initial estimates, the final scope of work and price will be confirmed upon inspection of the property or project details.
				</p>
			</section>

			<section>
				<h2>2. User Obligations</h2>
				<p>By using this website, you agree to:</p>
				<ul>
					<li>Provide accurate information when requesting a quote or contacting us;</li>
					<li>Not use the website for any fraudulent or illegal purposes;</li>
					<li>Maintain the confidentiality of any information provided to you by JW Security regarding security protocols or project details.</li>
				</ul>
			</section>

			<section>
				<h2>3. Payments</h2>
				<p>
					Payment terms for residential and commercial services will be clearly outlined in your specific quote or contract. We accept major credit/debit cards and bank transfers. Emergency call-out services may require immediate payment upon completion.
				</p>
			</section>

			<section>
				<h2>4. Liability</h2>
				<p>
					JW Security is fully insured with public liability cover up to £5 million. However, we are not liable for any consequential losses or damages that may result from the use of our website or services, except where liability cannot be excluded by law.
				</p>
			</section>

			<section>
				<h2>5. Privacy</h2>
				<p>
					Your use of our website and services is also governed by our <a href="/privacy">Privacy Policy</a>.
				</p>
			</section>

			<section>
				<h2>6. Intellectual Property</h2>
				<p>
					All content on this website, including text, logos, and images, is the property of JW Security and is protected by copyright laws. You may not reproduce or use any content without our express written permission.
				</p>
			</section>

			<section>
				<h2>7. Changes to Terms</h2>
				<p>
					JW Security reserves the right to change these terms and conditions at any time. Your continued use of the website following any changes signals your acceptance of the new terms.
				</p>
			</section>
		</LegalPage>
	);
}
