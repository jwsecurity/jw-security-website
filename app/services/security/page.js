import SecuritySystemsPage from "@/components/SecuritySystemsPage";
import Script from "next/script";

export const metadata = {
	title: "Security Systems London | CCTV, Alarms & Access Control | JW Security",
	description:
		"Modern CCTV cameras, intruder alarm systems, and access control solutions professionally installed across London and Surrey for homes and businesses.",
	keywords:
		"security systems London, CCTV installation London, burglar alarms London, access control, smart home security London",
	alternates: {
		canonical: "https://jwsecurity.co.uk/services/security",
	},
	openGraph: {
		title: "Security Systems London | CCTV, Alarms & Access Control | JW Security",
		description:
			"Modern CCTV cameras, intruder alarm systems, and access control solutions professionally installed across London and Surrey.",
		url: "https://jwsecurity.co.uk/services/security",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Security Systems London | CCTV, Alarms & Access Control | JW Security",
		description:
			"Modern CCTV cameras, intruder alarm systems, and access control solutions professionally installed across London and Surrey.",
	},
};

export default function SecuritySystems() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Security Systems Installation",
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
		"description": "Supply, installation, and maintenance of CCTV systems, burglar alarms, and electronic security.",
	};

	return (
		<>
			<Script
				id="security-systems-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SecuritySystemsPage />
		</>
	);
}
