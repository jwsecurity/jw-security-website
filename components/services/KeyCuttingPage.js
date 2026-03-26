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
	Paper,
	Chip,
	Button,
} from "@mui/material";
import React from "react";
import PageHero from "../common/PageHero";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { styled, alpha } from "@mui/material/styles";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));
import ContactSection from "../common/ContactSection";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
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
	"transition": "transform 0.3s, box-shadow 0.3s",
	"boxShadow": "0 4px 12px rgba(0,0,0,0.08)",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
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

const FeatureBox = styled(Paper)(({ theme }) => ({
	"padding": theme.spacing(3),
	"backgroundColor": alpha(JW_CYAN, 0.05),
	"borderRadius": "10px",
	"height": "100%",
	"transition": "transform 0.3s, box-shadow 0.3s",
	"&:hover": {
		transform: "translateY(-3px)",
		boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
	},
}));

export default function KeyCuttingPage() {
	const services = [
		{
			title: "Mobile Key Cutting",
			description:
				"We come to you with our fully equipped mobile workshop, cutting keys on-site for maximum convenience.",
			icon: <DirectionsCarIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Registered Key Systems",
			description:
				"We offer unique registered key systems that can only be duplicated with proper authorization.",
			icon: <VerifiedUserIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "All Key Types",
			description:
				"From standard house keys to high-security keys, we can duplicate virtually any key type.",
			icon: <VpnKeyIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "While You Wait Service",
			description:
				"Most keys cut within minutes while you wait, minimizing disruption to your day.",
			icon: <AccessTimeIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
	];

	const keyTypes = [
		"Standard cylinder keys",
		"Mortise lock keys",
		"Yale type keys",
		"High-security keys",
		"Restricted profile keys",
		"Master key systems",
		"Padlock keys",
		"Window lock keys",
		"Cabinet and furniture keys",
		"Safe keys",
		"Car keys (non-transponder)",
		"Garage and shed keys",
	];

	const benefits = [
		"Convenient mobile service - we come to you",
		"Professional key cutting equipment on board",
		"Registered key systems for enhanced security",
		"Experienced technicians ensure perfect cuts",
		"Competitive pricing with no call-out charges",
		"Same-day service available",
		"All keys tested before we leave",
	];

	const registeredKeyFeatures = [
		{
			title: "Enhanced Security",
			description:
				"Keys can only be duplicated by authorized personnel with proper identification",
			icon: <VerifiedUserIcon />,
		},
		{
			title: "Control Over Key Copies",
			description:
				"You decide who can have keys cut, preventing unauthorized duplication",
			icon: <VpnKeyIcon />,
		},
		{
			title: "Unique Key Profiles",
			description:
				"Registered keys use patented profiles that standard key cutters cannot duplicate",
			icon: <ContentCutIcon />,
		},
		{
			title: "Perfect for Businesses",
			description:
				"Ideal for commercial properties where key control is essential",
			icon: <LocationOnIcon />,
		},
	];

	return (
		<>
			<PageHero
				title="Mobile Key Cutting Service"
				subtitle="Professional on-site key cutting with our fully equipped mobile workshop"
				backgroundImage="/images/jw/keys-set-on-blue-background-door-lock-keys-and-safes-for-property-security-and-house-protection.jpg"
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
								src="/images/jw/locksmith-in-workshop-makes-new-key-use-grinding-engraving-machine.jpg"
								alt="Key cutting machine in action"
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
								Professional Mobile Key Cutting
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security offers a comprehensive mobile key cutting service
								throughout South London and Surrey. Our fully equipped vans
								carry professional key cutting equipment, allowing us to cut
								keys at your location for ultimate convenience.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Whether you need spare keys for your home, business, or are
								locked out and need immediate assistance, our mobile service
								saves you time and hassle. We carry a wide range of key blanks
								and can cut most keys on the spot.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								For enhanced security, we also offer registered key systems
								where keys can only be duplicated with proper authorization.
								This gives you complete control over who has access to your
								property.
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
							<SectionTitle variant="h4">Our Key Cutting Services</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We provide a wide array of specialized key cutting solutions
								on-site. From standard residential locks to advanced
								high-security systems, our mobile workshops are ready for
								anything.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our quick and efficient service ensures that your day remains
								uninterrupted, with most keys cut accurately in just minutes
								while you wait.
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
										<ServiceCard sx={{ p: 2.5 }}>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													mb: 1.5,
													gap: 1.5,
												}}>
												<Box
													sx={{
														bgcolor: alpha(JW_CYAN, 0.1),
														p: 1,
														borderRadius: "50%",
														display: "flex",
													}}>
													{React.cloneElement(service.icon, {
														sx: { fontSize: 24 },
													})}
												</Box>
												<Typography
													variant="subtitle1"
													sx={{ fontWeight: 600, color: JW_BLUE }}>
													{service.title}
												</Typography>
											</Box>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.65) }}>
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

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">Registered Key System</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our unique registered key system provides the highest level of
								key control for your property. Perfect for businesses,
								landlords, and security-conscious homeowners.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								By ensuring that duplication is only available to registered
								holders, we provide a definitive barrier against unauthorized
								access and key theft.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{registeredKeyFeatures.map((feature, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<FeatureBox sx={{ p: 2 }}>
											<Box sx={{ color: JW_CYAN, mb: 1 }}>
												{React.cloneElement(feature.icon, {
													sx: { fontSize: 32 },
												})}
											</Box>
											<Typography
												variant="subtitle1"
												sx={{ fontWeight: 700, color: JW_BLUE, mb: 0.5 }}>
												{feature.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.7), fontSize: "0.85rem" }}>
												{feature.description}
											</Typography>
										</FeatureBox>
									</Grid>
								))}
							</Grid>
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
						CALL US TODAY: 0208 646 7931
					</Button>
				</Container>
			</CTABanner>

			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">Types of Keys We Cut</SectionTitle>
							<Grid
								container
								spacing={1}
								sx={{ mt: 2 }}>
								{keyTypes.map((keyType, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<ListItem sx={{ py: 0.5 }}>
											<ListItemIcon sx={{ minWidth: "35px" }}>
												<CheckCircleOutlineIcon
													sx={{ color: JW_CYAN, fontSize: "1.2rem" }}
												/>
											</ListItemIcon>
											<ListItemText
												primary={keyType}
												primaryTypographyProps={{ fontSize: "0.95rem" }}
											/>
										</ListItem>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">
								Why Choose Our Mobile Service
							</SectionTitle>
							<List>
								{benefits.map((benefit, index) => (
									<ListItem
										key={index}
										sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary={benefit} />
									</ListItem>
								))}
							</List>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Box sx={{ textAlign: "center" }}>
						<Paper
							sx={{
								p: 4,
								backgroundColor: "white",
								borderRadius: "10px",
								boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
							}}>
							<Typography
								variant="h5"
								sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
								Service Areas
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", mb: 3 }}>
								Our mobile key cutting service covers all areas of South London
								and Surrey
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									gap: 1,
									justifyContent: "center",
								}}>
								{[
									"Wandsworth",
									"Putney",
									"Wimbledon",
									"Richmond",
									"Kingston",
									"Croydon",
									"Sutton",
									"Epsom",
									"Clapham",
									"Battersea",
									"Tooting",
									"Balham",
								].map((area) => (
									<Chip
										key={area}
										label={area}
										sx={{
											backgroundColor: alpha(JW_BLUE, 0.05),
											color: JW_BLUE,
											border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
										}}
									/>
								))}
							</Box>
						</Paper>
					</Box>
				</Container>
			</Box>

			<ContactSection
				title="Need Keys Cut Today?"
				subtitle="Contact us for fast, professional mobile key cutting service. We come to you with all the equipment needed to cut your keys on-site."
			/>
		</>
	);
}
