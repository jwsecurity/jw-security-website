import EmergencyDoorOpeningPage from "@/components/services/EmergencyDoorOpeningPage";
import Script from "next/script";

export const metadata = {
	title: "Emergency Door Opening London | Non-Destructive Lockout | JW Security",
	description:
		"Fast, non-destructive emergency door opening for locked-out homes and businesses across London and Surrey. 24/7 rapid response locksmiths. Call 0208 646 7931.",
	keywords:
		"emergency door opening London, locked out of house London, non-destructive lock opening, emergency lockout service, gain entry locksmith",
	alternates: {
		canonical: "https://jwsecurity.co.uk/services/emergency-door-opening",
	},
	openGraph: {
		title: "Emergency Door Opening London | Non-Destructive Lockout | JW Security",
		description:
			"Fast, non-destructive emergency door opening for locked-out homes and businesses across London and Surrey. 24/7 rapid response.",
		url: "https://jwsecurity.co.uk/services/emergency-door-opening",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Emergency Door Opening London | Non-Destructive Lockout | JW Security",
		description:
			"Fast, non-destructive emergency door opening for locked-out homes and businesses across London and Surrey. 24/7 rapid response.",
	},
};

export default function EmergencyDoorOpening() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Emergency Door Opening & Lockout Service",
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
		"description": "24/7 emergency door opening and lockout entry service using non-destructive methods.",
	};

	return (
		<>
			<Script
				id="emergency-door-opening-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<EmergencyDoorOpeningPage />
		</>
	);
}
