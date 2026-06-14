"use client";
import React from "react";
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
} from "@mui/material";
import PageHero from "../common/PageHero";
import HomeIcon from "@mui/icons-material/Home";
import { styled, alpha } from "@mui/material/styles";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));
import ContactSection from "../common/ContactSection";
import BusinessIcon from "@mui/icons-material/Business";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const SurveyTypeCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"padding": theme.spacing(3.5),
	"transition": "transform 0.3s, box-shadow 0.3s",
	"boxShadow": "0 4px 15px rgba(0,0,0,0.08)",
	"borderRadius": "10px",
	"display": "flex",
	"flexDirection": "column",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
	},
}));

const IconBox = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	backgroundColor: alpha(JW_CYAN, 0.1),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2),
}));

const SurveyProcessCard = styled(Box)(({ theme }) => ({
	"padding": theme.spacing(3),
	"borderRadius": "8px",
	"border": `1px solid ${alpha(JW_BLUE, 0.1)}`,
	"marginBottom": theme.spacing(2),
	"backgroundColor": alpha(JW_CYAN, 0.03),
	"transition": "background-color 0.3s",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.07),
	},
}));

export default function SecuritySurveysPage() {
	const surveyTypes = [
		{
			title: "Residential Security Surveys",
			description:
				"Checks for houses, flats, landlords, and residential blocks where doors, windows, side gates, lighting, alarms, and entry points need review.",
			icon: <HomeIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Commercial Security Surveys",
			description:
				"Checks for offices, shops, warehouses, and business premises where staff entrances, visitor access, stock rooms, CCTV, and access control need attention.",
			icon: <BusinessIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Post Incident Security Assessments",
			description:
				"A closer look after a break in, attempted entry, or repeated concern, with advice on weak points and what should be improved next.",
			icon: <AssessmentIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
	];

	const surveyProcess = [
		{
			step: "Initial Consultation",
			description:
				"We ask what has happened, what you are worried about, and what type of building you want checked.",
		},
		{
			step: "On Site Assessment",
			description:
				"We look at doors, windows, locks, lighting, CCTV angles, alarms, access control, shared entrances, and any weak points around the site.",
		},
		{
			step: "Findings And Next Steps",
			description:
				"You receive the main findings in plain language, with the most important fixes listed first.",
		},
		{
			step: "Security Improvements",
			description:
				"If you want the work carried out, we can help with suitable repairs, upgrades, or new security installation where needed.",
		},
		{
			step: "Follow Up Check",
			description:
				"Where needed, we can return after the work is complete to make sure the agreed changes are in place and working as expected.",
		},
	];

	const whenToConsider = [
		"Moving into a new home or business premises",
		"After a break in or attempted entry",
		"Before upgrading locks, CCTV, alarms, or access control",
		"When managing a residential block or commercial site",
		"If staff, tenants, or visitors use shared access points",
		"When storing stock, tools, equipment, or sensitive information",
		"Before reviewing insurance or landlord safety requirements",
	];

	const surveyBenefits = [
		"Weak doors, windows, lighting, and access points checked before they become bigger problems",
		"Advice based on how the building is actually used",
		"Main security issues listed in order of importance",
		"Better understanding of locks, CCTV, alarms, entry points, and shared areas",
		"Useful notes for landlords, managing agents, homeowners, and business owners",
		"Guidance that can help with insurance, site management, and future security planning",
	];

	const faqs = [
		{
			question: "What Is A Security Survey?",
			answer:
				"A security survey is a check of your building’s doors, windows, locks, lighting, CCTV, alarms, access points, and other weak areas.",
		},
		{
			question: "Do You Provide Security Surveys In London?",
			answer:
				"Yes. JW Security provides security surveys in London for homes, businesses, landlords, managed buildings, and commercial premises.",
		},
		{
			question: "What Does A Property Security Assessment Include?",
			answer:
				"It can include doors, windows, locks, lighting, CCTV coverage, alarms, access control, shared entrances, side gates, and any area that may create a security concern.",
		},
		{
			question: "Do You Offer Home Security Surveys?",
			answer:
				"Yes. We carry out home security surveys in London for houses, flats, landlords, and residential blocks.",
		},
		{
			question: "Can You Survey A Commercial Property?",
			answer:
				"Yes. We provide commercial security surveys for offices, shops, warehouses, managed sites, and business premises.",
		},
		{
			question: "Will You Recommend Security Upgrades?",
			answer:
				"Yes, but only where they make sense. We explain what should be fixed first and what can wait.",
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
				title="Security Surveys In London"
				subtitle="Site checks for homes, businesses, and managed buildings across London and Surrey where doors, access points, lighting, alarms, and CCTV coverage need a closer look."
				backgroundImage="/images/jw/maintenance-concept-focused-serious-young-locksmith-with-tattoo-on-hand-wearing-blue-uniform.webp"
				minHeight="45vh"
				centerContent={true}
				ctaButton={true}
				ctaText="Get A Free Quote"
				ctaLink="/contact"
			/>

			{/* Section 1: Security Checks For Real Buildings */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/security-camera.webp"
								alt="Security survey assessment"
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
								Security Checks For Real Buildings
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Not every weak point stands out straight away.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Sometimes it is a rear door that does not close tightly.
								Sometimes it is poor lighting near a side entrance, a camera
								that misses the main walkway, or an old alarm that nobody really
								trusts anymore.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security carries out security surveys in London for
								homeowners, landlords, managing agents, and businesses that want
								to understand where their building may be exposed.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We look at how the site is used, where people come in and out,
								what security is already in place, and where the gaps are.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								You get a straight answer on what looks secure, what does not,
								and which fixes should come first.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 2: Our Security Survey Services */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Our Security Survey Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We carry out site checks for different types of properties
								across London and Surrey, from private homes and flats to shops,
								offices, residential blocks, and commercial premises.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								The risks are not the same everywhere. A family home may have
								weak windows or poor rear access. A shop may need better camera
								coverage near stock areas. A managed block may have issues
								around shared entrances, visitor access, or communal doors.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{surveyTypes.map((type, index) => (
									<Grid
										size={{ xs: 12 }}
										key={index}>
										<SurveyTypeCard
											sx={{
												p: 2.5,
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												gap: 2.5,
											}}>
											<Box
												sx={{
													flexShrink: 0,
													bgcolor: alpha(JW_CYAN, 0.1),
													p: 1,
													borderRadius: "50%",
													display: "flex",
												}}>
												{React.cloneElement(type.icon, {
													sx: { fontSize: 24 },
												})}
											</Box>
											<Box>
												<Typography
													variant="h6"
													sx={{
														fontWeight: 600,
														color: JW_BLUE,
														mb: 0.5,
														fontSize: "1.05rem",
													}}>
													{type.title}
												</Typography>
												<Typography
													variant="body2"
													sx={{ color: alpha("#000", 0.65) }}>
													{type.description}
												</Typography>
											</Box>
										</SurveyTypeCard>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* First Banner: Need A Security Survey For Your Property? */}
			<CTABanner sx={{ py: 8 }}>
				<Container>
					<Typography
						variant="h3"
						sx={{ fontWeight: 800, mb: 3 }}>
						NEED A SECURITY SURVEY FOR YOUR PROPERTY?
					</Typography>
					<Typography
						variant="h6"
						sx={{
							mb: 4,
							color: "white",
							opacity: 0.9,
							maxWidth: "800px",
							mx: "auto",
							fontWeight: 400,
							lineHeight: 1.6,
						}}>
						If you are not sure whether your building is secure enough, JW
						Security can inspect the site and explain what needs looking at.
						Book a home security survey, commercial security survey, or full
						property security assessment across London and Surrey.
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
						GET A FREE CONSULTATION
					</Button>
				</Container>
			</CTABanner>

			{/* Section 3: Our Security Survey Process */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Our Security Survey Process
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We keep the process simple. First we listen, then we check the
								site, then we explain what we found.
							</Typography>
							<Box
								component="img"
								src="/images/jw/maintenance-concept-focused-serious-young-locksmith-with-tattoo-on-hand-wearing-blue-uniform.webp"
								alt="Security survey process"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							{surveyProcess.map((step, index) => (
								<SurveyProcessCard
									key={index}
									sx={{ p: 2, mb: 1.5 }}>
									<Box sx={{ display: "flex", alignItems: "flex-start" }}>
										<Box
											sx={{
												width: 24,
												height: 24,
												borderRadius: "50%",
												bgcolor: JW_BLUE,
												color: "white",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "0.85rem",
												fontWeight: "bold",
												mr: 2,
												flexShrink: 0,
												mt: 0.5,
											}}>
											{index + 1}
										</Box>
										<Box>
											<Typography
												variant="subtitle1"
												sx={{ fontWeight: 700, color: JW_BLUE, mb: 0.2 }}>
												{step.step}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.7) }}>
												{step.description}
											</Typography>
										</Box>
									</Box>
								</SurveyProcessCard>
							))}
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 4: When To Consider A Survey & Benefits Of Our Expert Assessments */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">
								When To Consider A Survey
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A property security assessment in London can help when something
								has changed, when a weakness has been noticed, or before you
								spend money on new equipment.
							</Typography>
							<List sx={{ pl: 0 }}>
								{whenToConsider.map((text, idx) => (
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
								Benefits Of Our Expert Assessments
							</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{surveyBenefits.map((benefit, index) => (
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

			{/* Second Banner: 24/7 Emergency Service */}
			<CTABanner sx={{ py: 8 }}>
				<Container>
					<Typography
						variant="h3"
						sx={{ fontWeight: 800, mb: 3 }}>
						24/7 EMERGENCY SERVICE
					</Typography>
					<Typography
						variant="h6"
						sx={{
							mb: 4,
							color: "white",
							opacity: 0.9,
							maxWidth: "800px",
							mx: "auto",
							fontWeight: 400,
							lineHeight: 1.6,
						}}>
						Need urgent help instead of a planned survey? Call our emergency
						team for urgent access or security help.
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
						CALL OUR EMERGENCY HOTLINE: 0208 646 7931
					</Button>
				</Container>
			</CTABanner>

			{/* Section 5: Common Questions (FAQs) */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 5 }}>
							<SectionTitle variant="h4">Common Questions</SectionTitle>

							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Find answers to common questions about our security survey
								services in London.
							</Typography>

							<Button
								variant="contained"
								size="large"
								href="/contact"
								sx={{
									"fontWeight": 900,
									"px": 4,
									"py": 1.5,
									"bgcolor": JW_CYAN,
									"color": JW_BLUE,
									"&:hover": { bgcolor: JW_BLUE, color: "white" },
								}}>
								STILL HAVE QUESTIONS?
							</Button>
						</Grid>

						<Grid size={{ xs: 12, md: 7 }}>
							{faqs.map((faq, index) => (
								<Accordion
									key={index}
									sx={{
										"mb": 1.5,
										"boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
										"borderRadius": "8px !important",
										"&::before": { display: "none" },
									}}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon sx={{ color: JW_CYAN }} />}
										sx={{
											"px": 3,
											"py": 0.5,
											"&.Mui-expanded": { minHeight: 48 },
										}}>
										<Typography
											variant="subtitle1"
											sx={{ fontWeight: 700, color: JW_BLUE }}>
											{faq.question}
										</Typography>
									</AccordionSummary>

									<AccordionDetails sx={{ px: 3, pb: 3 }}>
										<Typography
											sx={{
												lineHeight: 1.7,
												color: alpha("#000", 0.6),
												fontSize: "0.95rem",
											}}>
											{faq.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							))}
						</Grid>
					</Grid>
				</Container>
			</Box>

			<ContactSection />
		</>
	);
}
