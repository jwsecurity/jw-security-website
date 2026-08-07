import ElectronicKeyPadsPage from "@/components/services/ElectronicKeyPadsPage";
import Script from "next/script";

export const metadata = {
	title: "Electronic Key Pads & Access Control London | JW Security",
	description:
		"Electronic keypad locks, digital access control systems, keyless entry installation and maintenance for commercial and residential properties in London & Surrey.",
	keywords:
		"electronic keypads London, digital door locks, keyless entry London, access control systems, electronic door locks Surrey",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services/electronic-key-pads",
	},
	openGraph: {
		title: "Electronic Key Pads & Access Control London | JW Security",
		description:
			"Electronic keypad locks, digital access control systems, keyless entry installation and maintenance across London and Surrey.",
		url: "https://www.jwsecurity.co.uk/services/electronic-key-pads",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Electronic Key Pads & Access Control London | JW Security",
		description:
			"Electronic keypad locks, digital access control systems, keyless entry installation and maintenance across London and Surrey.",
	},
};

export default function ElectronicKeyPads() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Electronic Keypads & Access Control",
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
			"Supply, installation, and programming of commercial and residential electronic keypad access systems.",
	};

	return (
		<>
			<Script
				id="electronic-keypads-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<ElectronicKeyPadsPage />
		</>
	);
}
