import Script from "next/script";
import EmergencyServicesPage from "@/components/EmergencyServicesPage";

export const metadata = {
	title: "24/7 Emergency Locksmith London | Rapid Response | JW Security",
	description:
		"24/7 emergency locksmith services in London. Locked out? Need urgent repairs? 20-30 minute response time. No call-out charges. Call 020 7946 0125 now.",
	keywords:
		"emergency locksmith London, 24 hour locksmith, locked out, burglary repair, emergency lock repair, urgent locksmith",
	canonical: "https://jwsecurity.co.uk/services/emergency",
};

export default function Emergency() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "EmergencyService",
		"name": "JW Security 24/7 Emergency Locksmith Services",
		"description":
			"24/7 emergency locksmith services in London. Rapid response for lockouts, burglary repairs, and lock failures. Average 20-30 minute response time.",
		"provider": {
			"@type": "LocalBusiness",
			"name": "JW Security",
			"telephone": "020 7946 0125",
			"address": {
				"@type": "PostalAddress",
				"@id": "https://jwsecurity.co.uk/#address",
				"addressLocality": "London",
				"addressCountry": "GB",
			},
		},
		"areaServed": {
			"@type": "City",
			"name": "London",
		},
		"availableChannel": {
			"@type": "ServiceChannel",
			"serviceType": "Emergency locksmith callout",
			"servicePhone": {
				"@type": "ContactPoint",
				"telephone": "+44-20-7946-0125",
				"contactType": "emergency",
				"availableLanguage": "English",
				"hoursAvailable": {
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					],
					"opens": "00:00",
					"closes": "23:59",
				},
			},
		},
	};

	return (
		<>
			<Script
				id="json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<EmergencyServicesPage />
		</>
	);
}
