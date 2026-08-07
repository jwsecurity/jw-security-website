"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	useMediaQuery,
} from "@mui/material";
import React from "react";
import PageHero from "./common/PageHero";
import { alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import { styled, useTheme } from "@mui/material/styles";

// Material UI Icons
import LockIcon from "@mui/icons-material/Lock";
import BuildIcon from "@mui/icons-material/Build";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import KeyIcon from "@mui/icons-material/Key";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ConstructionIcon from "@mui/icons-material/Construction";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import FenceIcon from "@mui/icons-material/Fence";
import WindowIcon from "@mui/icons-material/Window";
import DialpadIcon from "@mui/icons-material/Dialpad";
import ContentCutIcon from "@mui/icons-material/ContentCut";

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
	"display": "flex",
	"flexDirection": "column",
	"transition": "all 0.3s ease",
	"overflow": "hidden",
	"borderRadius": "12px",
	"border": "1px solid",
	"borderColor": alpha(JW_BLUE, 0.08),
	"boxShadow": "0 4px 12px rgba(0,0,0,0.05)",
	"&:hover": {
		"transform": "translateY(-8px)",
		"boxShadow": "0 12px 28px rgba(0,0,0,0.12)",
		"borderColor": JW_CYAN,
		"& .service-icon": {
			transform: "scale(1.1)",
			backgroundColor: JW_CYAN,
			color: "white",
		},
		"& .learn-more-text": {
			color: JW_CYAN,
		},
		"& .arrow-icon": {
			transform: "translateX(4px)",
		},
	},
}));

const ServiceIconBox = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	backgroundColor: alpha(JW_CYAN, 0.1),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2),
	transition: "all 0.3s ease",
	color: JW_BLUE,
}));

const CategorySection = styled(Box)(({ theme }) => ({
	"marginBottom": theme.spacing(8),
	"&:last-child": {
		marginBottom: 0,
	},
}));

