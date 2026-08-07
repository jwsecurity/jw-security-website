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
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import React from "react";
import PageHero from "../common/PageHero";
import ContactSection from "../common/ContactSection";
import { styled, alpha } from "@mui/material/styles";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SecurityIcon from "@mui/icons-material/Security";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SearchIcon from "@mui/icons-material/Search";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: JW_CYAN,
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: JW_BLUE,
}));

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

const ProcessStep = styled(Box)(({ theme }) => ({
	"display": "flex",
	"alignItems": "flex-start",
	"gap": theme.spacing(2.5),
	"padding": theme.spacing(3),
	"borderRadius": "10px",
	"backgroundColor": "white",
	"boxShadow": "0 2px 10px rgba(0,0,0,0.05)",
	"transition": "transform 0.3s, box-shadow 0.3s",
	"&:hover": {
		transform: "translateY(-3px)",
		boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
	},
}));

export default function MasterKeySystemsPage() {
	const services = [
		{
			title: "Master Key System Installation",
			description:
				"We design and install master key systems for buildings that need simple, controlled access across several doors, rooms, floors, or units.",
			icon: <KeyIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Key Hierarchy Planning",
			description:
				"We help plan who needs access to which doors, from individual users to managers, facilities teams, and building owners.",
			icon: <AccountTreeIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Lock Cylinder Setup",
			description:
				"We supply and fit suitable cylinders so the master key system works across the required doors without affecting day to day use.",
			icon: <LockIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Restricted Key Control",
			description:
				"Where needed, we can use restricted keys to help reduce unauthorised duplication and keep key control tighter.",
			icon: <SecurityIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
	];

	const commonSites = [
		"Offices",
		"Schools",
		"Landlord properties",
		"Residential blocks",
		"Managed buildings",
		"Commercial premises",
		"Estates",
		"Staff areas",
		"Storage rooms",
		"Communal entrances",
		"Plant rooms",
		"Maintenance areas",
	];

	const benefits = [
		"Fewer keys to carry",
		"Better control over who can access each area",
		"Easier key management for landlords and facilities teams",
		"Useful for staff changes and tenant changes",
		"Restricted key options available where needed",
		"Cleaner access setup for buildings with multiple doors",
		"Better organisation for schools, offices, estates, and managed sites",
	];

	const processSteps = [
		{
			title: "Site Review",
			description:
				"We check the building layout, number of doors, current cylinders, and access points.",
			icon: <SearchIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
		{
			title: "Access Plan",
			description:
				"We agree who needs access to each area and how the key levels should be arranged.",
			icon: <AssignmentIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
		{
			title: "Cylinder And Key Setup",
			description:
				"We supply and fit suitable cylinders, then prepare the required keys for each access level.",
			icon: <BuildIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
		{
			title: "Handover",
			description:
				"We label and explain the key structure, so the building owner or manager understands how the system works.",
			icon: <HandshakeIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
	];

	const whereItWorks = [
		{
			title: "Offices",
			description:
				"Controlled access for staff, managers, and visitors across meeting rooms, storage, and shared areas.",
			icon: <BusinessIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
		{
			title: "Schools",
			description:
				"Separate access for teachers, admin, caretakers, and secure areas while keeping buildings manageable.",
			icon: <SchoolIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
		{
			title: "Residential Blocks",
			description:
				"Access control for tenants, communal areas, plant rooms, and building management teams.",
			icon: <ApartmentIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
		{
			title: "Commercial Premises",
			description:
				"Structured access for staff, contractors, and maintenance teams across large commercial buildings.",
			icon: <EngineeringIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
	];

	const faqData = [
		{
			question: "Do You Install Master Key Systems In London?",
			answer:
				"Yes. JW Security provides master key system installation in London for offices, schools, landlords, managed buildings, estates, and commercial premises.",
		},
		{
			question: "What Is A Master Key System?",
			answer:
				"A master key system lets different people access different doors, while selected authorised users can open multiple doors with one key.",
		},
		{
			question: "Who Needs A Master Key System?",
			answer:
				"Master key systems are useful for landlords, schools, offices, facilities teams, managing agents, estates, and buildings with several access levels.",
		},
		{
			question: "Can You Set Different Access Levels?",
			answer:
				"Yes. We can create access levels for staff, managers, tenants, cleaners, contractors, maintenance teams, and building owners.",
		},
		{
			question: "Can You Use Restricted Keys?",
			answer:
				"Yes. Restricted key control can help reduce unauthorised key copying and keep the system easier to manage.",
		},
		{
			question: "Do You Replace The Existing Locks?",
			answer:
				"In many cases, cylinders are replaced or changed so the master key system works correctly. We check the doors first and explain what is needed.",
		},
		{
			question: "What Areas Do You Cover?",
			answer:
				"We cover London, Surrey, and surrounding areas. Call us if you want to confirm your location.",
		},
	];

	return (
		<>
			<PageHero
				title="Master Key Systems In London"
				subtitle="Master key system installation in London for landlords, schools, offices, managed buildings, and commercial properties that need controlled key access."
				backgroundImage="/images/jw/keys-set-on-blue-background-door-lock-keys-and-safes-for-property-security-and-house-protection.webp"
				minHeight="45vh"
				centerContent={true}
			/>

			{/* Introduction Section */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith.webp"
								alt="Master key system installation in London"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4" component="h2">
								Controlled Access Without Too Many Keys
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Managing keys across a building can get messy fast. Staff need
								access to certain rooms. Managers need wider access. Tenants may
								only need one door. Cleaners, contractors, and maintenance teams
								may need limited entry at set times or for certain areas.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides master key system installation in London
								for properties that need better control without giving every
								person a large bunch of keys.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								A well planned master key system lets different users open only
								the doors they are meant to use, while authorised people can
								access several areas with one key.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Services Section */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4" component="h2">
								Our Master Key System Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We provide comprehensive master key solutions from initial
								planning through to installation and handover, tailored to your
								building&apos;s specific access requirements.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Each system is designed around the building layout and how
								people actually use the site. Before installation, we look at
								the doors, current locks, number of users, access levels, and
								whether restricted key control is needed.
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

			{/* Where Master Key Systems Work Best */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Box sx={{ textAlign: "center", mb: 6 }}>
						<SectionTitle
							variant="h4"
							component="h2"
							sx={{
								"display": "inline-block",
								"&::after": {
									left: "50%",
									transform: "translateX(-50%)",
								},
							}}>
							Where Master Key Systems Work Best
						</SectionTitle>
						<Typography
							sx={{
								maxWidth: "700px",
								mx: "auto",
								mt: 2,
								color: alpha("#000", 0.6),
								fontSize: "1.05rem",
							}}>
							A master key system is useful when one building has several
							people, doors, and access levels.
						</Typography>
					</Box>
					<Grid
						container
						spacing={3}>
						{whereItWorks.map((item, index) => (
							<Grid
								size={{ xs: 12, sm: 6, md: 3 }}
								key={index}>
								<FeatureBox sx={{ p: 3, textAlign: "center" }}>
									<Box sx={{ color: JW_CYAN, mb: 2 }}>
										{React.cloneElement(item.icon, {
											sx: { fontSize: 40 },
										})}
									</Box>
									<Typography
										variant="subtitle1"
										sx={{ fontWeight: 700, color: JW_BLUE, mb: 1 }}>
										{item.title}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											color: alpha("#000", 0.7),
											fontSize: "0.85rem",
										}}>
										{item.description}
									</Typography>
								</FeatureBox>
							</Grid>
						))}
					</Grid>
					<Box
						sx={{
							mt: 4,
							display: "flex",
							flexWrap: "wrap",
							gap: 1,
							justifyContent: "center",
						}}>
						{commonSites.map((site) => (
							<Chip
								key={site}
								label={site}
								sx={{
									backgroundColor: alpha(JW_BLUE, 0.05),
									color: JW_BLUE,
									border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
								}}
							/>
						))}
					</Box>
				</Container>
			</Box>

			{/* How It Works Section */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Box sx={{ textAlign: "center", mb: 6 }}>
						<SectionTitle
							variant="h4"
							component="h2"
							sx={{
								"display": "inline-block",
								"&::after": {
									left: "50%",
									transform: "translateX(-50%)",
								},
							}}>
							How A Master Key System Works
						</SectionTitle>
						<Typography
							sx={{
								maxWidth: "700px",
								mx: "auto",
								mt: 2,
								color: alpha("#000", 0.6),
								fontSize: "1.05rem",
							}}>
							A master key system uses a planned key structure. One user may
							have a key for one room. A manager may have access to a whole
							floor. The building owner may hold a master key for wider access.
						</Typography>
					</Box>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith-in-installing-new-house-door-lock-hand-holds-the-screwdriver.webp"
								alt="Master key system installation process"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4" component="h2">Our Installation Process</SectionTitle>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
								{processSteps.map((step, index) => (
									<ProcessStep key={index}>
										<Box
											sx={{
												width: 50,
												height: 50,
												minWidth: 50,
												borderRadius: "50%",
												bgcolor: alpha(JW_CYAN, 0.1),
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}>
											{step.icon}
										</Box>
										<Box>
											<Typography
												variant="subtitle1"
												sx={{
													fontWeight: 600,
													color: JW_BLUE,
													mb: 0.5,
												}}>
												{step.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.65) }}>
												{step.description}
											</Typography>
										</Box>
									</ProcessStep>
								))}
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* CTA Banner */}
			<CTABanner sx={{ py: 8 }}>
				<Container>
					<Typography
						variant="h3"
						component="h2"
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

			{/* Benefits Section */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4" component="h2">
								Benefits Of A Master Key System
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A master key system brings structure and control to how access
								is managed across your building, reducing complexity while
								improving security.
							</Typography>
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
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4" component="h2">
								Why Choose JW Security?
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security works with landlords, schools, offices, managing
								agents, estates, and commercial clients across London and
								Surrey.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We understand that a master key system needs planning, not
								guesswork. If the key structure is wrong, the building becomes
								harder to manage.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our team checks the site, plans the access levels, installs the
								right hardware, and explains the system clearly before
								handover.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								You get a master key locksmith in London who understands both
								the lock side and the day to day access needs of busy
								buildings.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* FAQ Section */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Box sx={{ textAlign: "center", mb: 6 }}>
						<SectionTitle
							variant="h4"
							component="h2"
							sx={{
								"display": "inline-block",
								"&::after": {
									left: "50%",
									transform: "translateX(-50%)",
								},
							}}>
							Common Questions
						</SectionTitle>
						<Typography
							sx={{
								maxWidth: "700px",
								mx: "auto",
								mt: 2,
								color: alpha("#000", 0.6),
								fontSize: "1.05rem",
							}}>
							Answers to frequently asked questions about master key systems in
							London
						</Typography>
					</Box>
					<Box
						sx={{
							"maxWidth": "900px",
							"mx": "auto",
							"& .MuiAccordion-root": {
								"bgcolor": "white",
								"borderRadius": "8px",
								"boxShadow": "0 5px 20px rgba(0,0,0,0.05)",
								"&:not(:last-child)": {
									mb: 2,
								},
								"&:before": {
									display: "none",
								},
							},
							"& .MuiAccordionSummary-root": {
								px: 3,
								py: 1.5,
							},
							"& .MuiAccordionDetails-root": {
								px: 3,
								py: 2,
								borderTop: `1px solid ${alpha("#000", 0.08)}`,
							},
						}}>
						{faqData.map((faq, index) => (
							<Accordion
								key={index}
								disableGutters
								elevation={0}
								sx={{
									"overflow": "hidden",
									"transition": "all 0.3s ease",
									"&:hover": {
										boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
									},
								}}>
								<AccordionSummary
									expandIcon={
										<ExpandMoreIcon sx={{ color: JW_CYAN }} />
									}>
									<Typography
										component="h3"
										sx={{
											fontWeight: 600,
											color: JW_BLUE,
											fontSize: "1rem",
										}}>
										{faq.question}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography
										sx={{
											color: alpha("#000", 0.7),
											lineHeight: 1.7,
										}}>
										{faq.answer}
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Box>
				</Container>
			</Box>

			{/* Service Areas */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
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
								Our master key system installation service covers London,
								Surrey, and surrounding areas.
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
				title="Need A Master Key System Installed?"
				subtitle="JW Security provides master key system installation in London for landlords, schools, offices, managed buildings, estates, and commercial premises. Call us for a free quote or to discuss your building's access requirements."
			/>
		</>
	);
}
