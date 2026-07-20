import Script from "next/script";
import LockReplacementPage from "@/components/services/LockReplacementPage";

export const metadata = {
	title: "Lock Replacement London | Lock Change & High Security Locks | JW Security",
	description:
		"Lock replacement and lock change in London for homes, landlords, businesses, and managed properties. High security locks, anti snap cylinders, and insurance approved options. Call 0208 646 7931.",
	keywords:
		"lock replacement London, lock change London, high security locks, anti snap cylinders, lock upgrade, insurance approved locks, door lock replacement, commercial lock change",
	alternates: {
		canonical: "https://jwsecurity.co.uk/services/lock-replacement",
	},
	openGraph: {
		title: "Lock Replacement London | Lock Change & High Security Locks | JW Security",
		description:
			"Lock replacement and lock change in London for homes, landlords, businesses, and managed properties. High security locks and anti-snap cylinders.",
		url: "https://jwsecurity.co.uk/services/lock-replacement",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Lock Replacement London | Lock Change & High Security Locks | JW Security",
		description:
			"Lock replacement and lock change in London for homes, landlords, businesses, and managed properties. High security locks and anti-snap cylinders.",
	},
};

export default function LockReplacement() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Lock Replacement",
		"provider": {
			"@type": "LocalBusiness",
			"name": "JW Security",
			"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
			"telephone": "0208 646 7931",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "London",
				"addressCountry": "GB",
			},
		},
		"areaServed": {
			"@type": "City",
			"name": "London",
		},
		"description":
			"Lock replacement, lock change, and high security lock upgrades in London for homes, landlords, businesses, offices, shops, managed buildings, and commercial premises.",
	};

	return (
		<>
			<Script
				id="lock-replacement-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<LockReplacementPage />
		</>
	);
}
