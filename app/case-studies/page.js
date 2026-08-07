import CaseStudiesPage from "@/components/CaseStudiesPage";
import Script from "next/script";

export const metadata = {
	title: "Security Case Studies | JW Security Projects London",
	description:
		"Browse JW Security case studies — real residential and commercial security projects, fire door installations, and master key setups across London and Surrey.",
	keywords:
		"JW Security case studies, London locksmith projects, commercial security case studies, fire door installation examples, security survey results",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/case-studies",
	},
	openGraph: {
		title: "Security Case Studies | JW Security Projects London",
		description:
			"Browse JW Security case studies — real residential and commercial security projects, fire door installations, and master key setups across London and Surrey.",
		url: "https://www.jwsecurity.co.uk/case-studies",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Security Case Studies | JW Security Projects London",
		description:
			"Browse JW Security case studies — real residential and commercial security projects, fire door installations, and master key setups across London and Surrey.",
	},
};

export default function CaseStudies() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Security Case Studies | JW Security",
		"url": "https://jwsecurity.co.uk/case-studies",
		"description":
			"Real-world security and locksmith project case studies by JW Security in London and Surrey.",
	};

	return (
		<>
			<Script
				id="case-studies-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<CaseStudiesPage />
		</>
	);
}
