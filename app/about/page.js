import Script from "next/script";
import AboutPage from "@/components/AboutPage";

export const metadata = {
	title: "About JW Security | 30+ Years of Security Excellence | London",
	description:
		"Established in 1991, JW Security provides professional locksmith and security services across London. MLA approved, SIA certified, trusted by government and high-profile clients.",
	keywords:
		"JW Security about, London locksmith company, security experts since 1991, Julian Whitter, MLA approved locksmith",
	canonical: "https://jwsecurity.co.uk/about",
	openGraph: {
		title: "About JW Security | 30+ Years of Security Excellence | London",
		description:
			"Established in 1991, JW Security provides professional locksmith and security services across London. MLA approved, SIA certified, trusted by government and high-profile clients.",
		url: "https://jwsecurity.co.uk/about",
		type: "website",
	},
	twitter: {
		title: "About JW Security | 30+ Years of Security Excellence | London",
		description:
			"Established in 1991, JW Security provides professional locksmith and security services across London. MLA approved, SIA certified, trusted by government and high-profile clients.",
		card: "summary_large_image",
	},
};

export default function About() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "JW Security",
		"alternateName": "1st Call Security",
		"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
		"@id": "https://jwsecurity.co.uk",
		"url": "https://jwsecurity.co.uk",
		"telephone": "020 7946 0125",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "London",
			"addressRegion": "Greater London",
			"addressCountry": "GB",
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.5074,
			"longitude": -0.1278,
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
		"sameAs": [
			"https://www.facebook.com/jwsecurity",
			"https://www.linkedin.com/company/jw-security",
		],
		"foundingDate": "1991",
		"founder": {
			"@type": "Person",
			"name": "Julian Whitter",
		},
		"numberOfEmployees": {
			"@type": "QuantitativeValue",
			"minValue": 20,
			"maxValue": 50,
		},
		"knowsAbout": [
			"Locksmith Services",
			"Security Systems",
			"Fire Door Installation",
			"CCTV Installation",
			"Emergency Locksmith",
			"Master Key Systems",
		],
		"hasCredential": [
			{
				"@type": "EducationalOccupationalCredential",
				"credentialCategory": "certification",
				"name": "Master Locksmiths Association Approved",
			},
			{
				"@type": "EducationalOccupationalCredential",
				"credentialCategory": "certification",
				"name": "SIA Approved Contractor",
			},
		],
	};

	return (
		<>
			<Script
				id="about-page-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<AboutPage />
		</>
	);
}
