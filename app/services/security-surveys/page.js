import SecuritySurveysPage from "@/components/services/SecuritySurveysPage";
import Script from "next/script";

export const metadata = {
	title: "Property Security Surveys London | Risk Assessments | JW Security",
	description:
		"Professional security surveys and risk assessments for residential homes and commercial properties in London and Surrey. Insurance compliant reports.",
	keywords:
		"security survey London, property security audit, home security assessment, commercial security survey, insurance security check London",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services/security-surveys",
	},
	openGraph: {
		title: "Property Security Surveys London | Risk Assessments | JW Security",
		description:
			"Professional security surveys and risk assessments for residential homes and commercial properties in London and Surrey.",
		url: "https://www.jwsecurity.co.uk/services/security-surveys",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Property Security Surveys London | Risk Assessments | JW Security",
		description:
			"Professional security surveys and risk assessments for residential homes and commercial properties in London and Surrey.",
	},
};

export default function SecuritySurveys() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Security Surveys & Risk Audits",
		"provider": {
			"@type": "Locksmith",
			"name": "JW Security",
			"telephone": "0208 646 7931",
			"url": "https://jwsecurity.co.uk",
		},
		"areaServed": {
			"@type": "City",
			"name": "London",
		},
		"description":
			"On-site property security inspection, vulnerability assessment, and insurance compliance audit.",
	};

	return (
		<>
			<Script
				id="security-surveys-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SecuritySurveysPage />
		</>
	);
}
