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

export default function WandsworthPage() {
	const localAreas = [
		"Wandsworth Town",
		"Wandsworth Common",
		"East Hill",
		"West Hill",
		"Old York Road",
		"Southside Shopping Centre",
		"Wandsworth High Street",
		"St John's Hill",
		"Northcote Road",
		"Riverside Quarter",
	];

	const residentialServices = [
		"Lock changes and lock replacement",
		"BS3621 locks where appropriate",
		"uPVC door lock repairs",
		"Window locks and mechanism repairs",
		"Emergency door opening",
		"Burglary repairs and securing work",
		"Key cutting and key management",
		"Security surveys and lock upgrades",
	];

	const faqData = [
		{
			question: "Do You Provide Locksmith Services In Wandsworth?",
			answer:
				"Yes. JW Security provides professional locksmith and security services for homes, flats, offices, shops, landlords and managed properties throughout Wandsworth.",
		},
		{
			question: "Do You Cover Wandsworth SW18?",
			answer:
				"Yes. We provide locksmith services across Wandsworth SW18, including Wandsworth Town, East Hill, West Hill, Old York Road and nearby areas.",
		},
		{
			question: "Are Emergency Locksmith Services Available In Wandsworth?",
			answer:
				"Yes. Our 24/7 emergency locksmith service can assist with lost keys, lockouts, faulty locking mechanisms and urgent security concerns.",
		},
		{
			question: "Can You Repair uPVC Door Locks In Wandsworth?",
			answer:
				"Yes. We repair and replace suitable uPVC door locks, cylinders, handles and multipoint locking mechanisms. We assess the fault before recommending repair or replacement.",
		},
		{
			question: "Do You Provide Commercial Locksmith Services In Wandsworth?",
			answer:
				"Yes. JW Security supports shops, offices, businesses and managed premises with lock replacement, security surveys, master key systems and commercial access solutions.",
		},
		{
			question: "Can You Inspect Fire Doors In Wandsworth?",
			answer:
				"Yes. We provide fire door inspections for suitable managed residential buildings and commercial properties. Our team checks door condition, closing mechanisms, hardware and other visible safety concerns.",
		},
		{
			question: "Do You Install Master Key Systems For Managed Buildings?",
			answer:
				"Yes. We provide master key systems designed to help landlords, businesses and managing agents control access to different rooms, floors and building areas.",
		},
		{
			question: "What Areas Near Wandsworth Do You Serve?",
			answer:
				"JW Security serves Wandsworth and nearby locations, including Putney, Earlsfield, Battersea, Southfields and surrounding South West London areas.",
		},
	];

	return (
		<>
			<PageHero
				title="Locksmith & Security Services in Wandsworth"
				subtitle="Trusted locksmith and security services for homes, flats, offices, landlords and managed properties across Wandsworth, SW18, and nearby areas."
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
								alt="Wandsworth Locksmith Team"
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
								Wandsworth’s Trusted Locksmith And Security Team
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security provides locksmith and security services throughout
								Wandsworth, helping homeowners, tenants, landlords, businesses
								and property managers deal with everyday access and security
								requirements.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Whether you need a lock replacement after moving into a new home,
								assistance with a faulty door mechanism or security improvements
								for a commercial property, our team provides practical solutions
								suited to the building.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
								From the residential streets around East Hill and West Hill to
								offices and retail premises near Wandsworth Town and Southside
								Shopping Centre, we support a range of property types with
								locksmith, fire protection and security services.
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
								Serving Wandsworth And Nearby Areas
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security covers Wandsworth and surrounding neighbourhoods for
								planned locksmith work, emergency access problems and property
								security improvements.
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
									24/7 emergency locksmith assistance across Wandsworth, SW18 and
									surrounding areas.
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
								Wandsworth has a varied mix of family houses, period properties,
								converted flats, residential developments, offices and commercial
								buildings. Each brings different requirements for locks, access
								control, key management and fire safety.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security supports properties across Wandsworth with lock
								replacement, security upgrades, emergency locksmith services,
								master key systems and fire protection work. We consider how the
								property is used, who needs access and whether the existing locks
								or door systems are suitable before recommending improvements.
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
								alt="Maintaining Security Standards in Wandsworth"
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
								Understanding Wandsworth’s Security Needs
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
								Wandsworth combines established residential neighbourhoods with
								busy shopping streets, offices and managed residential buildings.
								Older houses may need updated locks or repairs to worn door
								mechanisms, while buildings with shared entrances often need
								reliable key control, fire door maintenance and regular security
								checks. JW Security helps homeowners, businesses and managing
								agents address these concerns with solutions suited to their
								property's layout and daily use.
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
								alt="Residential Locksmith Services Wandsworth"
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
								Residential Locksmith Services In Wandsworth
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security provides residential locksmith services in Wandsworth
								for family homes, Victorian terraces, converted flats,
								apartments and rental properties.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								From changing locks after a house move to repairing a faulty
								multipoint locking mechanism, our team helps residents maintain
								secure and reliable access to their homes. We assess the
								existing door, frame and hardware before recommending a suitable
								repair, replacement or security upgrade.
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
								For further information, visit our{" "}
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
								</Box>{" "}
								page.
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
								Commercial Security In Wandsworth
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Wandsworth’s offices, shops, restaurants, commercial units and
								managed properties require access systems and locks that work
								reliably throughout the day.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security provides commercial locksmith and security services
								for businesses around Wandsworth High Street, Old York Road,
								Southside and nearby commercial areas.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
								We help with commercial lock replacement, master key systems,
								access control, security surveys and fire door services where
								required. For landlords and property management teams, we can
								also advise on communal entrances, shared building access and fire
								door inspection or maintenance requirements.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Our approach is to understand how the premises operate and
								recommend appropriate security improvements without unnecessary
								disruption.
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
								alt="Commercial Security Wandsworth"
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
						Wandsworth’s Local Locksmith Partner
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
									Emergency locksmith support across Wandsworth SW18 for lost
									keys, failed locking mechanisms, lockouts and urgent access
									problems.
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
									Qualified and insured technicians with experience working on
									family homes, rental properties, offices, shops and managed
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
									Clear quotations and practical recommendations before planned
									lock repairs, replacements or security work begins.
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
							Answers to frequently asked questions about our Wandsworth
							locksmith and security services
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
						Join hundreds of Wandsworth residents and business owners who trust
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
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19894.498115682855!2d-0.2034988!3d51.456627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f38b6910e53%3A0xb35a09ad7bb8a804!2sWandsworth%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Wandsworth Location Map"
				/>
			</Box>

			{/* Section 12: Contact Form Section */}
			<ContactSection
				title="Need a Locksmith in Wandsworth?"
				subtitle="Available 24/7 for emergencies or to schedule a security consultation"
			/>
		</>
	);
}
