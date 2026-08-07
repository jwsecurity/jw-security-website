import ServicesPage from "@/components/ServicesPage";
import Script from "next/script";

export const metadata = {
	title: "Locksmith & Security Services London | JW Security",
	description:
		"Professional locksmith, fire protection, security systems, security surveys, and emergency services across London and Surrey. Available 24/7. Call 0208 646 7931.",
	keywords:
		"locksmith services London, security services London, emergency locksmith, fire door installation, security surveys, master key systems",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services",
	},
	openGraph: {
		title: "Locksmith & Security Services London | JW Security",
		description:
			"Professional locksmith, fire protection, security systems, security surveys, and emergency services across London and Surrey.",
		url: "https://www.jwsecurity.co.uk/services",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith & Security Services London | JW Security",
		description:
			"Professional locksmith, fire protection, security systems, security surveys, and emergency services across London and Surrey.",
	},
};

export default function Services() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Locksmith and Security Services",
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
			"Comprehensive locksmith, fire safety, security surveys, and physical protection services across London and Surrey.",
	};

	return (
		<>
			<Script
				id="services-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<ServicesPage />
		</>
	);
}
