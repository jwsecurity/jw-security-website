import "@/styles/globals.css";
import Script from "next/script";
import Providers from "./providers";
import ReactLenis from "lenis/react";
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
				<ReactLenis
					root
					options={{ smooth: true }}>
					<Providers>
						<Header />
						{children}
						<Footer />
					</Providers>
				</ReactLenis>
			</body>
		</html>
	);
}
