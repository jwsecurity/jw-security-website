import Script from "next/script";
import PutneyPage from "@/components/locations/PutneyPage";

export const metadata = {
	title: "Locksmith Putney | 24/7 Emergency Locksmith & Security SW15 | JW Security",
	description:
		"Professional locksmith services in Putney, SW15. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Putney High Street and Upper Richmond Road. Call 0208 646 7931.",
	keywords:
		"locksmith Putney, emergency locksmith Putney SW15, Putney security services, Putney High Street locksmith",
	alternates: {
		canonical: "https://jwsecurity.co.uk/locations/putney",
	},
	openGraph: {
		title: "Locksmith Putney | 24/7 Emergency Locksmith & Security SW15 | JW Security",
		description:
			"Professional locksmith services in Putney, SW15. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://jwsecurity.co.uk/locations/putney",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Putney | 24/7 Emergency Locksmith & Security SW15 | JW Security",
		description:
			"Professional locksmith services in Putney, SW15. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
};

export default function Putney() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Putney Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Putney, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Putney High Street, Putney Heath, and East Putney.",
		"@id": "https://jwsecurity.co.uk/locations/putney",
		"url": "https://jwsecurity.co.uk/locations/putney",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Putney",
			"addressRegion": "London",
			"postalCode": "SW15",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4617,
			"longitude": -0.2166,
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
				"name": "Putney High Street",
			},
			{
				"@type": "Place",
				"name": "Putney Bridge",
			},
			{
				"@type": "Place",
				"name": "Putney Heath",
			},
			{
				"@type": "Place",
				"name": "East Putney",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4617,
				"longitude": -0.2166,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="putney-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<PutneyPage />
		</>
	);
}
