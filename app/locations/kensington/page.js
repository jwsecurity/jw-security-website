import Script from "next/script";
import KensingtonPage from "@/components/locations/KensingtonPage";

export const metadata = {
	title: "Locksmith Kensington | 24/7 Emergency Locksmith W8 & W14 | JW Security",
	description:
		"Professional locksmith services in Kensington, W8 and W14. 24/7 emergency response, high security locks, key cutting, and burglary repairs. Serving Kensington High Street and South Kensington. Call 0208 646 7931.",
	keywords:
		"locksmith Kensington, emergency locksmith Kensington W8, Kensington security services, High Street Kensington locksmith",
	alternates: {
		canonical: "https://jwsecurity.co.uk/locations/kensington",
	},
	openGraph: {
		title: "Locksmith Kensington | 24/7 Emergency Locksmith W8 & W14 | JW Security",
		description:
			"Professional locksmith services in Kensington, W8 and W14. 24/7 emergency response, high security locks, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://jwsecurity.co.uk/locations/kensington",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Kensington | 24/7 Emergency Locksmith W8 & W14 | JW Security",
		description:
			"Professional locksmith services in Kensington, W8 and W14. 24/7 emergency response, high security locks, key cutting, and burglary repairs.",
	},
};

export default function Kensington() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Kensington Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Kensington, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Kensington High Street, South Kensington, and Holland Park.",
		"@id": "https://jwsecurity.co.uk/locations/kensington",
		"url": "https://jwsecurity.co.uk/locations/kensington",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Kensington",
			"addressRegion": "London",
			"postalCode": "W8",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.5014,
			"longitude": -0.1921,
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
				"name": "Kensington High Street",
			},
			{
				"@type": "Place",
				"name": "South Kensington",
			},
			{
				"@type": "Place",
				"name": "Holland Park",
			},
			{
				"@type": "Place",
				"name": "Gloucester Road",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.5014,
				"longitude": -0.1921,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="kensington-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<KensingtonPage />
		</>
	);
}
