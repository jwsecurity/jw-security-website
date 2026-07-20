import QuotePage from "@/components/QuotePage";
import Script from "next/script";

export const metadata = {
	title: "Request a Free Security Quote | JW Security London",
	description:
		"Get a free, no-obligation security quote from JW Security for your home or business in London and Surrey. Locksmith, fire doors, CCTV, and alarm quotes.",
	keywords:
		"free security quote London, locksmith cost estimate, security survey quote, fire door quote London, JW Security pricing",
	alternates: {
		canonical: "https://jwsecurity.co.uk/quote",
	},
	openGraph: {
		title: "Request a Free Security Quote | JW Security London",
		description:
			"Get a free, no-obligation security quote from JW Security for your home or business in London and Surrey.",
		url: "https://jwsecurity.co.uk/quote",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Request a Free Security Quote | JW Security London",
		description:
			"Get a free, no-obligation security quote from JW Security for your home or business in London and Surrey.",
	},
};

export default function Quote() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"name": "Request a Free Security Quote",
		"url": "https://jwsecurity.co.uk/quote",
		"description": "Request a free security or locksmith quote from JW Security in London and Surrey.",
	};

	return (
		<>
			<Script
				id="quote-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<QuotePage />
		</>
	);
}
