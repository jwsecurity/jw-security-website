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
} from "@mui/material";
import PageHero from "../common/PageHero";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import { styled, alpha } from "@mui/material/styles";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));
import ContactSection from "../common/ContactSection";
import BusinessIcon from "@mui/icons-material/Business";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
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

const ProductCard = styled(Card)(({ theme }) => ({
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

const FeatureBox = styled(Box)(({ theme }) => ({
	"padding": theme.spacing(2),
	"backgroundColor": alpha(JW_BLUE, 0.03),
	"borderRadius": "8px",
	"border": `1px solid ${alpha(JW_BLUE, 0.1)}`,
	"marginBottom": theme.spacing(2),
	"transition": "background-color 0.3s",
	"&:hover": {
		backgroundColor: alpha(JW_BLUE, 0.05),
	},
}));

const FAQItem = styled(Box)(({ theme }) => ({
	"marginBottom": theme.spacing(3),
	"paddingBottom": theme.spacing(3),
	"borderBottom": `1px solid ${alpha("#000", 0.1)}`,
	"&:last-child": {
		marginBottom: 0,
		paddingBottom: 0,
		borderBottom: "none",
	},
}));

export default function ElectronicKeyPadsPage() {
	const keypads = [
		{
			title: "Digital Code Keypads",
			description:
				"Simple code based keypad locks for homes, offices, staff rooms, storage areas, and internal doors where key control needs to be easier.",
			icon: <LockIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Advanced Smart Keypads",
			description:
				"Smart keypad systems with multiple user codes, temporary codes, app based control where available, and better access management for busier sites.",
			icon: <BusinessIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Biometric Entry Systems",
			description:
				"Biometric access options for properties that need extra control, including fingerprint access where suitable for the door, users, and site requirements.",
			icon: <HomeIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
	];

	const features = [
		"Keyless entry with no everyday keys to carry",
		"Multiple user codes for family, staff, tenants, or visitors",
		"Temporary codes for cleaners, contractors, or short term access",
		"Code changes when staff leave or tenants move out",
		"Audit trail options on selected systems",
		"Battery powered options with low battery warnings",
		"Mechanical key override on suitable models",
		"Weather resistant options for external doors",
		"Possible integration with alarms or smart systems where compatible",
	];

	const faqs = [
		{
			question: "Are Electronic Keypads Secure?",
			answer:
				"Yes, when the right keypad lock is fitted to the right door and set up correctly. We check the door, frame, lock type, and usage before recommending a system.",
		},
		{
			question: "Do You Provide Keypad Lock Installation In London?",
			answer:
				"Yes. JW Security provides keypad lock installation in London for homes, offices, shops, managed buildings, and commercial properties.",
		},
		{
			question: "Can You Install A Digital Lock On Any Door?",
			answer:
				"Digital lock installation depends on the door type, frame, thickness, and existing hardware. We assess the door first and recommend a suitable option.",
		},
		{
			question: "What Happens If The Batteries Die?",
			answer:
				"Most quality keypad locks give low battery warnings before power runs out. Many also include override options, depending on the model fitted.",
		},
		{
			question: "Can I Change The Access Codes Yourself?",
			answer:
				"Yes. Most electronic keypad systems allow you to change user codes. We show you how to manage the basic settings after installation.",
		},
		{
			question: "Are Keyless Entry Systems Good For Businesses?",
			answer:
				"Yes. A keyless entry system can help offices, shops, staff areas, and managed buildings control access without handing out lots of physical keys.",
		},
		{
			question: "Do You Cover London And Surrey?",
			answer:
				"Yes. We install electronic keypads, digital locks, and keyless entry systems across London, Surrey, and surrounding areas.",
		},
	];

	return (
		<>
			<PageHero
				title="Electronic Keypads In London"
				subtitle="Keypad lock installation, electronic lock installation, and keyless entry systems for homes, offices, managed buildings, and commercial properties across London and Surrey."
				backgroundImage="/images/jw/home-ip-video-surveillance-concept.webp"
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
								alt="Modern electronic security system"
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
								Electronic Lock Installation For Easier Access
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Keys get lost. Copies get passed around. Staff change, tenants move out, and shared entrances become harder to manage over time.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Electronic keypads make access easier to control without relying on standard keys for every user. A code can be changed when needed, temporary access can be given to the right person, and doors can be managed more cleanly across homes, offices, rental properties, and shared buildings.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides keypad lock installation in London for residential and commercial properties. We install digital locks, electronic keypad systems, and keyless entry systems where controlled access is needed without the hassle of traditional keys.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Before fitting anything, we check the door, frame, lock type, daily use, and access needs. Some sites need a simple digital keypad. Others need a smarter setup with user codes, audit trails, or integration with existing security systems.
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
							<SectionTitle variant="h4">
								Our Electronic Keypad Solutions
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We supply and install electronic keypads for different doors, buildings, and access needs across London and Surrey.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Some properties only need a basic code lock for one door. Others need a stronger keyless entry system for staff areas, shared entrances, or managed sites with several users.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{keypads.map((keypad, index) => (
									<Grid
										size={{ xs: 12, sm: 6, md: 12 }}
										key={index}>
										<ProductCard
											sx={{
												p: 2,
												display: "flex",
												alignItems: "center",
												gap: 2,
											}}>
											<Box
												sx={{
													flexShrink: 0,
													bgcolor: alpha(JW_CYAN, 0.1),
													p: 1,
													borderRadius: "50%",
												}}>
												{React.cloneElement(keypad.icon, {
													sx: { fontSize: 24 },
												})}
											</Box>
											<Box>
												<Typography
													variant="subtitle1"
													sx={{ fontWeight: 600, color: JW_BLUE }}>
													{keypad.title}
												</Typography>
												<Typography
													variant="body2"
													sx={{ color: alpha("#000", 0.6) }}>
													{keypad.description}
												</Typography>
											</Box>
										</ProductCard>
									</Grid>
								))}
							</Grid>
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
								alt="Smart keypad security"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">Key Features And Benefits</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Electronic keypads are useful when too many people need access, keys keep going missing, or a door needs better control without making entry difficult for authorised users.
							</Typography>
							<Grid
								container
								spacing={2}>
								{features.map((feature, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<Box
											sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
											<CheckCircleOutlineIcon
												sx={{ color: JW_CYAN, mr: 1, fontSize: 20 }}
											/>
											<Typography
												variant="body2"
												sx={{ fontWeight: 500 }}>
												{feature}
											</Typography>
										</Box>
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

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<SectionTitle
						variant="h4"
						sx={{ mb: 4 }}>
						Our Electronic Keypad Process
					</SectionTitle>
					<Grid
						container
						spacing={4}>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith-in-workshop-makes-new-key-use-grinding-engraving-machine-1.webp"
								alt="Locksmith workshop professional"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Typography
								variant="h6"
								sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
								1. Consultation And Assessment
							</Typography>
							<Typography
								variant="body1"
								sx={{ mb: 3 }}>
								We look at the door, current lock, access needs, number of users, and whether the keypad is for a home, office, shared entrance, or commercial site.
							</Typography>

							<Typography
								variant="h6"
								sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
								2. Product Selection
							</Typography>
							<Typography
								variant="body1"
								sx={{ mb: 3 }}>
								We recommend a suitable digital lock or electronic keypad system based on the door type, usage, budget, and level of control required.
							</Typography>

							<Typography
								variant="h6"
								sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
								3. Professional Installation
							</Typography>
							<Typography
								variant="body1"
								sx={{ mb: 3 }}>
								Our team installs the keypad lock, checks the fit, tests the mechanism, and makes sure the door opens, closes, and locks as it should.
							</Typography>

							<Typography
								variant="h6"
								sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
								4. Code Setup & User Guidance
							</Typography>
							<Typography variant="body1">
								We set up the initial access codes and show you how to use the system, change codes, and manage basic settings.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<SectionTitle
						variant="h4"
						sx={{ mb: 4 }}>
						Frequently Asked Questions
					</SectionTitle>
					{faqs.map((faq, index) => (
						<FAQItem key={index}>
							<Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
								<HelpOutlineIcon
									sx={{ color: JW_CYAN, mr: 1.5, mt: 0.5, flexShrink: 0 }}
								/>
								<Typography
									variant="h6"
									sx={{ fontWeight: 600, color: JW_BLUE }}>
									{faq.question}
								</Typography>
							</Box>
							<Typography
								variant="body1"
								sx={{ ml: 5, color: alpha("#000", 0.7) }}>
								{faq.answer}
							</Typography>
						</FAQItem>
					))}
				</Container>
			</Box>

			<ContactSection
				title="Upgrade Your Access Control"
				subtitle="Need a better way to manage entry without relying on standard keys? JW Security installs electronic keypads, digital locks, and keyless entry systems for homes, businesses, managed buildings, and commercial sites across London and Surrey."
			/>
		</>
	);
}
