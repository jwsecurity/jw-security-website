import KeyCuttingPage from "@/components/services/KeyCuttingPage";
import Script from "next/script";

export const metadata = {
	title: "Mobile Key Cutting London | Master Keys & Duplication | JW Security",
	description:
		"Professional mobile key cutting service across London and Surrey — high-security keys, window keys, master keys, and cylinder keys cut on site.",
	keywords:
		"mobile key cutting London, key duplication London, master key cutting, high security key duplication, door key duplication Surrey",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services/key-cutting",
	},
	openGraph: {
		title:
			"Mobile Key Cutting London | Master Keys & Duplication | JW Security",
		description:
			"Professional mobile key cutting service across London and Surrey — high-security keys, window keys, master keys, and cylinder keys cut on site.",
		url: "https://www.jwsecurity.co.uk/services/key-cutting",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Mobile Key Cutting London | Master Keys & Duplication | JW Security",
		description:
			"Professional mobile key cutting service across London and Surrey — high-security keys, window keys, master keys, and cylinder keys cut on site.",
	},
};

export default function KeyCutting() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Key Cutting & Duplication",
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
			"On-site mobile key cutting and precision key duplication for residential and commercial premises.",
	};

	return (
		<>
			<Script
				id="key-cutting-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<KeyCuttingPage />
		</>
	);
}
