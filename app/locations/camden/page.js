import Script from "next/script";
import CamdenPage from "@/components/locations/CamdenPage";

export const metadata = {
	title: "Locksmith Camden | 24/7 Emergency Locksmith & Security Services NW1",
	description:
		"Professional locksmith services in Camden, NW1. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Camden Town, Chalk Farm, and Mornington Crescent. Call 0208 646 7931.",
	keywords:
		"locksmith Camden, emergency locksmith Camden NW1, Camden security services, Camden Town locksmith, Chalk Farm locksmith, Mornington Crescent locksmith",
	alternates: {
		canonical: "https://jwsecurity.co.uk/locations/camden",
	},
	openGraph: {
		title: "Locksmith Camden | 24/7 Emergency Locksmith & Security Services NW1",
		description:
			"Professional locksmith services in Camden, NW1. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://jwsecurity.co.uk/locations/camden",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Camden | 24/7 Emergency Locksmith & Security Services NW1",
		description:
			"Professional locksmith services in Camden, NW1. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
};

export default function Camden() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Camden Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Camden, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Camden Town, Chalk Farm, and Mornington Crescent.",
		"@id": "https://jwsecurity.co.uk/locations/camden",
		"url": "https://jwsecurity.co.uk/locations/camden",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Camden",
			"addressRegion": "London",
			"postalCode": "NW1",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.5390,
			"longitude": -0.1426,
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
				"name": "Camden Town",
			},
			{
				"@type": "Place",
				"name": "Mornington Crescent",
			},
			{
				"@type": "Place",
				"name": "Chalk Farm",
			},
			{
				"@type": "Place",
				"name": "Kentish Town",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.5390,
				"longitude": -0.1426,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="camden-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<CamdenPage />
		</>
	);
}
