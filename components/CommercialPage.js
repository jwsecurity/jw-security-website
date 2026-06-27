"use client";
import {
	Box,
	Grid,
	Button,
	Container,
	Typography,
	useMediaQuery,
	ListItem,
	ListItemIcon,
	ListItemText,
	List,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "./common/PageHero";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SecurityIcon from "@mui/icons-material/Security";
import VideocamIcon from "@mui/icons-material/Videocam";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { styled, alpha, useTheme } from "@mui/material/styles";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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

const Section = styled(Box, {
	shouldForwardProp: (prop) => prop !== "odd",
})(({ theme, odd = true }) => ({
	padding: theme.spacing(10, 0),
	backgroundColor: odd ? theme.palette.grey[100] : "white",
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(6, 0),
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(4, 0),
	},
}));

export default function CommercialPage() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const fadeInLeftVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, x: -30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const fadeInRightVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, x: 30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const fadeInUpVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const services = [
		{
			title: "Access Control And Alarms",
			icon: <SecurityIcon />,
			desc: "Access control installation in London for offices, schools, estates, shared buildings, and commercial premises that need better entry management.",
			link: "/services/security",
		},
		{
			title: "CCTV Systems",
			icon: <VideocamIcon />,
			desc: "CCTV installation and maintenance for commercial sites that need better visibility, recording, and day to day monitoring.",
			link: "/services/security",
		},
		{
			title: "Fire Doors And Compliance",
			icon: <WarningAmberIcon />,
			desc: "Fire door inspection, installation, maintenance, and compliance support for commercial buildings, landlords, and managing agents.",
			link: "/services/fire-protection",
		},
		{
			title: "Shutters, Gates And Grilles",
			icon: <DoorFrontIcon />,
			desc: "Physical security work for shopfronts, plant rooms, service entrances, storage areas, and other vulnerable commercial access points.",
			link: "/services/shutters-gates-grilles",
		},
		{
			title: "Master Key Systems",
			icon: <VpnKeyIcon />,
			desc: "Master key systems for landlords, schools, offices, facilities teams, and managed buildings that need controlled key access.",
			link: "/services/locks-and-safes",
		},
		{
			title: "Emergency Response",
			icon: <AccessTimeIcon />,
			desc: "Urgent help for commercial lockouts, forced entry damage, failed locks, and emergency securing across London.",
			link: "/services/emergency-door-opening",
		},
	];

	return (
		<>
			<PageHero
				title="Commercial Security Services In London"
				subtitle="Commercial locksmith, access control, CCTV, fire door, and emergency security services for offices, schools, estates, NHS sites, managing agents, and commercial premises across London."
				backgroundimage="/images/jw/security-camera.webp"
				minHeight="40vh"
				centerContent
			/>
			<Section odd>
				<Container maxWidth="xl">
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column-reverse", sm: "row" },
							alignItems: "center",
							gap: { xs: 4, sm: 5, md: 6 },
						}}>
						<Box
							sx={{
								width: { xs: "100%", sm: "40%", md: "45%" },
								flex: { xs: "1 1 auto", sm: "0 0 40%", md: "0 0 45%" },
							}}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInLeftVariants}>
								<Image
									src="/images/jw/locksmith.webp"
									alt="Locksmith repairing door lock"
									width={465}
									height={310}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="w-full h-full object-cover rounded-lg shadow-lg"
								/>
							</motion.div>
						</Box>
						<Box
							sx={{
								width: { xs: "100%", sm: "60%", md: "50%" },
								flex: { xs: "1 1 auto", sm: "0 0 60%", md: "0 0 50%" },
							}}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInRightVariants}>
								<SectionTitle
									variant="h3"
									component="h2"
									sx={{
										"textAlign": "left",
										"&::after": { left: 0, transform: "none" },
										"fontSize": { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
										"mb": 3,
									}}>
									Security Support For Commercial Sites
								</SectionTitle>
								<Typography
									paragraph
									sx={{
										my: 2.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									JW Security works with offices, schools, estates, NHS sites,
									managing agents, landlords, and commercial premises that need
									reliable security work across London and Surrey.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									Our team handles commercial locksmith work, commercial lock
									change jobs, access control installation, CCTV systems, fire
									door services, master key systems, and urgent response for
									buildings that cannot afford weak access points or delays.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									Whether you manage one office, a school site, a residential
									estate, or multiple commercial properties, we help keep access
									safer, easier to control, and better suited to daily use.
								</Typography>
							</motion.div>
						</Box>
					</Box>
				</Container>
			</Section>
			<Section
				odd
				sx={{ py: { xs: 6, md: 8 } }}>
				<Container maxWidth="xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUpVariants}>
						<Typography
							variant="h3"
							component="h2"
							sx={{
								textAlign: "center",
								mb: { xs: 5, md: 7 },
								fontWeight: 700,
								fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
								color: "#1c2e4a",
							}}>
							Commercial Security Services We Provide
						</Typography>
					</motion.div>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								sm: "1fr 1fr",
								md: "1fr 1fr 1fr",
							},
							gap: 3,
						}}>
						{services.map((item, index) => (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.1 }}
								variants={fadeInUpVariants}
								transition={{ delay: index * 0.1 }}>
								<Box
									sx={{
										"height": "100%",
										"width": "100%",
										"backgroundColor": "white",
										"borderRadius": "10px",
										"boxShadow": "0 2px 10px rgba(0,0,0,0.05)",
										"transition": "transform 0.3s ease, box-shadow 0.3s ease",
										"overflow": "hidden",
										"&:hover": {
											transform: "translateY(-5px)",
											boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
										},
									}}>
									<Box
										sx={{
											p: { xs: 3, sm: 3.5 },
											display: "flex",
											flexDirection: "column",
											height: "100%",
										}}>
										<Box
											sx={{ mb: 2.5, display: "flex", alignItems: "center" }}>
											<Box
												sx={{
													color: "#00c6d7",
													mr: 2,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
												}}>
												{item.icon
													? React.cloneElement(item.icon, {
															sx: { fontSize: 32 },
														})
													: null}
											</Box>
											<Typography
												variant="h6"
												component="h3"
												sx={{
													fontWeight: "600",
													color: "#1A233C",
													fontSize: "1.15rem",
													lineHeight: 1.3,
												}}>
												{item.title}
											</Typography>
										</Box>
										<Typography
											sx={{
												fontSize: { xs: "1rem", md: "0.95rem" },
												lineHeight: 1.65,
												color: "#555",
												mb: 2.5,
												flexGrow: 1,
											}}>
											{item.desc}
										</Typography>
										<Box sx={{ mt: "auto" }}>
											<Link
												href={item.link}
												aria-label={`Learn more about ${item.title}`}
												passHref>
												<Button
													component="span"
													sx={{
														"color": "#007bff",
														"fontWeight": 500,
														"textTransform": "none",
														"fontSize": "0.95rem",
														"padding": 0,
														"minWidth": "auto",
														"textAlign": "left",
														"&:hover": {
															backgroundColor: "transparent",
															textDecoration: "underline",
															color: "#0056b3",
														},
													}}>
													See Details
												</Button>
											</Link>
										</Box>
									</Box>
								</Box>
							</motion.div>
						))}
					</Box>
				</Container>
			</Section>
			<Section odd>
				<Container maxWidth="xl">
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column-reverse", sm: "row" },
							alignItems: "center",
							gap: { xs: 4, sm: 5, md: 6 },
						}}>
						<Box
							sx={{
								width: { xs: "100%", sm: "60%", md: "50%" },
								flex: { xs: "1 1 auto", sm: "0 0 60%", md: "0 0 50%" },
							}}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInRightVariants}>
								<SectionTitle
									variant="h3"
									component="h2"
									sx={{
										"textAlign": "left",
										"&::after": { left: 0, transform: "none" },
										"fontSize": { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
										"mb": 3,
									}}>
									Commercial Locksmith And Access Control Work
								</SectionTitle>
								<Typography
									paragraph
									sx={{
										my: 2.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									Commercial sites need security that works around real use.
									Staff need access. Visitors may need controlled entry.
									Contractors may need limited access. Managers need a way to
									keep the site secure without handing out keys that cannot be
									tracked.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									JW Security provides commercial locksmith services in London
									for businesses, landlords, schools, estates, and managed
									buildings. This includes commercial lock change work, master
									key systems, access control installation, and urgent help when
									a lock, door, or entry point becomes a problem.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									We look at how the site is used before recommending the next
									step. Sometimes that means changing a lock. Sometimes it means
									setting up controlled entry. Sometimes it means improving
									several weak points across the building.
								</Typography>
							</motion.div>
						</Box>
						<Box
							sx={{
								width: { xs: "100%", sm: "40%", md: "45%" },
								flex: { xs: "1 1 auto", sm: "0 0 40%", md: "0 0 45%" },
							}}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInLeftVariants}>
								<Image
									src="/images/jw/locksmith-in-installing-new-house-door-lock-hand-holds-the-screwdriver.webp"
									alt="Locksmith repairing door lock"
									width={465}
									height={310}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="w-full h-full object-cover rounded-lg shadow-lg"
								/>
							</motion.div>
						</Box>
					</Box>
				</Container>
			</Section>

			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box sx={{ p: 3 }}>
								<SectionTitle variant="h4">
									Who Needs A Fire Risk Assessment?
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, opacity: 0.9 }}>
									A fire risk assessment is important for properties where
									landlords, business owners, or managing agents have
									responsibility for fire safety.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, opacity: 0.9 }}>
									This includes:
								</Typography>
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{[
										"Commercial locksmith support across London and Surrey",
										"Access control installation for offices, schools, estates, and managed sites",
										"Commercial lock change work for staff changes, lost keys, or security concerns",
										"CCTV, alarms, fire doors, master key systems, and emergency response available",
										"Support for managing agents, landlords, facilities teams, and business owners",
										"Clear quotes before planned work begins",
									].map((feature, index) => (
										<ListItem
											key={index}
											sx={{ py: 0.8 }}>
											<ListItemIcon sx={{ minWidth: 35 }}>
												<CheckCircleOutlineIcon
													sx={{ color: JW_BLUE, fontSize: 20 }}
												/>
											</ListItemIcon>
											<ListItemText
												primary={feature}
												primaryTypographyProps={{
													fontWeight: 500,
													fontSize: "0.95rem",
												}}
											/>
										</ListItem>
									))}
								</List>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box
				sx={{
					py: 12,
					position: "relative",
					backgroundImage:
						'linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url("/images/jw/bunch-of-different-keys.webp")',
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
					color: "white",
				}}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 8 }}>
							<Typography
								variant="overline"
								sx={{
									color: "white",
									fontWeight: 700,
									mb: 1,
									display: "block",
								}}>
								Need A Proposal For Your Site?
							</Typography>
							<Typography
								variant="h3"
								sx={{ fontWeight: 800, mb: 3, color: "white" }}>
								JW Security supports commercial properties across London with
								planned security work, urgent locksmith support, commercial lock
								change services, and access control installation.
							</Typography>
							<Typography
								variant="h6"
								sx={{ mb: 4, fontWeight: 400, opacity: 0.9, color: "white" }}>
								Tell us what type of site you manage and what needs attention.
								We can provide a quote or arrange a visit where needed.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
