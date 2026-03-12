"use client";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import { Box, Container, Typography, Button } from "@mui/material";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const HeroWrapper = styled(Box)(
	({
		theme,
		minHeight = "65vh",
		backgroundImage = "/images/jw/locksmith-maintenance.jpg",
	}) => ({
		position: "relative",
		backgroundColor: JW_BLUE,
		color: "white",
		padding: theme.spacing(10, 0, 8),
		paddingTop: `calc(${theme.spacing(10)} + 90px)`,
		minHeight: minHeight,
		display: "flex",
		alignItems: "center",
		backgroundImage: `linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		[theme.breakpoints.down("md")]: {
			minHeight:
				minHeight === "65vh"
					? "50vh"
					: minHeight === "45vh"
						? "40vh"
						: minHeight,
			padding: theme.spacing(8, 0, 6),
			paddingTop: `calc(${theme.spacing(8)} + 70px)`,
		},
		[theme.breakpoints.down("sm")]: {
			minHeight:
				minHeight === "65vh"
					? "40vh"
					: minHeight === "45vh"
						? "35vh"
						: minHeight,
			padding: theme.spacing(6, 0, 4),
			paddingTop: `calc(${theme.spacing(6)} + 60px)`,
		},
	}),
);

const DecorativeLine = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "3px",
	backgroundColor: JW_CYAN,
	marginBottom: theme.spacing(2),
}));

export default function PageHero({
	title,
	subtitle,
	backgroundimage = "/images/jw/locksmith-maintenance.jpg",
	minHeight = "65vh",
	centerContent = false,
	ctaButton = true,
	ctaText = "Get a Free Quote",
	ctaLink = "/contact",
}) {
	return (
		<HeroWrapper
			minHeight={minHeight}
			backgroundimage={backgroundimage}>
			<Container>
				<Box
					sx={{
						maxWidth: 700,
						position: "relative",
						zIndex: 2,
						margin: centerContent ? "0 auto" : "initial",
						textAlign: centerContent ? "center" : "left",
					}}>
					<DecorativeLine
						sx={{
							mx: centerContent ? "auto" : 0,
						}}
					/>
					<Typography
						variant="h2"
						component="h1"
						sx={{
							fontWeight: 700,
							mb: 2.5,
							fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
							textShadow: "0 2px 10px rgba(0,0,0,0.2)",
							color: "white",
							wordWrap: "break-word",
							maxWidth: "100%",
						}}>
						{title}
					</Typography>
					{subtitle && (
						<Typography
							variant="h6"
							sx={{
								maxWidth: "700px",
								mb: 4,
								fontWeight: 400,
								lineHeight: 1.5,
								opacity: 0.9,
								color: "white",
								fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
							}}>
							{subtitle}
						</Typography>
					)}
					{ctaButton && (
						<Link
							href={ctaLink}
							passHref>
							<Button
								variant="contained"
								component="span"
								sx={{
									"backgroundColor": JW_CYAN,
									"color": "white",
									"&:hover": { backgroundColor: alpha(JW_CYAN, 0.9) },
									"px": { xs: 3, md: 4 },
									"py": { xs: 1, md: 1.2 },
									"fontSize": { xs: "0.875rem", md: "1rem" },
								}}>
								{ctaText}
							</Button>
						</Link>
					)}
				</Box>
			</Container>
		</HeroWrapper>
	);
}
