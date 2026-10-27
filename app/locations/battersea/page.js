import Script from "next/script";
import BatterseaPage from "@/components/locations/BatterseaPage";

export const metadata = {
	title: "Locksmith Battersea SW11 | 24/7 Security Services | JW Security",
	description:
		"Need a locksmith in Battersea SW11? JW Security provides 24/7 emergency locksmiths, lock replacement, commercial security and fire door services.",
	keywords:
		"locksmith Battersea, emergency locksmith Battersea SW11, Battersea security services, Battersea Park locksmith, Battersea Power Station locksmith, Clapham Junction locksmith, Nine Elms locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/battersea",
	},
	openGraph: {
		title:
			"Locksmith Battersea SW11 | 24/7 Security Services | JW Security",
		description:
			"Need a locksmith in Battersea SW11? JW Security provides 24/7 emergency locksmiths, lock replacement, commercial security and fire door services.",
		url: "https://www.jwsecurity.co.uk/locations/battersea",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Locksmith Battersea SW11 | 24/7 Security Services | JW Security",
		description:
			"Need a locksmith in Battersea SW11? JW Security provides 24/7 emergency locksmiths, lock replacement, commercial security and fire door services.",
	},
};

export default function Battersea() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Battersea Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Professional locksmith and security services for homes, flats, businesses, landlords and managed buildings across Battersea, SW11, and nearby areas.",
		"@id": "https://jwsecurity.co.uk/locations/battersea",
		"url": "https://jwsecurity.co.uk/locations/battersea",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Battersea",
			"addressRegion": "London",
			"postalCode": "SW11",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4688,
			"longitude": -0.1687,
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
				"name": "Battersea Park",
			},
			{
				"@type": "Place",
				"name": "Battersea Square",
			},
			{
				"@type": "Place",
				"name": "Battersea Power Station",
			},
			{
				"@type": "Place",
				"name": "Nine Elms",
			},
			{
				"@type": "Place",
				"name": "Clapham Junction",
			},
			{
				"@type": "Place",
				"name": "Northcote Road",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4688,
				"longitude": -0.1687,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="battersea-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<BatterseaPage />
		</>
	);
}
