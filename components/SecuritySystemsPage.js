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
	Chip,
} from "@mui/material";
import PageHero from "./common/PageHero";
import BadgeIcon from "@mui/icons-material/Badge";
import RouterIcon from "@mui/icons-material/Router";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import VideocamIcon from "@mui/icons-material/Videocam";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
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
	const securityServices = [
		{
			title: "CCTV Systems",
			icon: <VideocamIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"High-definition surveillance systems with remote viewing capabilities.",
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
			title: "Intruder Alarms",
			icon: <NotificationsActiveIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Advanced alarm systems to detect and deter unauthorized access.",
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
				"Sophisticated entry management systems for enhanced security.",
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
			title: "Smart Home Security",
			icon: <HomeWorkIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description: "Integrated smart security solutions for modern homes.",
			features: [
				"Smart locks",
				"Video doorbells",
				"Home automation",
				"Voice control",
				"Energy management",
				"Unified app control",
			],
		},
		{
			title: "Commercial Security",
			icon: <RouterIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Comprehensive security solutions for businesses of all sizes.",
			features: [
				"Integrated systems",
				"Multi-site management",
				"Employee tracking",
				"Visitor management",
				"Perimeter protection",
				"Security consulting",
			],
		},
		{
			title: "Mobile Solutions",
			icon: <SmartphoneIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Control and monitor your security from anywhere in the world.",
			features: [
				"Real-time alerts",
				"Live video streaming",
				"System arm/disarm",
				"Event history",
				"User management",
				"Push notifications",
			],
		},
	];

	const systemBrands = [
		"Hikvision",
		"Dahua",
		"Axis",
		"Bosch",
		"Honeywell",
		"Ajax",
		"Texecom",
		"Pyronix",
		"Videofied",
		"Risco",
		"Galaxy",
		"HKC",
	];

	const benefits = [
		{
			title: "Crime Deterrent",
			description:
				"Visible security systems significantly reduce the likelihood of break-ins",
		},
		{
			title: "Remote Monitoring",
			description: "Check your property from anywhere using smartphone apps",
		},
		{
			title: "Evidence Collection",
			description:
				"High-quality footage for police investigations and insurance claims",
		},
		{
			title: "Peace of Mind",
			description: "24/7 protection whether you're home or away",
		},
		{
			title: "Insurance Savings",
			description:
				"Many insurers offer discounts for professionally installed systems",
		},
		{
			title: "Scalable Solutions",
			description: "Systems that grow with your changing security needs",
		},
	];

	return (
		<>
			<PageHero
				title="Security Systems"
				subtitle="Advanced security technology to protect what matters most"
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
								State-of-the-Art Security Systems
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security specializes in designing and installing
								comprehensive security systems tailored to your specific needs.
								With over 30 years of experience, we provide cutting-edge
								solutions that offer maximum protection and peace of mind.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our systems combine the latest technology with professional
								installation to create robust security solutions.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Every installation begins with a free security assessment where
								we identify vulnerabilities and recommend the most effective
								solutions within your budget.
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
							<SectionTitle variant="h4">Integrated Solutions</SectionTitle>
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
								{securityServices.slice(0, 4).map((service, index) => (
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
								{benefits.slice(0, 4).map((benefit, index) => (
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
								A professional security system provides more than just
								protection - it offers intelligence and control.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								From reducing insurance premiums to providing verifiable
								evidence, our systems are a long-term investment in your safety.
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

			<ContactSection
				title="Secure Your Property Today"
				subtitle="Contact us for a free security assessment and no-obligation quote"
			/>
		</>
	);
}
