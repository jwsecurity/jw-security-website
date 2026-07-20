import Script from "next/script";
import RichmondPage from "@/components/locations/RichmondPage";

export const metadata = {
	title: "Locksmith Richmond | 24/7 Emergency Locksmith TW9 & TW10 | JW Security",
	description:
		"Professional locksmith services in Richmond, TW9 and TW10. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Serving Richmond Hill and Kew. Call 0208 646 7931.",
	keywords:
		"locksmith Richmond, emergency locksmith Richmond TW9, Richmond security services, Richmond Hill locksmith, Kew locksmith",
	alternates: {
		canonical: "https://jwsecurity.co.uk/locations/richmond",
	},
	openGraph: {
		title: "Locksmith Richmond | 24/7 Emergency Locksmith TW9 & TW10 | JW Security",
		description:
			"Professional locksmith services in Richmond, TW9 and TW10. 24/7 emergency response, lock changes, key cutting, and burglary repairs. Call 0208 646 7931.",
		url: "https://jwsecurity.co.uk/locations/richmond",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Locksmith Richmond | 24/7 Emergency Locksmith TW9 & TW10 | JW Security",
		description:
			"Professional locksmith services in Richmond, TW9 and TW10. 24/7 emergency response, lock changes, key cutting, and burglary repairs.",
	},
};

export default function Richmond() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security - Richmond Locksmith & Security Services",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"description":
			"Expert locksmith and security services in Richmond, London. 24/7 emergency response, lock changes, key cutting, and property security. Serving Richmond Station, Richmond Green, and Richmond Hill.",
		"@id": "https://jwsecurity.co.uk/locations/richmond",
		"url": "https://jwsecurity.co.uk/locations/richmond",
		"telephone": "0208 646 7931",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Richmond",
			"addressRegion": "London",
			"postalCode": "TW9",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.4613,
			"longitude": -0.3031,
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
				"name": "Richmond Station",
			},
			{
				"@type": "Place",
				"name": "Richmond Green",
			},
			{
				"@type": "Place",
				"name": "Richmond Hill",
			},
			{
				"@type": "Place",
				"name": "Kew Road",
			},
		],
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 51.4613,
				"longitude": -0.3031,
			},
			"geoRadius": "3000",
		},
	};

	return (
		<>
			<Script
				id="richmond-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<RichmondPage />
		</>
	);
}
