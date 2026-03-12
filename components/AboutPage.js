"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { JW_BLUE } from "../constants/colors";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessIcon from "@mui/icons-material/Business";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Container, Typography, Grid, Card, Paper } from "@mui/material";

const PageHero = styled(Box)(({ theme }) => ({
	backgroundColor: JW_BLUE,
	color: "white",
	padding: theme.spacing(10, 0, 8),
	paddingTop: `calc(${theme.spacing(10)} + 90px)`,
	position: "relative",
	backgroundImage:
		"linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url(/images/jw/locksmith-maintenance.jpg)",
	backgroundSize: "cover",
	backgroundPosition: "center",
}));

const Section = styled(Box)(({ theme, odd }) => ({
	backgroundColor: odd ? "#f5f5f5" : "#ffffff",
	padding: theme.spacing(8, 0),
}));

const SectionTitle = styled(Typography)(({ theme, align }) => ({
	"fontWeight": 700,
	"marginBottom": theme.spacing(3),
	"position": "relative",
	"paddingBottom": theme.spacing(2),
	"&::after": {
		content: '""',
		position: "absolute",
		width: "60px",
		height: "4px",
		backgroundColor: JW_BLUE,
		bottom: 0,
		left: align === "center" ? "50%" : 0,
		transform: align === "center" ? "translateX(-50%)" : "none",
	},
}));

const TeamCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"transition": "transform 0.3s, box-shadow 0.3s",
	"overflow": "hidden",
	"boxShadow": "0 4px 20px rgba(0,0,0,0.1)",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
	},
}));

const SocialIcon = styled(Box)(({ theme }) => ({
	"display": "flex",
	"alignItems": "center",
	"justifyContent": "center",
	"width": 36,
	"height": 36,
	"borderRadius": "50%",
	"backgroundColor": "rgba(0,0,0,0.05)",
	"cursor": "pointer",
	"transition": "background-color 0.3s",
	"&:hover": {
		backgroundColor: JW_BLUE,
		color: "white",
	},
}));

