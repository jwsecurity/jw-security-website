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
import BadgeIcon from "@mui/icons-material/Badge";
import RouterIcon from "@mui/icons-material/Router";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import VideocamIcon from "@mui/icons-material/Videocam";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

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

const FeatureCard = styled(Paper)(({ theme }) => ({
	"padding": theme.spacing(3),
	"backgroundColor": alpha(JW_BLUE, 0.03),
	"borderRadius": "8px",
	"border": `1px solid ${alpha(JW_BLUE, 0.1)}`,
	"height": "100%",
	"transition": "all 0.2s",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.05),
		transform: "translateY(-3px)",
		boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
	},
}));

export default function SecuritySystemsPage() {
	const faqs = [
		{
			question: "What Security Services Do You Offer?",
			answer:
				"We install CCTV systems, intruder alarms, access control, and integrated smart security systems for residential and commercial properties across London and Surrey.",
		},
		{
			question: "Do You Provide CCTV Installation In London?",
			answer:
				"Yes. We carry out CCTV installation for homes, businesses, managed buildings, and commercial premises throughout London and Surrey.",
		},
		{
			question: "Do You Install Alarm Systems?",
			answer:
				"Yes. We fit intruder alarm systems for homes and businesses, including wired and wireless options depending on the site.",
		},
		{
			question: "Can You Install Access Control Systems?",
			answer:
				"Yes. We install fob systems, keypad entry, intercom systems, and secure door access for managed buildings, offices, and commercial premises.",
		},
		{
			question: "Do You Work With Residential And Commercial Properties?",
			answer:
				"Yes. Our clients include homeowners, landlords, managing agents, offices, shops, residential blocks, and commercial premises of various sizes.",
		},
		{
			question: "What Areas Do You Cover?",
			answer:
				"We work across London, Surrey, and surrounding areas. If you are not sure whether we cover your location, just call and we will confirm it.",
		},
	];

	const securityServices = [
		{
			title: "CCTV Installation",
			icon: <VideocamIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"HD cameras fitted for homes, businesses, managed buildings, and commercial sites, with remote viewing set up where needed.",
			features: [
				"HD/4K camera systems",
				"Night vision technology",
				"Remote mobile viewing",
				"Motion detection alerts",
				"Cloud storage options",
				"Professional installation",
			],
		},
		{
			title: "Intruder Alarm Installation",
			icon: <NotificationsActiveIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Wired and wireless alarm systems for homes and businesses, designed to detect break ins and reduce false alerts.",
			features: [
				"Wireless & wired systems",
				"Pet-friendly sensors",
				"Smartphone notifications",
				"Police monitoring options",
				"Panic buttons",
				"Entry/exit delays",
			],
		},
		{
			title: "Access Control",
			icon: <BadgeIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Fob systems, keypad entry, intercoms, and secure door access for shared entrances, staff areas, offices, and managed buildings.",
			features: [
				"Card & fob systems",
				"Biometric readers",
				"Intercom systems",
				"Time-based access",
				"Audit trail reporting",
				"Multi-door systems",
			],
		},
		{
			title: "Smart Security Systems",
			icon: <HomeWorkIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Connected CCTV, alarms, and access control managed from one place for larger sites or buildings with multiple access points.",
			features: [
				"Smart locks",
				"Video doorbells",
				"Home automation",
				"Voice control",
				"Energy management",
				"Unified app control",
			],
		},
	];

	const benefits = [
		{
			title: "Crime Deterrent",
			description:
				"Visible CCTV, alarms, and entry systems can help discourage unwanted access.",
		},
		{
			title: "Remote Monitoring",
			description:
				"Check live footage and recordings from your phone when remote viewing is enabled.",
		},
		{
			title: "Evidence Collection",
			description:
				"Recorded footage can help with incident checks, internal review, or insurance claims.",
		},
		{
			title: "Peace Of Mind",
			description:
				"A well set up system gives owners, staff, and residents more confidence day to day.",
		},
	];

	return (
		<>
			<PageHero
				title="Security Services In London"
				subtitle="CCTV installation, intruder alarm installation, and access control for homes, businesses, and managed properties across London and Surrey. JW Security installs and configures systems built around how each site is used."
				backgroundImage="/images/jw/security-camera.webp"
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
								src="/images/jw/surveillance-cam-cctv-system-isolated-on-white-background-3d-illustration.webp"
								alt="Modern security system"
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
								Security Installation For London Properties
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A camera pointed at the wrong angle misses what matters. An
								alarm that goes off too often gets ignored. Access control that
								lets in the wrong people defeats the point. Getting the setup
								right from the start is what makes the system useful when it is
								needed most.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security has been installing security systems across London
								since 1991. We handle CCTV installation, intruder alarm
								installation, and access control for residential and commercial
								properties throughout London and Surrey. Jobs range from a
								single camera on a front door to wider systems covering offices,
								shops, managed buildings, and commercial premises with multiple
								entry points.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Every installation starts with a site review. We identify weak
								points, understand how the building is used day to day, and set
								up a system based on that. No unnecessary equipment pushed on
								top.
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
							<SectionTitle variant="h4">What We Install</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								From HD surveillance to sophisticated access control, we provide
								seamlessly integrated security for homes and businesses.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our team ensures that your technology is not just installed, but
								perfectly configured for your environment.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{securityServices.map((service, index) => (
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
							NEED A SECURITY ASSESSMENT?
						</Typography>
						<Typography
							variant="h6"
							sx={{ mb: 4, opacity: 0.9 }}>
							Our NSI Gold installers are ready to secure your world.
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
								{benefits.map((benefit, index) => (
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
											<Typography
												variant="subtitle1"
												sx={{ fontWeight: 800, color: JW_BLUE, mb: 1 }}>
												{benefit.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.6) }}>
												{benefit.description}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">System Benefits</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A well installed security system helps deter unwanted activity,
								improves visibility, and gives you more control over how the
								building is monitored.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								From CCTV and alarms to access control, the right setup supports
								safer access and more useful information when something needs
								checking later.
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
								src="/images/jw/home-ip-video-surveillance-concept.webp"
								alt="Security monitoring"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">Professional Support</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{[
										"NSI Gold certified installation standards",
										"24/7 technical support & monitoring",
										"Comprehensive on-site system training",
										"Annual maintenance and health checks",
										"Scalable systems for future growth",
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
								Find answers to common questions about our security installation
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
				title="Secure Your Property Today"
				subtitle="Contact us for a free security assessment and no-obligation quote"
			/>
		</>
	);
}
