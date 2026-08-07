import UPVCDoorsWindowsPage from "@/components/services/UPVCDoorLocksPage";
import Script from "next/script";

export const metadata = {
	title: "UPVC Doors & Windows Repairs London | JW Security",
	description:
		"Specialist repair and maintenance of UPVC doors, window locks, handles, hinges, and double-glazing mechanisms in London and Surrey.",
	keywords:
		"UPVC door repairs London, UPVC window lock repair, double glazing lock repair, UPVC door handle replacement London",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services/upvc-doors-windows",
	},
	openGraph: {
		title: "UPVC Doors & Windows Repairs London | JW Security",
		description:
			"Specialist repair and maintenance of UPVC doors, window locks, handles, hinges, and double-glazing mechanisms in London and Surrey.",
		url: "https://www.jwsecurity.co.uk/services/upvc-doors-windows",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "UPVC Doors & Windows Repairs London | JW Security",
		description:
			"Specialist repair and maintenance of UPVC doors, window locks, handles, hinges, and double-glazing mechanisms in London and Surrey.",
	},
};

export default function UPVCDoorsWindows() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "UPVC Doors & Windows Repairs",
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
			"Repair and servicing of UPVC door multi-point locks, window friction hinges, handles, and locking mechanisms.",
	};

	return (
		<>
			<Script
				id="upvc-doors-windows-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<UPVCDoorsWindowsPage />
		</>
	);
}
