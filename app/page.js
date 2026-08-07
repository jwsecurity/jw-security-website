import HomePage from "@/components/HomePage";
import Script from "next/script";

export const metadata = {
	title: "JW Security | Locksmiths & Security Specialists London",
	description:
		"Premium security solutions for residential and commercial properties across London and Surrey since 1991. Emergency locksmith, fire protection, security surveys, CCTV, and master key systems.",
	keywords:
		"London locksmith, security specialists London, emergency locksmith 24/7, fire door installation London, security surveys Surrey, master key systems",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/",
	},
	openGraph: {
		title: "JW Security | Locksmiths & Security Specialists London",
		description:
			"Premium security solutions for residential and commercial properties across London and Surrey since 1991.",
		url: "https://www.jwsecurity.co.uk/",
		siteName: "JW Security",
		type: "website",
		images: [
			{
				url: "https://www.jwsecurity.co.uk/images/jw/locksmith.webp",
				width: 1200,
				height: 630,
				alt: "JW Security London",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "JW Security | Locksmiths & Security Specialists London",
		description:
			"Premium security solutions for residential and commercial properties across London and Surrey since 1991.",
		images: ["https://www.jwsecurity.co.uk/images/jw/locksmith.webp"],
	},
};

export default function Home() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "JW Security",
		"url": "https://www.jwsecurity.co.uk/",
	};

	return (
		<>
			<Script
				id="homepage-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<HomePage />
		</>
	);
}
