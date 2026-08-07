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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: JW_CYAN,
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: JW_BLUE,
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
		borderColor: alpha(JW_CYAN, 0.5),
	},
}));

export default function HammersmithPage() {
	const localAreas = [
		"Hammersmith Broadway",
		"King Street",
		"Ravenscourt Park",
		"Hammersmith Bridge",
		"Brook Green",
		"Shepherd’s Bush Road",
		"Fulham Palace Road",
		"Glenthorne Road",
		"Barons Court",
		"West Kensington",
	];

	const residentialServices = [
		"Lock changes and lock replacement",
		"BS3621 locks where suitable",
		"Window lock fitting",
		"Key cutting and key control",
		"Emergency door opening",
		"Burglary repairs and securing work",
		"Master key systems for managed properties",
	];

	const faqData = [
		{
			question: "Do You Provide Locksmith Services In Hammersmith?",
			answer:
				"Yes. JW Security provides locksmith Hammersmith services for homes, flats, shops, offices, landlords, and managed buildings.",
		},
		{
			question: "Do You Cover Hammersmith W6?",
			answer:
				"Yes. We provide locksmith Hammersmith W6 services, including lock changes, emergency access, key cutting, lock replacement, and property security work.",
		},
		{
			question: "Are You A Local Locksmith In Hammersmith?",
			answer:
				"Yes. JW Security provides local locksmith Hammersmith services for residential and commercial properties across Hammersmith, W6, and nearby areas.",
		},
		{
			question: "Do You Offer Affordable Locksmith Services In Hammersmith?",
			answer:
				"Yes. We provide affordable locksmith Hammersmith support with clear quotes before planned work begins.",
		},
		{
			question: "Can You Help With Lockouts In Hammersmith?",
			answer:
				"Yes. We help with house lockouts, flat lockouts, office lockouts, failed locks, lost keys, and urgent access problems across Hammersmith.",
		},
		{
			question: "Do You Work With Landlords And Managing Agents?",
			answer:
				"Yes. We support landlords, letting agents, managing agents, and residential blocks with lock changes, key control, access issues, and wider security work.",
		},
		{
			question: "What Areas Near Hammersmith Do You Cover?",
			answer:
				"We cover Hammersmith Broadway, King Street, Ravenscourt Park, Hammersmith Bridge, Brook Green, Shepherd’s Bush Road, Fulham Palace Road, Barons Court, West Kensington, W6, and nearby areas.",
		},
	];

	return (
		<>
			<PageHero
				title="Locksmith & Security Services in Hammersmith"
				subtitle="Local locksmith Hammersmith services for homes, flats, shops, offices, landlords, and managed buildings across Hammersmith, W6, and nearby areas."
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
								alt="Hammersmith Security Experts"
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
								Hammersmith’s Trusted Locksmith And Security Team
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security provides locksmith and security services across
								Hammersmith for homeowners, tenants, landlords, businesses,
								managing agents, and residential blocks that need reliable help
								without delays.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								From lock changes and emergency access to key cutting, lock
								replacement, burglary repairs, and wider security improvements,
								our team supports properties across Hammersmith and W6 with work
								that suits the building.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
								Whether you need a local locksmith in Hammersmith for a flat
								near Hammersmith Broadway, a house close to Ravenscourt Park, a
								shop near King Street, or a managed building near Hammersmith
								Bridge, we keep the service clear, tidy, and focused on the
								issue in front of us.
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
								Serving Hammersmith And Nearby Areas
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security covers Hammersmith and nearby locations for planned
								locksmith work, urgent access issues, and property security
								improvements.
							</Typography>
							<Typography
								variant="h6"
								sx={{ fontWeight: 600, mb: 2, color: JW_BLUE }}>
								We regularly support clients across:
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
									Fast locksmiths help across Hammersmith, W6, and nearby areas.
								</Typography>
								<Button
									variant="contained"
									fullWidth
									size="large"
									href="/contact"
									sx={{
										"bgcolor": JW_BLUE,
										"py": 2,
										"&:hover": { bgcolor: JW_CYAN, color: JW_BLUE },
									}}>
									GET A FREE SECURITY AUDIT
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 4: Maintaining Standards (Text Left, Image Right) */}
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
								Hammersmith has a mix of flats, family homes, rental properties,
								offices, shops, cafés, theatres, riverside buildings, and
								managed blocks. Each property has different lock, access, and
								security needs.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security works with homes, flats, landlords, offices, shops,
								and managed properties across Hammersmith. We can help with lock
								replacement, BS3621 locks, window locks, emergency locksmith
								work, key control, and wider security upgrades. Our aim is
								simple. Make the property secure, keep the work neat, and
								explain the options before anything begins.
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
								alt="Specialized Security"
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
								Understanding Hammersmith’s Security Needs
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
								Hammersmith is a busy West London area with rental flats, family
								homes, offices, shops, restaurants, entertainment venues, shared
								buildings, and riverside properties. A locksmith job here can
								range from a simple lock change to urgent help with a failed
								mechanism. JW Security brings local experience to these
								situations, helping clients choose the right level of security
								without making the job more complicated than it needs to be.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 6: Residential Services (Image Left, Text Right) */}
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
								alt="Residential Security"
								sx={{
									width: "100%",
									height: "100%",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Residential Locksmith Services In Hammersmith
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								We provide locksmith Hammersmith services for houses, flats,
								landlords, tenants, and residential blocks where access needs to
								be safe and easy to manage. Whether you need a lock change,
								BS3621 locks, window lock fitting, key cutting, emergency door
								opening, or a security review, our team can advise on suitable
								options for the door, frame, and property type.
							</Typography>
							<List sx={{ mb: 4 }}>
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
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 7: Commercial Security */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Commercial Security In Hammersmith
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Hammersmith businesses, shops, offices, cafés, restaurants,
								theatres, and managed sites need security that works around
								daily use. JW Security supports commercial clients with access
								control, CCTV, alarm systems, master key systems, commercial
								lock changes, emergency response, and security surveys.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Whether you manage a shop on King Street, an office near
								Hammersmith Broadway, a café close to Ravenscourt Park, or a
								shared commercial building, we can help improve access, protect
								entry points, and deal with weak spots around the property.
							</Typography>
							<Button
								variant="contained"
								size="large"
								href="/contact"
								sx={{ bgcolor: JW_BLUE, px: 6, py: 1.5 }}>
								LEARN MORE
							</Button>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/security-equipment.webp"
								alt="Commercial Security"
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
						Hammersmith’s Local Locksmith Partner
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
									Locksmith Hammersmith W6 help for lockouts, lost keys, failed
									locks, damaged locks, and urgent access problems.
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
									Qualified and insured locksmiths with experience in homes,
									shops, offices, cafés, restaurants, theatres, and managed
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
									Affordable locksmith Hammersmith service with clear quotes
									before planned work begins.
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
							Answers to frequently asked questions about our Hammersmith
							locksmith services
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
						Join hundreds of Hammersmith residents who trust JW Security for
						their peace of mind.
					</Typography>
					<Button
						variant="contained"
						size="large"
						href="/contact"
						sx={{
							fontWeight: 900,
							px: 6,
							py: 2,
							fontSize: "1.1rem",
						}}>
						CALL US TODAY: 0208 646 7931
					</Button>
				</Container>
			</CTABanner>

			<Box sx={{ p: { xs: 5, md: 8 } }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631282.7336857175!2d-0.6710232848322811!3d51.82537711479541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e86182a900eaf5%3A0x87215e1b43ec892a!2sJW%20Security!5e0!3m2!1sen!2s!4v1774034262984!5m2!1sen!2s"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</Box>

			<ContactSection
				title="Need a Locksmith in Hammersmith?"
				subtitle="Available 24/7 for emergencies or to schedule a security consultation"
			/>
		</>
	);
}
