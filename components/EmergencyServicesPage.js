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
import PageHero from "./common/PageHero";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import BuildIcon from "@mui/icons-material/Build";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import SecurityIcon from "@mui/icons-material/Security";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
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

const EmergencyCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"padding": theme.spacing(3),
	"transition": "all 0.3s ease",
	"boxShadow": "0 4px 12px rgba(0,0,0,0.08)",
	"border": "2px solid",
	"borderColor": JW_CYAN,
	"backgroundColor": alpha(JW_CYAN, 0.02),
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
		backgroundColor: alpha(JW_CYAN, 0.05),
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
	width: "70px",
	height: "70px",
	borderRadius: "50%",
	backgroundColor: alpha(JW_CYAN, 0.1),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2),
}));

const EmergencyButton = styled(Button)(({ theme }) => ({
	"backgroundColor": JW_CYAN,
	"color": "white",
	"fontSize": "1.2rem",
	"fontWeight": "bold",
	"padding": theme.spacing(2, 4),
	"marginTop": theme.spacing(2),
	"boxShadow": `0 5px 15px ${alpha(JW_CYAN, 0.4)}`,
	"transition": "all 0.3s ease",
	"&:hover": {
		backgroundColor: JW_BLUE,
		transform: "translateY(-3px)",
		boxShadow: `0 8px 20px ${alpha(JW_CYAN, 0.5)}`,
	},
}));

