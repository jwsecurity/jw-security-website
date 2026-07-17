import Script from "next/script";
import FulhamPage from "@/components/locations/FulhamPage";

export const metadata = {
	title: "Locksmith Fulham | 24/7 Emergency Locksmith & Security Services SW6",
	description:
		"Professional locksmith services in Fulham, SW6. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Fulham Broadway, Parsons Green, and Chelsea Harbour. Call 0208 646 7931.",
	keywords:
		"locksmith Fulham, emergency locksmith Fulham SW6, Fulham security services, Fulham Broadway locksmith, Parsons Green locksmith, Chelsea Harbour locksmith",
	canonical: "https://jwsecurity.co.uk/locations/fulham",
};

export default function Fulham() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Fulham Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Fulham, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Fulham Broadway, Parsons Green, and Chelsea Harbour.",
		"@id": "https://jwsecurity.co.uk/locations/fulham",
		"url": "https://jwsecurity.co.uk/locations/fulham",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Fulham",
			"addressRegion": "London",
			"postalCode": "SW6",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4791,
			"longitude": -0.2007,
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
				"name": "Fulham Broadway",
			},
			{
				"@type": "Place",
				"name": "Parsons Green",
			},
			{
				"@type": "Place",
				"name": "Chelsea Harbour",
			},
			{
				"@type": "Place",
				"name": "Imperial Wharf",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4791,
				"longitude": -0.2007,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="fulham-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<FulhamPage />
		</>
	);
}
