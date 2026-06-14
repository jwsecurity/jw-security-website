"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Button,
	Accordion,
	useMediaQuery,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import PageHero from "../common/PageHero";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, alpha, useTheme } from "@mui/material/styles";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));
import ContactSection from "../common/ContactSection";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const DecorativeLine = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "3px",
	backgroundColor: JW_CYAN,
	margin: "0 0 16px 0",
}));

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

const ProductCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"display": "flex",
	"flexDirection": "column",
	"transition": "transform 0.3s, box-shadow 0.3s",
	"overflow": "hidden",
	"borderRadius": "8px",
	"boxShadow": "0 4px 15px rgba(0,0,0,0.08)",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
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

export default function FireDoorInstallationInLondonPage() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const lockProducts = [
		{
			title: "Internal Fire Doors",
			description:
				"Fire door installation for flats, offices, corridors, communal areas, plant rooms, and internal building routes.",
			image:
				"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
		},
		{
			title: "Fire Door Frames",
			description:
				"Frame checks, adjustments, and replacement where the existing frame is damaged, unsuitable, or cannot support the new door correctly.",
			image:
				"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
		},
		{
			title: "Closers And Hinges",
			description:
				"Correct fitting of fire door closers, hinges, latches, and related hardware so the door closes and latches as it should.",
			image:
				"https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
		},
		{
			title: "Seals And Ironmongery",
			description:
				"Intumescent strips, smoke seals, handles, locks, signage, and compatible fire rated fittings where required.",
			image:
				"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
		},
	];

	const faqData = [
		{
			question: "Do You Provide Fire Door Installation In London?",
			answer:
				"Yes. JW Security provides fire door installation in London for homes, landlords, HMOs, managed buildings, offices, shops, and commercial premises.",
		},
		{
			question: "Do You Offer Fire Door Supply And Fit In London?",
			answer:
				"Yes. We can supply and fit fire doors, including suitable frames, closers, hinges, seals, and ironmongery where needed.",
		},
		{
			question: "How Much Does Fire Door Installation Cost In London?",
			answer:
				"Fire door installation cost in London depends on the door type, frame condition, fittings, and number of doors. We provide a quote before work begins.",
		},
		{
			question: "Can You Replace An Existing Fire Door?",
			answer:
				"Yes. We can replace damaged, worn, or unsuitable fire doors and check whether the existing frame and fittings are suitable.",
		},
		{
			question: "Do You Work With Landlords And Managing Agents?",
			answer:
				"Yes. We work with landlords, managing agents, HMOs, residential blocks, and commercial properties across London and Surrey.",
		},
		{
			question: "What Areas Do You Cover?",
			answer:
				"We cover London, Surrey, and surrounding areas. Call us if you want to confirm your location.",
		},
	];

	const fadeInUpVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const installationProcess = [
		{
			title: "Site Check",
			description:
				"We inspect the opening, existing frame, door use, and surrounding area before recommending the right fire door setup.",
		},
		{
			title: "Door Selection",
			description:
				"Fire door installation for flats, offices, corridors, communal areas, plant rooms, and internal building routes.",
		},
		{
			title: "Supply And Fit",
			description:
				"Our team supplies and fits the fire door, checks the swing, gaps, latch, closer action, and final finish.",
		},
		{
			title: "Final Checks",
			description:
				"Once fitted, we check that the door opens, closes, and latches correctly, with the required fittings in place.",
		},
	];

	return (
		<>
			<PageHero
				title="Fire Door Installation In London"
				subtitle="Fire door supply and fit in London for homes, landlords, businesses, HMOs, managed buildings, and commercial premises that need safer, compliant doors installed with care."
				backgroundImage="/images/jw/small-locksmiths-workshop-with-ancient-tools.webp"
				minHeight="45vh"
				centerContent={true}
			/>
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUpVariants}>
								<Box
									component="img"
									src="/images/jw/fire-door-installation-in-london.webp"
									alt="Fire Door Installation In London"
									sx={{
										width: "100%",
										height: "auto",
										borderRadius: "10px",
										boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
									}}
								/>
							</motion.div>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUpVariants}>
								<SectionTitle variant="h4">
									Fire Door Supply And Fit For London Properties
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									A fire door only works as intended when the door, frame, hinges,
									closer, seals, gaps, and ironmongery are fitted correctly.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security provides fire door installation in London for
									residential blocks, offices, shops, HMOs, landlord properties,
									and commercial buildings. We fit new fire doors where existing
									doors are damaged, unsuitable, or no longer able to meet the
									standard expected for the building.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Some jobs involve replacing one internal fire door. Others
									involve several doors across shared corridors, plant rooms,
									stairwells, offices, or managed buildings.
								</Typography>
								<Typography
									paragraph
									sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
									Before anything is fitted, we check the opening, measure the
									frame, look at the door location, and explain what is needed for
									a suitable installation.
								</Typography>
							</motion.div>
						</Grid>
					</Grid>
				</Container>
			</Box>
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
							What We Install
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
						{lockProducts.map((item, index) => (
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
										"backgroundColor": "white",
										"borderRadius": "10px",
										"overflow": "hidden",
										"boxShadow": "0 2px 10px rgba(0,0,0,0.05)",
										"transition": "all .3s ease",
										"&:hover": {
											transform: "translateY(-5px)",
											boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
										},
									}}>
									<Box
										component="img"
										src={item.image}
										alt={item.title}
										sx={{
											width: "100%",
											height: { xs: 220, md: 180 },
											objectFit: "cover",
											display: "block",
										}}
									/>
									<Box
										sx={{
											p: 3,
											display: "flex",
											flexDirection: "column",
											height: "calc(100% - 180px)",
										}}>
										<Typography
											variant="h6"
											component="h3"
											sx={{
												fontWeight: 700,
												color: "#1A233C",
												fontSize: "1.15rem",
												mb: 1.5,
												lineHeight: 1.3,
											}}>
											{item.title}
										</Typography>

										<Typography
											sx={{
												fontSize: "0.95rem",
												lineHeight: 1.7,
												color: "#555",
												flexGrow: 1,
											}}>
											{item.description}
										</Typography>
									</Box>
								</Box>
							</motion.div>
						))}
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
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUpVariants}>
								<Box
									component="img"
									src="/images/jw/firedoor-installation.webp"
									alt="Ancient tools"
									sx={{
										width: "100%",
										height: "auto",
										borderRadius: "10px",
										boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
									}}
								/>
							</motion.div>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUpVariants}>
								<SectionTitle variant="h4">
									Fire Door Installation Cost In London
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									The fire door installation cost in London depends on the door
									type, frame condition, hardware needed, site access, and whether
									the job is a single door or multiple doors.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									A simple replacement may cost less if the frame is already
									suitable. A more involved job may need frame work, new
									ironmongery, seals, closer fitting, or adjustments to the
									opening.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security provides a clear quote before work begins, so you
									know what is included and why.
								</Typography>
							</motion.div>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<CTABanner sx={{ py: 8 }}>
				<Container>
					<Typography
						variant="h3"
						sx={{ fontWeight: 800, mb: 3 }}>
						SCHEDULE A{" "}
						<Box
							component="span"
							sx={{ color: "white" }}>
							FREE
						</Box>{" "}
						SECURITY QUOTE
					</Typography>
					<Typography
						variant="h6"
						sx={{ mb: 4, color: "white", opacity: 0.9 }}>
						Join hundreds of local residents who trust JW Security for their
						peace of mind.
					</Typography>
					<Button
						variant="contained"
						size="large"
						href="/contact"
						sx={{
							"fontWeight": 900,
							"px": 6,
							"py": 2,
							"fontSize": "1.1rem",
							"bgcolor": JW_BLUE,
							"color": "white",
							"&:hover": { bgcolor: "white", color: JW_BLUE },
						}}>
						CALL US TODAY: 0208 646 7931
					</Button>
				</Container>
			</CTABanner>

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
							Our Installation Process
						</Typography>
					</motion.div>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								sm: "1fr 1fr",
								md: "1fr 1fr 1fr 1fr",
							},
							gap: 3,
						}}>
						{installationProcess.map((item, index) => (
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
										"backgroundColor": "white",
										"borderRadius": "10px",
										"overflow": "hidden",
										"boxShadow": "0 2px 10px rgba(0,0,0,0.05)",
										"transition": "all .3s ease",
										"&:hover": {
											transform: "translateY(-5px)",
											boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
										},
									}}>
									<Box
										sx={{
											p: 3,
											display: "flex",
											flexDirection: "column",
											height: "calc(100% - 180px)",
										}}>
										<Typography
											variant="h6"
											component="h3"
											sx={{
												fontWeight: 700,
												color: "#1A233C",
												fontSize: "1.15rem",
												mb: 1.5,
												lineHeight: 1.3,
											}}>
											{item.title}
										</Typography>

										<Typography
											sx={{
												fontSize: "0.95rem",
												lineHeight: 1.7,
												color: "#555",
												flexGrow: 1,
											}}>
											{item.description}
										</Typography>
									</Box>
								</Box>
							</motion.div>
						))}
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
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUpVariants}>
								<Box
									component="img"
									src="/images/jw/locksmith.webp"
									alt="Fire Door Installation In London"
									sx={{
										width: "100%",
										height: "auto",
										borderRadius: "10px",
										boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
									}}
								/>
							</motion.div>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUpVariants}>
								<SectionTitle variant="h4">
									Why Choose JW Security As Your Fire Door Installer?
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security works with landlords, managing agents, businesses,
									and property teams across London and Surrey.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									We understand that fire door installation is not just about
									hanging a door. The frame, closer, hinges, seals, gaps, signage,
									and hardware all matter.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Our team carries out fire door supply and fit work with
									attention to the details that affect performance, safety, and
									long term use.
								</Typography>
							</motion.div>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Section odd>
				<Container maxWidth="xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUpVariants}>
						<Box sx={{ textAlign: "center", mb: 6 }}>
							<DecorativeLine sx={{ mx: "auto", mb: 2.5 }} />
							<Typography
								variant="h3"
								component="h2"
								sx={{
									fontWeight: 700,
									fontSize: { xs: "2.2rem", md: "2.5rem" },
									color: JW_BLUE,
								}}>
								Frequently Asked Questions
							</Typography>
							<Typography
								sx={{
									maxWidth: "700px",
									mx: "auto",
									mt: 2,
									color: alpha("#000", 0.6),
									fontSize: "1.05rem",
								}}>
								Get answers to common questions about our premium security
								services
							</Typography>
						</Box>
					</motion.div>
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
											<ExpandMoreIcon
												sx={{
													color: JW_CYAN,
													fontSize: 28,
												}}
											/>
										}>
										<Typography sx={{ fontWeight: 600, color: JW_BLUE }}>
											{faq.question}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography
											sx={{ color: alpha("#000", 0.7), lineHeight: 1.7 }}>
											{faq.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</motion.div>
						))}
					</Box>
				</Container>
			</Section>

			<ContactSection />
		</>
	);
}