export default function AboutPage() {
	const values = [
		{
			title: "Excellence",
			description:
				"We provide top-quality services and products with attention to detail and craftsmanship.",
		},
		{
			title: "Integrity",
			description:
				"We operate with honesty and transparency in all our business dealings.",
		},
		{
			title: "Reliability",
			description:
				"Our clients can depend on us to deliver on our promises and be there when needed.",
		},
		{
			title: "Innovation",
			description:
				"We continually seek improved security solutions to better serve our customers.",
		},
	];

	return (
		<>
			<PageHero>
				<Container>
					<Typography
						variant="h2"
						component="h1"
						sx={{ fontWeight: 700, mb: 2, color: "white" }}>
						About JW Security
					</Typography>
					<Typography
						variant="h6"
						sx={{ maxWidth: "700px", mb: 4, fontWeight: 400, color: "white" }}>
						Professional security experts serving London since 1991
					</Typography>
				</Container>
			</PageHero>
			<Section>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid
							item
							xs={12}
							md={6}>
							<SectionTitle
								variant="h3"
								align="left">
								Our Story
							</SectionTitle>
							<Typography paragraph>
								JW Security (previously known as 1st Call Security) was
								established in 1991 by Julian Whitter. The aim was to offer a
								professional and discreet service that home and business owners
								could trust in to protect their property.
							</Typography>
							<Typography paragraph>
								Our service has proved a successful one and our company has
								grown over the last 30 years to provide an extensive range of
								locksmith and security related services across London. From our
								early days serving South London and Surrey, we now cover all
								London boroughs with specialist teams strategically positioned
								for rapid response.
							</Typography>
							<Typography paragraph>
								We like to foster long term relationships with our customers
								providing high quality services across multiple properties and
								businesses. Close to half our work comes from repeat business
								and good word of mouth - a testament to the trust we&apos;ve
								built over three decades.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/locksmith.jpg"
								alt="JW Security History"
								sx={{
									width: "100%",
									borderRadius: "8px",
									boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
									transform: "rotate(2deg)",
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Section>
			<Section odd>
				<Container>
					<SectionTitle
						variant="h3"
						align="center">
						Our Values
					</SectionTitle>
					<Typography
						align="center"
						paragraph
						sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}>
						At JW Security, we are guided by a set of core principles that
						define how we operate and serve our clients.
					</Typography>

					<Grid
						container
						spacing={4}>
						{values.map((value, index) => (
							<Grid
								item
								xs={12}
								sm={6}
								key={index}>
								<Box sx={{ display: "flex", mb: 3 }}>
									<CheckCircleOutlineIcon
										sx={{ color: JW_BLUE, fontSize: 30, mr: 2, mt: 0.5 }}
									/>
									<Box>
										<Typography
											variant="h5"
											sx={{ fontWeight: 600, mb: 1 }}>
											{value.title}
										</Typography>
										<Typography>{value.description}</Typography>
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Section>
			<Section>
				<Container>
					<SectionTitle
						variant="h3"
						align="center">
						Accreditations & Expertise
					</SectionTitle>
					<Typography
						align="center"
						paragraph
						sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}>
						Our qualifications and memberships demonstrate our commitment to
						excellence and continuous professional development
					</Typography>

					<Grid
						container
						spacing={4}
						justifyContent="center">
						<Grid
							item
							xs={12}
							md={4}>
							<Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
								<WorkspacePremiumIcon
									sx={{ fontSize: 60, color: JW_BLUE, mb: 2 }}
								/>
								<Typography
									variant="h5"
									sx={{ fontWeight: 600, mb: 2 }}>
									MLA Approved
								</Typography>
								<Typography>
									Proud members of the Master Locksmiths Association,
									demonstrating our commitment to the highest standards of
									locksmithing practice and ethics.
								</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							xs={12}
							md={4}>
							<Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
								<VerifiedIcon sx={{ fontSize: 60, color: JW_BLUE, mb: 2 }} />
								<Typography
									variant="h5"
									sx={{ fontWeight: 600, mb: 2 }}>
									DBS Checked
								</Typography>
								<Typography>
									All our technicians undergo enhanced DBS (Disclosure and
									Barring Service) checks, ensuring complete peace of mind for
									our customers.
								</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							xs={12}
							md={4}>
							<Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
								<BusinessIcon sx={{ fontSize: 60, color: JW_BLUE, mb: 2 }} />
								<Typography
									variant="h5"
									sx={{ fontWeight: 600, mb: 2 }}>
									Fully Insured
								</Typography>
								<Typography>
									Comprehensive public liability insurance up to £5 million,
									protecting both our team and our customers throughout every
									project.
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</Section>
			<Section odd>
				<Container>
					<SectionTitle
						variant="h3"
						align="center">
						Our Commitment
					</SectionTitle>
					<Typography
						align="center"
						paragraph
						sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}>
						We&apos;ve built our reputation on quality, trust and
						professionalism.
					</Typography>

					<Grid
						container
						spacing={4}>
						<Grid
							item
							xs={12}
							md={6}>
							<Box sx={{ mb: 4 }}>
								<Typography
									variant="h5"
									sx={{ fontWeight: 600, mb: 2 }}>
									Professional & Discreet Service
								</Typography>
								<Typography paragraph>
									JW Security is highly sensitive to customer needs and
									satisfaction and our whole team is professional and discreet.
									We have provided services to a number of high profile
									celebrities, government ministries, NHS services and high
									street banks who trust in us to get the job done properly and
									without any risk to privacy or internal security.
								</Typography>
								<Typography
									variant="body2"
									sx={{ fontStyle: "italic", color: "text.secondary" }}>
									Trusted by: NHS Trusts • Government Departments • Major Banks
									• Celebrity Residences • Embassy Properties • Listed Buildings
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box sx={{ mb: 4 }}>
								<Typography
									variant="h5"
									sx={{ fontWeight: 600, mb: 2 }}>
									Bespoke Solutions
								</Typography>
								<Typography paragraph>
									Everything we do is bespoke. No two jobs are ever the same so
									every one of our projects starts out not just with a free
									estimate, but also a free security check and insurance
									schedule review to ensure you understand the complete security
									picture of your property or business.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Section>
			<Section odd>
				<Container>
					<Grid
						container
						spacing={4}
						justifyContent="center">
						{[
							{ number: "30+", label: "Years Experience" },
							{ number: "10k+", label: "Completed Projects" },
							{ number: "97%", label: "Customer Satisfaction" },
							{ number: "24/7", label: "Emergency Support" },
						].map((stat, index) => (
							<Grid
								item
								xs={6}
								md={3}
								key={index}
								sx={{ textAlign: "center" }}>
								<Typography
									variant="h3"
									sx={{ fontWeight: 700, color: JW_BLUE, mb: 1 }}>
									{stat.number}
								</Typography>
								<Typography
									variant="h6"
									sx={{ fontWeight: 500 }}>
									{stat.label}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Container>
			</Section>
		</>
	);
}