export default function EmergencyServicesPage() {
	const faqs = [
		{
			question: "How Quickly Can You Attend An Emergency Locksmith Callout?",
			answer:
				"Response time depends on your location and current demand, but we prioritise urgent lock and access problems across London and Surrey.",
		},
		{
			question: "Do You Provide Emergency Door Opening?",
			answer:
				"Yes. We help with emergency door opening for homes, businesses, managed buildings, and other properties where urgent access is needed.",
		},
		{
			question: "Can You Help If I Am Locked Out?",
			answer:
				"Yes. We deal with lockouts for houses, flats, offices, shops, and commercial properties.",
		},
		{
			question: "What If My Lock Has Failed Or Broken?",
			answer:
				"We can inspect the lock, explain the fault, and deal with the urgent repair or replacement needed to secure the property.",
		},
		{
			question: "Do You Help After Burglary Damage?",
			answer:
				"Yes. We provide urgent locksmith help for damaged locks, weak entry points, and doors that need securing after forced entry.",
		},
	];

	const emergencyServices = [
		{
			title: "Emergency Lockout",
			icon: <LockOpenIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Locked out of your house, flat, office, shop, or managed building? We help you regain entry without unnecessary delay.",
			features: [
				"Average 20-30 minute response time",
				"Non-destructive entry techniques",
				"All lock types and brands",
				"Residential and commercial",
				"No call-out charges",
			],
		},
		{
			title: "Burglary Damage",
			icon: <LocalPoliceIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Urgent help for damaged locks, weak entry points, and doors that need securing after attempted or forced entry.",
			features: [
				"Emergency boarding services",
				"Lock replacement and upgrades",
				"Door and frame repairs",
				"Security assessment included",
				"Insurance documentation",
			],
		},
		{
			title: "Lost Key Replacement",
			icon: <HomeIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Lost your keys or need access sorted quickly after keys go missing? We help you regain entry and secure the site.",
			features: [
				"On-site key cutting",
				"Lock rekeying services",
				"Master key systems",
				"Spare keys created",
				"Security advice provided",
			],
		},
		{
			title: "Lock Mechanism Failure",
			icon: <BuildIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Expert repair when locks jam, break, or fail to operate correctly.",
			features: [
				"All lock types serviced",
				"Immediate temporary solutions",
				"Permanent repairs available",
				"Upgrade options offered",
				"Warranty on all work",
			],
		},
	];

	const responseProcess = [
		{
			step: "1",
			title: "Call For Emergency Help",
			description:
				"Tell us what has happened and where you are, and we will advise on the fastest next step.",
		},
		{
			step: "2",
			title: "Describe Your Situation",
			description:
				"Locked out, broken lock, lost keys, failed mechanism, or door damage. We assess the issue before arrival.",
		},
		{
			step: "3",
			title: "Rapid Dispatch",
			description:
				"Our team moves quickly to your location and arrives ready to deal with the problem.",
		},
		{
			step: "4",
			title: "Professional Resolution",
			description:
				"We regain access, secure the property, and carry out the urgent locksmith work needed.",
		},
	];

	const coverageAreas = [
		"Central London - 15-20 minutes",
		"North London - 20-30 minutes",
		"South London - 20-30 minutes",
		"East London - 25-35 minutes",
		"West London - 20-30 minutes",
		"Greater London - 30-45 minutes",
	];

	return (
		<>
			<PageHero
				title="24/7 Emergency Locksmith Services In London"
				subtitle="Urgent locksmith help for lockouts, failed locks, lost keys, broken mechanisms, and emergency door security across London, Surrey, and surrounding areas."
				backgroundImage="/images/jw/closeup-of-a-professional-locksmith-installing-a-new-lock-on-a-house-exterior-door-with-the-inside.webp"
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
							<EmergencyCard>
								<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
									<AccessTimeIcon
										sx={{ fontSize: 50, color: JW_CYAN, mr: 2 }}
									/>
									<Box>
										<Typography
											variant="h5"
											sx={{ fontWeight: 800, color: JW_BLUE }}>
											Area Response
										</Typography>
										<Typography
											variant="body2"
											sx={{ color: alpha("#000", 0.6) }}>
											Our average arrival times across London
										</Typography>
									</Box>
								</Box>
								<List dense>
									{coverageAreas.map((area, index) => (
										<ListItem
											key={index}
											sx={{ py: 0.5 }}>
											<ListItemIcon sx={{ minWidth: 30 }}>
												<LocationOnIcon sx={{ fontSize: 18, color: JW_CYAN }} />
											</ListItemIcon>
											<ListItemText
												primary={area}
												primaryTypographyProps={{
													fontWeight: 500,
													fontSize: "0.9rem",
												}}
											/>
										</ListItem>
									))}
								</List>
								<EmergencyButton
									startIcon={<PhoneIcon />}
									component="a"
									href="tel:02086467931"
									fullWidth
									sx={{ mt: 3, py: 1.5 }}>
									0208 646 7931
								</EmergencyButton>
							</EmergencyCard>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">When Every Second Counts</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Locked out of your property, dealing with a failed lock, or
								unable to secure a door after damage? These situations need fast
								action, not a delayed appointment.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides emergency locksmith services across London
								for homes, businesses, managed buildings, and commercial
								properties that need urgent access or immediate lock and door
								attention.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								From lost keys and broken locks to failed mechanisms and
								emergency door opening, we focus on restoring access, securing
								the property, and dealing with the problem in front of us as
								quickly as possible.
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
							<SectionTitle variant="h4">Rapid Response Services</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Fast help for urgent lockouts, failed locks, lost keys, and
								access problems across residential and commercial properties.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{emergencyServices.slice(0, 4).map((service, index) => (
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
							LOCKED OUT OR NEED URGENT SECURITY HELP?
						</Typography>
						<Typography
							variant="h6"
							sx={{ mb: 4, opacity: 0.9 }}>
							Our emergency locksmith team responds to urgent access and lock
							problems across London.
						</Typography>
						<Button
							variant="contained"
							size="large"
							href="tel:02086467931"
							sx={{
								"fontWeight": 900,
								"px": 6,
								"py": 2,
								"fontSize": "1.2rem",
								"bgcolor": JW_BLUE,
								"color": "white",
								"&:hover": { bgcolor: "white", color: JW_BLUE },
							}}>
							CALL US: 0208 646 7931
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
								{responseProcess.map((item, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<Box
											sx={{
												p: 2.5,
												bgcolor: "white",
												borderRadius: 3,
												boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
												height: "100%",
											}}>
											<Box
												sx={{
													width: 32,
													height: 32,
													borderRadius: "50%",
													backgroundColor: JW_CYAN,
													color: JW_BLUE,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													fontSize: "0.9rem",
													fontWeight: 900,
													mb: 1.5,
												}}>
												{item.step}
											</Box>
											<Typography
												variant="subtitle1"
												sx={{ fontWeight: 800, color: JW_BLUE, mb: 1 }}>
												{item.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.6) }}>
												{item.description}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">How We Respond</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Emergency locksmith work is different from planned work. The
								priority is speed, safe access, and making sure the property is
								not left exposed.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We deal with house lockouts, office lockouts, failed locks,
								snapped keys, jammed mechanisms, damaged doors, and urgent
								situations where the property cannot be secured properly.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Where possible, we regain entry without damage to the door or
								frame. If a lock, cylinder, or mechanism has failed, we explain
								the issue and deal with what is needed to restore access or
								security.
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
								src="/images/jw/locksmith-hands-maintenance-and-handyman-with-tools-home-renovation-and-fixing-change-door-locks.webp"
								alt="Emergency locksmith response"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">Expert Emergency Support</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{[
										"Genuine 24/7 National Availability",
										"No Call-Out Charges",
										"Upfront fixed-price quotations",
										"Fully ID Verified Technicians",
										"DBS Checked Staff & High-Level Training",
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
								Find answers to common questions about our emergency locksmith
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
				title="Emergency? Call Us Now"
				subtitle="0208 646 7931 - Available 24/7, 365 days a year"
			/>
		</>
	);
}
