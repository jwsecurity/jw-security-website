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

export default function FireDoorInspection() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const lockProducts = [
		{
			title: "Door Gaps And Alignment",
			description:
				"We check whether the door sits correctly in the frame, closes fully, and has suitable gaps around the edges.",
		},
		{
			title: "Closers And Latching",
			description:
				"We test whether the closer brings the door shut and whether the latch holds correctly when the door closes.",
		},
		{
			title: "Seals And Strips",
			description:
				"We inspect smoke seals, intumescent strips, and visible damage that may affect fire door performance.",
		},
		{
			title: "Hinges And Ironmongery",
			description:
				"We check hinges, handles, locks, signage, glazing, and other fitted hardware linked to the door set.",
		},
	];

	const faqData = [
		{
			question: "Do You Provide Fire Door Inspection In London?",
			answer:
				"Yes. JW Security provides fire door inspection in London for landlords, managing agents, HMOs, residential blocks, offices, shops, and commercial premises.",
		},
		{
			question: "What Is Included In A Fire Door Survey?",
			answer:
				"A fire door survey can include checks on door gaps, closers, latches, hinges, seals, signage, glazing, frame condition, and visible faults.",
		},
		{
			question: "Can You Help With Fire Door Compliance In London?",
			answer:
				"Yes. We check fire doors and explain any issues that may affect fire door compliance, along with the next steps to consider.",
		},
		{
			question: "Do You Inspect Fire Doors In Managed Buildings?",
			answer:
				"Yes. We inspect fire doors in managed buildings, shared corridors, communal entrances, stairwells, offices, and commercial sites.",
		},
		{
			question: "What Happens If A Fire Door Fails Inspection?",
			answer:
				"We explain the issue and advise whether the door needs adjustment, repair, replacement parts, or a full replacement.",
		},
		{
			question: "Do You Also Install Fire Doors?",
			answer:
				"Yes. If a door cannot be brought up to a suitable standard, JW Security can also help with fire door installation and supply and fit work.",
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
			title: "Site Review",
			description:
				"We confirm the number of doors, building type, access areas, and any known concerns before starting the inspection.",
		},
		{
			title: "Door By Door Check",
			description:
				"Each fire door is checked for fit, closer action, latching, gaps, seals, hinges, frame condition, and visible faults.",
		},
		{
			title: "Findings And Advice",
			description:
				"We explain what has been found in plain language, including which doors may need adjustment, repair, or replacement.",
		},
		{
			title: "Next Step Planning",
			description:
				"If remedial work is needed, we can advise on the most suitable next step without turning the inspection into a sales pitch.",
		},
	];

	return (
		<>
			<PageHero
				title="Fire Door Inspection In London"
				subtitle="Fire door inspection, fire door survey, and fire door compliance checks for landlords, managing agents, businesses, HMOs, and managed buildings across London and Surrey."
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
									src="/images/jw/Firedoorchecks.jpg"
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
									Fire Door Checks For London Buildings
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									A fire door can look fine at first glance and still fail the
									checks that matter.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									The gap may be too wide. The closer may not pull the door
									shut. Smoke seals may be damaged. Hinges may be loose. The
									frame may have moved over time.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security provides fire door inspection in London for
									landlords, managing agents, property teams, businesses, HMOs,
									residential blocks, and commercial buildings.
								</Typography>
								<Typography
									paragraph
									sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
									We check existing fire doors, record visible faults, explain
									what is not right, and advise what needs to happen next.
								</Typography>
								<Typography
									paragraph
									sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
									This page is not about selling new doors first. It is about
									checking what is already there and helping you understand
									whether your fire doors are doing the job they are meant to
									do.
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
									Fire Door Survey And Compliance Support
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									A fire door survey helps property owners understand the
									condition of fire doors across a building.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security carries out fire door surveys in London for single
									doors, shared corridors, communal areas, offices, plant rooms,
									stairwells, HMOs, and managed residential blocks.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									After the inspection, you get findings that show which doors
									appear suitable, which need adjustment, and which may need
									repair or replacement.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									This helps with fire door compliance in London without leaving
									you guessing what the next step should be.
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
								Common Fire Door Issues We Find
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								Fire door problems are often caused by daily use, poor fitting,
								damaged hardware, or parts wearing down over time.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								Common issues include:
							</Typography>
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
										"Doors not closing fully",
										"Gaps around the door being too wide",
										"Missing or damaged smoke seals",
										"Faulty closers",
										"Loose hinges",
										"Damaged frames",
										"Incorrect or missing signage",
										"Fire doors being wedged open",
										"Latches not holding properly",
										"Damaged glazing or panels",
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
							Our Fire Door Inspection Process
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
						alignItems="start">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box sx={{ p: 3 }}>
								<SectionTitle variant="h4">
									Who Needs Fire Door Inspection?
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, opacity: 0.9 }}>
									Fire door inspection is useful for properties where doors are
									part of the building’s fire safety setup.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 1, opacity: 0.9 }}>
									This includes:
								</Typography>
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<List
								sx={{
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								{[
									"Landlords",
									"Managing agents",
									"HMOs",
									"Residential blocks",
									"Offices",
									"Shops",
									"Commercial premises",
									"Schools and community buildings",
									"Shared corridors and stairwells",
									"Buildings with communal entrances",
								].map((feature, index) => (
									<ListItem
										key={index}
										sx={{ py: 0.2 }}>
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
									We understand the issues that appear in busy buildings,
									especially doors that are used all day by residents, staff,
									visitors, and contractors.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Our team checks the details that matter, including gaps,
									closers, seals, hinges, frames, latches, and visible damage.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									You get straightforward findings and advice on what should be
									handled first.
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
