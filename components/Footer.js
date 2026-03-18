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
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Turnstile from "@/components/common/Turnstile";
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
	"fontFamily": "'Poppins', Arial, sans-serif",
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
	"fontFamily": "'Open Sans', Arial, sans-serif",
	"display": "flex",
	"alignItems": "center",
	"justifyContent": "flex-start",
	"textAlign": "left",
	"padding": 0,
	"marginBottom": theme.spacing(1.5),
	"fontSize": "0.95rem",
	"fontWeight": 400,
	"color": alpha("#fff", 0.85),
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
	const [turnstileToken, setTurnstileToken] = React.useState("");

	const services = [
		{ label: "Locksmith Services", path: "/services/locksmith" },
		{ label: "Fire Protection", path: "/services/fire-protection" },
		{ label: "Security Systems", path: "/services/security" },
		{ label: "Emergency Call Out", path: "/services/emergency" },
		{ label: "Key Cutting", path: "/services/key-cutting" },
		{ label: "Commercial Security", path: "/commercial" },
	];

	const quickLinks = [
		{ label: "Home", path: "/" },
		{ label: "Residential", path: "/residential" },
		{ label: "Commercial", path: "/commercial" },
		{ label: "Services", path: "/services" },
		{ label: "About Us", path: "/about" },
		{ label: "Our Locations", path: "/locations" },
		{ label: "Case Studies", path: "/case-studies" },
		{ label: "Blog", path: "/blog" },
		{ label: "Request a Quote", path: "/quote" },
		{ label: "Contact Us", path: "/contact" },
	];

	const ourLocations = [
		{ label: "Chelsea", path: "/locations/chelsea" },
		{ label: "Kensington", path: "/locations/kensington" },
		{ label: "Mayfair", path: "/locations/mayfair" },
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
				body: JSON.stringify({ email: newsletterEmail, turnstileToken }),
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
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						gap: 3,
						flexWrap: "wrap",
						alignItems: "center",
						mb: 4,
					}}>
					<Typography sx={{ color: alpha("#fff", 0.7), fontSize: "0.9rem" }}>
						Certified and insured • Trusted by leading organisations
					</Typography>
				</Box>
				<Grid
					container
					spacing={{ xs: 4, md: 6 }}>
					<Grid
						item
						xs={12}
						md={4}>
						<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
							<Box
								sx={{
									width: 50,
									height: 50,
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: alpha("#fff", 0.1),
									border: `1px solid ${alpha("#fff", 0.15)}`,
									mr: 2,
								}}>
								<LockIcon sx={{ color: JW_CYAN, fontSize: 28 }} />
							</Box>
							<Typography
								variant="h5"
								sx={{
									fontFamily: "'Poppins', Arial, sans-serif",
									color: "white",
									fontWeight: 700,
									letterSpacing: 0.5,
								}}>
								JW Security
							</Typography>
						</Box>
						<Typography
							sx={{
								fontFamily: "'Open Sans', Arial, sans-serif",
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
								href="https://www.facebook.com/jwsecurity"
								target="_blank"
								rel="noopener noreferrer">
								<FacebookIcon fontSize="small" />
							</SocialIconButton>
							<SocialIconButton
								size="small"
								component="a"
								href="https://www.twitter.com/jwsecurity"
								target="_blank"
								rel="noopener noreferrer">
								<TwitterIcon fontSize="small" />
							</SocialIconButton>
							<SocialIconButton
								size="small"
								component="a"
								href="https://www.linkedin.com/company/jwsecurity"
								target="_blank"
								rel="noopener noreferrer">
								<LinkedInIcon fontSize="small" />
							</SocialIconButton>
							<SocialIconButton
								size="small"
								component="a"
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
					<Grid
						item
						xs={12}
						sm={6}
						md={2}>
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
					<Grid
						item
						xs={12}
						sm={6}
						md={2}>
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
					<Grid
						item
						xs={12}
						sm={6}
						md={2}>
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
					<Grid
						item
						xs={12}
						md={4}>
						<FooterHeading variant="h6">Contact Us</FooterHeading>
						<Box sx={{ mb: 3 }}>
							<ContactInfoItem>
								<ContactIcon>
									<PhoneIcon sx={{ color: JW_CYAN, fontSize: 16 }} />
								</ContactIcon>
								<Box>
									<Typography
										sx={{ fontSize: "0.95rem", fontWeight: 500, mb: 0.3 }}>
										Office Tel: 0208 646 7931
									</Typography>
									<Typography sx={{ fontSize: "0.9rem" }}>
										Emergency call out: 0208 646 7931
									</Typography>
								</Box>
							</ContactInfoItem>
							<ContactInfoItem>
								<ContactIcon>
									<EmailIcon sx={{ color: JW_CYAN, fontSize: 16 }} />
								</ContactIcon>
								<Box>
									<Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
										help@jwsecurity.co.uk
									</Typography>
								</Box>
							</ContactInfoItem>
							<ContactInfoItem>
								<ContactIcon>
									<LocationOnIcon sx={{ color: JW_CYAN, fontSize: 16 }} />
								</ContactIcon>
								<Box>
									<Typography
										sx={{ fontSize: "0.95rem", fontWeight: 500, mb: 0.3 }}>
										JW Security
									</Typography>
									<Typography sx={{ fontSize: "0.9rem" }}>
										Locksmiths & Security Specialists
									</Typography>
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
												type="submit"
												edge="end"
												disabled={isSubmitting || !turnstileToken}
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
							<Turnstile onVerify={(token) => setTurnstileToken(token)} />
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
							sx={{ fontSize: "0.9rem", mb: { xs: 2, sm: 0 } }}>
							© {new Date().getFullYear()} JW Security. All Rights Reserved.
						</Typography>
					)}
					<Box sx={{ display: "flex", gap: 3 }}>
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
