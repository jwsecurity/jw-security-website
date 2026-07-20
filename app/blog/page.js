import BlogPage from "@/components/BlogPage";
import Script from "next/script";

export const metadata = {
	title: "Security & Locksmith Blog | Advice & Guides | JW Security London",
	description:
		"Security tips, door lock buying guides, home safety advice, and news from JW Security — London and Surrey locksmiths since 1991.",
	keywords:
		"security blog London, locksmith advice, door lock buying guide, home security tips London, locksmith blog UK",
	alternates: {
		canonical: "https://jwsecurity.co.uk/blog",
	},
	openGraph: {
		title: "Security & Locksmith Blog | Advice & Guides | JW Security London",
		description:
			"Security tips, door lock buying guides, home safety advice, and news from JW Security — London and Surrey locksmiths since 1991.",
		url: "https://jwsecurity.co.uk/blog",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Security & Locksmith Blog | Advice & Guides | JW Security London",
		description:
			"Security tips, door lock buying guides, home safety advice, and news from JW Security — London and Surrey locksmiths since 1991.",
	},
};

export default function Blog() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "JW Security Blog",
		"url": "https://jwsecurity.co.uk/blog",
		"description": "Locksmith advice, security tips, and property protection guides for London and Surrey.",
	};

	return (
		<>
			<Script
				id="blog-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<BlogPage />
		</>
	);
}
