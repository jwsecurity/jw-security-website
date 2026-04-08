import Script from "next/script";
import ChelseaPage from "@/components/locations/ChelseaPage";

export const metadata = {
	title: "Locksmith Chelsea | 24/7 Emergency Locksmith & Security Services SW3",
	description:
		"Professional locksmith services in Chelsea, SW3. 24/7 emergency response, luxury property security, period property specialists. Serving Kings Road, Sloane Square & Chelsea Harbour. Call 020 7946 0125.",
	keywords:
		"locksmith Chelsea, emergency locksmith Chelsea SW3, Chelsea security services, Kings Road locksmith, Sloane Square locksmith, luxury property security Chelsea",
	canonical: "https://jwsecurity.co.uk/locations/chelsea",
};

export default function Chelsea() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Chelsea Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Chelsea, London. 24/7 emergency response, luxury property security, period property specialists. Serving Kings Road, Sloane Square, and Chelsea Harbour.",
		"@id": "https://jwsecurity.co.uk/locations/chelsea",
		"url": "https://jwsecurity.co.uk/locations/chelsea",
		"telephone": "020 7946 0125",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Chelsea",
			"addressRegion": "London",
			"postalCode": "SW3",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4871,
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
				"name": "Kings Road",
			},
			{
				"@type": "Place",
				"name": "Chelsea Harbour",
			},
			{
				"@type": "Place",
				"name": "Sloane Square",
			},
			{
				"@type": "Place",
				"name": "World's End",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4871,
				"longitude": -0.1687,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="chelsea-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<ChelseaPage />
		</>
	);
}
