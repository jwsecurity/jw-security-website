"use client";
import {
	Box,
	Grid,
	Card,
	Button,
	Container,
	Typography,
	CardContent,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import PageHero from "./common/PageHero";
import { styled, alpha } from "@mui/material/styles";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const SectionTitle = styled(Typography)(({ theme }) => ({
	"fontWeight": 700,
	"marginBottom": theme.spacing(2),
	"color": JW_BLUE,
	"position": "relative",
	"paddingBottom": theme.spacing(1.5),
	"&::after": {
		content: '""',
		position: "absolute",
		width: "50px",
		height: "3px",
		backgroundColor: JW_CYAN,
		bottom: 0,
		left: 0,
	},
}));

export default function ResidentialPage() {
	const services = [
		{
			title: "Emergency Locksmith",
			desc: "24/7 non-destructive entry and lock changes.",
			link: "/services/emergency-door-opening",
		},
		{
			title: "Locks & Safes",
			desc: "High-security locks and residential safes supplied and installed.",
			link: "/services/locks-and-safes",
		},
		{
			title: "UPVC Doors & Windows",
			desc: "Specialist repair of UPVC door/window mechanisms and handles.",
			link: "/services/upvc-doors-windows",
		},
		{
			title: "Security Systems",
			desc: "CCTV and intruder alarms for homes and apartments.",
			link: "/services/security",
		},
		{
			title: "Fire Doors",
			desc: "Fire door supply, installation and certification in HMOs and blocks.",
			link: "/services/fire-protection",
		},
		{
			title: "Carpentry",
			desc: "Professional carpentry, door hanging and bespoke joinery.",
			link: "/services/carpentry",
		},
	];

	return (
		<>
			<PageHero
				title="Residential Security"
				subtitle="Discreet, premium protection for homes and apartments"
				backgroundImage="/images/jw/locksmith.webp"
				minHeight="40vh"
				centerContent
			/>
			<Box sx={{ py: { xs: 6, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={3}>
						{services.map((s, i) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={i}>
								<Card
									sx={{
										height: "100%",
										borderRadius: 2,
										border: `1px solid ${alpha(JW_BLUE, 0.08)}`,
										boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
									}}>
									<CardContent>
										<Typography
											variant="h6"
											sx={{ fontWeight: 700, color: JW_BLUE, mb: 1 }}>
											{s.title}
										</Typography>
										<Typography sx={{ color: "text.secondary", mb: 2 }}>
											{s.desc}
										</Typography>
										<Link
											href={s.link}
											passHref>
											<Button
												component="span"
												size="small"
												sx={{ textTransform: "none" }}>
												Learn more
											</Button>
										</Link>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
					<Box sx={{ mt: 6, textAlign: "center" }}>
						<SectionTitle
							variant="h5"
							sx={{ display: "inline-block" }}>
							Ready for a tailored quote?
						</SectionTitle>
						<Box sx={{ mt: 2 }}>
							<Link
								href="/quote"
								passHref>
								<Button
									component="span"
									variant="contained"
									sx={{
										backgroundColor: JW_CYAN,
										color: "#fff",
										px: 3,
										py: 1.2,
										textTransform: "none",
									}}>
									Request a Quote
								</Button>
							</Link>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
}
