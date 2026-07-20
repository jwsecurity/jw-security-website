import UPVCDoorsWindowsPage from "@/components/services/UPVCDoorLocksPage";
import Script from "next/script";

export const metadata = {
	title: "UPVC Door Lock Repairs & Upgrades London | JW Security",
	description:
		"Specialist UPVC door lock repair, multi-point lock mechanism replacement, and anti-snap cylinder upgrades across London and Surrey.",
	keywords:
		"UPVC door locks London, UPVC lock repair, multi point lock replacement, anti-snap UPVC cylinder, patio door lock repair",
	alternates: {
		canonical: "https://jwsecurity.co.uk/services/upvc-door-locks",
	},
	openGraph: {
		title: "UPVC Door Lock Repairs & Upgrades London | JW Security",
		description:
			"Specialist UPVC door lock repair, multi-point lock mechanism replacement, and anti-snap cylinder upgrades across London and Surrey.",
		url: "https://jwsecurity.co.uk/services/upvc-door-locks",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "UPVC Door Lock Repairs & Upgrades London | JW Security",
		description:
			"Specialist UPVC door lock repair, multi-point lock mechanism replacement, and anti-snap cylinder upgrades across London and Surrey.",
	},
};

export default function UPVCDoorLocks() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "UPVC Door Lock Repairs & Upgrades",
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
		"description": "Repair, replacement, and upgrading of UPVC door multi-point gearboxes, handles, and cylinders.",
	};

	return (
		<>
			<Script
				id="upvc-door-locks-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<UPVCDoorsWindowsPage />
		</>
	);
}
