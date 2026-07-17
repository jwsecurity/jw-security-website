import Script from "next/script";
import ColliersWoodPage from "@/components/locations/ColliersWoodPage";

export const metadata = {
	title: "Locksmith Colliers Wood | 24/7 Emergency Locksmith & Security SW19",
	description:
		"Professional locksmith services in Colliers Wood, SW19. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Colliers Wood Station, Merton Abbey Mills, and South Wimbledon. Call 0208 646 7931.",
	keywords:
		"locksmith Colliers Wood, emergency locksmith Colliers Wood SW19, Colliers Wood security services, Colliers Wood Station locksmith, Merton Abbey Mills locksmith, South Wimbledon locksmith",
	canonical: "https://jwsecurity.co.uk/locations/colliers-wood",
};

export default function ColliersWood() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Colliers Wood Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Colliers Wood, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Colliers Wood Station, Merton Abbey Mills, and South Wimbledon.",
		"@id": "https://jwsecurity.co.uk/locations/colliers-wood",
		"url": "https://jwsecurity.co.uk/locations/colliers-wood",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Colliers Wood",
			"addressRegion": "London",
			"postalCode": "SW19",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4172,
			"longitude": -0.1784,
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
				"name": "Colliers Wood Station",
			},
			{
				"@type": "Place",
				"name": "High Street Colliers Wood",
			},
			{
				"@type": "Place",
				"name": "Merton Abbey Mills",
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
				"latitude": 51.4172,
				"longitude": -0.1784,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="colliers-wood-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<ColliersWoodPage />
		</>
	);
}
