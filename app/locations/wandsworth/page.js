import Script from "next/script";
import WandsworthPage from "@/components/locations/WandsworthPage";

export const metadata = {
	title: "Locksmith Wandsworth SW18 | 24/7 Security | JW Security",
	description:
		"Need a locksmith in Wandsworth SW18? JW Security offers 24/7 emergency locksmiths, lock replacement, commercial security and fire door services.",
	keywords:
		"locksmith Wandsworth, emergency locksmith Wandsworth SW18, Wandsworth security services, Wandsworth Town locksmith, East Hill locksmith, West Hill locksmith, Southside Shopping Centre locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/wandsworth",
	},
	openGraph: {
		title:
			"Locksmith Wandsworth SW18 | 24/7 Security | JW Security",
		description:
			"Need a locksmith in Wandsworth SW18? JW Security offers 24/7 emergency locksmiths, lock replacement, commercial security and fire door services.",
		url: "https://www.jwsecurity.co.uk/locations/wandsworth",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Locksmith Wandsworth SW18 | 24/7 Security | JW Security",
		description:
			"Need a locksmith in Wandsworth SW18? JW Security offers 24/7 emergency locksmiths, lock replacement, commercial security and fire door services.",
	},
};

export default function Wandsworth() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Wandsworth Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Trusted locksmith and security services for homes, flats, offices, landlords and managed properties across Wandsworth, SW18, and nearby areas.",
		"@id": "https://jwsecurity.co.uk/locations/wandsworth",
		"url": "https://jwsecurity.co.uk/locations/wandsworth",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Wandsworth",
			"addressRegion": "London",
			"postalCode": "SW18",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4566,
			"longitude": -0.191,
		},
		"openingHoursSpecification": {
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
		"priceRange": "££-£££",
		"areaServed": [
			{
				"@type": "Place",
				"name": "Wandsworth Town",
			},
			{
				"@type": "Place",
				"name": "Wandsworth Common",
			},
			{
				"@type": "Place",
				"name": "East Hill",
			},
			{
				"@type": "Place",
				"name": "West Hill",
			},
			{
				"@type": "Place",
				"name": "Southside Shopping Centre",
			},
			{
				"@type": "Place",
				"name": "Old York Road",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4566,
				"longitude": -0.191,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="wandsworth-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<WandsworthPage />
		</>
	);
}
