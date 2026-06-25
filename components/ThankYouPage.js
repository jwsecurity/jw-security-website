"use client";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { styled, alpha } from "@mui/material/styles";

const JW_CYAN = "#00c6d7";
const JW_BLUE = "#1c2e4a";

const PageHero = styled(Box)(({ theme }) => ({
	"position": "relative",
	"backgroundColor": JW_BLUE,
	"color": "white",
	"padding": theme.spacing(16, 0, 12),
	"paddingTop": `calc(${theme.spacing(10)} + 90px)`,
	"minHeight": "50vh",
	"display": "flex",
	"alignItems": "center",
	"backgroundImage":
		"linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url(/images/jw/locksmith-maintenance.webp)",
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

const ThankYouCard = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(6),
	textAlign: "center",
	boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
	borderRadius: "12px",
	backgroundColor: "#fff",
	border: "1px solid rgba(0,0,0,0.04)",
	maxWidth: "700px",
	margin: "-100px auto 0",
	position: "relative",
	zIndex: 3,
}));

const DecorativeLine = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "3px",
	backgroundColor: JW_CYAN,
	margin: "0 auto " + theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
	"padding": theme.spacing(1.5, 4),
	"fontWeight": 600,
	"borderRadius": "6px",
	"fontSize": "15px",
	"textTransform": "none",
	"transition": "all 0.3s ease",
	"&:hover": {
		transform: "translateY(-2px)",
	},
}));

export default function ThankYouPage() {
	return (
		<>
			<PageHero>
				<Container maxWidth="xl">
					<Box
						sx={{
							maxWidth: 700,
							position: "relative",
							zIndex: 2,
							mx: "auto",
							textAlign: "center",
						}}>
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
							Enquiry Submitted
						</Typography>
					</Box>
				</Container>
			</PageHero>

			<Box sx={{ pb: { xs: 8, md: 12 }, px: 2, bgcolor: "#fff" }}>
				<Container>
					<ThankYouCard>
						<Box
							sx={{
								width: "80px",
								height: "80px",
								backgroundColor: alpha(JW_CYAN, 0.1),
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mx: "auto",
								mb: 3,
							}}>
							<CheckCircleOutlineIcon sx={{ color: JW_CYAN, fontSize: 48 }} />
						</Box>

						<Typography
							variant="h4"
							sx={{ fontWeight: 700, mb: 2, color: JW_BLUE }}>
							Thank You!
						</Typography>

						<DecorativeLine />

						<Typography
							variant="h6"
							sx={{
								color: alpha("#000", 0.7),
								fontWeight: 400,
								lineHeight: 1.6,
								mb: 4,
							}}>
							Your message has been successfully received. A member of the JW
							Security team will review your enquiry and get back to you within
							24 hours.
						</Typography>

						<Box
							sx={{
								p: 3,
								bgcolor: alpha(JW_BLUE, 0.02),
								borderRadius: "8px",
								border: `1px solid ${alpha(JW_BLUE, 0.05)}`,
								mb: 5,
							}}>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: 700, color: JW_BLUE, mb: 1 }}>
								Need Urgent Assistance?
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: alpha("#000", 0.6), mb: 2 }}>
								If you are locked out or have an emergency, call our emergency
								hotline directly:
							</Typography>
							<Button
								component="a"
								href="tel:07860606151"
								variant="contained"
								startIcon={<PhoneIcon />}
								sx={{
									"bgcolor": JW_BLUE,
									"color": "#fff",
									"fontWeight": 600,
									"px": 4,
									"py": 1.2,
									"borderRadius": "6px",
									"textTransform": "none",
									"&:hover": {
										bgcolor: alpha(JW_BLUE, 0.9),
									},
								}}>
								07860 606 151
							</Button>
						</Box>

						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								gap: 2,
								justifyContent: "center",
							}}>
							<Link
								href="/"
								passHref>
								<StyledButton
									variant="outlined"
									startIcon={<HomeIcon />}
									sx={{
										"color": JW_BLUE,
										"borderColor": JW_BLUE,
										"width": "100%",
										"&:hover": {
											borderColor: alpha(JW_BLUE, 0.8),
											backgroundColor: alpha(JW_BLUE, 0.04),
										},
									}}>
									Back to Home
								</StyledButton>
							</Link>
							<Link
								href="/contact"
								passHref>
								<StyledButton
									variant="contained"
									sx={{
										"bgcolor": JW_CYAN,
										"color": JW_BLUE,
										"width": "100%",
										"boxShadow": "0 4px 10px rgba(0, 198, 215, 0.25)",
										"&:hover": {
											bgcolor: JW_CYAN,
											boxShadow: "0 6px 15px rgba(0, 198, 215, 0.35)",
										},
									}}>
									Submit Another Enquiry
								</StyledButton>
							</Link>
						</Box>
					</ThankYouCard>
				</Container>
			</Box>
		</>
	);
}
