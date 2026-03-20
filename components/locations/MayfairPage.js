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

export default function MayfairPage() {
	const localAreas = [
		{
			name: "Bond Street",
			landmarks: ["Luxury boutiques", "Sotheby's", "Royal Arcade"],
			description:
				"World-renowned shopping district with flagship stores and exclusive galleries.",
		},
		{
			name: "Grosvenor Square",
			landmarks: ["Former US Embassy", "Millennium Hotel", "Garden Square"],
			description:
				"Historic square surrounded by Grade II listed buildings and luxury residences.",
		},
		{
			name: "Mount Street",
			landmarks: [
				"Scott's restaurant",
				"Mount Street Gardens",
				"The Connaught",
			],
			description:
				"Elegant street known for its red-brick Queen Anne architecture and fine dining.",
		},
		{
			name: "Berkeley Square",
			landmarks: ["Annabel's", "Morton's Club", "Historic plane trees"],
			description:
				"Prestigious square home to exclusive private members' clubs and luxury offices.",
		},
	];

	return (
		<>
			<PageHero
				title="Elite Security Services in Mayfair"
				subtitle="Protecting London's most prestigious district with uncompromising security solutions"
				backgroundImage="/images/jw/pexels-kseniachernaya-5768107-scaled.jpg"
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
								src="/images/jw/pexels-kseniachernaya-5768107-scaled.jpg"
								alt="Mayfair Security Experts"
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
								Mayfair&apos;s Premier Security Specialists
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
								In the heart of London&apos;s most exclusive district, JW
								Security delivers security solutions that match Mayfair&apos;s
								exceptional standards. From the luxury boutiques of Bond Street
								to the diplomatic residences of Grosvenor Square, we protect
								what matters most with discretion and expertise.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
								Our Mayfair division specializes in ultra high-security
								installations that blend seamlessly with the area&apos;s
								architectural grandeur. We understand that security in Mayfair
								demands technical excellence.
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
							<SectionTitle variant="h3">Serving All of Mayfair</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								With three decades of experience serving Mayfair&apos;s elite
								clientele, we&apos;ve built our reputation on reliability,
								discretion, and technical excellence. Our team includes
								specialists in diplomatic security and luxury retail protection.
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
										Priority? Call VIP Line
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
									15-20 Minute Rapid Response in Mayfair (W1 area)
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
									REQUEST VIP CONSULTATION
								</Button>
							</Box>
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
							<SectionTitle variant="h3">
								The Mayfair Security Standard
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Mayfair security demands more than just protection - it requires
								solutions that respect the aesthetic and operational
								requirements of luxury properties.
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
											5.0
										</Typography>
										<Typography
											variant="caption"
											sx={{ fontWeight: 600 }}>
											ELITE RATING
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
											VIP
										</Typography>
										<Typography
											variant="caption"
											sx={{ fontWeight: 600 }}>
											SERVICE LEVEL
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/a-japanese-male-worker-checks-the-locks-on-a-house.jpg"
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
						'linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url("/images/jw/ancient-tools-and-spare-parts-in-old-locksmiths-workshop.jpg")',
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
								MAYFAIR EXPERTISE
							</Typography>
							<Typography
								variant="h3"
								sx={{ fontWeight: 800, mb: 3, color: "white" }}>
								Uncompromising <br />
								Protection for Mayfair
							</Typography>
							<Typography
								variant="h6"
								sx={{ mb: 4, fontWeight: 400, opacity: 0.9, color: "white" }}>
								From Bond Street retail security to Grosvenor Square diplomatic
								residences, we set the standard for elite protection in London.
							</Typography>
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
								src="/images/jw/locksmith-hands-maintenance-and-handyman-with-tools-home-renovation-and-fixing-change-door-locks.jpg"
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
								Ultra High-Security Residences
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Securing Mayfair&apos;s most exclusive homes and penthouses
								requires cutting-edge technology and absolute discretion.
							</Typography>
							<List sx={{ mb: 4 }}>
								<ListItem sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 35 }}>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Biometric and keyless entry systems" />
								</ListItem>
								<ListItem sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 35 }}>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Integration with smart-home automation" />
								</ListItem>
								<ListItem sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 35 }}>
										<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
									</ListItemIcon>
									<ListItemText primary="Panic room and safe installations" />
								</ListItem>
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
								Luxury Retail & Gallery Security
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
								Protecting Bond Street&apos;s premier boutiques and flagship
								stores with discrete monitoring systems and advanced access
								control.
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
								src="/images/jw/security-equipment.jpg"
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
						Mayfair&apos;s 24/7 Security Partner
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
										Priority Response
									</Typography>
								</Box>
								<Typography
									variant="body1"
									sx={{ color: "text.secondary", lineHeight: 1.7 }}>
									15-20 minute average arrival time for our dedicated Mayfair
									rapid response unit.
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
										SIA Licensed
									</Typography>
								</Box>
								<Typography
									variant="body1"
									sx={{ color: "text.secondary", lineHeight: 1.7 }}>
									Fully vetted and licensed experts meeting the highest
									international security standards.
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
									Transparent, upfront quotes with no call-out charges for all
									Mayfair properties.
								</Typography>
							</ServiceCard>
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
						Join Mayfair&apos;s elite who trust JW Security for their peace of
						mind.
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
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1057964080583!2d-0.1459604229924458!3d51.51127501041975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052caa0c2fa9%3A0x64126c3040d9ed14!2sBond%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1774034892943!5m2!1sen!2s"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</Box>
			<ContactSection
				title="Secure Your Mayfair Property Today"
				subtitle="Contact our specialist team for a discrete security consultation"
			/>
		</>
	);
}
