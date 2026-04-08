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
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "../common/ContactSection";
import SecurityIcon from "@mui/icons-material/Security";
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

const AreaCard = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	backgroundColor: alpha(JW_BLUE, 0.03),
	borderRadius: "8px",
	border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
	marginBottom: theme.spacing(2),
}));

export default function ChelseaPage() {
	const localAreas = [
		{
			name: "Kings Road",
			landmarks: [
				"Saatchi Gallery",
				"Duke of York Square",
				"Chelsea Old Town Hall",
			],
			description:
				"The heart of Chelsea with luxury boutiques, galleries, and prestigious residential properties.",
		},
		{
			name: "Chelsea Harbour",
			landmarks: [
				"Chelsea Harbour Marina",
				"Design Centre",
				"Luxury apartments",
			],
			description:
				"Exclusive waterfront development with high-end residences requiring sophisticated security.",
		},
		{
			name: "Sloane Square",
			landmarks: ["Royal Court Theatre", "Peter Jones", "Sloane Gardens"],
			description:
				"Upscale area bordering Belgravia with Georgian terraces and modern luxury developments.",
		},
		{
			name: "World's End",
			landmarks: ["World's End Estate", "Chelsea Studios", "Cremorne Gardens"],
			description:
				"Diverse neighbourhood mixing social housing with period conversions and new developments.",
		},
	];

	const specializedServices = [
		{
			title: "Luxury Property Security",
			description:
				"Bespoke security solutions for Chelsea's premium residences, combining discretion with effectiveness.",
			features: [
				"Invisible security grilles and shutters",
				"Biometric and keyless entry systems",
				"Integration with home automation",
				"Panic room installations",
			],
		},
		{
			title: "Period Property Expertise",
			description:
				"Specialist knowledge of Chelsea's historic architecture and appropriate security enhancements.",
			features: [
				"Conservation-compliant lock upgrades",
				"Sash window security solutions",
				"Period-appropriate hardware",
				"Listed building experience",
			],
		},
	];

	return (
		<>
			<PageHero
				title="Locksmith & Security Services in Chelsea"
				subtitle="Premium security solutions for one of London's most exclusive neighbourhoods"
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
								alt="Chelsea Security Experts"
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
								Chelsea&apos;s Trusted Security Experts
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								JW Security has been safeguarding Chelsea&apos;s prestigious
								properties for over 30 years. From the boutique-lined Kings Road
								to the exclusive riverside developments at Chelsea Harbour, we
								understand the unique security requirements of this
								distinguished area.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
								Our Chelsea specialists combine traditional craftsmanship with
								innovative security technology. We deliver solutions that match
								Chelsea&apos;s exceptional standards, ensuring your home or
								business remains secure around the clock.
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
							<SectionTitle variant="h3">Serving All of Chelsea</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								We take pride in our discrete, professional service that
								respects the privacy and sophistication our Chelsea clients
								expect. Our rapid response team knows every street and square,
								ensuring we reach you quickly in emergencies - typically within
								20-30 minutes.
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
									24/7 Rapid Response in Chelsea & SW3/SW10 area
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

			{/* Section 3: CTA Banner */}

			{/* Section 4: Specialized Services (Text Left, Image Right) */}
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
								Chelsea properties require more than just standard locks. We
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
											4.7
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
								Understanding Chelsea&apos;s <br /> Unique Challenges
							</Typography>
							<Typography
								variant="h6"
								sx={{ mb: 4, fontWeight: 400, opacity: 0.9, color: "white" }}>
								From the Chelsea Flower Show footfall to the specific security
								needs of river Thames properties, our expert team has local
								insights that keep you safer.
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
							<SectionTitle variant="h3">Luxury Property Security</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								We provide bespoke security solutions for Chelsea&apos;s premium
								residences, combining discretion with high-level effectiveness.
								Whether it&apos;s biometric entry or period-appropriate
								hardware, we protect your home without compromising its
								aesthetic.
							</Typography>
							<List sx={{ mb: 4 }}>
								{specializedServices[0].features.map((feature, idx) => (
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
			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h3">
								Commercial & Private Gallery Security
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Chelsea&apos;s thriving arts scene and boutique businesses
								require specialized security for valuable assets. We offer
								discrete monitoring systems and advanced access control suitable
								for galleries and luxury retail.
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
						Chelsea&apos;s 24/7 Security Partner
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
									Average arrival time of 20-30 minutes across all Chelsea
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
						Join hundreds of Chelsea residents who trust JW Security for their
						peace of mind.
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
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631282.7336857175!2d-0.6710232848322811!3d51.82537711479541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e86182a900eaf5%3A0x87215e1b43ec892a!2sJW%20Security!5e0!3m2!1sen!2s!4v1774034262984!5m2!1sen!2s"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</Box>

			<ContactSection
				title="Need a Locksmith in Chelsea?"
				subtitle="Available 24/7 for emergencies or to schedule a security consultation"
			/>
		</>
	);
}
