import HowToChooseSecureDoorLock from "@/components/blog/HowToChooseSecureDoorLock";
import Script from "next/script";

export const metadata = {
	title: "How to Choose a Secure Door Lock | JW Security Blog",
	description:
		"Expert guide on choosing the most secure door lock for your home or business. Learn about British Standard BS3621, anti-snap cylinders, and mortice locks.",
	keywords:
		"how to choose secure door lock, BS3621 locks, anti-snap cylinders, high security door locks, home security guide London",
	alternates: {
		canonical:
			"https://www.jwsecurity.co.uk/blog/how-to-choose-secure-door-lock",
	},
	openGraph: {
		title: "How to Choose a Secure Door Lock | JW Security Blog",
		description:
			"Expert guide on choosing the most secure door lock for your home or business from JW Security.",
		url: "https://www.jwsecurity.co.uk/blog/how-to-choose-secure-door-lock",
		siteName: "JW Security",
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title: "How to Choose a Secure Door Lock | JW Security Blog",
		description:
			"Expert guide on choosing the most secure door lock for your home or business from JW Security.",
	},
};

export default function HowToChooseSecureDoorLockPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": "How to Choose a Secure Door Lock",
		"description":
			"Expert guide on choosing the most secure door lock for your home or business.",
		"url": "https://jwsecurity.co.uk/blog/how-to-choose-secure-door-lock",
		"author": {
			"@type": "Organization",
			"name": "JW Security",
		},
		"publisher": {
			"@type": "Organization",
			"name": "JW Security",
			"logo": {
				"@type": "ImageObject",
				"url": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
			},
		},
	};

	return (
		<>
			<Script
				id="blog-post-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<HowToChooseSecureDoorLock />
		</>
	);
}
