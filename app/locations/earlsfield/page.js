import Script from "next/script";
import EarlsfieldPage from "@/components/locations/EarlsfieldPage";

export const metadata = {
	title: "Locksmith Earlsfield | 24/7 Emergency Locksmith & Security SW18",
	description:
		"Professional locksmith services in Earlsfield, SW18. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Garratt Lane, Earlsfield Station, and Wandsworth. Call 0208 646 7931.",
	keywords:
		"locksmith Earlsfield, emergency locksmith Earlsfield SW18, Earlsfield security services, Garratt Lane locksmith, Earlsfield Station locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/earlsfield",
	},
	openGraph: {
		title: "Locksmith Earlsfield | 24/7 Emergency Locksmith & Security SW18",
		description:
			"Professional locksmith services in Earlsfield, SW18. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://www.jwsecurity.co.uk/locations/earlsfield",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Earlsfield | 24/7 Emergency Locksmith & Security SW18",
		description:
			"Professional locksmith services in Earlsfield, SW18. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
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
