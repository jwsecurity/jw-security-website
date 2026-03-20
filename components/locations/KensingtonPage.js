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
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "../common/ContactSection";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessIcon from "@mui/icons-material/Business";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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

	return (
		<>
			<PageHero
				title="Locksmith & Security Services in Kensington"
				subtitle="Trusted local security experts serving Royal Borough residents and businesses since 1991"
				backgroundImage="/images/jw/pexels-burst-374861.jpg"
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
								src="/images/jw/confident-locksmith-looking-at-camera.jpg"
								alt="Kensington Security Experts"
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
								Your Local Kensington Security Specialists
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								For over three decades, JW Security has been the trusted choice
								for locksmith and security services throughout Kensington. From
								the grand period properties of Holland Park to the modern
								apartments near High Street Kensington, we understand the unique
								security requirements of this prestigious London borough.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
								Our Kensington team combines traditional locksmithing expertise
								with cutting-edge security technology. We deliver professional
								solutions tailored to your specific needs.
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
								Serving All of Kensington
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								We pride ourselves on our rapid response times across
								Kensington, typically arriving within 20-30 minutes for
								emergencies. Our local knowledge means we understand the
								area&apos;s architecture, from Victorian conversions to modern
								developments.
							</Typography>
							<Typography
								variant="h6"
								sx={{ fontWeight: 600, mb: 2, color: JW_BLUE }}>
								Most Popular Service Areas:
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
											<Typography variant="body1">{area.name}</Typography>
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
									020 7946 0125
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "text.secondary", mb: 4 }}>
									24/7 Rapid Response across the Royal Borough
								</Typography>
								<Button
									variant="contained"
									fullWidth
									size="large"
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

			{/* Section 4: Maintenance (Text Left, Image Right) */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Maintaining Premium Security Standards
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Kensington properties require more than just standard locks. We
								specialize in high-end security maintenance and installation for
								one of London&apos;s most demanding areas.
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
											variant="h4"
											sx={{ fontWeight: 800, color: JW_BLUE }}>
											4.9
										</Typography>
										<Typography
											variant="caption"
											sx={{ fontWeight: 600 }}>
											GOOGLE RATING
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
											variant="h4"
											sx={{ fontWeight: 800, color: JW_CYAN }}>
											A+
										</Typography>
										<Typography
											variant="caption"
											sx={{ fontWeight: 600 }}>
											MLA APPROVED
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith-hands-maintenance-and-handyman-with-tools-home-renovation-and-fixing-change-door-locks.jpg"
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

			{/* Section 5: Local Knowledge (Dark Overlay) */}
			<Box
				sx={{
					py: 12,
					position: "relative",
					backgroundImage:
						'linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url("/images/jw/pexels-burst-374861.jpg")',
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
								variant="overline"
								sx={{
									color: "white",
									fontWeight: 700,
									mb: 1,
									display: "block",
								}}>
								LOCAL KNOWLEDGE
							</Typography>
							<Typography
								variant="h3"
								sx={{ fontWeight: 800, mb: 3, color: "white" }}>
								Understanding Kensington&apos;s <br /> Unique Security Needs
							</Typography>
							<Typography
								variant="h6"
								sx={{ mb: 4, fontWeight: 400, opacity: 0.9, color: "white" }}>
								From Grade II listed building expertise to high-value property
								security and embassy district services, we understand
								Kensington.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 6: Residential (Image Left, Text Right) */}
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/a-locksmith-is-repairing-an-interior-door-lock-close-up-of-male-hands-repairing-or-replacing-an.jpg"
								alt="Residential Security"
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
								Listed Building Expertise
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Many Kensington properties are Grade II listed. We understand
								conservation area requirements and work with appropriate
								materials and methods that maintain architectural integrity
								while enhancing security.
							</Typography>
							<List sx={{ mb: 4 }}>
								<ListItem sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 35 }}>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Conservation-compliant lock upgrades" />
								</ListItem>
								<ListItem sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 35 }}>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Period-appropriate hardware" />
								</ListItem>
								<ListItem sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 35 }}>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Non-destructive entry specialists" />
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 7: Commercial (Text Left, Image Right) */}
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Commercial & Embassy District Security
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								With numerous embassies and diplomatic residences in the area,
								we offer specialized high-security installations meeting
								diplomatic security standards and commercial requirements.
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
								src="/images/jw/cctv-camera-on-white-ceiling.jpg"
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

			{/* Section 8: Emergency Highlights */}
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
						Kensington&apos;s 24/7 Security Partner
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
									Average arrival time of 20-30 minutes across all Kensington
									neighborhoods, day or night.
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
										Accredited Experts
									</Typography>
								</Box>
								<Typography
									variant="body1"
									sx={{ color: "text.secondary", lineHeight: 1.7 }}>
									All our locksmiths are fully vetted, insured, and highly
									trained in high-security systems.
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
										Fixed Pricing
									</Typography>
								</Box>
								<Typography
									variant="body1"
									sx={{ color: "text.secondary", lineHeight: 1.7 }}>
									No call-out charges and transparent, upfront quotes before any
									work begins on your property.
								</Typography>
							</ServiceCard>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* Section 9: Bottom CTA Banner */}
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
						Join hundreds of Kensington residents who trust JW Security for
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
						CALL US TODAY: 020 7946 0125
					</Button>
				</Container>
			</CTABanner>

			<Box sx={{ p: { xs: 5, md: 8 } }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9936.068580559826!2d-0.18738627000503033!3d51.494552858323935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055cc073bccf%3A0xdec4ac0caf66f2d5!2sSouth%20Kensington%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1774034816704!5m2!1sen!2s"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</Box>

			<ContactSection
				title="Need a Locksmith in Kensington?"
				subtitle="Available 24/7 for emergencies or to schedule a security consultation"
			/>
		</>
	);
}
