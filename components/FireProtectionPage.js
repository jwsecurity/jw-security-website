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
	Paper,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import PageHero from "./common/PageHero";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FlashlightOnIcon from "@mui/icons-material/FlashlightOn";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

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

const ServiceCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"padding": theme.spacing(3),
	"transition": "all 0.3s ease",
	"boxShadow": "0 4px 12px rgba(0,0,0,0.08)",
	"border": "1px solid",
	"borderColor": "transparent",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
		borderColor: JW_CYAN,
	},
}));

const IconBox = styled(Box)(({ theme }) => ({
	"width": "70px",
	"height": "70px",
	"borderRadius": "50%",
	"backgroundColor": alpha(JW_CYAN, 0.1),
	"display": "flex",
	"alignItems": "center",
	"justifyContent": "center",
	"marginBottom": theme.spacing(2),
	"transition": "all 0.3s ease",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.2),
		transform: "scale(1.1)",
	},
}));

const ComplianceCard = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	backgroundColor: alpha(JW_BLUE, 0.03),
	borderRadius: "8px",
	border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
	marginBottom: theme.spacing(2),
}));

export default function FireProtectionPage() {
	const fireProtectionServices = [
		{
			title: "Fire Door Inspections",
			icon: <DoorSlidingIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"We check fire doors for fit, condition, closers, seals, hinges, latching, and gaps.",
			details: [
				"Visual inspection of door leaves, frames, and glazing",
				"Checking of intumescent seals and smoke seals",
				"Testing of self-closing devices and door operation",
				"Gap measurement and certification",
				"Detailed inspection reports with recommendations",
				"BS 476 and BS EN compliance verification",
			],
		},
		{
			title: "Fire Door Maintenance",
			icon: <WarningAmberIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"We repair common fire door faults, including worn closers, damaged seals, loose hinges, and doors that do not close or latch properly.",
			details: [
				"Adjustment of door closers and hinges",
				"Replacement of damaged seals and strips",
				"Repair of door leaves and frames",
				"Lock and handle servicing",
				"Preventative maintenance schedules",
				"Emergency repair services",
			],
		},
		{
			title: "Fire Door Installation",
			icon: <LocalFireDepartmentIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"We fit new fire doors where existing doors cannot be repaired or brought up to standard.",
			details: [
				"FD30 and FD60 rated door installation",
				"Complete door set supply and fit",
				"Ironmongery selection and fitting",
				"Intumescent seal installation",
				"Third-party certification",
				"Building regulations compliance",
			],
		},
		{
			title: "Fire Risk Assessments",
			icon: <WarningAmberIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"We review fire safety risks, escape routes, fire doors, and key problem areas, then provide a written report with recommendations.",
			details: [
				"Conventional and addressable systems",
				"Wireless fire alarm solutions",
				"Integration with existing systems",
				"Regular testing and maintenance",
				"BS 5839 compliant installations",
				"24/7 monitoring options available",
			],
		},
		{
			title: "Emergency Lighting",
			icon: <FlashlightOnIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Installation and maintenance of emergency lighting systems to ensure safe evacuation routes.",
			details: [
				"LED emergency lighting solutions",
				"Exit sign installation and maintenance",
				"Monthly and annual testing services",
				"Battery replacement programs",
				"BS 5266 compliance",
				"Emergency lighting design and planning",
			],
		},
		{
			title: "Fire Extinguisher Services",
			icon: <FireExtinguisherIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Supply, installation, and servicing of fire extinguishers suitable for all fire classifications.",
			details: [
				"Water, foam, CO2, and powder extinguishers",
				"Annual servicing and maintenance",
				"Extended service and refurbishment",
				"Fire blanket supply and installation",
				"Staff training on extinguisher use",
				"Fire point setup and signage",
			],
		},
	];

	const complianceStandards = [
		{
			title: "Regulatory Reform Fire Safety Order 2005",
			description:
				"We help landlords, managing agents, and businesses understand their fire safety duties and take action where building risks are found.",
		},
		{
			title: "British Standards Compliance",
			description:
				"Our fire door work follows relevant British Standards for fire resistance, fittings, closers, seals, and safe installation.",
		},
		{
			title: "Building Regulations",
			description:
				"Fire door installation and remedial work is carried out with Building Regulations in mind, including Approved Document B where it applies.",
		},
	];

	const faqs = [
		{
			question: "What fire protection services do you offer?",
			answer:
				"Fire door inspections, fire door maintenance, fire door installation, and fire risk assessments.",
		},
		{
			question: "Do you work with managed buildings and landlords?",
			answer:
				"Yes. Most of our fire safety work is for landlords, managing agents, and property companies across London.",
		},
		{
			question: "What if a fire door has already been flagged as a problem?",
			answer:
				"Call us. We'll come and look at it, tell you what's wrong, and sort it out.",
		},
		{
			question: "Do you provide written fire risk assessments?",
			answer:
				"Yes. We carry out fire risk assessments and provide a written report with findings and recommendations.",
		},
		{
			question: "What areas do you cover?",
			answer:
				"We cover London, Surrey, and surrounding areas. Call us if you are unsure whether we cover your location.",
		},
	];

	return (
		<>
			<PageHero
				title="Fire Protection Services In London"
				subtitle="Fire door inspections, fire risk assessments, and fire safety work for London buildings that need safer, compliant protection."
				backgroundImage="/images/jw/pexels-tima-miroshnichenko-6790761-scaled.webp"
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
								src="/images/jw/cctv-camera-on-white-ceiling.webp"
								alt="Fire safety equipment installation"
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
								Fire Protection Work For London Buildings
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Fire doors fail for a reason. Closers wear out. Gaps appear.
								Frames shift. When that happens in a managed building or
								commercial property, it can affect safety, compliance, and day
								to day building management.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security helps landlords, managing agents, and businesses
								across London with fire doors, maintenance, installations, and
								fire risk assessments.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Some of this work comes up during planned maintenance schedules.
								Some gets flagged during an inspection. Either way, we identify
								the issue, explain what it means, and complete the checks,
								repairs, or replacements needed to improve building safety.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">What We Do</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our services cover the full spectrum of fire prevention and
								detection requirements for residential and commercial buildings.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								We focus on ensuring every installation is certified and every
								inspection is thorough.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{fireProtectionServices.slice(0, 4).map((service, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<ServiceCard sx={{ p: 2.5 }}>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													mb: 1,
													gap: 1.5,
												}}>
												{React.cloneElement(service.icon, {
													sx: { fontSize: 24 },
												})}
												<Typography
													variant="subtitle1"
													sx={{
														fontWeight: 800,
														color: JW_BLUE,
														lineHeight: 1.2,
													}}>
													{service.title}
												</Typography>
											</Box>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.6) }}>
												{service.description}
											</Typography>
										</ServiceCard>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: 0 }}>
				<Box
					sx={{
						py: 8,
						backgroundColor: JW_CYAN,
						textAlign: "center",
						color: JW_BLUE,
					}}>
					<Container>
						<Typography
							variant="h4"
							sx={{ fontWeight: 900, mb: 3 }}>
							FIRE SAFETY ASSESSMENT?
						</Typography>
						<Typography
							variant="h6"
							sx={{ mb: 4, opacity: 0.9 }}>
							Contact London&apos;s most reliable fire protection team today.
						</Typography>
						<Button
							variant="contained"
							size="large"
							href="/contact"
							sx={{
								"fontWeight": 900,
								"px": 6,
								"py": 2,
								"fontSize": "1.2rem",
								"bgcolor": JW_BLUE,
								"color": "white",
								"&:hover": { bgcolor: "white", color: JW_BLUE },
							}}>
							BOOK FREE SURVEY
						</Button>
					</Container>
				</Box>
			</Box>

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{complianceStandards.map((standard, index) => (
									<Grid
										size={{ xs: 12 }}
										key={index}>
										<ComplianceCard sx={{ mb: 0 }}>
											<Typography
												variant="h6"
												sx={{
													fontWeight: 700,
													color: JW_BLUE,
													mb: 1,
													fontSize: "1rem",
												}}>
												{standard.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.6) }}>
												{standard.description}
											</Typography>
										</ComplianceCard>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Fire Safety Compliance Made Clear
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Fire safety regulations exist for a reason, but a lot of
								property owners get handed vague reports that don't tell them
								what to actually do next.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								We keep the process simple. You get plain findings, useful
								recommendations , and work carried out by people who understand
								fire doors, fire safety, and building compliance. No vague
								wording. No unnecessary work added to the job.
							</Typography>
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
							<SectionTitle variant="h5">Why Choose JW Security?</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{[
										"Over 30 years of experience in fire safety",
										"Fully certified and insured technicians",
										"24/7 emergency response available",
										"Comprehensive maintenance contracts",
										"Free site surveys and quotations",
										"Coverage across all of London",
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
								Find answers to common concerns about our professional locksmith
								services.
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

			<ContactSection
				title="Need Fire Protection Services?"
				subtitle="Contact us today for a free fire safety assessment and quotation"
			/>
		</>
	);
}
