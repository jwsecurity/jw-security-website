import "@/styles/globals.css";
import Script from "next/script";
import Providers from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Open_Sans, Poppins } from "next/font/google";

const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
	display: "swap",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata = {
	title: "JW Security | Locksmiths & Security Specialists London",
	description:
		"JW Security provides premium locksmith, fire protection, security systems, and emergency services for residential and commercial properties across London and Surrey.",

	openGraph: {
		type: "website",
		url: "https://www.jwsecurity.co.uk/",
		title: "JW Security | Locksmiths & Security Specialists London",
		description:
			"Premium security solutions for residential and commercial properties across London and Surrey since 1991.",
		images: [
			{
				url: "https://www.jwsecurity.co.uk/images/jw/locksmith.jpg",
			},
		],
	},

	other: {
		"geo.region": "GB-LND",
		"geo.placename": "London",
		"geo.position": "51.528739805029666;-0.3004697848794909",
		"ICBM": "51.528739805029666, -0.3004697848794909",
	},
};

const locksmithSchema = {
	"@context": "https://schema.org",
	"@type": "Locksmith",
	"name": "JW Security",
	"url": "https://www.jwsecurity.co.uk/",
	"image": "https://www.jwsecurity.co.uk/images/jw/locksmith.jpg",
	"telephone": "+44 7860 606151",
	"description":
		"Premium security solutions for residential and commercial properties across London and Surrey since 1991.",
	"areaServed": [
		{ "@type": "City", "name": "London" },
		{ "@type": "AdministrativeArea", "name": "Surrey" },
	],
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "London",
		"addressCountry": "GB",
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": 51.528739805029666,
		"longitude": -0.3004697848794909,
	},
};

const businessSchema = {
	"@context": "https://schema.org",
	"@type": "Locksmith",
	"name": "JW Security",
	"url": "https://www.jwsecurity.co.uk/",
	"image": "https://www.jwsecurity.co.uk/images/jw/locksmith.jpg",
	"telephone": "+44 7860 606151",
	"email": "help@jwsecurity.co.uk",
	"description":
		"Premium security solutions for residential and commercial properties across London and Surrey since 1991.",
	"areaServed": [
		{ "@type": "City", "name": "London" },
		{ "@type": "AdministrativeArea", "name": "Surrey" },
	],
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "London",
		"addressCountry": "GB",
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": 51.528739805029666,
		"longitude": -0.3004697848794909,
	},
	"sameAs": [
		"https://www.facebook.com/jwsecurity",
		"https://www.twitter.com/jwsecurity",
		"https://www.linkedin.com/company/jwsecurity",
		"https://www.instagram.com/jwsecurity",
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className={`${openSans.className} ${poppins.className} lenis`}>
				<Script
					src="https://www.google.com/recaptcha/api.js"
					strategy="afterInteractive"
				/>
				<Script
					id="locksmith-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(locksmithSchema),
					}}
				/>
				<Script
					id="business-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(businessSchema),
					}}
				/>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
