"use client";
import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	IconButton,
	Divider,
	TextField,
	InputAdornment,
	useMediaQuery,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ReCaptcha from "@/components/common/ReCaptcha";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled, alpha, useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const JW_CYAN = "#00c6d7";
const JW_BLUE = "#1c2e4a";

const FooterContainer = styled(Box)(({ theme }) => ({
	"backgroundColor": JW_BLUE,
	"color": alpha("#fff", 0.85),
	"paddingTop": theme.spacing(10),
	"paddingBottom": theme.spacing(4),
	"position": "relative",
	"backgroundImage": `linear-gradient(to bottom, ${JW_BLUE}, #162238)`,
	"&::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		height: "5px",
		background: `linear-gradient(to right, ${alpha(JW_CYAN, 0.7)}, ${JW_CYAN})`,
	},
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
	"fontFamily": "var(--font-poppins), Arial, sans-serif",
	"color": "white",
	"fontWeight": 600,
	"marginBottom": theme.spacing(3),
	"position": "relative",
	"paddingBottom": theme.spacing(2),
	"&::after": {
		content: '""',
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "30px",
		height: "2px",
		backgroundColor: JW_CYAN,
	},
}));

const FooterLink = styled(Button)(({ theme }) => ({
	"fontFamily": "var(--font-open-sans), Arial, sans-serif",
	"display": "flex",
	"alignItems": "center",
	"justifyContent": "flex-start",
	"textAlign": "left",
	"padding": 0,
	"marginBottom": theme.spacing(1.5),
	"fontSize": "0.95rem",
	"fontWeight": 400,
	"color": alpha("#fff", 0.85),
	"textTransform": "capitalize",
	"&:hover": {
		color: JW_CYAN,
		transform: "translateX(5px)",
		backgroundColor: "transparent",
	},
	"transition": "all 0.2s ease",
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
	"backgroundColor": alpha("#fff", 0.1),
	"color": "#fff",
	"&:hover": {
		backgroundColor: JW_CYAN,
		transform: "translateY(-3px)",
	},
	"transition": "all 0.3s ease",
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	marginBottom: theme.spacing(2),
}));

const ContactIcon = styled(Box)(({ theme }) => ({
	minWidth: "36px",
	height: "36px",
	backgroundColor: alpha(JW_CYAN, 0.15),
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginRight: theme.spacing(1.5),
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
	"& .MuiInputBase-root": {
		"backgroundColor": alpha("#fff", 0.05),
		"borderRadius": "8px",
		"color": "white",
		"overflow": "hidden",
		"&:hover": {
			backgroundColor: alpha("#fff", 0.08),
		},
		"& fieldset": {
			borderColor: alpha("#fff", 0.15),
		},
		"&:hover fieldset": {
			borderColor: alpha("#fff", 0.3),
		},
		"&.Mui-focused fieldset": {
			borderColor: JW_CYAN,
		},
	},
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.5, 2),
	},
}));

