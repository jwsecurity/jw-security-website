import Script from "next/script";
import MasterKeySystemsPage from "@/components/services/MasterKeySystemsPage";

export const metadata = {
	title: "Master Key Systems London | Installation & Key Hierarchy | JW Security",
	description:
		"Master key system installation in London for landlords, schools, offices, managed buildings, and commercial properties. Controlled access, key hierarchy planning, and restricted key control. Call JW Security.",
	keywords:
		"master key system London, master key installation, key hierarchy, restricted key control, lock cylinder setup, master locksmith London, commercial master key, building access control",
	canonical: "https://jwsecurity.co.uk/services/master-key-systems",
};

export default function MasterKeySystems() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Master Key Systems",
		"provider": {
			"@type": "LocalBusiness",
			"name": "JW Security",
			"image": "https://jwsecurity.co.uk/images/jw/jw-logo.webp",
			"telephone": "020 7946 0125",
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
			"Master key system installation in London for landlords, schools, offices, managed buildings, estates, and commercial properties. Key hierarchy planning, lock cylinder setup, and restricted key control.",
	};

	return (
		<>
			<Script
				id="master-key-systems-json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<MasterKeySystemsPage />
		</>
	);
}
