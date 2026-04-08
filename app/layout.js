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
				url: "https://www.jwsecurity.co.uk/images/jw/locksmith.webp",
			},
		],
	},

	other: {
		"geo.region": "GB-LND",
		"geo.placename": "London",
		"geo.position": "51.528739805029666;-0.3004697848794909",
		"ICBM": "51.528739805029666, -0.3004697848794909",
		"msvalidate.01": "A7FD6D5B114BBED117CF1F085B93FD7C",
	},
};

const locksmithSchema = {
	"@context": "https://schema.org",
	"@type": "Locksmith",
	"name": "JW Security",
	"url": "https://www.jwsecurity.co.uk/",
	"image": "https://www.jwsecurity.co.uk/images/jw/locksmith.webp",
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
	"image": "https://www.jwsecurity.co.uk/images/jw/locksmith.webp",
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

const GTM_ID = "GTM-K5R23XWC";

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<head>
				<Script
					id="gtm-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
					}}
				/>
			</head>
			<body className={`${openSans.variable} ${poppins.variable} lenis`}>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>
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
