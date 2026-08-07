import Script from "next/script";
import ClaphamPage from "@/components/locations/ClaphamPage";

export const metadata = {
	title: "Locksmith Clapham | 24/7 Emergency Locksmith & Security Services SW4",
	description:
		"Professional locksmith services in Clapham, SW4. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Clapham Common, Clapham Old Town, and Clapham High Street. Call 0208 646 7931.",
	keywords:
		"locksmith Clapham, emergency locksmith Clapham SW4, Clapham security services, Clapham Common locksmith, Clapham Old Town locksmith, Clapham High Street locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/clapham",
	},
	openGraph: {
		title:
			"Locksmith Clapham | 24/7 Emergency Locksmith & Security Services SW4",
		description:
			"Professional locksmith services in Clapham, SW4. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://www.jwsecurity.co.uk/locations/clapham",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Locksmith Clapham | 24/7 Emergency Locksmith & Security Services SW4",
		description:
			"Professional locksmith services in Clapham, SW4. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
};

export default function Clapham() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Clapham Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Clapham, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Clapham Common, Clapham High Street, and Clapham Old Town.",
		"@id": "https://jwsecurity.co.uk/locations/clapham",
		"url": "https://jwsecurity.co.uk/locations/clapham",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Clapham",
			"addressRegion": "London",
			"postalCode": "SW4",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4624,
			"longitude": -0.1386,
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
				"name": "Clapham Common",
			},
			{
				"@type": "Place",
				"name": "Clapham High Street",
			},
			{
				"@type": "Place",
				"name": "Clapham Old Town",
			},
			{
				"@type": "Place",
				"name": "Abbeville Village",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4624,
				"longitude": -0.1386,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="clapham-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<ClaphamPage />
		</>
	);
}
