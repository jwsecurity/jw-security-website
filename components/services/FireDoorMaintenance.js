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

export default function FireDoorMaintenance() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const lockProducts = [
		{
			title: "Fire Door Closers",
			description:
				"We repair, adjust, or replace faulty closers where doors do not close fully or shut too slowly.",
		},
		{
			title: "Hinges And Latching",
			description:
				"We check loose hinges, worn latches, damaged handles, and doors that do not catch properly when closed.",
		},
		{
			title: "Smoke Seals And Intumescent Strips",
			description:
				"We replace damaged or missing smoke seals and intumescent strips where needed.",
		},
		{
			title: "Door Gaps And Alignment",
			description:
				"We adjust doors that have dropped, shifted, or developed gaps that may affect fire door performance.",
		},
	];

	const faqData = [
		{
			question: "Do You Provide Fire Door Maintenance In London?",
			answer:
				"Yes. JW Security provides fire door maintenance in London for landlords, managing agents, businesses, HMOs, residential blocks, and commercial premises.",
		},
		{
			question: "Do You Offer Fire Door Repair In London?",
			answer:
				"Yes. We repair common fire door faults, including closers, hinges, latches, seals, gaps, dropped doors, and damaged hardware.",
		},
		{
			question: "What Fire Door Services Do You Provide?",
			answer:
				"Our fire door services in London include inspection, maintenance, repair, adjustment, seal replacement, closer work, and advice on replacement where needed.",
		},
		{
			question: "Can A Faulty Fire Door Be Repaired?",
			answer:
				"Often, yes. Many faults can be repaired if the door and frame are still suitable. If not, we will explain the reason clearly.",
		},
		{
			question: "Do You Maintain Fire Doors In Managed Buildings?",
			answer:
				"Yes. We work in managed buildings, HMOs, offices, shops, residential blocks, communal areas, stairwells, and commercial premises.",
		},
		{
			question: "How Often Should Fire Doors Be Maintained?",
			answer:
				"Busy buildings may need more frequent checks because doors are used heavily. We can advise based on the building type, usage, and condition of the doors.",
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
			title: "Fault Check",
			description:
				"We inspect the fire door, frame, closer, hinges, seals, latch, and visible hardware to understand the issue.",
		},
		{
			title: "Repair Advice",
			description:
				"We explain what can be repaired, what may need replacing, and whether the door can stay in use safely.",
		},
		{
			title: "Maintenance Work",
			description:
				"Our team carries out the agreed fire door repair or adjustment, using suitable parts where needed.",
		},
		{
			title: "Final Testing",
			description:
				"Once the work is complete, we check that the door closes, latches, and operates as expected.",
		},
	];

	return (
		<>
			<PageHero
				title="Fire Door Maintenance In London"
				subtitle="Fire door maintenance, fire door repair, and remedial fire door services in London for landlords, managing agents, businesses, HMOs, and managed buildings."
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
									src="/images/jw/firedoormaintenance.jpg"
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
									Fire Door Repairs And Maintenance For London Properties
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Fire doors take a lot of daily use. They get pulled, pushed,
									slammed, wedged open, and sometimes adjusted badly by people
									who do not understand how the door is meant to work.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Over time, closers weaken, hinges loosen, seals get damaged,
									latches stop catching, and gaps can open around the frame.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security provides fire door maintenance in London for
									properties where existing fire doors need repair, adjustment,
									or ongoing care. We work with landlords, managing agents,
									businesses, HMOs, residential blocks, and commercial buildings
									across London and Surrey.
								</Typography>
								<Typography
									paragraph
									sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
									Our aim is to deal with the fault before it turns into a
									bigger compliance or safety issue.
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
							What We Maintain And Repair
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
									Fire Door Services For Existing Doors
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Not every faulty fire door needs replacing. Many issues can be
									repaired if the door, frame, and hardware are still suitable.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									JW Security provides fire door repair in London for common
									problems such as worn closers, damaged seals, loose hinges,
									faulty latches, rubbing doors, dropped doors, and damaged
									frames.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									If a fire door cannot be brought back to a suitable standard,
									we will explain why and advise whether replacement may be the
									better option.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									No guesswork. No replacing parts without reason.
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
								Common Fire Door Problems We Fix
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								Fire door faults often start small, but they can affect how the
								door performs when it matters.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, opacity: 0.9 }}>
								Common repair and maintenance issues include:
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
										"Door not closing fully",
										"Door not latching properly",
										"Closer leaking, weak, or badly adjusted",
										"Loose or damaged hinges",
										"Missing smoke seals",
										"Damaged intumescent strips",
										"Door rubbing on the frame",
										"Gaps around the door becoming too wide",
										"Damaged handles, locks, or ironmongery",
										"Fire door being wedged open or damaged through daily use",
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
							Our Fire Door Maintenance Process
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
									Planned Fire Door Maintenance
								</SectionTitle>
								<Typography
									paragraph
									sx={{ mb: 2, opacity: 0.9 }}>
									Managed buildings, HMOs, offices, and commercial premises
									often need regular fire door checks and maintenance.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, opacity: 0.9 }}>
									A planned maintenance visit can help find worn closers,
									damaged seals, loose hinges, and latching problems before they
									become more serious.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, opacity: 0.9 }}>
									JW Security can help property teams keep existing fire doors
									in working condition with scheduled fire door services in
									London and Surrey.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 1, opacity: 0.9 }}>
									This is especially useful for busy buildings where doors are
									used all day by residents, staff, visitors, contractors, and
									cleaners.
								</Typography>
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/firedoormaintenance01.webp"
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
									We understand the small faults that cause bigger fire door
									problems over time, especially in shared corridors,
									stairwells, communal entrances, offices, shops, and managed
									buildings.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									Our team focuses on repair first where it makes sense. If
									replacement is needed, we will tell you why.
								</Typography>
								<Typography
									paragraph
									sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.7 }}>
									You get straightforward advice, careful repair work, and fire
									door maintenance carried out with the details in mind.
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
