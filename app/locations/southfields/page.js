import Script from "next/script";
import SouthfieldsPage from "@/components/locations/SouthfieldsPage";

export const metadata = {
	title: "Locksmith Southfields | 24/7 Emergency Locksmith & Security SW18",
	description:
		"Professional locksmith services in Southfields, SW18. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Southfields Station, Wimbledon Park, and Replingham Road. Call 0208 646 7931.",
	keywords:
		"locksmith Southfields, emergency locksmith Southfields SW18, Southfields security services, Southfields Station locksmith, Wimbledon Park locksmith, Replingham Road locksmith",
	canonical: "https://jwsecurity.co.uk/locations/southfields",
};

export default function Southfields() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Southfields Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Southfields, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Southfields Station, Wimbledon Park, and Replingham Road.",
		"@id": "https://jwsecurity.co.uk/locations/southfields",
		"url": "https://jwsecurity.co.uk/locations/southfields",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Southfields",
			"addressRegion": "London",
			"postalCode": "SW18",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4449,
			"longitude": -0.2033,
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
				"name": "Southfields Station",
			},
			{
				"@type": "Place",
				"name": "Wimbledon Park Road",
			},
			{
				"@type": "Place",
				"name": "Replingham Road",
			},
			{
				"@type": "Place",
				"name": "Augustus Road",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4449,
				"longitude": -0.2033,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="southfields-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<SouthfieldsPage />
		</>
	);
}
