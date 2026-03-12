import Script from "next/script";
import CarpentrySolutionsPage from "@/components/CarpentrySolutionsPage";

export const metadata = {
	title:
		"Carpentry Services London | Door Installation & Joinery | JW Security",
	description:
		"Expert carpentry services in London. Door installation, window repairs, custom joinery, kitchen fitting. Skilled craftsmen with 30+ years experience. Call 020 7946 0125.",
	keywords:
		"carpentry London, door installation, window repair, joinery services, custom carpentry, kitchen fitting, emergency carpenter London",
	canonical: "https://jwsecurity.co.uk/services/carpentry",
};

export default function Carpentry() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Carpentry Services",
		"provider": {
			"@type": "LocalBusiness",
			"name": "JW Security",
			"image": "https://jwsecurity.co.uk/images/jw/jw-logo.png",
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
			"Professional carpentry services in London including door installation, window repairs, custom joinery, and emergency repairs. Expert craftsmen with 30+ years experience.",
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
				id="json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<CarpentrySolutionsPage />
		</>
	);
}
