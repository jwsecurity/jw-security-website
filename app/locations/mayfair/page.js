import Script from "next/script";
import MayfairPage from "@/components/locations/MayfairPage";

export const metadata = {
	title:
		"Locksmith Mayfair | 24/7 Emergency Locksmith & Security W1J | JW Security",
	description:
		"Discreet, premium locksmith services in Mayfair, W1J. 24/7 emergency response, high security lock upgrades, master key systems for luxury residences, commercial offices, and retail. Call 0208 646 7931.",
	keywords:
		"locksmith Mayfair, emergency locksmith Mayfair W1, Mayfair security services, Bond Street locksmith, Berkeley Square locksmith, luxury locksmith Mayfair",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/mayfair",
	},
	openGraph: {
		title:
			"Locksmith Mayfair | 24/7 Emergency Locksmith & Security W1J | JW Security",
		description:
			"Discreet, premium locksmith services in Mayfair, W1J. 24/7 emergency response, high security lock upgrades, master key systems.",
		url: "https://www.jwsecurity.co.uk/locations/mayfair",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Locksmith Mayfair | 24/7 Emergency Locksmith & Security W1J | JW Security",
		description:
			"Discreet, premium locksmith services in Mayfair, W1J. 24/7 emergency response, high security lock upgrades, master key systems.",
	},
};

export default function Mayfair() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Mayfair Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Premium locksmith and security services in Mayfair, London. Ultra high-security solutions, luxury retail security, diplomatic-grade installations. Serving Bond Street, Grosvenor Square, and Berkeley Square.",
		"@id": "https://jwsecurity.co.uk/locations/mayfair",
		"url": "https://jwsecurity.co.uk/locations/mayfair",
		"telephone": "020 7946 0125",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Mayfair",
			"addressRegion": "London",
			"postalCode": "W1",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.5116,
			"longitude": -0.1481,
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
		"priceRange": "£££",
		"areaServed": [
			{
				"@type": "Place",
				"name": "Bond Street",
			},
			{
				"@type": "Place",
				"name": "Grosvenor Square",
			},
			{
				"@type": "Place",
				"name": "Mount Street",
			},
			{
				"@type": "Place",
				"name": "Berkeley Square",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.5116,
				"longitude": -0.1481,
			},
			"geoRadius": "2000",
		},
	};

	return (
		<>
			<Script
				id="mayfair-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<MayfairPage />
		</>
	);
}
