import LocationsPage from "@/components/LocationsPage";
import Script from "next/script";

export const metadata = {
	title: "Areas We Serve | London Locksmith & Security | JW Security",
	description:
		"Explore the areas JW Security serves across London and Surrey. Professional locksmith, fire protection, commercial security and 24/7 emergency services. Available 24/7. Call 0208 646 7931.",
	keywords:
		"locksmith London areas, security services London, areas we serve, emergency locksmith Wimbledon, locksmith Chelsea, locksmith Kensington, locksmith Battersea, locksmith Surrey",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/locations",
	},
	openGraph: {
		title: "Areas We Serve | London Locksmith & Security | JW Security",
		description:
			"Explore the areas JW Security serves across London and Surrey. Professional locksmith, fire protection, commercial security and 24/7 emergency services.",
		url: "https://www.jwsecurity.co.uk/locations",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Areas We Serve | London Locksmith & Security | JW Security",
		description:
			"Explore the areas JW Security serves across London and Surrey. Professional locksmith, fire protection, commercial security and 24/7 emergency services.",
	},
};

export default function Locations() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Areas We Serve | London Locksmith & Security | JW Security",
		"url": "https://www.jwsecurity.co.uk/locations",
		"description":
			"Explore the areas JW Security serves across London and Surrey. Professional locksmith, fire protection, commercial security and 24/7 emergency services.",
		"provider": {
			"@type": "Locksmith",
			"name": "JW Security",
			"telephone": "0208 646 7931",
			"url": "https://jwsecurity.co.uk",
		},
		"areaServed": [
			{
				"@type": "AdministrativeArea",
				"name": "Greater London",
			},
			{
				"@type": "AdministrativeArea",
				"name": "Surrey",
			},
		],
	};

	return (
		<>
			<Script
				id="locations-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<LocationsPage />
		</>
	);
}
