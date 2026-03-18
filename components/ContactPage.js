"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	TextField,
	Button,
	Paper,
	Snackbar,
	Alert,
	Divider,
	CircularProgress,
} from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { styled, alpha } from "@mui/material/styles";
import ReCaptcha from "@/components/common/ReCaptcha";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const JW_CYAN = "#00c6d7";
const JW_BLUE = "#1c2e4a";

const PageHero = styled(Box)(({ theme }) => ({
	"position": "relative",
	"backgroundColor": JW_BLUE,
	"color": "white",
	"padding": theme.spacing(16, 0, 12),
	"paddingTop": `calc(${theme.spacing(10)} + 90px)`,
	"minHeight": "65vh",
	"display": "flex",
	"alignItems": "center",
	"backgroundImage":
		"linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url(/images/jw/locksmith-maintenance.jpg)",
	"backgroundSize": "cover",
	"backgroundPosition": "center",
	"&::before": {
		content: '""',
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: "70px",
		background:
			"linear-gradient(to top right, #fff 0%, #fff 50%, transparent 50%, transparent 100%)",
	},
}));

const ContactInfoCard = styled(Paper)(({ theme }) => ({
	"padding": theme.spacing(3.5),
	"height": "100%",
	"boxShadow": "0 10px 40px rgba(0,0,0,0.08)",
	"borderRadius": "8px",
	"backgroundColor": "#fff",
	"transition": "transform 0.3s, box-shadow 0.3s",
	"border": "1px solid rgba(0,0,0,0.04)",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
	},
}));

const ContactForm = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(5),
	boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
	borderRadius: "12px",
	backgroundColor: "#fff",
	border: "1px solid rgba(0,0,0,0.04)",
	margin: "0 auto",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		"borderRadius": "6px",
		"transition": "all 0.2s ease",
		"&:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: alpha(JW_CYAN, 0.5),
		},
		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: JW_CYAN,
			borderWidth: "2px",
		},
	},
	"& .MuiInputLabel-outlined.Mui-focused": {
		color: JW_BLUE,
	},
}));

const StyledButton = styled(Button)(({ theme }) => ({
	"backgroundColor": JW_CYAN,
	"color": JW_BLUE,
	"padding": theme.spacing(1.5, 4),
	"fontWeight": 600,
	"borderRadius": "6px",
	"fontSize": "15px",
	"textTransform": "none",
	"boxShadow": "0 4px 10px rgba(0, 198, 215, 0.25)",
	"transition": "all 0.3s ease",
	"&:hover": {
		backgroundColor: JW_CYAN,
		boxShadow: "0 6px 15px rgba(0, 198, 215, 0.35)",
		transform: "translateY(-2px)",
	},
	"&:disabled": {
		backgroundColor: alpha(JW_CYAN, 0.6),
		color: alpha(JW_BLUE, 0.6),
	},
}));

