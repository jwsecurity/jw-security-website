import Script from "next/script";
import BalhamPage from "@/components/locations/BalhamPage";

export const metadata = {
	title: "Locksmith Balham | 24/7 Emergency Locksmith & Security Services SW12",
	description:
		"Professional locksmith services in Balham, SW12. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Balham High Road, Bedford Hill, Nightingale Lane, and surrounding areas. Call 0208 646 7931.",
	keywords:
		"locksmith Balham, emergency locksmith Balham SW12, Balham security services, Balham High Road locksmith, Bedford Hill locksmith, Nightingale Lane locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/balham",
	},
	openGraph: {
		title:
			"Locksmith Balham | 24/7 Emergency Locksmith & Security Services SW12",
		description:
			"Professional locksmith services in Balham, SW12. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://www.jwsecurity.co.uk/locations/balham",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Locksmith Balham | 24/7 Emergency Locksmith & Security Services SW12",
		description:
			"Professional locksmith services in Balham, SW12. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
};

export default function Balham() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Balham Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Balham, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Balham High Road, Bedford Hill, and Nightingale Lane.",
		"@id": "https://jwsecurity.co.uk/locations/balham",
		"url": "https://jwsecurity.co.uk/locations/balham",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Balham",
			"addressRegion": "London",
			"postalCode": "SW12",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4429,
			"longitude": -0.1524,
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
				"name": "Balham High Road",
			},
			{
				"@type": "Place",
				"name": "Bedford Hill",
			},
			{
				"@type": "Place",
				"name": "Nightingale Lane",
			},
			{
				"@type": "Place",
				"name": "Clapham South",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4429,
				"longitude": -0.1524,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="balham-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<BalhamPage />
		</>
	);
}
