"use client";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const PageHero = styled(Box)(({ theme }) => ({
	backgroundColor: JW_BLUE,
	color: "white",
	padding: theme.spacing(10, 0, 8),
	paddingTop: `calc(${theme.spacing(10)} + 90px)`,
	position: "relative",
	backgroundImage:
		"linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url(/images/jw/locksmith-maintenance.webp)",
	backgroundSize: "cover",
	backgroundPosition: "center",
}));

const ContentSection = styled(Box)(({ theme }) => ({
	"padding": theme.spacing(10, 0),
	"backgroundColor": "#ffffff",
	"& h2": {
		color: JW_BLUE,
		fontWeight: 700,
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(2.5),
		fontSize: "1.75rem",
	},
	"& h3": {
		color: JW_BLUE,
		fontWeight: 600,
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
		fontSize: "1.4rem",
	},
	"& p": {
		marginBottom: theme.spacing(2.5),
		lineHeight: 1.8,
		color: alpha("#000", 0.75),
		fontSize: "1.05rem",
	},
	"& ul": {
		marginBottom: theme.spacing(3),
		paddingLeft: theme.spacing(3),
	},
	"& li": {
		marginBottom: theme.spacing(1.5),
		lineHeight: 1.6,
		color: alpha("#000", 0.75),
		fontSize: "1.05rem",
	},
}));

const Underline = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "4px",
	backgroundColor: JW_CYAN,
	marginTop: theme.spacing(2),
}));

export default function LegalPage({ title, subtitle, children }) {
	return (
		<>
			<PageHero>
				<Container maxWidth="lg">
					<Typography
						variant="h2"
						component="h1"
						sx={{ fontWeight: 700, mb: 1, color: "white" }}>
						{title}
					</Typography>
					<Underline />
					<Typography
						variant="h6"
						sx={{
							mt: 3,
							maxWidth: "700px",
							fontWeight: 400,
							color: "white",
							opacity: 0.9,
						}}>
						{subtitle}
					</Typography>
				</Container>
			</PageHero>
			<ContentSection>
				<Container maxWidth="lg">{children}</Container>
			</ContentSection>
		</>
	);
}
