import Script from "next/script";
import FireDoorMaintenance from "@/components/services/FireDoorMaintenance";

export const metadata = {
	title: "Fire Door Maintenance & Repair In London | JW Security",
	description:
		"Professional fire door maintenance and repair services in London and Surrey. We fix door closers, hinges, seals, gaps, alignment, and carry out compliance repairs for landlords, HMOs, and commercial buildings.",
	keywords:
		"fire door maintenance London, fire door repair London, fire door maintenance cost London, commercial fire door repair London, HMO fire door repair",
	canonical: "https://jwsecurity.co.uk/services/fire-door-maintenance",
};

export default function FireDoorMaintenancePage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Fire Door Maintenance & Repair",
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
			"Professional fire door maintenance and repair services in London and Surrey. We fix door closers, hinges, seals, gaps, alignment, and compliance repairs for landlords, HMOs, and commercial buildings.",
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
				id="fire-door-maintenance-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<FireDoorMaintenance />
		</>
	);
}
