import Script from "next/script";
import FireDoorInspection from "@/components/services/FireDoorInspection";

export const metadata = {
	title: "Fire Door Inspection In London | JW Security",
	description:
		"Fire door inspection, fire door survey, and fire door compliance checks for landlords, managing agents, businesses, HMOs, and managed buildings across London and Surrey.",
	keywords:
		"fire door inspection London, fire door survey London, fire door compliance London, fire door inspection cost London",
	canonical: "https://jwsecurity.co.uk/services/fire-door-inspection",
};

export default function FireDoorInspectionPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Fire Door Inspection In London",
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
			"Fire door inspection, fire door survey, and fire door compliance checks for landlords, managing agents, businesses, HMOs, and managed buildings across London and Surrey.",
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
				id="fire-door-inspection-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<FireDoorInspection />
		</>
	);
}
