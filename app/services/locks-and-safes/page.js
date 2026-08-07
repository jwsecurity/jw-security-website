import LocksAndSafesPage from "@/components/services/LocksAndSafesPage";
import Script from "next/script";

export const metadata = {
	title:
		"Locks & Safes London | Installation, Repair & Servicing | JW Security",
	description:
		"Expert lock and safe installation, opening, repair, and servicing for residential homes and commercial businesses across London and Surrey. Call 0208 646 7931.",
	keywords:
		"locks and safes London, safe opening London, high security safes, safe installation, digital safe repair, BS3621 locks London",
	alternates: {
		canonical: "https://www.jwsecurity.co.uk/services/locks-and-safes",
	},
	openGraph: {
		title:
			"Locks & Safes London | Installation, Repair & Servicing | JW Security",
		description:
			"Expert lock and safe installation, opening, repair, and servicing for homes and businesses across London and Surrey.",
		url: "https://www.jwsecurity.co.uk/services/locks-and-safes",
		siteName: "JW Security",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Locks & Safes London | Installation, Repair & Servicing | JW Security",
		description:
			"Expert lock and safe installation, opening, repair, and servicing for homes and businesses across London and Surrey.",
	},
};

export default function LocksAndSafes() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Locks and Safes Installation & Servicing",
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
			"Supply, installation, opening, and maintenance of high-security locks and commercial/home safes.",
	};

	return (
		<>
			<Script
				id="locks-and-safes-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<LocksAndSafesPage />
		</>
	);
}
