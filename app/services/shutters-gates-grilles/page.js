import ShuttersGatesGrillesPage from "@/components/services/ShuttersGatesGrillesPage";
import Script from "next/script";

export const metadata = {
	title: "Security Shutters, Gates & Grilles London | JW Security",
	description:
		"Security shutters, security gates, and window grilles professionally supplied and installed across London and Surrey for residential and commercial protection.",
	keywords:
		"security shutters London, security gates London, window grilles London, roller shutters, collapsible grilles London",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services/shutters-gates-grilles",
	},
	openGraph: {
		title: "Security Shutters, Gates & Grilles London | JW Security",
		description:
			"Security shutters, security gates, and window grilles professionally supplied and installed across London and Surrey.",
		url: "https://www.jwsecurity.co.uk/services/shutters-gates-grilles",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Security Shutters, Gates & Grilles London | JW Security",
		description:
			"Security shutters, security gates, and window grilles professionally supplied and installed across London and Surrey.",
	},
};

export default function ShuttersGatesGrilles() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Security Shutters, Gates & Grilles",
		"provider": {
			"@type": "Locksmith",
			"name": "JW Security",
			"telephone": "0208 646 7931",
			"url": "https://jwsecurity.co.uk",
		},
		"areaServed": {
			"@type": "City",
			"name": "London",
		},
		"description":
			"Supply, installation, and maintenance of physical security shutters, gates, and window grilles.",
	};

	return (
		<>
			<Script
				id="shutters-gates-grilles-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<ShuttersGatesGrillesPage />
		</>
	);
}
