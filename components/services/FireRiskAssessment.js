"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	Button,
	Accordion,
	useMediaQuery,
	AccordionDetails,
	AccordionSummary,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import PageHero from "../common/PageHero";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, alpha, useTheme } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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

export default function FireRiskAssessment() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const lockProducts = [
		{
			title: "Escape Routes",
			description:
				"We review exits, corridors, stairwells, communal areas, and routes people may need to use during an emergency.",
		},
		{
			title: "Fire Doors And Separation",
			description:
				"We check visible fire door issues, compartmentation concerns, door closers, seals, gaps, and areas where fire or smoke could spread.",
		},
		{
			title: "Alarms, Lighting, And Signage",
			description:
				"We look at fire alarm provision, emergency lighting, warning signs, and safety information where relevant to the building.",
		},
		{
			title: "Hazards And Building Use",
			description:
				"We review common fire risks linked to storage, electrics, waste, kitchens, tenant behaviour, business use, and shared areas.",
		},
	];

	const faqData = [
		{
			question: "Do You Provide Fire Risk Assessment In London?",
			answer:
				"Yes. JW Security provides fire risk assessment in London for landlords, HMOs, businesses, managed buildings, residential blocks, offices, shops, and commercial premises.",
		},
		{
			question: "How Much Does A Fire Risk Assessment Cost In London?",
			answer:
				"Fire risk assessment cost in London depends on the property type, size, layout, access areas, and level of detail needed. We provide a quote before the assessment.",
		},
		{
			question: "Do You Offer Fire Risk Assessment For HMOs In London?",
			answer:
				"Yes. We provide fire risk assessment HMO London services for landlords and property managers with shared residential properties.",
		},
		{
			question: "What Is Included In A Fire Risk Assessment?",
			answer:
				"It may include escape routes, fire doors, alarms, emergency lighting, signage, hazards, communal areas, storage, electrical risks, and building use.",
		},
		{
			question: "Do I Need A Fire Risk Assessment For A Rental Property?",
			answer:
				"If you are responsible for a rental property, HMO, managed block, or shared building, a fire risk assessment may be needed to support fire safety duties.",
		},
		{
			question: "Will I Receive A Written Report?",
			answer:
				"Yes. You receive a written report with findings and recommended actions after the assessment.",
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
			title: "Property Review",
			description:
				"We confirm the building type, layout, use, access areas, and any known fire safety concerns before starting.",
		},
		{
			title: "On Site Assessment",
			description:
				"We inspect escape routes, fire doors, alarms, lighting, signage, hazards, shared areas, and visible safety issues.",
		},
		{
			title: "Findings And Report",
			description:
				"You receive a written report with findings, risk points, and recommended actions based on what was seen during the visit.",
		},
		{
			title: "Next Steps",
			description:
				"If remedial work is needed, we can explain what should be handled first and where specialist work may be required.",
		},
	];

	return (
		<>
			<PageHero
				title="Fire Risk Assessment In London"
				subtitle="Fire risk assessment in London for landlords, businesses, HMOs, managing agents, residential blocks, and commercial properties that need fire hazards checked and reported clearly."
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
									src="/images/jw/fireriskassessments.png"
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
									Fire Risk Assessments For London Properties
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									A fire risk assessment is not just a box ticking task. It
									looks at how a building is used, who is inside it, where fire
									hazards may exist, and whether the current safety measures are
									enough.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security provides fire risk assessment in London for
									landlords, managing agents, businesses, HMOs, residential
									blocks, shops, offices, and commercial premises.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									We check key areas such as escape routes, fire doors, alarms,
									lighting, signage, communal spaces, electrical risks, storage
									areas, and anything else that may affect fire safety.
								</Typography>
								<Typography
									paragraph
									sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
									After the visit, you receive findings and recommendations so
									you know what should be dealt with first.
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
							What We Check
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
								<SectionTitle variant="h4">
									Fire Risk Assessment Cost In London
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Fire risk assessment cost in London depends on the type of
									property, size of the building, number of floors, access
									areas, and how detailed the report needs to be.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									A small shop or office will usually be simpler to assess than
									a large HMO, residential block, warehouse, or mixed use
									building.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security provides a quote before the assessment begins, so
									you understand what is included and what the visit will cover.
								</Typography>
							</motion.div>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={fadeInUpVariants}>
								<Box
									component="img"
									src="/images/jw/firedoorinspection.png"
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

			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Fire Risk Assessment For HMOs In London
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								HMOs need careful fire safety checks because several people may
								live in the same property, often with shared kitchens, shared
								corridors, and individual rooms.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								JW Security provides fire risk assessment HMO London services
								for landlords and property managers who need fire hazards
								reviewed across shared living spaces.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								We look at escape routes, fire doors, alarms, emergency
								lighting, communal areas, kitchens, storage, and other areas
								that may affect resident safety.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								The aim is to give landlords a clear report that helps them
								understand what needs attention.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/pexels-life-of-pix-8092-scaled.webp"
								alt="Fire safety inspection"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
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
							Our Fire Risk Assessment Process
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
										"HMOs",
										"Landlord properties",
										"Residential blocks",
										"Offices",
										"Shops",
										"Warehouses",
										"Commercial premises",
										"Mixed use buildings",
										"Managed buildings",
										"Shared communal areas",
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
								<SectionTitle variant="h4">
									Why Choose JW Security?
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
									We understand the fire safety issues that appear in real
									buildings, from blocked escape routes and damaged fire doors
									to poor signage, missing checks, and unclear responsibilities.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Our team gives findings in plain language, so you are not left
									guessing what the report means.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									If something needs urgent attention, we will say so. If
									something can be planned, we will explain that too.
								</Typography>
							</motion.div>
						</Grid>
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
