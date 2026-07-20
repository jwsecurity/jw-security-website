import BurglaryRepairsPage from "@/components/services/BurglaryRepairsPage";
import Script from "next/script";

export const metadata = {
	title: "Emergency Burglary Repairs London | Lock & Frame Repairs | JW Security",
	description:
		"Fast burglary repair and security reinforcement services for homes and businesses across London and Surrey. 24/7 emergency lock changes, frame repair, and boarding.",
	keywords:
		"burglary repairs London, emergency burglary repair, lock replacement after burglary, door frame repair London, emergency board up",
	alternates: {
		canonical: "https://jwsecurity.co.uk/services/burglary-repairs",
	},
	openGraph: {
		title: "Emergency Burglary Repairs London | Lock & Frame Repairs | JW Security",
		description:
			"Fast burglary repair and security reinforcement services for homes and businesses across London and Surrey. 24/7 emergency response.",
		url: "https://jwsecurity.co.uk/services/burglary-repairs",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Emergency Burglary Repairs London | Lock & Frame Repairs | JW Security",
		description:
			"Fast burglary repair and security reinforcement services for homes and businesses across London and Surrey. 24/7 emergency response.",
	},
};

export default function BurglaryRepairs() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Burglary Repair & Door Securing",
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
		"description": "Rapid response burglary repair, lock replacement, and door reinforcement in London and Surrey.",
	};

	return (
		<>
			<Script
				id="burglary-repairs-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<BurglaryRepairsPage />
		</>
	);
}
