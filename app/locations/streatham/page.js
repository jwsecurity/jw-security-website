import Script from "next/script";
import StreathamPage from "@/components/locations/StreathamPage";

export const metadata = {
	title: "Locksmith Streatham | 24/7 Emergency Locksmith & Security Services",
	description:
		"Trusted locksmith Streatham services for homes, flats, shops, landlords, and managed buildings, with 24 hour help for urgent lock and access problems. Call 0208 646 7931.",
	keywords:
		"locksmith Streatham, emergency locksmith Streatham, Streatham security services, Streatham High Road locksmith, Streatham Hill locksmith, Streatham Common locksmith",
	canonical: "https://jwsecurity.co.uk/locations/streatham",
};

export default function Streatham() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Streatham Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Streatham, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Streatham High Road, Streatham Hill, and Streatham Common.",
		"@id": "https://jwsecurity.co.uk/locations/streatham",
		"url": "https://jwsecurity.co.uk/locations/streatham",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Streatham",
			"addressRegion": "London",
			"postalCode": "SW16",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4278,
			"longitude": -0.1306,
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
				"name": "Streatham High Road",
			},
			{
				"@type": "Place",
				"name": "Streatham Hill",
			},
			{
				"@type": "Place",
				"name": "Streatham Common",
			},
			{
				"@type": "Place",
				"name": "Streatham Vale",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4278,
				"longitude": -0.1306,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="streatham-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<StreathamPage />
		</>
	);
}
