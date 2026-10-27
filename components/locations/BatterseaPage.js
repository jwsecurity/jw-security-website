"use client";
import React from "react";
import Link from "next/link";
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
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import PageHero from "../common/PageHero";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "../common/ContactSection";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SharedServicesSection from "./SharedServicesSection";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const SectionTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 700,
	marginBottom: theme.spacing(2),
	color: JW_BLUE,
	position: "relative",
	paddingBottom: theme.spacing(1.5),
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

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: JW_CYAN,
	padding: theme.spacing(8, 0),
	textAlign: "center",
	color: JW_BLUE,
}));

const ServiceCard = styled(Card)(({ theme }) => ({
	height: "100%",
	padding: theme.spacing(3),
	transition: "all 0.3s ease",
	boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
	border: "1px solid",
	borderColor: "transparent",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
		borderColor: alpha(JW_CYAN, 0.5),
	},
}));

export default function BatterseaPage() {
	const localAreas = [
		"Battersea Park",
		"Battersea Square",
		"Battersea Power Station",
		"Nine Elms",
		"Northcote Road",
		"Queenstown Road",
		"Battersea Rise",
		"Battersea Reach",
		"Falcon Road",
		"Clapham Junction",
	];

	const residentialServices = [
		"Lock changes and lock replacement",
		"BS3621 locks where appropriate",
		"uPVC door lock and mechanism repairs",
		"Window lock fitting and repairs",
		"Emergency door opening",
		"Burglary repairs and securing work",
		"Master key systems for managed residential buildings",
	];

	const faqData = [
		{
			question: "Do You Provide Locksmith Services In Battersea?",
			answer:
				"Yes. JW Security provides locksmith and security services throughout Battersea, including residential properties, businesses, landlords and managed buildings.",
		},
		{
			question: "Do You Cover Battersea SW11?",
			answer:
				"Yes. We cover Battersea SW11 and surrounding areas, including Battersea Park, Battersea Square, Northcote Road, Queenstown Road and Clapham Junction.",
		},
		{
			question: "Can You Help With Emergency Lockouts In Battersea?",
			answer:
				"Yes. JW Security provides 24/7 emergency locksmith assistance for lost keys, failed locks, damaged locking mechanisms and urgent access problems.",
		},
		{
			question: "Do You Provide Fire Door Inspection And Maintenance In Battersea?",
			answer:
				"Yes. We provide fire door inspection and maintenance services for suitable commercial premises, residential blocks and managed buildings. Our team can assess visible defects and advise on repairs or further work.",
		},
		{
			question: "Can You Replace Locks In Battersea Homes And Flats?",
			answer:
				"Yes. We replace locks on houses, flats and rental properties, including suitable security cylinders, mortice locks and uPVC locking mechanisms.",
		},
		{
			question: "Do You Work With Commercial Properties And Managing Agents?",
			answer:
				"Yes. We support offices, shops, landlords and managing agents with commercial locksmith services, master key systems, lock replacement and security improvements.",
		},
		{
			question: "Do You Provide Master Key Systems For Battersea Properties?",
			answer:
				"Yes. JW Security provides master key systems for suitable residential and commercial buildings where different users require controlled access to specific areas.",
		},
		{
			question: "Which Areas Near Battersea Do You Cover?",
			answer:
				"Our service area includes Battersea, Clapham, Wandsworth, Chelsea, Fulham and surrounding London neighbourhoods. Contact our team to confirm coverage for your property.",
		},
	];

	return (
		<>
			<PageHero
				title="Locksmith & Security Services in Battersea"
				subtitle="Professional locksmith and security services for homes, flats, businesses, landlords and managed buildings across Battersea, SW11, and nearby areas."
				backgroundImage="/images/jw/pexels-cottonbro-5089178-scaled.webp"
				minHeight="45vh"
				centerContent={true}
			/>

			{/* Section 1: Intro (Image Left, Text Right) */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith-hands-maintenance-and-handyman-with-tools-home-renovation-and-fixing-change-door-locks.webp"
								alt="Battersea Locksmith Team"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Battersea’s Trusted Locksmith And Security Team
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security provides professional locksmith and security services
								across Battersea for homeowners, tenants, landlords, businesses,
								managing agents and residential property developments.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								From lock replacement and emergency door opening to commercial
								locksmith work, fire door inspections and property security
								improvements, our team helps keep properties secure and access
								systems working as they should.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
								Whether you need a locksmith in Battersea for a flat near
								Battersea Park, a business around Battersea Square, a riverside
								apartment along Battersea Reach or a managed building close to
								Nine Elms, we provide practical security solutions suited to your
								property.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 2: Coverage (Text Left, Call Box Right) */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Serving Battersea And Nearby Areas
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security covers Battersea and surrounding locations for
								emergency locksmith assistance, planned lock changes, commercial
								security work and fire protection services.
							</Typography>
							<Typography
								variant="h6"
								sx={{ fontWeight: 600, mb: 2, color: JW_BLUE }}>
								We provide services across:
							</Typography>
							<Grid
								container
								spacing={1}>
								{localAreas.map((area, index) => (
									<Grid
										size={{ xs: 6 }}
										key={index}>
										<Box
											sx={{ display: "flex", alignItems: "center", py: 0.5 }}>
											<LocationOnIcon
												sx={{
													mr: 1,
													color: JW_CYAN,
													fontSize: 20,
													flexShrink: 0,
												}}
											/>
											<Typography variant="body1">{area}</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								sx={{
									p: 4,
									bgcolor: "white",
									borderRadius: 4,
									boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
									border: `1px solid ${alpha(JW_CYAN, 0.2)}`,
								}}>
								<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
									<PhoneIcon sx={{ fontSize: 28, color: JW_CYAN, mr: 1.5 }} />
									<Typography
										variant="h5"
										sx={{ fontWeight: 700, color: JW_BLUE }}>
										Emergency? Call Now
									</Typography>
								</Box>
								<Typography
									variant="h3"
									sx={{ fontWeight: 800, color: JW_CYAN, mb: 1 }}>
									0208 646 7931
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "text.secondary", mb: 4 }}>
									24/7 emergency locksmith assistance across Battersea, SW11 and
									nearby areas.
								</Typography>
								<Button
									variant="contained"
									fullWidth
									size="large"
									component={Link}
									href="/contact"
									sx={{
										bgcolor: JW_BLUE,
										py: 2,
										fontWeight: 700,
										"&:hover": { bgcolor: JW_CYAN, color: JW_BLUE },
									}}>
									GET A FREE SECURITY AUDIT
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 3: Maintaining Standards (Text Left, Image Right) */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Maintaining Reliable Security Standards
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Battersea includes Victorian terraces, converted flats, modern
								riverside apartments, commercial premises and managed
								residential developments. Security requirements can vary
								considerably between these properties, especially where shared
								entrances, communal fire doors and multiple access points are
								involved.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security supports homeowners, landlords, businesses and
								property managers with lock replacement, emergency locksmith
								services, master key systems, fire door inspections and wider
								security improvements. We focus on identifying the issue,
								recommending suitable solutions and completing work with care
								for the property.
							</Typography>
							<Grid
								container
								spacing={3}>
								<Grid size={{ xs: 6 }}>
									<Box
										sx={{
											textAlign: "center",
											p: 2,
											bgcolor: alpha(JW_CYAN, 0.1),
											borderRadius: 2,
										}}>
										<Typography
											variant="h5"
											sx={{ fontWeight: 800, color: JW_BLUE }}>
											30+ Years
										</Typography>
										<Typography
											variant="caption"
											sx={{ fontWeight: 600 }}>
											OF EXPERIENCE
										</Typography>
									</Box>
								</Grid>
								<Grid size={{ xs: 6 }}>
									<Box
										sx={{
											textAlign: "center",
											p: 2,
											bgcolor: alpha(JW_BLUE, 0.1),
											borderRadius: 2,
										}}>
										<Typography
											variant="h5"
											sx={{ fontWeight: 800, color: JW_CYAN }}>
											Qualified
										</Typography>
										<Typography
											variant="caption"
											sx={{ fontWeight: 600 }}>
											& INSURED TEAM
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith-in-installing-new-house-door-lock-hand-holds-the-screwdriver.webp"
								alt="Maintaining Security Standards in Battersea"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 4: Parallax / Banner */}
			<Box
				sx={{
					py: 12,
					position: "relative",
					backgroundImage:
						'linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url("/images/jw/bunch-of-different-keys.webp")',
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
					color: "white",
				}}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 8 }}>
							<Typography
								variant="h3"
								sx={{ fontWeight: 800, mb: 3, color: "white" }}>
								Understanding Battersea’s Security Needs
							</Typography>
							<Typography
								variant="h6"
								sx={{
									mb: 4,
									fontWeight: 400,
									opacity: 0.9,
									color: "white",
									lineHeight: 1.8,
								}}>
								Battersea has a mix of traditional residential streets, busy
								commercial areas and newer apartment developments around the
								riverside and Nine Elms. A family home may need replacement locks
								or improved window security, while a managed building may require
								fire door maintenance, controlled access or a master key system.
								JW Security helps property owners and managers choose security
								solutions that suit their buildings, daily use and maintenance
								requirements.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 5: Residential Locksmith Services (Image Left, Text Right) */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/closeup-of-a-professional-locksmith-installing-a-new-lock-on-a-house-exterior-door-with-the-inside.webp"
								alt="Residential Locksmith Services Battersea"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Residential Locksmith Services In Battersea
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security provides residential locksmith services in Battersea
								for houses, converted flats, rental properties, apartments and
								shared residential buildings.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Whether you have recently moved into a property, need a faulty
								lock replaced or require assistance after losing your keys, our
								locksmiths can assess the door and recommend suitable repair or
								replacement options.
							</Typography>
							<Typography
								variant="h6"
								sx={{ fontWeight: 600, mb: 1.5, color: JW_BLUE }}>
								Our residential services include:
							</Typography>
							<List sx={{ mb: 3 }}>
								{residentialServices.map((feature, idx) => (
									<ListItem
										key={idx}
										sx={{ py: 0.5, px: 0 }}>
										<ListItemIcon sx={{ minWidth: 35 }}>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary={feature} />
									</ListItem>
								))}
							</List>
							<Typography
								sx={{ fontSize: "1.05rem", color: "text.secondary" }}>
								For additional home security solutions, explore our{" "}
								<Box
									component={Link}
									href="/residential"
									sx={{
										color: JW_CYAN,
										fontWeight: 700,
										textDecoration: "underline",
										"&:hover": { color: JW_BLUE },
									}}>
									Residential Security Services
								</Box>
								.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 6: Commercial Security (Text Left, Image Right) */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Commercial Security In Battersea
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Businesses, offices, retail premises and managed properties
								across Battersea need reliable security without unnecessary
								disruption to everyday operations.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security provides commercial locksmith and security services
								for premises around Battersea Square, Northcote Road, Clapham
								Junction and surrounding commercial areas.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Our work includes commercial lock replacement, master key
								systems, controlled access solutions, security surveys and fire
								door services for suitable buildings. We also support landlords
								and managing agents responsible for communal entrances, shared
								access points and fire doors in residential developments.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Whether you manage a commercial unit, office or multi-occupancy
								property, our team can help assess the existing security
								arrangements and recommend appropriate improvements.
							</Typography>
							<Button
								component={Link}
								href="/commercial"
								variant="contained"
								size="large"
								endIcon={<ArrowForwardIcon />}
								sx={{
									bgcolor: JW_BLUE,
									px: 5,
									py: 1.5,
									fontWeight: 700,
									"&:hover": { bgcolor: JW_CYAN, color: JW_BLUE },
								}}>
								LEARN MORE
							</Button>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/security-equipment.webp"
								alt="Commercial Security Battersea"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 7: SHARED SERVICES SECTION WITH INTERNAL SERVICE LINKS */}
			<SharedServicesSection />

			{/* Section 8: Partner Highlights */}
			<Box sx={{ py: 10 }}>
				<Container>
					<Typography
						variant="h3"
						sx={{
							fontWeight: 800,
							color: JW_BLUE,
							mb: 6,
							textAlign: "center",
						}}>
						Battersea’s Local Locksmith Partner
					</Typography>
					<Grid
						container
						spacing={4}>
						<Grid size={{ xs: 12, md: 4 }}>
							<ServiceCard>
								<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
									<AccessTimeIcon
										sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }}
									/>
									<Typography
										variant="h5"
										sx={{ fontWeight: 700, color: JW_BLUE }}>
										Rapid Response
									</Typography>
								</Box>
								<Typography
									variant="body1"
									sx={{ color: "text.secondary", lineHeight: 1.7 }}>
									Emergency locksmith assistance across Battersea SW11 for
									lockouts, failed locks, damaged doors and urgent property
									access issues.
								</Typography>
							</ServiceCard>
						</Grid>
						<Grid size={{ xs: 12, md: 4 }}>
							<ServiceCard>
								<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
									<SecurityIcon sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }} />
									<Typography
										variant="h5"
										sx={{ fontWeight: 700, color: JW_BLUE }}>
										Trained Technicians
									</Typography>
								</Box>
								<Typography
									variant="body1"
									sx={{ color: "text.secondary", lineHeight: 1.7 }}>
									Experienced, qualified and insured technicians working with
									residential properties, commercial premises and managed
									buildings.
								</Typography>
							</ServiceCard>
						</Grid>
						<Grid size={{ xs: 12, md: 4 }}>
							<ServiceCard>
								<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
									<LockIcon sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }} />
									<Typography
										variant="h5"
										sx={{ fontWeight: 700, color: JW_BLUE }}>
										Clear Pricing
									</Typography>
								</Box>
								<Typography
									variant="body1"
									sx={{ color: "text.secondary", lineHeight: 1.7 }}>
									Straightforward advice and clear quotations before planned
									locksmith, lock replacement or security work begins.
								</Typography>
							</ServiceCard>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 9: FAQ Accordions */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Box sx={{ textAlign: "center", mb: 6 }}>
						<Typography
							variant="h3"
							component="h2"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
								color: JW_BLUE,
								mb: 2,
							}}>
							Common Questions
						</Typography>
						<Typography
							sx={{
								maxWidth: "700px",
								mx: "auto",
								mt: 2,
								color: alpha("#000", 0.6),
								fontSize: "1.05rem",
							}}>
							Answers to frequently asked questions about our Battersea locksmith
							and security services
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
									expandIcon={<ExpandMoreIcon sx={{ color: JW_CYAN }} />}>
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

			{/* Section 10: Bottom CTA Banner */}
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
						Join hundreds of Battersea residents and business owners who trust
						JW Security for their peace of mind.
					</Typography>
					<Button
						variant="contained"
						size="large"
						href="tel:02086467931"
						sx={{
							fontWeight: 900,
							px: 6,
							py: 2,
							fontSize: "1.1rem",
							bgcolor: JW_BLUE,
							color: "white",
							"&:hover": {
								bgcolor: "white",
								color: JW_BLUE,
							},
						}}>
						CALL US TODAY: 0208 646 7931
					</Button>
				</Container>
			</CTABanner>

			{/* Section 11: Map Embed */}
			<Box sx={{ p: { xs: 5, md: 8 } }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19888.756317582498!2d-0.18783474999999998!3d51.4688172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605a3b7d1e0f3%3A0x1d0eae2e6a323380!2sBattersea%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Battersea Location Map"
				/>
			</Box>

			{/* Section 12: Contact Form Section */}
			<ContactSection
				title="Need a Locksmith in Battersea?"
				subtitle="Available 24/7 for emergencies or to schedule a security consultation"
			/>
		</>
	);
}
