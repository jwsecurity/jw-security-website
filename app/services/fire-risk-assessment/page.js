import Script from "next/script";
import FireRiskAssessment from "@/components/services/FireRiskAssessment";

export const metadata = {
	title: "Fire Risk Assessment In London | JW Security",
	description:
		"Professional fire risk assessment in London and Surrey for landlords, HMOs, businesses, managed residential blocks, and commercial premises. Get a clear written report and safety check. Call 0208 646 7931.",
	keywords:
		"fire risk assessment London, fire risk assessment cost London, fire risk assessment HMO London, commercial fire risk assessment London",
	canonical: "https://jwsecurity.co.uk/services/fire-risk-assessment",
};

export default function FireRiskAssessmentPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Fire Risk Assessment",
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
			"Professional fire risk assessment in London and Surrey for landlords, HMOs, businesses, managed blocks, and commercial premises. Includes escape routes, fire doors, alarms, emergency lighting, and signage checks.",
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
				id="fire-risk-assessment-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<FireRiskAssessment />
		</>
	);
}
