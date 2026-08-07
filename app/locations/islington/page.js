import Script from "next/script";
import IslingtonPage from "@/components/locations/IslingtonPage";

export const metadata = {
	title: "Locksmith Islington | 24/7 Emergency Locksmith N1 | JW Security",
	description:
		"Professional locksmith services in Islington, N1. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Upper Street and Angel. Call 0208 646 7931.",
	keywords:
		"locksmith Islington, emergency locksmith Islington N1, Islington security services, Upper Street locksmith, Angel locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/islington",
	},
	openGraph: {
		title: "Locksmith Islington | 24/7 Emergency Locksmith N1 | JW Security",
		description:
			"Professional locksmith services in Islington, N1. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://www.jwsecurity.co.uk/locations/islington",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Islington | 24/7 Emergency Locksmith N1 | JW Security",
		description:
			"Professional locksmith services in Islington, N1. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
};

export default function Islington() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Islington Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Islington, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Upper Street, Angel, and Highbury.",
		"@id": "https://jwsecurity.co.uk/locations/islington",
		"url": "https://jwsecurity.co.uk/locations/islington",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Islington",
			"addressRegion": "London",
			"postalCode": "N1",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.5416,
			"longitude": -0.1022,
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
				"name": "Upper Street",
			},
			{
				"@type": "Place",
				"name": "Angel",
			},
			{
				"@type": "Place",
				"name": "Highbury",
			},
			{
				"@type": "Place",
				"name": "Essex Road",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.5416,
				"longitude": -0.1022,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="islington-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<IslingtonPage />
		</>
	);
}
