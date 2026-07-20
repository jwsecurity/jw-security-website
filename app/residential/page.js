import ResidentialPage from "@/components/ResidentialPage";
import Script from "next/script";

export const metadata = {
	title: "Residential Locksmith & Home Security London | JW Security",
	description:
		"Expert residential locksmith and home security services across London and Surrey. High-security door locks, lock repairs, smart locks, and home security surveys.",
	keywords:
		"residential locksmith London, home security London, house lock change, anti-snap locks, domestic locksmith Surrey, high security door locks",
	alternates: {
		canonical: "https://jwsecurity.co.uk/residential",
	},
	openGraph: {
		title: "Residential Locksmith & Home Security London | JW Security",
		description:
			"Expert residential locksmith and home security services across London and Surrey. High-security door locks, lock repairs, smart locks, and home security surveys.",
		url: "https://jwsecurity.co.uk/residential",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Residential Locksmith & Home Security London | JW Security",
		description:
			"Expert residential locksmith and home security services across London and Surrey. High-security door locks, lock repairs, smart locks, and home security surveys.",
	},
};

export default function Residential() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Residential Locksmith & Home Security",
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
			"Residential locksmith and home security solutions for homeowners, tenants, and landlords across London and Surrey.",
	};

	return (
		<>
			<Script
				id="residential-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<ResidentialPage />
		</>
	);
}
