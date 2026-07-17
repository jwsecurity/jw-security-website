import Script from "next/script";
import EarlsfieldPage from "@/components/locations/EarlsfieldPage";

export const metadata = {
	title: "Locksmith Earlsfield | 24/7 Emergency Locksmith & Security SW18",
	description:
		"Professional locksmith services in Earlsfield, SW18. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Earlsfield Station, Garratt Lane, and Wandsworth Common. Call 0208 646 7931.",
	keywords:
		"locksmith Earlsfield, emergency locksmith Earlsfield SW18, Earlsfield security services, Earlsfield Station locksmith, Garratt Lane locksmith, Wandsworth Common locksmith",
	canonical: "https://jwsecurity.co.uk/locations/earlsfield",
};

export default function Earlsfield() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Earlsfield Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Earlsfield, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Earlsfield Station, Garratt Lane, and Wandsworth Common.",
		"@id": "https://jwsecurity.co.uk/locations/earlsfield",
		"url": "https://jwsecurity.co.uk/locations/earlsfield",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Earlsfield",
			"addressRegion": "London",
			"postalCode": "SW18",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4423,
			"longitude": -0.1878,
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
				"name": "Earlsfield Station",
			},
			{
				"@type": "Place",
				"name": "Garratt Lane",
			},
			{
				"@type": "Place",
				"name": "Wandsworth Common",
			},
			{
				"@type": "Place",
				"name": "Summerstown",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4423,
				"longitude": -0.1878,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="earlsfield-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<EarlsfieldPage />
		</>
	);
}
