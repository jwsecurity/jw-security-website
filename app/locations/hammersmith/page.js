import Script from "next/script";
import HammersmithPage from "@/components/locations/HammersmithPage";

export const metadata = {
	title: "Locksmith Hammersmith | 24/7 Emergency Locksmith W6 | JW Security",
	description:
		"Professional locksmith services in Hammersmith, W6. 24/7 emergency response, lock changes, key cutting, and security solutions. Serving Hammersmith Broadway and King Street. Call 0208 646 7931.",
	keywords:
		"locksmith Hammersmith, emergency locksmith Hammersmith W6, Hammersmith security services, King Street locksmith",
	alternates: {
		canonical: "https://jwsecurity.co.uk/locations/hammersmith",
	},
	openGraph: {
		title: "Locksmith Hammersmith | 24/7 Emergency Locksmith W6 | JW Security",
		description:
			"Professional locksmith services in Hammersmith, W6. 24/7 emergency response, lock changes, key cutting, and security solutions. Call 0208 646 7931.",
		url: "https://jwsecurity.co.uk/locations/hammersmith",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Hammersmith | 24/7 Emergency Locksmith W6 | JW Security",
		description:
			"Professional locksmith services in Hammersmith, W6. 24/7 emergency response, lock changes, key cutting, and security solutions.",
	},
};

export default function Hammersmith() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Hammersmith Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Hammersmith, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Hammersmith Broadway, Ravenscourt Park, and Brook Green.",
		"@id": "https://jwsecurity.co.uk/locations/hammersmith",
		"url": "https://jwsecurity.co.uk/locations/hammersmith",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Hammersmith",
			"addressRegion": "London",
			"postalCode": "W6",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4928,
			"longitude": -0.2230,
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
				"name": "Hammersmith Broadway",
			},
			{
				"@type": "Place",
				"name": "King Street",
			},
			{
				"@type": "Place",
				"name": "Ravenscourt Park",
			},
			{
				"@type": "Place",
				"name": "Brook Green",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4928,
				"longitude": -0.2230,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="hammersmith-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<HammersmithPage />
		</>
	);
}
