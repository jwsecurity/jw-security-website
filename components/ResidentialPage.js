"use client";
import {
	Box,
	Grid,
	Card,
	Button,
	Container,
	Typography,
	CardContent,
	useMediaQuery,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "./common/PageHero";
import ContactSection from "./common/ContactSection";
import { styled, alpha, useTheme } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import WindowIcon from "@mui/icons-material/Window";
import VerifiedIcon from "@mui/icons-material/Verified";
import KeyIcon from "@mui/icons-material/Key";
import EmergencyIcon from "@mui/icons-material/Emergency";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

export default function ResidentialPage() {
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
			title: "Residential Locksmith",
			icon: <LockIcon />,
			desc: "Residential locksmith London services for homes, flats, landlords, tenants, and residential blocks that need lock changes, repairs, access help, or security upgrades.",
			link: "/services/locksmith",
		},
		{
			title: "Lock Replacement",
			icon: <LockOpenIcon />,
			desc: "Lock replacement and lock change services for new homeowners, landlords, tenant changes, lost keys, damaged locks, and doors that no longer feel secure.",
			link: "/services/lock-replacement",
		},
		{
			title: "Window Lock Fitting",
			icon: <WindowIcon />,
			desc: "Window lock fitting London services for homes, flats, rental properties, and residential blocks that need stronger window security.",
			link: "/services/locks-and-safes",
		},
		{
			title: "BS3621 Locks",
			icon: <VerifiedIcon />,
			desc: "BS3621 locks London fitting for suitable doors where insurance approved locks or stronger door security may be needed.",
			link: "/services/locks-and-safes",
		},
		{
			title: "Emergency Door Opening",
			icon: <EmergencyIcon />,
			desc: "Fast help for house lockouts, flat lockouts, failed locks, lost keys, and urgent access problems across London and Surrey.",
			link: "/services/emergency-door-opening",
		},
		{
			title: "Key Cutting And Key Control",
			icon: <KeyIcon />,
			desc: "Key cutting, duplicate keys, registered keys, and restricted key options for homeowners, landlords, and managed residential properties.",
			link: "/services/key-cutting",
		},
	];

	const whyChooseUs = [
		"Residential locksmith support across London and Surrey",
		"Lock replacement for homes, flats, landlords, and rental properties",
		"Window lock fitting for stronger window security",
		"BS3621 locks fitted where suitable for insurance or security needs",
		"Emergency access help for lockouts and failed locks",
		"Key cutting and key control options available",
		"Support for homeowners, landlords, tenants, and managing agents",
		"Clear quotes before planned work begins",
	];

	const faqData = [
		{
			question: "Do You Provide Residential Locksmith Services In London?",
			answer:
				"Yes. JW Security provides residential locksmith London services for homes, flats, landlords, tenants, and residential blocks.",
		},
		{
			question: "Can You Fit Window Locks?",
			answer:
				"Yes. We provide window lock fitting London services for homes, flats, rental properties, and residential buildings that need stronger window security.",
		},
		{
			question: "Do You Fit BS3621 Locks In London?",
			answer:
				"Yes. We fit BS3621 locks London where suitable for the door type and security requirement.",
		},
		{
			question: "Can You Change Locks After Moving House?",
			answer:
				"Yes. We can change locks after moving into a new home, tenant move out, lost keys, or any concern about who may still have a copy.",
		},
		{
			question: "Do You Help With Flat And House Lockouts?",
			answer:
				"Yes. We provide emergency access help for house lockouts, flat lockouts, failed locks, and lost keys.",
		},
		{
			question: "Do You Work With Landlords And Managing Agents?",
			answer:
				"Yes. We work with landlords, letting agents, managing agents, and residential block managers across London and Surrey.",
		},
		{
			question: "What Areas Do You Cover?",
			answer:
				"We cover London, Surrey, and surrounding areas. Call us if you want to confirm your location.",
		},
	];

	return (
		<>
			<PageHero
				title="Residential Locksmith And Security Services In London"
				subtitle="Residential locksmith, lock replacement, window lock fitting, BS3621 locks, and home security services for houses, flats, landlords, and residential blocks across London and Surrey."
				backgroundImage="/images/jw/locksmith.webp"
				minHeight="40vh"
				centerContent
			/>

			{/* Intro Section */}
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
									src="/images/jw/residential.webp"
									alt="Residential security services"
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
									Security Support For Homes And Residential Properties
								</SectionTitle>
								<Typography
									paragraph
									sx={{
										my: 2.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									JW Security works with homeowners, landlords, tenants, and
									managing agents who need reliable residential locksmith and
									security work across London and Surrey.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									We help with lock changes, door security, window lock fitting,
									BS3621 locks, key control, emergency access, and wider home
									security improvements. Some jobs are urgent, such as a failed
									lock or lost keys. Others are planned, such as upgrading locks
									after moving into a new property or improving access control
									in a residential block.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									Whether you manage one flat, a family home, or several rental
									properties, we help make access safer, simpler, and easier to
									manage.
								</Typography>
							</motion.div>
						</Box>
					</Box>
				</Container>
			</Section>

			{/* Services Grid */}
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
							Residential Security Services We Provide
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
													Learn More
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

			{/* Home Locks, Window Security Section */}
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
									Home Locks, Window Security, And Safer Access
								</SectionTitle>
								<Typography
									paragraph
									sx={{
										my: 2.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									Residential security is not only about the front door. Rear
									doors, side gates, windows, communal entrances, shared
									corridors, and key control all matter.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									JW Security provides residential locksmith services in London
									for properties that need safer access and better day to day
									security. We can help with lock replacement, BS3621 locks,
									window lock fitting, door hardware, key cutting, and urgent
									access issues.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									For landlords and managing agents, we also support tenant
									changes, lock changes, communal door problems, and residential
									block security needs.
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
									alt="Residential lock installation"
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

			{/* Why Choose Us Section */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box sx={{ p: 3 }}>
								<SectionTitle variant="h4">
									Why Residential Clients Choose JW Security
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, opacity: 0.9, fontSize: "1.05rem", lineHeight: 1.7 }}>
									We work with homeowners, landlords, tenants, and managing
									agents who need residential security they can rely on.
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
									{whyChooseUs.map((feature, index) => (
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

			{/* FAQ Section */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Box sx={{ textAlign: "center", mb: 6 }}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							variants={fadeInUpVariants}>
							<Typography
								variant="h3"
								component="h2"
								sx={{
									fontWeight: 700,
									fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
									color: JW_BLUE,
									mb: 2,
								}}>
								Common Questions
							</Typography>
							<Typography
								sx={{
									maxWidth: "700px",
									mx: "auto",
									mt: 2,
									color: alpha("#000", 0.6),
									fontSize: "1.05rem",
								}}>
								Answers to frequently asked questions about our residential
								security services in London
							</Typography>
						</motion.div>
					</Box>
					<Box
						sx={{
							"maxWidth": "900px",
							"mx": "auto",
							"& .MuiAccordion-root": {
								"bgcolor": "white",
								"borderRadius": "8px",
								"boxShadow": "0 5px 20px rgba(0,0,0,0.05)",
								"&:not(:last-child)": {
									mb: 2,
								},
								"&:before": {
									display: "none",
								},
							},
							"& .MuiAccordionSummary-root": {
								px: 3,
								py: 1.5,
							},
							"& .MuiAccordionDetails-root": {
								px: 3,
								py: 2,
								borderTop: `1px solid ${alpha("#000", 0.08)}`,
							},
						}}>
						{faqData.map((faq, index) => (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.1 }}
								variants={fadeInUpVariants}
								transition={{ delay: index * 0.1 }}>
								<Accordion
									disableGutters
									elevation={0}
									sx={{
										"overflow": "hidden",
										"transition": "all 0.3s ease",
										"&:hover": {
											boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
										},
									}}>
									<AccordionSummary
										expandIcon={
											<ExpandMoreIcon sx={{ color: JW_CYAN }} />
										}>
										<Typography
											sx={{
												fontWeight: 600,
												color: JW_BLUE,
												fontSize: "1rem",
											}}>
											{faq.question}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography
											sx={{
												color: alpha("#000", 0.7),
												lineHeight: 1.7,
											}}>
											{faq.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</motion.div>
						))}
					</Box>
				</Container>
			</Box>

			{/* CTA Parallax Banner */}
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
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInLeftVariants}>
								<Typography
									variant="overline"
									sx={{
										color: "white",
										fontWeight: 700,
										mb: 1,
										display: "block",
									}}>
									Need Help With Your Home Security?
								</Typography>
								<Typography
									variant="h3"
									sx={{ fontWeight: 800, mb: 3, color: "white" }}>
									JW Security supports homes, flats, rental properties, and
									residential blocks across London with planned locksmith work,
									urgent access help, and home security improvements.
								</Typography>
								<Typography
									variant="h6"
									sx={{ mb: 4, fontWeight: 400, opacity: 0.9, color: "white" }}>
									Tell us what type of property you have and what needs
									attention. We can provide a quote or arrange a visit where
									needed.
								</Typography>
								<Link
									href="/quote"
									passHref>
									<Button
										component="span"
										variant="contained"
										size="large"
										sx={{
											"bgcolor": JW_CYAN,
											"color": JW_BLUE,
											"fontWeight": 600,
											"px": 4,
											"py": 1.5,
											"fontSize": "1rem",
											"borderRadius": "6px",
											"textTransform": "none",
											"boxShadow": "0 5px 15px rgba(0, 198, 215, 0.3)",
											"&:hover": {
												bgcolor: alpha(JW_CYAN, 0.9),
												boxShadow: "0 8px 25px rgba(0, 198, 215, 0.4)",
												transform: "translateY(-3px)",
											},
											"transition": "all 0.3s ease",
										}}>
										Request A Quote
									</Button>
								</Link>
							</motion.div>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Contact Section */}
			<ContactSection
				title="Need Residential Security Support?"
				subtitle="JW Security provides residential locksmith, lock replacement, window lock fitting, BS3621 locks, and home security services for houses, flats, landlords, and residential blocks across London and Surrey."
			/>
		</>
	);
}
