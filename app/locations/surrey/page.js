import Script from "next/script";
import SurreyPage from "@/components/locations/SurreyPage";

export const metadata = {
	title: "Locksmith Surrey | 24 Hour Emergency Locksmith & Security Services",
	description:
		"Trusted locksmith Surrey services for homes, businesses, landlords, and managed properties across Surrey, with 24 hour help for urgent lock and access problems. Call 0208 646 7931.",
	keywords:
		"locksmith Surrey, emergency locksmith Surrey, Surrey locksmith 24 hour, Surrey security services, Wimbledon locksmith, Kingston locksmith, Richmond locksmith, Croydon locksmith",
	canonical: "https://jwsecurity.co.uk/locations/surrey",
};

export default function Surrey() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Surrey Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Surrey. 24 hour emergency response, lock changes, key cutting, and property security. Serving Wimbledon, Kingston, Richmond, Croydon, Sutton, Epsom, and Putney.",
		"@id": "https://jwsecurity.co.uk/locations/surrey",
		"url": "https://jwsecurity.co.uk/locations/surrey",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Surrey",
			"addressRegion": "Surrey",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.3148,
			"longitude": -0.5600,
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
				"name": "Wimbledon",
			},
			{
				"@type": "Place",
				"name": "Kingston",
			},
			{
				"@type": "Place",
				"name": "Richmond",
			},
			{
				"@type": "Place",
				"name": "Croydon",
			},
			{
				"@type": "Place",
				"name": "Sutton",
			},
			{
				"@type": "Place",
				"name": "Epsom",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.3148,
				"longitude": -0.5600,
			},
			"geoRadius": "15000",
		},
	};

	return (
		<>
			<Script
				id="surrey-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<SurreyPage />
		</>
	);
}