const DecorativeLine = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "3px",
	backgroundColor: JW_CYAN,
	marginBottom: theme.spacing(2),
}));

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "success",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [recaptchaToken, setRecaptchaToken] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...formData, recaptchaToken }),
			});

			const result = await response.json();

			if (response.ok) {
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});

				setSnackbar({
					open: true,
					message:
						"Thank you for your enquiry! We'll get back to you within 24 hours.",
					severity: "success",
				});
			} else {
				throw new Error(result.error || "Failed to send message");
			}
		} catch (error) {
			setSnackbar({
				open: true,
				message:
					"Sorry, there was an error sending your message. Please try again or call us directly.",
				severity: "error",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleCloseSnackbar = () => {
		setSnackbar({ ...snackbar, open: false });
	};

	return (
		<>
			<PageHero>
				<Container maxWidth="xl">
					<Box sx={{ maxWidth: 700, position: "relative", zIndex: 2 }}>
						<DecorativeLine />
						<Typography
							variant="h2"
							component="h1"
							sx={{
								fontWeight: 700,
								mb: 2.5,
								fontSize: { xs: "2.5rem", md: "3.5rem" },
								textShadow: "0 2px 10px rgba(0,0,0,0.2)",
								color: "white",
							}}>
							Contact Us
						</Typography>
						<Typography
							variant="h6"
							sx={{
								maxWidth: "600px",
								mb: 4,
								fontWeight: 400,
								lineHeight: 1.5,
								opacity: 0.9,
								color: "white",
							}}>
							We&apos;re here to help with all your security needs for luxury
							homes and businesses
						</Typography>
					</Box>
				</Container>
			</PageHero>
			<Box sx={{ py: { xs: 8, md: 10 } }}>
				<Container maxWidth="xl">
					<Box sx={{ maxWidth: 1100, mx: "auto" }}>
						<Grid
							container
							spacing={5}
							justifyContent="center">
							<Grid
								item
								xs={12}
								md={4}
								sx={{ display: "flex", justifyContent: "center" }}>
								<Box
									sx={{
										position: { md: "sticky" },
										top: { md: "100px" },
										width: "100%",
										maxWidth: 420,
									}}>
									<DecorativeLine />
									<Typography
										variant="h4"
										sx={{
											fontWeight: 700,
											mb: 3,
											color: JW_BLUE,
										}}>
										Get In Touch
									</Typography>
									<Typography
										sx={{
											mb: 4,
											fontSize: "1.05rem",
											color: alpha("#000", 0.7),
											lineHeight: 1.7,
										}}>
										Whether you need emergency locksmith services, want to
										inquire about our premium security solutions, or have any
										questions, our team of experts is ready to assist you.
									</Typography>

									<Grid
										container
										spacing={3}>
										<Grid
											item
											xs={12}
											sm={6}>
											<ContactInfoCard sx={{ height: "100%" }}>
												<Box
													sx={{
														display: "flex",
														alignItems: "flex-start",
														height: "100%",
													}}>
													<Box
														sx={{
															minWidth: "56px",
															height: "56px",
															backgroundColor: alpha(JW_CYAN, 0.1),
															borderRadius: "50%",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															mr: 2.5,
														}}>
														<PhoneIcon sx={{ color: JW_CYAN, fontSize: 24 }} />
													</Box>
													<Box>
														<Typography
															variant="h6"
															sx={{ fontWeight: 700, mb: 0.5, color: JW_BLUE }}>
															Phone
														</Typography>
														<Typography sx={{ mb: 0.5, fontWeight: 500 }}>
															0208 646 7931
														</Typography>
														<Typography
															variant="body2"
															sx={{ color: alpha("#000", 0.6) }}>
															For emergency services: 07860 606 151
														</Typography>
													</Box>
												</Box>
											</ContactInfoCard>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}>
											<ContactInfoCard sx={{ height: "100%" }}>
												<Box
													sx={{
														display: "flex",
														alignItems: "flex-start",
														height: "100%",
													}}>
													<Box
														sx={{
															minWidth: "56px",
															height: "56px",
															backgroundColor: alpha(JW_CYAN, 0.1),
															borderRadius: "50%",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															mr: 2.5,
														}}>
														<EmailIcon sx={{ color: JW_CYAN, fontSize: 24 }} />
													</Box>
													<Box>
														<Typography
															variant="h6"
															sx={{ fontWeight: 700, mb: 0.5, color: JW_BLUE }}>
															Email
														</Typography>
														<Typography sx={{ mb: 0.5, fontWeight: 500 }}>
															help@jwsecurity.co.uk
														</Typography>
														<Typography
															variant="body2"
															sx={{ color: alpha("#000", 0.6) }}>
															We&apos;ll respond within 24 hours
														</Typography>
													</Box>
												</Box>
											</ContactInfoCard>
										</Grid>
										<Grid
											item
											xs={12}>
											<ContactInfoCard>
												<Box sx={{ display: "flex", alignItems: "flex-start" }}>
													<Box
														sx={{
															minWidth: "56px",
															height: "56px",
															backgroundColor: alpha(JW_CYAN, 0.1),
															borderRadius: "50%",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															mr: 2.5,
														}}>
														<LocationOnIcon
															sx={{ color: JW_CYAN, fontSize: 24 }}
														/>
													</Box>
													<Box>
														<Typography
															variant="h6"
															sx={{ fontWeight: 700, mb: 0.5, color: JW_BLUE }}>
															Service Areas
														</Typography>
														<Typography sx={{ mb: 0.5, fontWeight: 500 }}>
															All of London & Surrey
														</Typography>
														<Typography
															variant="body2"
															sx={{ color: alpha("#000", 0.6) }}>
															Based in Wandsworth, serving the whole of London
														</Typography>
													</Box>
												</Box>
											</ContactInfoCard>
										</Grid>
									</Grid>
								</Box>
							</Grid>

							<Grid
								item
								xs={12}
								md={6}
								sx={{ display: "flex", justifyContent: "center" }}>
								<ContactForm sx={{ width: "100%", maxWidth: "540px" }}>
									<Typography
										variant="h5"
										sx={{ fontWeight: 700, mb: 1, color: JW_BLUE }}>
										Send Us a Message
									</Typography>
									<Typography sx={{ mb: 4, color: alpha("#000", 0.6) }}>
										Fill out the form below and we&apos;ll get back to you as
										soon as possible.
									</Typography>

									<form onSubmit={handleSubmit}>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												gap: { xs: 2.5, sm: 3 },
											}}>
											<StyledTextField
												fullWidth
												label="Your Name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												disabled={isSubmitting}
											/>
											<StyledTextField
												fullWidth
												label="Email Address"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												required
												disabled={isSubmitting}
											/>
											<StyledTextField
												fullWidth
												label="Phone Number"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												disabled={isSubmitting}
											/>
											<StyledTextField
												fullWidth
												label="Subject"
												name="subject"
												value={formData.subject}
												onChange={handleChange}
												required
												disabled={isSubmitting}
											/>
											<StyledTextField
												fullWidth
												label="Your Message"
												name="message"
												multiline
												rows={6}
												value={formData.message}
												onChange={handleChange}
												required
												disabled={isSubmitting}
											/>
											<ReCaptcha
												onVerify={(token) => setRecaptchaToken(token)}
											/>
											<StyledButton
												type="submit"
												size="large"
												disabled={isSubmitting || !recaptchaToken}
												sx={{ alignSelf: { xs: "stretch", sm: "flex-start" } }}
												startIcon={
													isSubmitting ? (
														<CircularProgress
															size={20}
															color="inherit"
														/>
													) : (
														<SendIcon />
													)
												}>
												{isSubmitting ? "Sending..." : "Send Message"}
											</StyledButton>
										</Box>
									</form>
								</ContactForm>
							</Grid>
						</Grid>

						<Box sx={{ mt: 8, textAlign: "center" }}>
							<Divider sx={{ mb: 5 }} />
							<Typography
								variant="h5"
								sx={{ fontWeight: 700, mb: 2, color: JW_BLUE }}>
								Opening Hours
							</Typography>
							<Grid
								container
								spacing={2}
								justifyContent="center">
								<Grid
									item
									xs={12}
									sm={4}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											mb: 1,
										}}>
										<AccessTimeIcon sx={{ color: JW_CYAN, mr: 1 }} />
										<Typography sx={{ fontWeight: 500 }}>
											Monday - Friday
										</Typography>
									</Box>
									<Typography sx={{ color: alpha("#000", 0.6) }}>
										8:00 AM - 6:00 PM
									</Typography>
								</Grid>
								<Grid
									item
									xs={12}
									sm={4}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											mb: 1,
										}}>
										<AccessTimeIcon sx={{ color: JW_CYAN, mr: 1 }} />
										<Typography sx={{ fontWeight: 500 }}>Saturday</Typography>
									</Box>
									<Typography sx={{ color: alpha("#000", 0.6) }}>
										9:00 AM - 4:00 PM
									</Typography>
								</Grid>
								<Grid
									item
									xs={12}
									sm={4}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											mb: 1,
										}}>
										<AccessTimeIcon sx={{ color: JW_CYAN, mr: 1 }} />
										<Typography sx={{ fontWeight: 500 }}>
											Emergency Service
										</Typography>
									</Box>
									<Typography sx={{ color: alpha("#000", 0.6) }}>
										24/7 Available
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</Box>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbar.severity}
					sx={{ width: "100%" }}>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</>
	);
}
