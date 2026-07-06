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
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityIcon from "@mui/icons-material/Security";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

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

export default function LockReplacementPage() {
	const services = [
		{
			title: "Lock Replacement",
			description:
				"We replace old, damaged, worn, or unreliable locks on homes, offices, shops, shared buildings, and commercial premises.",
			icon: <LockIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Lock Change",
			description:
				"Lock change in London for lost keys, moved tenants, staff changes, property handovers, and access control concerns.",
			icon: <LockOpenIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "High Security Locks",
			description:
				"High security locks in London for properties that need stronger protection, better key control, anti snap cylinders, or insurance approved options.",
			icon: <SecurityIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Lock Upgrades",
			description:
				"Security upgrades for doors that still work but need better locks, stronger cylinders, or more suitable hardware.",
			icon: <UpgradeIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
	];

	const reasonsToReplace = [
		"Keys have been lost or stolen",
		"A tenant, employee, or contractor has left",
		"The lock feels stiff, loose, or unreliable",
		"The key turns badly or gets stuck",
		"The door has been forced or damaged",
		"You have moved into a new property",
		"You do not know who has spare keys",
		"The lock is old or below the standard you want",
		"You want to upgrade to high security locks",
	];

	const processSteps = [
		{
			title: "Door And Lock Check",
			description:
				"We check the current lock, door condition, frame, cylinder type, and any signs of damage or wear.",
			icon: <SearchIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
		{
			title: "Security Advice",
			description:
				"We explain whether a like for like replacement is enough or whether a better lock would make sense.",
			icon: <TipsAndUpdatesIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
		{
			title: "Lock Replacement",
			description:
				"Our team replaces the lock, cylinder, or related hardware and checks that the door operates correctly.",
			icon: <BuildIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
		{
			title: "Final Testing",
			description:
				"We test the key, latch, locking action, and door alignment before leaving the property.",
			icon: <VerifiedIcon sx={{ fontSize: 28, color: JW_CYAN }} />,
		},
	];

	const highSecurityFeatures = [
		{
			title: "Anti Snap Cylinders",
			description:
				"Cylinders designed to resist snapping attacks, one of the most common methods of forced entry.",
			icon: <SecurityIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
		{
			title: "Restricted Key Options",
			description:
				"Keys that cannot be easily copied, giving you better control over who has access.",
			icon: <VpnKeyIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
		{
			title: "Insurance Approved Locks",
			description:
				"Locks that meet insurance requirements, helping you stay compliant with your property policy.",
			icon: <VerifiedIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
		{
			title: "Stronger Deadlocks",
			description:
				"Heavy duty deadlocks for doors that need a higher level of physical security.",
			icon: <LockIcon sx={{ fontSize: 32, color: JW_CYAN }} />,
		},
	];

	const faqData = [
		{
			question: "Do You Provide Lock Replacement In London?",
			answer:
				"Yes. JW Security provides lock replacement in London for homes, landlords, businesses, offices, shops, managed buildings, and commercial premises.",
		},
		{
			question: "Do You Offer Lock Change In London?",
			answer:
				"Yes. We carry out lock change in London after lost keys, tenant changes, staff changes, property handovers, break ins, and security concerns.",
		},
		{
			question: "What Is Included In Your Lock Replacement Service?",
			answer:
				"Our lock replacement service in London includes checking the current lock, advising on suitable options, fitting the replacement, and testing the door before we leave.",
		},
		{
			question: "Can You Fit High Security Locks In London?",
			answer:
				"Yes. We can fit high security locks in London, including stronger cylinders, anti snap options, restricted key systems, and insurance approved locks where suitable.",
		},
		{
			question: "Should I Change Locks After Moving Into A New Property?",
			answer:
				"Yes, it is often sensible. If you do not know who has spare keys, a lock change gives you control over access again.",
		},
		{
			question: "Can You Replace Locks For Landlords And Businesses?",
			answer:
				"Yes. We work with landlords, managing agents, offices, shops, and businesses that need lock changes after tenant moves, staff changes, or lost keys.",
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
				title="Lock Replacement In London"
				subtitle="Lock replacement, lock change, and high security lock upgrades in London for homes, landlords, businesses, and managed properties."
				backgroundImage="/images/jw/carpenter-installing-door-lock-in-the-new-house-with-a-screwdriver.webp"
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
								src="/images/jw/locksmith-in-installing-new-house-door-lock-hand-holds-the-screwdriver.webp"
								alt="Lock replacement service in London"
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
								Lock Change And Replacement For London Properties
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Locks wear out, keys go missing, tenants move, staff leave, and
								sometimes a lock simply no longer feels secure.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides lock replacement in London for homes,
								flats, offices, shops, landlords, and managed buildings. We
								replace damaged locks, outdated locks, failed mechanisms, and
								locks that need changing after lost keys, tenant changes, or
								security concerns.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A lock change is not always about damage. Sometimes it is about
								control. If you do not know who has a copy of the key, replacing
								the lock is often the cleanest way to regain control of access.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Before changing anything, we check the door, lock type,
								cylinder, frame, and the level of security needed for that
								property.
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
							<SectionTitle variant="h4">
								Our Lock Replacement Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We provide a full range of lock replacement and lock change
								services for residential and commercial properties across London
								and Surrey.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Each lock replacement is handled with care, from initial
								assessment through to final testing, ensuring your door operates
								correctly and your property is secure.
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

			{/* When To Replace Section */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								When Should You Replace A Lock?
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A lock should be changed when it is no longer secure, reliable,
								or under your control. Common reasons include:
							</Typography>
							<List>
								{reasonsToReplace.map((reason, index) => (
									<ListItem
										key={index}
										sx={{ py: 0.5 }}>
										<ListItemIcon sx={{ minWidth: "35px" }}>
											<WarningAmberIcon
												sx={{ color: JW_CYAN, fontSize: "1.2rem" }}
											/>
										</ListItemIcon>
										<ListItemText
											primary={reason}
											primaryTypographyProps={{ fontSize: "0.95rem" }}
										/>
									</ListItem>
								))}
							</List>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith.webp"
								alt="When to replace your locks"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* High Security Locks Section */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								High Security Locks And Better Key Control
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Some properties need more than a basic lock replacement. JW
								Security can advise on high security locks in London for homes,
								landlords, offices, shops, managed buildings, and commercial
								premises.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								The right lock depends on the door, frame, use of the property,
								and who needs access. We do not fit stronger hardware just for
								the sake of it. We explain what makes sense for the door and
								what level of security is worth considering.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{highSecurityFeatures.map((feature, index) => (
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
												sx={{
													fontWeight: 700,
													color: JW_BLUE,
													mb: 0.5,
												}}>
												{feature.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{
													color: alpha("#000", 0.7),
													fontSize: "0.85rem",
												}}>
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

			{/* Process Section */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Box sx={{ textAlign: "center", mb: 6 }}>
						<SectionTitle
							variant="h4"
							sx={{
								"display": "inline-block",
								"&::after": {
									left: "50%",
									transform: "translateX(-50%)",
								},
							}}>
							Our Lock Replacement Process
						</SectionTitle>
						<Typography
							sx={{
								maxWidth: "700px",
								mx: "auto",
								mt: 2,
								color: alpha("#000", 0.6),
								fontSize: "1.05rem",
							}}>
							Every lock replacement follows a careful process to ensure the
							right solution for your property.
						</Typography>
					</Box>
					<Grid
						container
						spacing={3}>
						{processSteps.map((step, index) => (
							<Grid
								size={{ xs: 12, sm: 6, md: 3 }}
								key={index}>
								<ProcessStep
									sx={{
										flexDirection: "column",
										alignItems: "center",
										textAlign: "center",
										height: "100%",
									}}>
									<Box
										sx={{
											width: 60,
											height: 60,
											borderRadius: "50%",
											bgcolor: alpha(JW_CYAN, 0.1),
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											mb: 2,
										}}>
										{step.icon}
									</Box>
									<Typography
										variant="subtitle1"
										sx={{
											fontWeight: 600,
											color: JW_BLUE,
											mb: 1,
										}}>
										{step.title}
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: alpha("#000", 0.65) }}>
										{step.description}
									</Typography>
								</ProcessStep>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			{/* CTA Banner */}
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

			{/* Residential & Commercial Section */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								sx={{
									"position": "relative",
									"borderRadius": "10px",
									"overflow": "hidden",
									"height": { xs: 280, md: 340 },
									"boxShadow": "0 12px 40px rgba(0,0,0,0.15)",
									"&:hover img": {
										transform: "scale(1.05)",
									},
								}}>
								<Box
									component="img"
									src="/images/jw/residential.webp"
									alt="Residential lock replacement"
									sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										transition: "0.5s ease",
									}}
								/>
								<Box
									sx={{
										position: "absolute",
										inset: 0,
										background:
											"linear-gradient(to top, rgba(0,17,34,0.95), rgba(0,0,0,0.15))",
									}}
								/>
								<Box
									sx={{
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										p: 3,
										color: "#fff",
									}}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1.5,
											mb: 1.5,
										}}>
										<Box
											sx={{
												width: 44,
												height: 44,
												borderRadius: "50%",
												background: JW_CYAN,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}>
											<HomeIcon />
										</Box>
										<Typography
											variant="h6"
											sx={{
												color: "white",
												fontWeight: 700,
												fontSize: "1.1rem",
											}}>
											RESIDENTIAL
										</Typography>
									</Box>
									<Typography
										sx={{
											color: "white",
											lineHeight: 1.7,
											fontSize: "0.95rem",
										}}>
										Lock changes for homeowners and landlords after moving in,
										lost keys, tenant changes, or security concerns.
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								sx={{
									"position": "relative",
									"borderRadius": "10px",
									"overflow": "hidden",
									"height": { xs: 280, md: 340 },
									"boxShadow": "0 12px 40px rgba(0,0,0,0.15)",
									"&:hover img": {
										transform: "scale(1.05)",
									},
								}}>
								<Box
									component="img"
									src="/images/jw/commercial.webp"
									alt="Commercial lock replacement"
									sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										transition: "0.5s ease",
									}}
								/>
								<Box
									sx={{
										position: "absolute",
										inset: 0,
										background:
											"linear-gradient(to top, rgba(0,17,34,0.95), rgba(0,0,0,0.15))",
									}}
								/>
								<Box
									sx={{
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										p: 3,
										color: "#fff",
									}}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1.5,
											mb: 1.5,
										}}>
										<Box
											sx={{
												width: 44,
												height: 44,
												borderRadius: "50%",
												background: JW_CYAN,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}>
											<BusinessIcon />
										</Box>
										<Typography
											variant="h6"
											sx={{
												color: "white",
												fontWeight: 700,
												fontSize: "1.1rem",
											}}>
											COMMERCIAL
										</Typography>
									</Box>
									<Typography
										sx={{
											color: "white",
											lineHeight: 1.7,
											fontSize: "0.95rem",
										}}>
										Lock replacement for businesses and managed properties after
										staff changes, key control issues, break ins, or planned
										security upgrades.
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
					<Box sx={{ mt: 4, textAlign: "center" }}>
						<Typography
							paragraph
							sx={{ fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "800px", mx: "auto" }}>
							JW Security has worked with London and Surrey properties since
							1991. We understand the lock types commonly used across homes,
							flats, offices, shops, managed buildings, and commercial
							premises. You get straightforward advice, suitable lock options,
							and work carried out by a qualified and insured team.
						</Typography>
					</Box>
				</Container>
			</Box>

			{/* FAQ Section */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Box sx={{ textAlign: "center", mb: 6 }}>
						<SectionTitle
							variant="h4"
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
							Answers to frequently asked questions about lock replacement in
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
								Our lock replacement service covers London, Surrey, and
								surrounding areas.
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
				title="Need A Lock Replaced?"
				subtitle="JW Security provides lock replacement in London for homes, landlords, businesses, offices, shops, managed buildings, and commercial premises. Call us for a free quote or to discuss your lock replacement needs."
			/>
		</>
	);
}
