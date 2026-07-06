"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import PageHero from "../common/PageHero";
import { styled, alpha, useTheme } from "@mui/material/styles";
import ContactSection from "../common/ContactSection";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));

const DecorativeLine = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "3px",
	backgroundColor: JW_CYAN,
	margin: "0 0 16px 0",
}));

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

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

export default function BurglaryRepairsPage() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const FeatureCard = styled(Card)(({ theme }) => ({
		"height": "100%",
		"padding": theme.spacing(3),
		"transition": "transform 0.3s, box-shadow 0.3s",
		"boxShadow": "0 4px 12px rgba(0,0,0,0.08)",
		"&:hover": {
			transform: "translateY(-5px)",
			boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
		},
	}));

	const fadeInUpVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const services = [
		{
			title: "Door Repairs",
			description:
				"Repairs for damaged doors, split frames, forced entry marks, broken hinges, and door hardware affected during a break in.",
		},
		{
			title: "Window Repairs",
			description:
				"Help with damaged windows, broken glazing, weak frames, and openings that need boarding or securing quickly.",
		},
		{
			title: "Lock Replacement",
			description:
				"Lock change after burglary for locks that have been forced, damaged, compromised, or no longer feel safe to use.",
		},
		{
			title: "Security Upgrades",
			description:
				"Extra security improvements for vulnerable doors, windows, and entry points after a burglary or attempted break in.",
		},
	];

	const benefits = [
		"Fast help for urgent burglary repair work",
		"Emergency boarding up in London where needed",
		"Lock change after burglary for damaged or compromised locks",
		"Repairs for doors, frames, windows, and entry points",
		"Security upgrades where the property needs stronger protection",
		"Clear advice before repair work begins",
	];

	const faqData = [
		{
			question: "Can You Help With Emergency Boarding Up In London?",
			answer:
				"Yes. We can help with emergency boarding up in London where windows, doors, or openings need to be secured quickly.",
		},
		{
			question: "Do You Offer Lock Change After Burglary In London?",
			answer:
				"Yes. We can carry out a lock change after burglary in London if the lock has been forced, damaged, or compromised.",
		},
		{
			question: "What Damage Can You Repair After A Break In?",
			answer:
				"We help with damaged doors, frames, locks, hinges, windows, glazing, and other entry points affected by forced access.",
		},
		{
			question: "Can You Secure The Property The Same Day?",
			answer:
				"Where possible, yes. We focus first on making the property safe and secure, then advising on any further repair work needed.",
		},
		{
			question: "Do You Work With Landlords And Businesses?",
			answer:
				"Yes. We work with homeowners, landlords, shops, offices, managing agents, and commercial premises across London and Surrey.",
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
				title="Burglary Repairs In London"
				subtitle="Urgent burglary repair in London for damaged doors, broken locks, forced entry damage, and properties that need securing after a break in."
				backgroundImage="/images/jw/locksmith-man-and-maintenance-handyman-with-home-renovation-and-fixing-change-door-locks-with.webp"
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
							<Box
								component="img"
								src="/images/jw/closeup-of-a-professional-locksmith-installing-a-new-lock-on-a-house-exterior-door-with-the-inside.webp"
								alt="Burglary repair service"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Professional Burglary Repair Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A break in can leave a property exposed. The door may not close
								properly. The frame may be split. A lock may be forced, damaged,
								or no longer safe to use.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides burglary repair in London for homes, shops,
								offices, landlords, and managed buildings that need urgent
								repair work after forced entry or attempted access.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								We deal with damaged doors, broken locks, weak frames, damaged
								windows, and entry points that need securing quickly. If the
								property cannot be closed or locked safely, we can help with
								emergency boarding up in London where needed.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Where a lock has been forced or keys may no longer be trusted,
								we can also carry out a lock change after burglary in London to
								help restore control over access.
							</Typography>
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
						href="tel:02086467931"
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

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Our Burglary Repair Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We repair and secure properties after break ins, attempted
								entry, and forced access damage. The first job is to make the
								site safe, then deal with the repairs needed to restore
								security.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Depending on the damage, this may include door repairs, window
								repairs, emergency boarding up, lock replacement, frame repairs,
								or stronger hardware where the existing setup is no longer
								suitable.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{services.map((service, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<FeatureCard sx={{ p: 2.5 }}>
											<Typography
												variant="h6"
												sx={{
													fontWeight: 600,
													color: JW_BLUE,
													mb: 1,
													fontSize: "1.1rem",
												}}>
												{service.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.7) }}>
												{service.description}
											</Typography>
										</FeatureCard>
									</Grid>
								))}
							</Grid>
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
							<SectionTitle variant="h5">
								What To Do After A Break In
							</SectionTitle>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7, mb: 3 }}>
								If your property has been broken into, do not rush to touch
								damaged doors, windows, or locks before checking that the
								property is safe.
							</Typography>
							<List sx={{ pl: 0 }}>
								{[
									"Make sure everyone is safe before entering the property",
									"Call the police and report the break in",
									"Take photos of visible damage for insurance records",
									"Contact JW Security for burglary repair or emergency boarding up",
									"Arrange a lock change if keys, locks, or access points are compromised",
									"Avoid using damaged doors or windows until they are secured",
								].map((text, idx) => (
									<ListItem
										key={idx}
										sx={{
											display: "flex",
											alignItems: "flex-start",
											px: 0,
											py: 0.5,
										}}>
										<ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
											<CheckCircleOutlineIcon
												sx={{ color: JW_CYAN, fontSize: 20 }}
											/>
										</ListItemIcon>
										<ListItemText
											primary={text}
											primaryTypographyProps={{ fontSize: "1.05rem" }}
										/>
									</ListItem>
								))}
							</List>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">
								Benefits Of Our Expert Service
							</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{benefits.map((benefit, index) => (
										<ListItem
											key={index}
											sx={{ py: 1 }}>
											<ListItemIcon>
												<CheckCircleOutlineIcon sx={{ color: JW_BLUE }} />
											</ListItemIcon>
											<ListItemText
												primary={benefit}
												primaryTypographyProps={{ fontWeight: 500 }}
											/>
										</ListItem>
									))}
								</List>
							</Box>
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
								Do You Provide Burglary Repair In London?
							</Typography>
							<Typography
								sx={{
									maxWidth: "700px",
									mx: "auto",
									mt: 2,
									color: alpha("#000", 0.6),
									fontSize: "1.05rem",
								}}>
								Yes. JW Security provides burglary repair in London for homes,
								offices, shops, landlords, and managed buildings after forced
								entry or attempted break ins.
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