export default function Footer() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [newsletterEmail, setNewsletterEmail] = React.useState("");
	const [newsletterStatus, setNewsletterStatus] = React.useState({
		type: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [recaptchaToken, setRecaptchaToken] = React.useState("");

	const services = [
		{ label: "Burglary Repairs", path: "/services/burglary-repairs" },
		{ label: "Carpentry", path: "/services/carpentry" },
		{ label: "Electronic Key Pads", path: "/services/electronic-key-pads" },
		{ label: "Emergency", path: "/services/emergency" },
		{
			label: "Emergency Door Opening",
			path: "/services/emergency-door-opening",
		},
		{ label: "Fire Door Inspection", path: "/services/fire-door-inspection" },
		{
			label: "Fire Door Installation",
			path: "/services/fire-door-installation",
		},
		{ label: "Fire Door Maintenance", path: "/services/fire-door-maintenance" },
		{ label: "Fire Protection", path: "/services/fire-protection" },
		{ label: "Fire Risk Assessment", path: "/services/fire-risk-assessment" },
		{ label: "Key Cutting", path: "/services/key-cutting" },
		{ label: "Lock Replacement", path: "/services/lock-replacement" },
		{ label: "Locks and Safes", path: "/services/locks-and-safes" },
		{ label: "Locksmith", path: "/services/locksmith" },
		{ label: "Master Key Systems", path: "/services/master-key-systems" },
		{ label: "Security", path: "/services/security" },
		{ label: "Security Surveys", path: "/services/security-surveys" },
		{
			label: "Shutters, Gates & Grilles",
			path: "/services/shutters-gates-grilles",
		},
		{ label: "UPVC Door Locks", path: "/services/upvc-door-locks" },
		{ label: "UPVC Doors & Windows", path: "/services/upvc-doors-windows" },
	];

	const quickLinks = [
		{ label: "Home", path: "/" },
		{ label: "Residential", path: "/residential" },
		{ label: "Commercial", path: "/commercial" },
		{ label: "Services", path: "/services" },
		{ label: "About Us", path: "/about" },
		{ label: "Our Locations", path: "/locations/chelsea" },
		{ label: "Case Studies", path: "/case-studies" },
		{ label: "Blog", path: "/blog" },
		{ label: "Request a Quote", path: "/quote" },
		{ label: "Contact Us", path: "/contact" },
	];

	const ourLocations = [
		{ label: "Chelsea", path: "/locations/chelsea" },
		{ label: "Kensington", path: "/locations/kensington" },
		{ label: "Mayfair", path: "/locations/mayfair" },
		{ label: "Balham", path: "/locations/balham" },
		{ label: "Clapham", path: "/locations/clapham" },
		{ label: "Streatham", path: "/locations/streatham" },
		{ label: "Surrey", path: "/locations/surrey" },
		{ label: "Tooting", path: "/locations/tooting" },
		{ label: "Wimbledon", path: "/locations/wimbledon" },
		{ label: "Camden", path: "/locations/camden" },
		{ label: "Colliers Wood", path: "/locations/colliers-wood" },
		{ label: "Earlsfield", path: "/locations/earlsfield" },
		{ label: "Fulham", path: "/locations/fulham" },
		{ label: "Hammersmith", path: "/locations/hammersmith" },
		{ label: "Islington", path: "/locations/islington" },
		{ label: "Putney", path: "/locations/putney" },
		{ label: "Richmond", path: "/locations/richmond" },
		{ label: "Southfields", path: "/locations/southfields" },
	];

	const handleSubscribe = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setNewsletterStatus({ type: "", message: "" });

		try {
			const response = await fetch("/api/newsletter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: newsletterEmail, recaptchaToken }),
			});

			const result = await response.json();

			if (response.ok) {
				setNewsletterEmail("");
				setNewsletterStatus({
					type: "success",
					message: "Thank you for subscribing!",
				});
			} else {
				throw new Error(result.error || "Failed to subscribe");
			}
		} catch (error) {
			setNewsletterStatus({
				type: "error",
				message: "Sorry, there was an error. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<FooterContainer component="footer">
			<Container
				maxWidth={false}
				sx={{ px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 16 } }}>
				<Box
					sx={{
						display: "flex",
						gap: 3,
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "center",
						mb: 4,
					}}>
					<Typography
						sx={{
							color: alpha("#fff", 0.7),
							fontSize: "0.9rem",
							textAlign: "center",
						}}>
						Certified and insured • Trusted by leading organisations
					</Typography>
				</Box>
				<Grid
					container
					spacing={{ xs: 4, md: 6 }}
					justifyContent="center">
					<Grid size={{ xs: 12, sm: 6, md: 3 }}>
						<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
							<Image
								src="/images/jw/jw-logo.webp"
								alt="JW Security"
								width={199}
								height={70}
								fetchPriority="high"
								sizes="199px"
							/>
						</Box>
						<Typography
							sx={{
								fontFamily: "var(--font-open-sans), Arial, sans-serif",
								mb: 3,
								fontSize: "0.95rem",
								maxWidth: 380,
								lineHeight: 1.7,
							}}>
							Providing premium security solutions for high-end residential and
							commercial properties in South London and Surrey since 1991.
						</Typography>
						<Box sx={{ display: "flex", gap: 1.5, mb: 4 }}>
							<SocialIconButton
								size="small"
								component="a"
								aria-label="facebook"
								href="https://www.facebook.com/jwsecurity"
								target="_blank"
								rel="noopener noreferrer">
								<FacebookIcon fontSize="small" />
							</SocialIconButton>
							<SocialIconButton
								size="small"
								aria-label="twitter"
								component="a"
								href="https://www.twitter.com/jwsecurity"
								target="_blank"
								rel="noopener noreferrer">
								<TwitterIcon fontSize="small" />
							</SocialIconButton>
							<SocialIconButton
								size="small"
								component="a"
								aria-label="linkedin"
								href="https://www.linkedin.com/company/jwsecurity"
								target="_blank"
								rel="noopener noreferrer">
								<LinkedInIcon fontSize="small" />
							</SocialIconButton>
							<SocialIconButton
								size="small"
								component="a"
								aria-label="instagram"
								href="https://www.instagram.com/jwsecurity"
								target="_blank"
								rel="noopener noreferrer">
								<InstagramIcon fontSize="small" />
							</SocialIconButton>
						</Box>
						{!isMobile && (
							<Box sx={{ mt: 4 }}>
								<Typography
									variant="body2"
									sx={{ color: alpha("#fff", 0.6), fontSize: "0.9rem" }}>
									© {new Date().getFullYear()} JW Security. All Rights Reserved.
								</Typography>
							</Box>
						)}
					</Grid>
					<Grid size={{ xs: 12, sm: 6, md: 2 }}>
						<FooterHeading variant="h6">Quick Links</FooterHeading>
						{quickLinks.map((link, index) => (
							<Link
								key={index}
								href={link.path}
								style={{ textDecoration: "none" }}>
								<FooterLink component="span">
									<KeyboardArrowRightIcon
										sx={{ fontSize: 18, mr: 1, opacity: 0.7 }}
									/>
									{link.label}
								</FooterLink>
							</Link>
						))}
					</Grid>

					<Grid size={{ xs: 12, sm: 6, md: 2 }}>
						<FooterHeading variant="h6">Our Services</FooterHeading>
						{services.map((service, index) => (
							<Link
								key={index}
								href={service.path}
								style={{ textDecoration: "none" }}>
								<FooterLink component="span">
									<KeyboardArrowRightIcon
										sx={{ fontSize: 18, mr: 1, opacity: 0.7 }}
									/>
									{service.label}
								</FooterLink>
							</Link>
						))}
					</Grid>

					<Grid size={{ xs: 12, sm: 6, md: 2 }}>
						<FooterHeading variant="h6">Our Locations</FooterHeading>
						{ourLocations.map((link, index) => (
							<Link
								key={index}
								href={link.path}
								style={{ textDecoration: "none" }}>
								<FooterLink component="span">
									<KeyboardArrowRightIcon
										sx={{ fontSize: 18, mr: 1, opacity: 0.7 }}
									/>
									{link.label}
								</FooterLink>
							</Link>
						))}
					</Grid>

					<Grid size={{ xs: 12, sm: 6, md: 3 }}>
						<FooterHeading variant="h6">Contact Us</FooterHeading>
						<Box sx={{ mb: 3 }}>
							<ContactInfoItem>
								<ContactIcon>
									<PhoneIcon sx={{ color: JW_CYAN, fontSize: 16 }} />
								</ContactIcon>
								<Box>
									<Link
										href="tel:02086467931"
										passHref>
										<Typography sx={{ fontWeight: 600, color: JW_CYAN }}>
											Office Tel: 0208 646 7931
										</Typography>
									</Link>
									<Link
										href="tel:02086467931"
										passHref>
										<Typography sx={{ fontSize: "0.9rem" }}>
											Emergency call out: 0208 646 7931
										</Typography>
									</Link>
								</Box>
							</ContactInfoItem>
							<ContactInfoItem>
								<ContactIcon>
									<EmailIcon sx={{ color: JW_CYAN, fontSize: 16 }} />
								</ContactIcon>
								<Box>
									<Link
										href="mailto:help@jwsecurity.co.uk"
										passHref>
										<Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
											help@jwsecurity.co.uk
										</Typography>
									</Link>
								</Box>
							</ContactInfoItem>
							<ContactInfoItem>
								<ContactIcon>
									<LocationOnIcon sx={{ color: JW_CYAN, fontSize: 16 }} />
								</ContactIcon>
								<Box>
									<Link href="https://maps.app.goo.gl/A9WadoTL9X5ttWoS6">
										<Typography
											sx={{ fontSize: "0.95rem", fontWeight: 500, mb: 0.3 }}>
											JW Security <br />
											Locksmiths & Security Specialists
										</Typography>
									</Link>
								</Box>
							</ContactInfoItem>
						</Box>
						<Box
							component="form"
							onSubmit={handleSubscribe}>
							<Typography sx={{ mb: 1.5, fontSize: "0.95rem" }}>
								Subscribe to our newsletter for security tips and updates:
							</Typography>

							<NewsletterInput
								fullWidth
								variant="outlined"
								placeholder="Your email address"
								value={newsletterEmail}
								onChange={(e) => setNewsletterEmail(e.target.value)}
								disabled={isSubmitting}
								type="email"
								required
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="submit"
												type="submit"
												edge="end"
												disabled={isSubmitting || !recaptchaToken}
												sx={{
													"color": JW_CYAN,
													"&:hover": {
														backgroundColor: alpha(JW_CYAN, 0.1),
													},
												}}>
												<SendIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<ReCaptcha onVerify={(token) => setRecaptchaToken(token)} />
							{newsletterStatus.message && (
								<Typography
									sx={{
										mt: 1,
										fontSize: "0.85rem",
										color:
											newsletterStatus.type === "success"
												? "#4caf50"
												: "#f44336",
									}}>
									{newsletterStatus.message}
								</Typography>
							)}
						</Box>
					</Grid>
				</Grid>
				<Divider sx={{ my: 4, borderColor: alpha("#fff", 0.1) }} />
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "space-between",
						alignItems: { xs: "center", sm: "center" },
					}}>
					{isMobile && (
						<Typography
							variant="body2"
							sx={{
								fontSize: "0.9rem",
								mb: { xs: 2, sm: 0 },
								textAlign: "center",
							}}>
							© {new Date().getFullYear()} JW Security. All Rights Reserved.
						</Typography>
					)}
					<Box
						sx={{ display: "flex", gap: 3, justifyContent: "center", flex: 1 }}>
						<Link
							href="/privacy"
							style={{
								color: alpha("#fff", 0.7),
								textDecoration: "none",
								fontSize: "0.9rem",
							}}>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							style={{
								color: alpha("#fff", 0.7),
								textDecoration: "none",
								fontSize: "0.9rem",
							}}>
							Terms of Service
						</Link>
						<Link
							href="/cookies"
							style={{
								color: alpha("#fff", 0.7),
								textDecoration: "none",
								fontSize: "0.9rem",
							}}>
							Cookie Policy
						</Link>
					</Box>
				</Box>
			</Container>
		</FooterContainer>
	);
}
