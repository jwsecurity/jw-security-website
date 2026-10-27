"use client";
import React from "react";
import Link from "next/link";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const ServiceCardWrapper = styled(Card)(({ theme }) => ({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	padding: theme.spacing(3.5, 3),
	borderRadius: "14px",
	backgroundColor: "#ffffff",
	border: `1px solid ${alpha(JW_BLUE, 0.08)}`,
	boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
	transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
	"&:hover": {
		transform: "translateY(-6px)",
		boxShadow: `0 16px 32px ${alpha(JW_CYAN, 0.16)}`,
		borderColor: JW_CYAN,
		"& .service-icon-box": {
			backgroundColor: JW_CYAN,
			color: "#ffffff",
			transform: "scale(1.08)",
		},
		"& .service-link-cta": {
			color: JW_CYAN,
			"& .arrow-icon": {
				transform: "translateX(6px)",
			},
		},
	},
}));

const IconBox = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	backgroundColor: alpha(JW_CYAN, 0.12),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2.5),
	color: JW_BLUE,
	transition: "all 0.3s ease",
}));

export default function SharedServicesSection({ sx = {} }) {
	const services = [
		{
			title: "Fire Protection",
			description:
				"Fire door installation, inspection, maintenance and fire risk assessments to help businesses, landlords and property managers meet their fire safety responsibilities.",
			icon: <ShieldIcon sx={{ fontSize: 30 }} />,
			link: "/services/fire-protection",
			cta: "Explore Fire Protection",
		},
		{
			title: "Locksmith Services",
			description:
				"Professional locksmith services, including lock repairs, lock replacement, master key systems and security upgrades for residential and commercial properties.",
			icon: <LockIcon sx={{ fontSize: 30 }} />,
			link: "/services/locksmith",
			cta: "Explore Locksmith Services",
		},
		{
			title: "Security Systems",
			description:
				"CCTV installation, access control, alarm systems and tailored security solutions to help protect homes, offices and commercial properties.",
			icon: <SecurityIcon sx={{ fontSize: 30 }} />,
			link: "/services/security",
			cta: "Explore Security Systems",
		},
		{
			title: "Emergency Services",
			description:
				"24/7 emergency locksmith assistance for lockouts, lost keys, damaged locks, emergency door opening and burglary-related security problems.",
			icon: <NotificationsActiveIcon sx={{ fontSize: 30 }} />,
			link: "/services/emergency",
			cta: "Explore Emergency Services",
		},
	];

	return (
		<Box
			component="section"
			sx={{
				py: { xs: 7, md: 10 },
				bgcolor: alpha(JW_BLUE, 0.02),
				borderTop: `1px solid ${alpha(JW_BLUE, 0.06)}`,
				borderBottom: `1px solid ${alpha(JW_BLUE, 0.06)}`,
				...sx,
			}}>
			<Container>
				{/* Section Header */}
				<Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
					{/* Eyebrow */}
					<Box
						sx={{
							display: "inline-flex",
							alignItems: "center",
							gap: 1.5,
							mb: 1.5,
						}}>
						<Box
							sx={{
								width: 35,
								height: 2,
								bgcolor: JW_CYAN,
								borderRadius: 1,
							}}
						/>
						<Typography
							sx={{
								color: JW_CYAN,
								fontWeight: 700,
								fontSize: "0.85rem",
								letterSpacing: "2.5px",
								textTransform: "uppercase",
							}}>
							Our Services
						</Typography>
						<Box
							sx={{
								width: 35,
								height: 2,
								bgcolor: JW_CYAN,
								borderRadius: 1,
							}}
						/>
					</Box>

					{/* Title */}
					<Typography
						variant="h3"
						component="h2"
						sx={{
							fontWeight: 800,
							color: JW_BLUE,
							fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.5rem" },
							mb: 2,
						}}>
						Our Locksmith, Fire Protection & Security Services
					</Typography>

					{/* Subtitle */}
					<Typography
						sx={{
							maxWidth: "850px",
							mx: "auto",
							color: "text.secondary",
							fontSize: { xs: "0.95rem", md: "1.05rem" },
							lineHeight: 1.75,
						}}>
						JW Security provides reliable locksmith, fire protection, security
						systems and emergency services for homes, businesses and managed
						properties across London. Explore our specialist services to find
						the right security solution for your property.
					</Typography>
				</Box>

				{/* 4 Service Cards Grid */}
				<Grid
					container
					spacing={3.5}
					alignItems="stretch">
					{services.map((item, index) => (
						<Grid
							key={index}
							size={{ xs: 12, sm: 6, md: 3 }}
							sx={{ display: "flex" }}>
							<ServiceCardWrapper>
								<IconBox className="service-icon-box">{item.icon}</IconBox>

								<Typography
									variant="h5"
									component="h3"
									sx={{
										fontWeight: 700,
										color: JW_BLUE,
										fontSize: { xs: "1.2rem", md: "1.3rem" },
										mb: 1.5,
									}}>
									{item.title}
								</Typography>

								<Typography
									variant="body2"
									sx={{
										color: "text.secondary",
										lineHeight: 1.65,
										fontSize: "0.92rem",
										mb: 3,
										flexGrow: 1,
									}}>
									{item.description}
								</Typography>

								<Box
									component={Link}
									href={item.link}
									className="service-link-cta"
									sx={{
										display: "inline-flex",
										alignItems: "center",
										gap: 0.75,
										color: JW_BLUE,
										fontWeight: 700,
										fontSize: "0.92rem",
										textDecoration: "none",
										mt: "auto",
										transition: "color 0.25s ease",
									}}>
									<span>{item.cta}</span>
									<ArrowForwardIcon
										className="arrow-icon"
										sx={{
											fontSize: 16,
											transition: "transform 0.25s ease",
										}}
									/>
								</Box>
							</ServiceCardWrapper>
						</Grid>
					))}
				</Grid>

				{/* Bottom View All Services CTA Button */}
				<Box
					sx={{
						textAlign: "center",
						mt: { xs: 5, md: 6 },
					}}>
					<Button
						component={Link}
						href="/services"
						variant="contained"
						size="large"
						endIcon={<ArrowForwardIcon sx={{ fontSize: "1.1rem !important" }} />}
						sx={{
							bgcolor: JW_CYAN,
							color: "#ffffff",
							fontWeight: 700,
							fontSize: "0.98rem",
							px: 4.5,
							py: 1.5,
							borderRadius: "8px",
							boxShadow: "0 6px 18px rgba(0, 198, 215, 0.3)",
							textTransform: "none",
							transition: "all 0.3s ease",
							"&:hover": {
								bgcolor: JW_BLUE,
								color: "#ffffff",
								transform: "translateY(-2px)",
								boxShadow: "0 10px 24px rgba(28, 46, 74, 0.25)",
							},
						}}>
						View All Services
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
