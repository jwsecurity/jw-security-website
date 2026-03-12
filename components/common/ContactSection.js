"use client";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled, alpha } from "@mui/material/styles";
import { Box, Container, Typography, Button, Grid } from "@mui/material";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const ContactSectionWrapper = styled(Box)(({ theme }) => ({
	"padding": theme.spacing(7, 0),
	"backgroundImage": `linear-gradient(to right, ${alpha(JW_BLUE, 0.95)}, ${alpha(JW_BLUE, 0.92)}), url(/images/jw/locksmith-maintenance.jpg)`,
	"backgroundSize": "cover",
	"backgroundPosition": "center",
	"backgroundAttachment": "fixed",
	"color": "white",
	"position": "relative",
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(5, 0),
		backgroundAttachment: "scroll",
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(4, 0),
	},
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

export default function ContactSection({
	title = "Need Professional Security Assistance?",
	subtitle = "Our expert team provides bespoke security solutions with meticulous attention to detail. Contact us for a free consultation.",
	showPhone = true,
	phoneNumber = "0208 646 7931",
}) {
	return (
		<ContactSectionWrapper>
			<Container>
				<Grid
					container
					spacing={5}
					alignItems="center"
					justifyContent="center">
					<Grid
						item
						xs={12}
						md={7}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: { xs: "center", md: "flex-start" },
								textAlign: { xs: "center", md: "left" },
							}}>
							<Typography
								variant="h3"
								sx={{
									fontWeight: 700,
									mb: 3,
									fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
									textShadow: "0 2px 10px rgba(0,0,0,0.2)",
									color: "white",
								}}>
								{title}
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: "1.125rem", md: "1.1rem" },
									mb: { xs: 3, md: 5 },
									maxWidth: "600px",
									lineHeight: 1.7,
									color: alpha("#fff", 0.9),
								}}>
								{subtitle}
							</Typography>
							<Button
								component="a"
								href="/contact"
								variant="contained"
								size="large"
								sx={{
									"bgcolor": JW_CYAN,
									"color": JW_BLUE,
									"fontWeight": 600,
									"px": { xs: 3, md: 4 },
									"py": { xs: 2, md: 1.5 },
									"fontSize": { xs: "1.125rem", md: "1rem" },
									"borderRadius": "6px",
									"textTransform": "none",
									"minHeight": "48px",
									"boxShadow": "0 5px 15px rgba(0, 198, 215, 0.3)",
									"&:hover": {
										bgcolor: alpha(JW_CYAN, 0.9),
										boxShadow: "0 8px 25px rgba(0, 198, 215, 0.4)",
										transform: "translateY(-3px)",
									},
									"transition": "all 0.3s ease",
								}}>
								Get a Free Consultation
							</Button>
						</Box>
					</Grid>
					{showPhone && (
						<Grid
							item
							xs={12}
							md={5}>
							<Box
								sx={{
									p: 3.5,
									bgcolor: alpha("#fff", 0.05),
									backdropFilter: "blur(10px)",
									borderRadius: "12px",
									border: `1px solid ${alpha("#fff", 0.1)}`,
									boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									textAlign: "center",
								}}>
								<Typography
									variant="h5"
									sx={{ fontWeight: 600, mb: 3, color: "white" }}>
									24/7 Emergency Service
								</Typography>
								<Typography sx={{ mb: 1, fontSize: "1.1rem", lineHeight: 1.7 }}>
									Need urgent assistance? Call our emergency hotline for
									immediate support.
								</Typography>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										my: 3,
										justifyContent: "center",
									}}>
									<Box
										sx={{
											mr: 2.5,
											width: 56,
											height: 56,
											borderRadius: "50%",
											bgcolor: alpha(JW_CYAN, 0.15),
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}>
										<PhoneIcon sx={{ color: JW_CYAN, fontSize: 28 }} />
									</Box>
									<Box>
										<Typography
											sx={{ fontSize: "0.9rem", color: alpha("#fff", 0.85) }}>
											Call our emergency hotline
										</Typography>
										<Typography
											sx={{
												fontWeight: 700,
												fontSize: "1.8rem",
												color: JW_CYAN,
											}}>
											{phoneNumber}
										</Typography>
									</Box>
								</Box>
								<Button
									component="a"
									href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
									fullWidth
									variant="contained"
									sx={{
										"bgcolor": JW_CYAN,
										"color": JW_BLUE,
										"fontWeight": 600,
										"py": { xs: 2, md: 1.5 },
										"fontSize": { xs: "1.125rem", md: "1rem" },
										"borderRadius": "6px",
										"textTransform": "none",
										"minHeight": "48px",
										"boxShadow": "0 5px 15px rgba(0, 198, 215, 0.3)",
										"&:hover": {
											bgcolor: alpha(JW_CYAN, 0.9),
											boxShadow: "0 8px 25px rgba(0, 198, 215, 0.4)",
										},
										"mt": 1,
									}}>
									Call Now
								</Button>
							</Box>
						</Grid>
					)}
				</Grid>
			</Container>
		</ContactSectionWrapper>
	);
}
