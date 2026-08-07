import Script from "next/script";
import LocksmithServicesPage from "@/components/LocksmithServicesPage";

export const metadata = {
	title: "Locksmith Services London | 24/7 Emergency Locksmith | JW Security",
	description:
		"Professional locksmith services in London. 24/7 emergency response, residential & commercial locks, high-security upgrades. MLA certified locksmiths. Call 0208 646 7931.",
	keywords:
		"locksmith London, emergency locksmith, 24 hour locksmith, lock repair, lock installation, master locksmith, commercial locksmith, residential locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services/locksmith",
	},
	openGraph: {
		title: "Locksmith Services London | 24/7 Emergency Locksmith | JW Security",
		description:
			"Professional locksmith services in London. 24/7 emergency response, residential & commercial locks, high-security upgrades. MLA certified locksmiths.",
		url: "https://www.jwsecurity.co.uk/services/locksmith",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Services London | 24/7 Emergency Locksmith | JW Security",
		description:
			"Professional locksmith services in London. 24/7 emergency response, residential & commercial locks, high-security upgrades.",
	},
};

export default function Locksmith() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Locksmith Services",
		"provider": {
			"@type": "LocalBusiness",
			"name": "JW Security",
			"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
			"telephone": "0208 646 7931",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "London",
				"addressCountry": "GB",
			},
		},
		"areaServed": {
			"@type": "City",
			"name": "London",
		},
		"description":
			"Professional locksmith services in London including emergency lockouts, lock installation, high-security upgrades, and 24/7 emergency response.",
		"offers": {
			"@type": "AggregateOffer",
			"priceCurrency": "GBP",
			"lowPrice": "65",
			"highPrice": "500",
			"offerCount": "6",
		},
	};

	return (
		<>
			<Script
				id="locksmith-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<LocksmithServicesPage />
		</>
	);
}
