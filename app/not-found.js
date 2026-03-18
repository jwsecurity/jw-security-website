"use client";
import React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import GppBadIcon from "@mui/icons-material/GppBad";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Container, Typography, Button } from "@mui/material";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const NotFoundContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: JW_CYAN,
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
	width: "100%",
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: 9999,
	overflow: "hidden",
	padding: theme.spacing(4),
	textAlign: "center",
}));

const IconBox = styled(Box)(({ theme }) => ({
	marginBottom: theme.spacing(4),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const HomeButton = styled(Button)(({ theme }) => ({
	"backgroundColor": JW_BLUE,
	"color": "white",
	"padding": "12px 32px",
	"fontSize": "1rem",
	"fontWeight": 600,
	"borderRadius": "8px",
	"marginTop": theme.spacing(4),
	"textTransform": "none",
	"transition": "all 0.3s ease",
	"&:hover": {
		backgroundColor: alpha(JW_BLUE, 0.9),
		transform: "translateY(-2px)",
		boxShadow: "0 4px 12px rgba(28, 46, 74, 0.2)",
	},
}));

// Helper function since alpha is not imported from styles directly in some layouts
const alpha = (color, opacity) => {
	const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
	return color + _opacity.toString(16).toUpperCase();
};

export default function NotFound() {
	return (
		<NotFoundContainer>
			<Container maxWidth="sm">
				<IconBox>
					<GppBadIcon sx={{ fontSize: 80, color: JW_BLUE }} />
				</IconBox>
				<Typography
					variant="h1"
					sx={{
						fontSize: { xs: "5rem", md: "8rem" },
						fontWeight: 800,
						color: JW_BLUE,
						lineHeight: 1,
						mb: 2,
					}}>
					404
				</Typography>
				<Typography
					variant="h4"
					sx={{
						fontWeight: 700,
						color: JW_BLUE,
						mb: 2,
					}}>
					Page Not Found
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "text.secondary",
						maxWidth: "400px",
						mx: "auto",
						fontSize: "1.2rem",
					}}>
					We can&apos;t seem to find the security page you&apos;re looking for.
					It might have been moved or doesn&apos;t exist.
				</Typography>
				<Link
					href="/"
					passHref
					style={{ textDecoration: "none" }}>
					<HomeButton startIcon={<ArrowBackIcon />}>Back to Home</HomeButton>
				</Link>
			</Container>
		</NotFoundContainer>
	);
}
