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
				backgroundImage="/images/jw/security-camera.jpg"
				minHeight="45vh"
				centerContent={true}
			/>
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid
							item
							xs={12}
							md={6}>
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
								installation to create robust security solutions. From simple
								CCTV setups to complex integrated systems, we ensure your
								property is protected 24/7.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Every installation begins with a free security assessment where
								we identify vulnerabilities and recommend the most effective
								solutions within your budget. Our NSI Gold certified installers
								ensure compliance with all relevant standards.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/surveillance-cam-cctv-system-isolated-on-white-background-3d-illustration.jpg"
								alt="Modern security system"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
					</Grid>

					<Box sx={{ mt: 8, mb: 6 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4, textAlign: "center" }}>
							Security System Solutions
						</SectionTitle>
						<Grid
							container
							spacing={4}>
							{securityServices.map((service, index) => (
								<Grid
									item
									xs={12}
									md={6}
									lg={4}
									key={index}>
									<ServiceCard>
										<IconBox>{service.icon}</IconBox>
										<Typography
											variant="h5"
											sx={{ mb: 2, fontWeight: 600, color: JW_BLUE }}>
											{service.title}
										</Typography>
										<Typography
											paragraph
											sx={{ mb: 2, color: "text.secondary" }}>
											{service.description}
										</Typography>
										<List dense>
											{service.features.map((feature, idx) => (
												<ListItem
													key={idx}
													sx={{ py: 0.5, px: 0 }}>
													<ListItemIcon sx={{ minWidth: 30 }}>
														<CheckCircleOutlineIcon
															sx={{ fontSize: 18, color: JW_CYAN }}
														/>
													</ListItemIcon>
													<ListItemText
														primary={feature}
														primaryTypographyProps={{
															fontSize: "0.9rem",
															color: "text.secondary",
														}}
													/>
												</ListItem>
											))}
										</List>
									</ServiceCard>
								</Grid>
							))}
						</Grid>
					</Box>

					<Box sx={{ my: 8 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Benefits of Professional Security Systems
						</SectionTitle>
						<Grid
							container
							spacing={3}>
							{benefits.map((benefit, index) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									key={index}>
									<FeatureCard>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
											{benefit.title}
										</Typography>
										<Typography
											variant="body2"
											sx={{ color: "text.secondary" }}>
											{benefit.description}
										</Typography>
									</FeatureCard>
								</Grid>
							))}
						</Grid>
					</Box>

					<Box sx={{ my: 8 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Trusted Security Brands
						</SectionTitle>
						<Typography
							paragraph
							sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
							We work with industry-leading manufacturers to ensure reliable,
							high-quality security solutions:
						</Typography>
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
							{systemBrands.map((brand, index) => (
								<Chip
									key={index}
									label={brand}
									sx={{
										"fontSize": "0.95rem",
										"py": 2,
										"px": 1,
										"backgroundColor": alpha(JW_BLUE, 0.05),
										"&:hover": {
											backgroundColor: alpha(JW_CYAN, 0.1),
										},
									}}
								/>
							))}
						</Box>
					</Box>

					<Grid
						container
						spacing={6}
						sx={{ mt: 4 }}>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/home-ip-video-surveillance-concept.jpg"
								alt="Security monitoring"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<SectionTitle variant="h5">
								Professional Installation & Support
							</SectionTitle>
							<List>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Free security assessment and consultation" />
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="NSI Gold certified installers" />
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Comprehensive system training" />
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="24/7 technical support" />
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Annual maintenance contracts" />
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Insurance approved systems" />
								</ListItem>
							</List>
							<Button
								variant="contained"
								size="large"
								component="a"
								href="/contact"
								sx={{
									"mt": 3,
									"backgroundColor": JW_CYAN,
									"&:hover": {
										backgroundColor: JW_BLUE,
									},
								}}>
								Get a Free Security Assessment
							</Button>
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
