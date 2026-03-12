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
} from "@mui/material";
import PageHero from "../common/PageHero";
import HomeIcon from "@mui/icons-material/Home";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "../common/ContactSection";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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

const AreaCard = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	backgroundColor: alpha(JW_BLUE, 0.03),
	borderRadius: "8px",
	border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
	marginBottom: theme.spacing(2),
}));

export default function KensingtonPage() {
	const localAreas = [
		{
			name: "South Kensington",
			landmarks: [
				"Natural History Museum",
				"Victoria & Albert Museum",
				"Royal Albert Hall",
			],
			description:
				"Home to world-famous museums and prestigious residences requiring high-security solutions.",
		},
		{
			name: "Holland Park",
			landmarks: ["Holland Park", "Design Museum", "Opera Holland Park"],
			description:
				"An affluent residential area with period properties and modern luxury apartments.",
		},
		{
			name: "High Street Kensington",
			landmarks: [
				"Kensington Palace",
				"Kensington Gardens",
				"Shopping district",
			],
			description:
				"A bustling commercial area with heritage buildings and modern retail spaces.",
		},
		{
			name: "Notting Hill Gate",
			landmarks: [
				"Portobello Road Market",
				"Gate Theatre",
				"Historic townhouses",
			],
			description:
				"Famous for its market and colourful Victorian houses requiring specialist security.",
		},
	];

	const emergencyServices = [
		{
			title: "Emergency Lockout Response",
			description:
				"Locked out of your Kensington property? Our rapid response team typically arrives within 20-30 minutes.",
			features: [
				"Non-destructive entry methods",
				"Available 24/7, including bank holidays",
				"Specialist tools for period property locks",
				"Immediate lock replacement if needed",
			],
		},
		{
			title: "Burglary Damage Repairs",
			description:
				"Swift response to secure your property after a break-in, with emergency boarding and lock replacement.",
			features: [
				"Police-approved security upgrades",
				"Insurance documentation provided",
				"Same-day door and frame repairs",
				"Enhanced security recommendations",
			],
		},
	];

	const localKnowledge = [
		{
			title: "Listed Building Expertise",
			content:
				"Many Kensington properties are Grade II listed. We understand conservation area requirements and work with appropriate materials and methods that maintain architectural integrity while enhancing security.",
		},
		{
			title: "High-Value Property Security",
			content:
				"Kensington hosts some of London's most valuable properties. We provide discrete, sophisticated security solutions including biometric access control and integrated alarm systems suitable for luxury residences.",
		},
		{
			title: "Embassy District Services",
			content:
				"With numerous embassies and diplomatic residences in the area, we offer specialized high-security installations meeting diplomatic security standards.",
		},
	];

	return (
		<>
			<PageHero
				title="Locksmith & Security Services in Kensington"
				subtitle="Trusted local security experts serving Royal Borough residents and businesses since 1991"
				backgroundImage="/images/jw/pexels-burst-374861.jpg"
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
								Your Local Kensington Security Specialists
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								For over three decades, JW Security has been the trusted choice
								for locksmith and security services throughout Kensington. From
								the grand period properties of Holland Park to the modern
								apartments near High Street Kensington, we understand the unique
								security requirements of this prestigious London borough.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our Kensington team combines traditional locksmithing expertise
								with cutting-edge security technology. Whether you need
								emergency assistance at your South Kensington townhouse or a
								comprehensive security upgrade for your Notting Hill retail
								premises, we deliver professional solutions tailored to your
								specific needs.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								We pride ourselves on our rapid response times across
								Kensington, typically arriving within 20-30 minutes for
								emergencies. Our local knowledge means we understand the
								area&apos;s architecture, from Victorian conversions to modern
								developments, ensuring we always have the right solution.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
								<ServiceCard>
									<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
										<LocationOnIcon
											sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }}
										/>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, color: JW_BLUE }}>
											Coverage Across Kensington
										</Typography>
									</Box>
									<List dense>
										{localAreas.map((area, index) => (
											<ListItem
												key={index}
												sx={{ py: 0.5 }}>
												<ListItemIcon sx={{ minWidth: 30 }}>
													<CheckCircleOutlineIcon
														sx={{ fontSize: 18, color: JW_CYAN }}
													/>
												</ListItemIcon>
												<ListItemText primary={area.name} />
											</ListItem>
										))}
									</List>
								</ServiceCard>

								<ServiceCard>
									<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
										<AccessTimeIcon
											sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }}
										/>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, color: JW_BLUE }}>
											Rapid Response Times
										</Typography>
									</Box>
									<Typography
										variant="body2"
										sx={{ color: "text.secondary", mb: 2 }}>
										Emergency locksmith services available 24/7
									</Typography>
									<List dense>
										<ListItem sx={{ py: 0.5 }}>
											<ListItemText
												primary="20-30 minutes average response"
												secondary="For emergency callouts in Kensington"
											/>
										</ListItem>
										<ListItem sx={{ py: 0.5 }}>
											<ListItemText
												primary="Same-day appointments"
												secondary="For non-emergency security upgrades"
											/>
										</ListItem>
									</List>
								</ServiceCard>
							</Box>
						</Grid>
					</Grid>

					<Box sx={{ mt: 8, mb: 6 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Areas We Serve in Kensington
						</SectionTitle>
						<Grid
							container
							spacing={3}>
							{localAreas.map((area, index) => (
								<Grid
									item
									xs={12}
									md={6}
									key={index}>
									<AreaCard>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
											{area.name}
										</Typography>
										<Typography
											variant="body2"
											sx={{ color: "text.secondary", mb: 2 }}>
											{area.description}
										</Typography>
										<Typography
											variant="body2"
											sx={{ fontWeight: 500 }}>
											Key landmarks:
										</Typography>
										<List
											dense
											sx={{ mt: 0.5 }}>
											{area.landmarks.map((landmark, idx) => (
												<ListItem
													key={idx}
													sx={{ py: 0, px: 0 }}>
													<ListItemIcon sx={{ minWidth: 25 }}>
														<LocationOnIcon
															sx={{ fontSize: 16, color: JW_CYAN }}
														/>
													</ListItemIcon>
													<ListItemText
														primary={landmark}
														primaryTypographyProps={{ fontSize: "0.875rem" }}
													/>
												</ListItem>
											))}
										</List>
									</AreaCard>
								</Grid>
							))}
						</Grid>
					</Box>

					<Box sx={{ mt: 8, mb: 6 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Emergency Locksmith Services in Kensington
						</SectionTitle>
						<Grid
							container
							spacing={4}>
							{emergencyServices.map((service, index) => (
								<Grid
									item
									xs={12}
									md={6}
									key={index}>
									<ServiceCard>
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
														primaryTypographyProps={{ fontSize: "0.9rem" }}
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
							Understanding Kensington&apos;s Unique Security Needs
						</SectionTitle>
						<Grid
							container
							spacing={3}>
							{localKnowledge.map((item, index) => (
								<Grid
									item
									xs={12}
									md={4}
									key={index}>
									<Paper
										sx={{
											p: 3,
											height: "100%",
											backgroundColor: alpha(JW_CYAN, 0.05),
										}}>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
											{item.title}
										</Typography>
										<Typography
											variant="body2"
											sx={{ color: "text.secondary", lineHeight: 1.7 }}>
											{item.content}
										</Typography>
									</Paper>
								</Grid>
							))}
						</Grid>
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
								src="/images/jw/confident-locksmith-looking-at-camera.jpg"
								alt="Professional locksmith serving Kensington"
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
								Comprehensive Security Solutions
							</SectionTitle>
							<List>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<SecurityIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText
										primary="High-Security Lock Installation"
										secondary="British Standard BS3621 locks for insurance compliance"
									/>
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<HomeIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText
										primary="Smart Home Security"
										secondary="Yale, Banham, and other premium smart lock systems"
									/>
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<BusinessIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText
										primary="Commercial Security"
										secondary="Master key systems and access control for businesses"
									/>
								</ListItem>
								<ListItem sx={{ py: 1 }}>
									<ListItemIcon>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText
										primary="CCTV & Alarm Systems"
										secondary="Professional installation and maintenance"
									/>
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
								Get Emergency Help Now
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<ContactSection
				title="Need a Locksmith in Kensington?"
				subtitle="Call us now for immediate assistance or to schedule a security consultation"
			/>
		</>
	);
}
