import React from "react";
import LegalPage from "@/components/LegalPage";

export const metadata = {
	title: "Cookie Policy | JW Security | London Locksmiths",
	description: "Cookie Policy for JW Security. Information about how we use cookies on our website.",
};

export default function CookiePolicy() {
	return (
		<LegalPage
			title="Cookie Policy"
			subtitle="Last updated: March 18, 2026">
			<section>
				<p>
					This policy explains how JW Security uses cookies and similar technologies when you visit our website.
				</p>
			</section>

			<section>
				<h2>1. What are cookies?</h2>
				<p>
					Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
				</p>
			</section>

			<section>
				<h2>2. How we use cookies</h2>
				<p>We use cookies for the following purposes:</p>
				<ul>
					<li><strong>Essential Cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or use a shopping cart.</li>
					<li><strong>Analytical/Performance Cookies:</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
					<li><strong>Functionality Cookies:</strong> These are used to recognise you when you return to our website. This enables us to personalise our content for you and remember your preferences.</li>
					<li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
				</ul>
			</section>

			<section>
				<h2>3. Third-party cookies</h2>
				<p>
					Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control.
				</p>
			</section>

			<section>
				<h2>4. Managing cookies</h2>
				<p>
					You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
				</p>
			</section>

			<section>
				<h2>5. More information</h2>
				<p>
					If you have any questions about our use of cookies, please contact us at <a href="mailto:help@jwsecurity.co.uk">help@jwsecurity.co.uk</a>.
				</p>
			</section>
		</LegalPage>
	);
}