export default function ServicesPage() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	// All 20 services grouped by appropriate categories with Icons
	const allServices = [
		// Core Services
		{
			title: "Fire Protection",
			description:
				"Comprehensive fire safety solutions including alarm systems, emergency lighting, and extinguisher services.",
			icon: <LocalFireDepartmentIcon sx={{ fontSize: 30 }} />,
			link: "/services/fire-protection",
			category: "core",
			featured: true,
		},
		{
			title: "Fire Door Inspection",
			description:
				"Thorough inspections by certified professionals to ensure your fire doors meet all current safety regulations.",
			icon: <FactCheckIcon sx={{ fontSize: 30 }} />,
			link: "/services/fire-door-inspection",
			category: "core",
		},
		{
			title: "Fire Door Installation",
			description:
				"Professional installation of certified fire doors for optimal safety, compliance, and peace of mind.",
			icon: <DoorFrontIcon sx={{ fontSize: 30 }} />,
			link: "/services/fire-door-installation",
			category: "core",
		},
		{
			title: "Fire Door Maintenance",
			description:
				"Regular maintenance, adjustments, and repairs to keep your fire doors functioning perfectly over time.",
			icon: <HomeRepairServiceIcon sx={{ fontSize: 30 }} />,
			link: "/services/fire-door-maintenance",
			category: "core",
		},
		{
			title: "Fire Risk Assessment",
			description:
				"Expert assessments to identify and mitigate potential fire hazards in your commercial or residential property.",
			icon: <AssignmentLateIcon sx={{ fontSize: 30 }} />,
			link: "/services/fire-risk-assessment",
			category: "core",
		},
		{
			title: "Locksmith",
			description:
				"Professional locksmith solutions with 24/7 emergency access and high-security locks for homes and businesses.",
			icon: <LockIcon sx={{ fontSize: 30 }} />,
			link: "/services/locksmith",
			category: "core",
			featured: true,
		},
		{
			title: "Lock Replacement",
			description:
				"Quick and secure lock replacement and upgrade services to instantly enhance your property's security.",
			icon: <VpnKeyIcon sx={{ fontSize: 30 }} />,
			link: "/services/lock-replacement",
			category: "core",
		},
		{
			title: "Master Key Systems",
			description:
				"Custom master key suites designed for convenient, tiered, and controlled access across your building.",
			icon: <KeyIcon sx={{ fontSize: 30 }} />,
			link: "/services/master-key-systems",
			category: "core",
		},
		{
			title: "Carpentry",
			description:
				"Expert carpentry and joinery services including door installation, window repairs, and kitchen fitting.",
			icon: <BuildIcon sx={{ fontSize: 30 }} />,
			link: "/services/carpentry",
			category: "core",
			featured: true,
		},

		// Emergency Services
		{
			title: "Emergency Response",
			description:
				"Rapid response services for all your urgent security, access, and locksmithing needs, day or night.",
			icon: <NotificationImportantIcon sx={{ fontSize: 30 }} />,
			link: "/services/emergency",
			category: "emergency",
		},
		{
			title: "Emergency Door Opening",
			description:
				"Fast, reliable emergency locksmith services available 24/7. We'll get you back inside with minimal damage.",
			icon: <MeetingRoomIcon sx={{ fontSize: 30 }} />,
			link: "/services/emergency-door-opening",
			category: "emergency",
		},
		{
			title: "Burglary Repairs",
			description:
				"Immediate response to secure your property after a break-in. We quickly repair damaged doors, frames, and locks.",
			icon: <ConstructionIcon sx={{ fontSize: 30 }} />,
			link: "/services/burglary-repairs",
			category: "emergency",
		},

		// Security Solutions
		{
			title: "Security Systems",
			description:
				"Modern CCTV, alarm systems, and access control solutions professionally installed to protect your property.",
			icon: <SecurityIcon sx={{ fontSize: 30 }} />,
			link: "/services/security",
			category: "security",
			featured: true,
		},
		{
			title: "Security Surveys",
			description:
				"Professional security assessments to identify vulnerabilities and provide recommendations for enhanced protection.",
			icon: <ManageSearchIcon sx={{ fontSize: 30 }} />,
			link: "/services/security-surveys",
			category: "security",
		},
		{
			title: "Locks and Safes",
			description:
				"Supply and installation of high-quality locks and safes from trusted brands to secure your most prized valuables.",
			icon: <EnhancedEncryptionIcon sx={{ fontSize: 30 }} />,
			link: "/services/locks-and-safes",
			category: "security",
		},
		{
			title: "Shutters, Gates & Grilles",
			description:
				"Custom-designed security shutters, physical gates, and window grilles for enhanced perimeter protection.",
			icon: <FenceIcon sx={{ fontSize: 30 }} />,
			link: "/services/shutters-gates-grilles",
			category: "security",
		},

		// Specialist Services
		{
			title: "UPVC Doors & Windows",
			description:
				"Specialist repair and replacement of UPVC door mechanisms, window hinges, and handles.",
			icon: <WindowIcon sx={{ fontSize: 30 }} />,
			link: "/services/upvc-doors-windows",
			category: "specialist",
		},
		{
			title: "UPVC Door Locks",
			description:
				"Expert diagnosis, repair, replacement, and upgrades specifically tailored for all types of UPVC door locks.",
			icon: <LockIcon sx={{ fontSize: 30 }} />,
			link: "/services/upvc-door-locks",
			category: "specialist",
		},
		{
			title: "Electronic Key Pads",
			description:
				"Modern keyless entry systems installed for highly convenient and secure access control in any property.",
			icon: <DialpadIcon sx={{ fontSize: 30 }} />,
			link: "/services/electronic-key-pads",
			category: "specialist",
		},
		{
			title: "Key Cutting",
			description:
				"Professional key cutting and duplication services for all types of keys including specialized and security keys.",
			icon: <ContentCutIcon sx={{ fontSize: 30 }} />,
			link: "/services/key-cutting",
			category: "specialist",
		},
	];

	const serviceCategories = [
		{
			id: "core",
			title: "Core Services",
			description: "Our primary security, fire safety, and carpentry solutions",
		},
		{
			id: "emergency",
			title: "Emergency Services",
			description: "24/7 rapid response when you need us most",
		},
		{
			id: "security",
			title: "Security Solutions",
			description: "Advanced security systems and perimeter assessments",
		},
		{
			id: "specialist",
			title: "Specialist Services",
			description: "Specialized locking mechanisms and access solutions",
		},
	];

	return (
		<>
			<PageHero
				title="Our Services"
				subtitle="Comprehensive security solutions for residential and commercial properties across London"
				backgroundImage="/images/jw/locksmith-maintenance.webp"
				minHeight="45vh"
				centerContent={true}
			/>
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container maxWidth="lg">
					<Box sx={{ mb: 6, textAlign: "center" }}>
						<SectionTitle
							variant="h4"
							component="h2"
							sx={{
								"mb": 3,
								"&::after": { left: "50%", transform: "translateX(-50%)" },
							}}>
							Complete Security & Safety Solutions
						</SectionTitle>
						<Typography
							sx={{
								maxWidth: "800px",
								mx: "auto",
								fontSize: "1.1rem",
								color: "text.secondary",
								lineHeight: 1.7,
							}}>
							With over 30 years of experience, JW Security provides
							professional locksmith, fire protection, security systems, and
							carpentry services throughout London. All our work is fully
							guaranteed and carried out by certified professionals.
						</Typography>
					</Box>

					{serviceCategories.map((category) => {
						const categoryServices = allServices.filter(
							(service) => service.category === category.id,
						);

						if (categoryServices.length === 0) return null;

						return (
							<CategorySection key={category.id}>
								<Box sx={{ mb: 4 }}>
									<Typography
										variant="h5"
										component="h2"
										sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
										{category.title}
									</Typography>
									<Typography sx={{ color: "text.secondary" }}>
										{category.description}
									</Typography>
								</Box>

								<Grid
									container
									spacing={4}>
									{categoryServices.map((service, index) => (
										<Grid
											size={{ xs: 12, sm: 6, md: 4 }}
											key={index}>
											<ServiceCard>
												{service.icon && (
													<CardContent sx={{ pb: 0, pt: 3 }}>
														<ServiceIconBox className="service-icon">
															{service.icon}
														</ServiceIconBox>
													</CardContent>
												)}
												<CardContent
													sx={{
														flexGrow: 1,
														pt: service.icon ? 1 : 3,
														display: "flex",
														flexDirection: "column",
													}}>
													<Typography
														variant="h6"
														component="h3"
														sx={{
															fontWeight: 600,
															mb: 2,
															color: JW_BLUE,
															fontSize: "1.2rem",
														}}>
														{service.title}
													</Typography>
													<Typography
														variant="body2"
														sx={{
															mb: 3,
															color: "text.secondary",
															lineHeight: 1.6,
															flexGrow: 1,
														}}>
														{service.description}
													</Typography>
													<Box
														sx={{
															display: "flex",
															alignItems: "center",
															gap: 0.5,
															mt: "auto",
														}}>
														<Typography
															component="a"
															href={service.link}
															className="learn-more-text"
															sx={{
																"color": JW_BLUE,
																"textDecoration": "none",
																"fontWeight": 500,
																"fontSize": "0.95rem",
																"transition": "color 0.3s ease",
																"&:hover": {
																	color: JW_CYAN,
																},
															}}>
															Learn More
														</Typography>
														<ArrowForwardIcon
															className="arrow-icon"
															sx={{
																fontSize: 18,
																color: JW_BLUE,
																transition: "transform 0.3s ease",
															}}
														/>
													</Box>
												</CardContent>
											</ServiceCard>
										</Grid>
									))}
								</Grid>
							</CategorySection>
						);
					})}
					<Box
						sx={{
							mt: 8,
							p: 4,
							backgroundColor: alpha(JW_CYAN, 0.05),
							borderRadius: "12px",
							border: `1px solid ${alpha(JW_CYAN, 0.2)}`,
							textAlign: "center",
						}}>
						<Typography
							variant="h5"
							component="h2"
							sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
							Need Emergency Assistance?
						</Typography>
						<Typography sx={{ mb: 3, color: "text.secondary" }}>
							Available 24/7 for emergency locksmith and security services
						</Typography>
						<Button
							variant="contained"
							size="large"
							component="a"
							href="tel:02086467931"
							sx={{
								"backgroundColor": JW_CYAN,
								"color": "white",
								"px": 4,
								"py": 1.5,
								"fontSize": "1.1rem",
								"&:hover": {
									backgroundColor: JW_BLUE,
								},
							}}>
							Call Now: 0208 646 7931
						</Button>
					</Box>
				</Container>
			</Box>
			<ContactSection
				title="Ready to Secure Your Property?"
				subtitle="Contact us today for a free consultation and quotation"
			/>
		</>
	);
}
