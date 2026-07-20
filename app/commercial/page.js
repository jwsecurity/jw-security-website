import CommercialPage from "@/components/CommercialPage";
import Script from "next/script";

export const metadata = {
	title: "Commercial Security Services London | Business Locksmith | JW Security",
	description:
		"Professional commercial security and locksmith services for businesses, retail, offices, and landlords across London and Surrey. Master keys, access control, and fire doors.",
	keywords:
		"commercial security London, business locksmith London, commercial door locks, office access control, master key systems London, shopfront security",
	alternates: {
		canonical: "https://jwsecurity.co.uk/commercial",
	},
	openGraph: {
		title: "Commercial Security Services London | Business Locksmith | JW Security",
		description:
			"Professional commercial security and locksmith services for businesses, retail, offices, and landlords across London and Surrey.",
		url: "https://jwsecurity.co.uk/commercial",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Commercial Security Services London | Business Locksmith | JW Security",
		description:
			"Professional commercial security and locksmith services for businesses, retail, offices, and landlords across London and Surrey.",
	},
};

export default function Commercial() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Commercial Security Services",
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
			"Comprehensive commercial locksmith and property security solutions for businesses across London and Surrey.",
	};

	return (
		<>
			<Script
				id="commercial-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<CommercialPage />
		</>
	);
}
