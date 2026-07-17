import Script from "next/script";
import WimbledonPage from "@/components/locations/WimbledonPage";

export const metadata = {
	title:
		"Locksmith Wimbledon | 24/7 Emergency Locksmith & Security Services SW19",
	description:
		"Professional locksmith services in Wimbledon, SW19. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Wimbledon Village, Wimbledon Station, and South Wimbledon. Call 0208 646 7931.",
	keywords:
		"locksmith Wimbledon, emergency locksmith Wimbledon SW19, Wimbledon security services, Wimbledon Village locksmith, Wimbledon Station locksmith, South Wimbledon locksmith",
	canonical: "https://jwsecurity.co.uk/locations/wimbledon",
};

export default function Wimbledon() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Wimbledon Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Wimbledon, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Wimbledon Village, Wimbledon Station, and South Wimbledon.",
		"@id": "https://jwsecurity.co.uk/locations/wimbledon",
		"url": "https://jwsecurity.co.uk/locations/wimbledon",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Wimbledon",
			"addressRegion": "London",
			"postalCode": "SW19",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4214,
			"longitude": -0.2062,
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
				"name": "Wimbledon Village",
			},
			{
				"@type": "Place",
				"name": "Wimbledon Station",
			},
			{
				"@type": "Place",
				"name": "The Broadway",
			},
			{
				"@type": "Place",
				"name": "South Wimbledon",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4214,
				"longitude": -0.2062,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="wimbledon-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<WimbledonPage />
		</>
	);
}
