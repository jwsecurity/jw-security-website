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
} from "@mui/material";
import PageHero from "./common/PageHero";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
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
				"Regular inspections of fire doors to ensure they meet British Standards and provide adequate protection.",
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
				"Comprehensive maintenance services to keep fire doors functioning correctly and compliant with regulations.",
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
				"Professional installation of new fire doors with certified products meeting all safety standards.",
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
			title: "Fire Alarm Systems",
			icon: <WarningAmberIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Design, installation, and maintenance of fire detection and alarm systems for all property types.",
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
			title: "Regulatory Reform (Fire Safety) Order 2005",
			description:
				"We ensure all our work complies with the Fire Safety Order requirements for commercial premises.",
		},
		{
			title: "British Standards Compliance",
			description:
				"All installations and maintenance work meets relevant British Standards including BS 476, BS 5839, and BS 5266.",
		},
		{
			title: "Building Regulations",
			description:
				"Our fire door installations comply with Approved Document B of the Building Regulations.",
		},
	];

	return (
		<>
			<PageHero
				title="Fire Protection Services"
				subtitle="Comprehensive fire safety solutions including fire doors, alarms, and emergency systems"
				backgroundImage="/images/jw/pexels-tima-miroshnichenko-6790761-scaled.jpg"
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
								src="/images/jw/cctv-camera-on-white-ceiling.jpg"
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
								Complete Fire Protection Solutions
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides comprehensive fire protection services to
								safeguard your property and ensure compliance with all relevant
								fire safety regulations. Our expert team specializes in the
								installation, maintenance, and inspection of fire safety systems
								throughout London.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								From fire door installations and inspections to complete fire
								alarm systems and emergency lighting, we deliver solutions that
								protect lives and property.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								All our work is carried out by qualified technicians and
								complies with British Standards and the Regulatory Reform (Fire
								Safety) Order 2005.
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
							<SectionTitle variant="h4">Professional Fire Safety</SectionTitle>
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
							<SectionTitle variant="h4">Compliance & Standards</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Safety is not just a priority, it&apos;s a requirement. We
								ensure every piece of work meets the highest UK safety
								certifications.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								From FD30 doors to addressable alarm systems, our solutions are
								built to conform to British Standards BS 476, BS 5839, and BS
								5266.
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
								src="/images/jw/pexels-life-of-pix-8092-scaled.jpg"
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

			<ContactSection
				title="Need Fire Protection Services?"
				subtitle="Contact us today for a free fire safety assessment and quotation"
			/>
		</>
	);
}
