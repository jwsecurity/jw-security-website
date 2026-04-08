import Script from "next/script";
import KensingtonPage from "@/components/locations/KensingtonPage";

export const metadata = {
	title: "Locksmith Kensington | 24/7 Emergency Locksmith & Security Services",
	description:
		"Professional locksmith services in Kensington, London. 24/7 emergency response, high-security locks, CCTV installation. Serving South Kensington, Holland Park & surrounding areas. Call 020 7946 0125.",
	keywords:
		"locksmith Kensington, emergency locksmith Kensington, Kensington security services, South Kensington locksmith, Holland Park locksmith, 24 hour locksmith Kensington",
	canonical: "https://jwsecurity.co.uk/locations/kensington",
};

export default function Kensington() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Kensington Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Professional locksmith and security services in Kensington. 24/7 emergency response, high-security locks, CCTV installation, and fire door services for residential and commercial properties.",
		"@id": "https://jwsecurity.co.uk/locations/kensington",
		"url": "https://jwsecurity.co.uk/locations/kensington",
		"telephone": "020 7946 0125",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Kensington",
			"addressRegion": "London",
			"postalCode": "W8",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4994,
			"longitude": -0.1967,
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
				"name": "South Kensington",
			},
			{
				"@type": "Place",
				"name": "Holland Park",
			},
			{
				"@type": "Place",
				"name": "High Street Kensington",
			},
			{
				"@type": "Place",
				"name": "Notting Hill Gate",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4994,
				"longitude": -0.1967,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="kensington-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<KensingtonPage />
		</>
	);
}
