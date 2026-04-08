import Script from "next/script";
import FireProtectionPage from "@/components/FireProtectionPage";

export const metadata = {
	title:
		"Fire Protection Services London | Fire Doors & Safety Systems | JW Security",
	description:
		"Professional fire protection services in London. Fire door installation, inspection & maintenance, fire alarms, emergency lighting. BS 476 compliant. Call 020 7946 0125.",
	keywords:
		"fire protection London, fire door installation, fire door inspection, fire alarm systems, emergency lighting, fire safety compliance",
	canonical: "https://jwsecurity.co.uk/services/fire-protection",
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
			"telephone": "020 7946 0125",
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
