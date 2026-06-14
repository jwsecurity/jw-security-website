import Script from "next/script";
import FireDoorInstallationInLondonPage from "@/components/services/FireDoorInstallationInLondonPage";

export const metadata = {
	title: "Fire Door Installation In London | Supply & Fit | JW Security",
	description:
		"Professional fire door installation in London and Surrey. We supply and fit internal fire doors, door frames, hinges, closers, and intumescent smoke seals for flats, offices, and HMOs. Call 0208 646 7931.",
	keywords:
		"fire door installation London, fire door supply and fit London, fire door replacement, internal fire doors, fire door cost London, HMO fire safety doors",
	canonical:
		"https://jwsecurity.co.uk/services/fire-door-installation-in-london",
};

export default function FireDoorInstallationInLondon() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Fire Door Installation",
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
			"Professional fire door supply and fit services in London and Surrey. We install internal fire doors, fire door frames, hinges, closers, and intumescent smoke seals for residential flats, HMOs, and commercial premises.",
		"offers": {
			"@type": "AggregateOffer",
			"priceCurrency": "GBP",
			"lowPrice": "150",
			"highPrice": "5000",
		},
	};
	return (
		<>
			<Script
				id="fire-door-installation-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<FireDoorInstallationInLondonPage />
		</>
	);
}
