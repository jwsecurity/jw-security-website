"use client";
import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import NextTopLoader from "nextjs-toploader";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#223555",
		},
		secondary: {
			main: "#00c6d7",
		},
		background: {
			default: "#ffffff",
		},
	},
	typography: {
		fontFamily: ["Open Sans", "Roboto", "Arial", "sans-serif"].join(","),
		h1: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 700,
			fontSize: "3rem",
			letterSpacing: "-0.01em",
		},
		h2: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 700,
			fontSize: "2.5rem",
			letterSpacing: "-0.01em",
		},
		h3: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 600,
			fontSize: "1.8rem",
		},
		h4: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 600,
			fontSize: "1.5rem",
		},
		h5: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 600,
			fontSize: "1.2rem",
		},
		h6: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 600,
			fontSize: "1rem",
		},
		subtitle1: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 500,
		},
		button: {
			fontFamily: "Poppins, Arial, sans-serif",
			fontWeight: 600,
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.7,
		},
		body2: {
			fontSize: "0.9rem",
			lineHeight: 1.6,
		},
	},
});

export default function Providers({ children }) {
	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(".animate-on-scroll");
			elements.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;
				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add("active");
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ReactLenis
				root
				options={{ smooth: true }}>
				{children}
			</ReactLenis>
			<NextTopLoader
				color="#00c6d7"
				initialPosition={0.08}
				crawlSpeed={200}
				height={4}
				crawl={false}
				showSpinner={false}
				easing="ease"
				speed={100}
				shadow={false}
			/>
		</ThemeProvider>
	);
}
