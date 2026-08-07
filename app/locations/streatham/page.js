import Script from "next/script";
import StreathamPage from "@/components/locations/StreathamPage";

export const metadata = {
	title: "Locksmith Streatham | 24/7 Emergency Locksmith SW16 | JW Security",
	description:
		"Professional locksmith services in Streatham, SW16. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Streatham Hill and Streatham Common. Call 0208 646 7931.",
	keywords:
		"locksmith Streatham, emergency locksmith Streatham SW16, Streatham security services, Streatham Hill locksmith",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations/streatham",
	},
	openGraph: {
		title: "Locksmith Streatham | 24/7 Emergency Locksmith SW16 | JW Security",
		description:
			"Professional locksmith services in Streatham, SW16. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://www.jwsecurity.co.uk/locations/streatham",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Streatham | 24/7 Emergency Locksmith SW16 | JW Security",
		description:
			"Professional locksmith services in Streatham, SW16. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
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
