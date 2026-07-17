import Script from "next/script";
import TootingPage from "@/components/locations/TootingPage";

export const metadata = {
	title: "Locksmith Tooting | 24/7 Emergency Locksmith & Security Services SW17",
	description:
		"Professional locksmith services in Tooting, SW17. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Tooting Broadway, Tooting Bec, Upper Tooting Road, and surrounding areas. Call 0208 646 7931.",
	keywords:
		"locksmith Tooting, emergency locksmith Tooting SW17, Tooting security services, Tooting Broadway locksmith, Tooting Bec locksmith, Upper Tooting Road locksmith",
	canonical: "https://jwsecurity.co.uk/locations/tooting",
};

export default function Tooting() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Tooting Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Tooting, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Tooting Broadway, Tooting Bec, Upper Tooting Road, and Mitcham Road.",
		"@id": "https://jwsecurity.co.uk/locations/tooting",
		"url": "https://jwsecurity.co.uk/locations/tooting",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Tooting",
			"addressRegion": "London",
			"postalCode": "SW17",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4272,
			"longitude": -0.1656,
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
				"name": "Tooting Broadway",
			},
			{
				"@type": "Place",
				"name": "Tooting Bec",
			},
			{
				"@type": "Place",
				"name": "Upper Tooting Road",
			},
			{
				"@type": "Place",
				"name": "Mitcham Road",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4272,
				"longitude": -0.1656,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="tooting-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<TootingPage />
		</>
	);
}
