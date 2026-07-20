import Script from "next/script";
import FireProtectionPage from "@/components/FireProtectionPage";

export const metadata = {
	title:
		"Fire Protection Services London | Fire Doors & Safety Systems | JW Security",
	description:
		"Professional fire protection services in London. Fire door installation, inspection & maintenance, fire alarms, emergency lighting. BS 476 compliant. Call 0208 646 7931.",
	keywords:
		"fire protection London, fire door installation, fire door inspection, fire alarm systems, emergency lighting, fire safety compliance",
	alternates: {
		canonical: "https://jwsecurity.co.uk/services/fire-protection",
	},
	openGraph: {
		title: "Fire Protection Services London | Fire Doors & Safety Systems | JW Security",
		description:
			"Professional fire protection services in London. Fire door installation, inspection & maintenance, fire alarms, emergency lighting.",
		url: "https://jwsecurity.co.uk/services/fire-protection",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Fire Protection Services London | Fire Doors & Safety Systems | JW Security",
		description:
			"Professional fire protection services in London. Fire door installation, inspection & maintenance, fire alarms, emergency lighting.",
	},
};

export default function FireProtection() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Fire Protection Services",
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
			"Comprehensive fire protection services including fire door installation, inspection and maintenance, fire alarms, emergency lighting, and fire extinguisher services. BS 476 and BS EN compliant.",
		"offers": {
			"@type": "AggregateOffer",
			"priceCurrency": "GBP",
			"lowPrice": "150",
			"highPrice": "5000",
		},
	};
	return (
		<>
			<Script
				id="fire-protection-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<FireProtectionPage />
		</>
	);
}
