"use client";
import React from "react";
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
import HomeIcon from "@mui/icons-material/Home";
import { styled, alpha } from "@mui/material/styles";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));
import ContactSection from "../common/ContactSection";
import BusinessIcon from "@mui/icons-material/Business";
import AssessmentIcon from "@mui/icons-material/Assessment";
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

const SurveyTypeCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"padding": theme.spacing(3.5),
	"transition": "transform 0.3s, box-shadow 0.3s",
	"boxShadow": "0 4px 15px rgba(0,0,0,0.08)",
	"borderRadius": "10px",
	"display": "flex",
	"flexDirection": "column",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
	},
}));

const IconBox = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	backgroundColor: alpha(JW_CYAN, 0.1),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2),
}));

const SurveyProcessCard = styled(Box)(({ theme }) => ({
	"padding": theme.spacing(3),
	"borderRadius": "8px",
	"border": `1px solid ${alpha(JW_BLUE, 0.1)}`,
	"marginBottom": theme.spacing(2),
	"backgroundColor": alpha(JW_CYAN, 0.03),
	"transition": "background-color 0.3s",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.07),
	},
}));

export default function SecuritySurveysPage() {
	const surveyTypes = [
		{
			title: "Residential Security Surveys",
			description:
				"Comprehensive assessments of home security vulnerabilities with tailored recommendations for families and homeowners.",
			icon: <HomeIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Commercial Security Surveys",
			description:
				"Detailed evaluation of business premises to identify security risks and compliance issues, with custom solutions.",
			icon: <BusinessIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Post-Incident Security Assessments",
			description:
				"Specialized surveys after break-ins or security breaches to identify weaknesses and prevent future incidents.",
			icon: <AssessmentIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
	];

	const surveyProcess = [
		{
			step: "Initial Consultation",
			description:
				"We discuss your security concerns, requirements, and budget to understand your needs.",
		},
		{
			step: "On-Site Assessment",
			description:
				"Our security expert conducts a thorough examination of your property, identifying vulnerabilities and security gaps.",
		},
		{
			step: "Detailed Report",
			description:
				"You receive a comprehensive security assessment with clear recommendations and prioritized actions.",
		},
		{
			step: "Solution Implementation",
			description:
				"Optional implementation of recommended security measures by our experienced technicians.",
		},
		{
			step: "Follow-Up Verification",
			description:
				"Post-implementation check to ensure all security measures are functioning correctly.",
		},
	];

	const surveyBenefits = [
		"Identification of security vulnerabilities before they can be exploited",
		"Professional recommendations based on industry best practices",
		"Prioritized security improvements to match your budget",
		"Compliance with insurance requirements",
		"Peace of mind knowing your security has been professionally assessed",
		"Documentation of security measures for insurance purposes",
	];

	return (
		<>
			<PageHero
				title="Full Security Surveys"
				subtitle="Comprehensive property assessments to identify vulnerabilities and enhance your security"
				backgroundImage="/images/jw/maintenance-concept-focused-serious-young-locksmith-with-tattoo-on-hand-wearing-blue-uniform.jpg"
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
								src="/images/jw/security-camera.jpg"
								alt="Security survey assessment"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Professional Security Survey Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								At JW Security, we offer comprehensive security surveys to help
								identify vulnerabilities in your property&apos;s defenses. Our
								professional assessments provide you with actionable insights
								and recommendations to enhance your security setup.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Whether you&apos;re concerned about the security of your home,
								business premises, or have recently experienced a security
								breach, our thorough surveys can highlight areas for improvement
								and help protect what matters most to you.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Each security survey is conducted by our experienced specialists
								who bring years of expertise in identifying vulnerabilities that
								others might miss. We take a comprehensive approach, examining
								physical security, access points, existing systems, and
								procedural aspects to provide you with a complete security
								picture.
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
							<SectionTitle variant="h4">
								Our Security Survey Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We provide specialized assessments for different environments,
								ensuring that our security strategies are tailored to the unique
								risks of your property type.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								From family homes to large commercial complexes, our surveys
								deliver the clarity and evidence-based guidance you need to
								improve your defenses.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{surveyTypes.map((type, index) => (
									<Grid
										size={{ xs: 12 }}
										key={index}>
										<SurveyTypeCard
											sx={{
												p: 2.5,
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												gap: 2.5,
											}}>
											<Box
												sx={{
													flexShrink: 0,
													bgcolor: alpha(JW_CYAN, 0.1),
													p: 1,
													borderRadius: "50%",
													display: "flex",
												}}>
												{React.cloneElement(type.icon, {
													sx: { fontSize: 24 },
												})}
											</Box>
											<Box>
												<Typography
													variant="h6"
													sx={{
														fontWeight: 600,
														color: JW_BLUE,
														mb: 0.5,
														fontSize: "1.05rem",
													}}>
													{type.title}
												</Typography>
												<Typography
													variant="body2"
													sx={{ color: alpha("#000", 0.65) }}>
													{type.description}
												</Typography>
											</Box>
										</SurveyTypeCard>
									</Grid>
								))}
							</Grid>
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
						Join hundreds of local residents who trust JW Security for their
						peace of mind.
					</Typography>
					<Button
						variant="contained"
						size="large"
						href="tel:02086467931"
						sx={{
							"fontWeight": 900,
							"px": 6,
							"py": 2,
							"fontSize": "1.1rem",
							"bgcolor": JW_BLUE,
							"color": "white",
							"&:hover": { bgcolor: "white", color: JW_BLUE },
						}}>
						CALL US TODAY: 0208 646 7931
					</Button>
				</Container>
			</CTABanner>

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Our Security Survey Process
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our structured approach ensures that no detail is overlooked,
								from the first conversation to the final verification.
							</Typography>
							<Box
								component="img"
								src="/images/jw/maintenance-concept-focused-serious-young-locksmith-with-tattoo-on-hand-wearing-blue-uniform.jpg"
								alt="Security survey process"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							{surveyProcess.map((step, index) => (
								<SurveyProcessCard
									key={index}
									sx={{ p: 2, mb: 1.5 }}>
									<Box sx={{ display: "flex", alignItems: "flex-start" }}>
										<Box
											sx={{
												width: 24,
												height: 24,
												borderRadius: "50%",
												bgcolor: JW_BLUE,
												color: "white",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "0.85rem",
												fontWeight: "bold",
												mr: 2,
												flexShrink: 0,
												mt: 0.5,
											}}>
											{index + 1}
										</Box>
										<Box>
											<Typography
												variant="subtitle1"
												sx={{ fontWeight: 700, color: JW_BLUE, mb: 0.2 }}>
												{step.step}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.7) }}>
												{step.description}
											</Typography>
										</Box>
									</Box>
								</SurveyProcessCard>
							))}
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
							<SectionTitle variant="h5">
								When to Consider a Survey
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A professional survey is particularly valuable in these critical
								situations:
							</Typography>
							<List sx={{ pl: 0 }}>
								{[
									"Moving into a new home or business premises",
									"After a security breach or burglary attempt",
									"Storing valuable items or sensitive data",
									"Renovating or expanding your property",
									"An increase in local criminal activity",
									"Compliance with insurance requirements",
								].map((text, idx) => (
									<ListItem
										key={idx}
										sx={{
											display: "flex",
											alignItems: "flex-start",
											px: 0,
											py: 0.5,
										}}>
										<ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
											<CheckCircleOutlineIcon
												sx={{ color: JW_CYAN, fontSize: 20 }}
											/>
										</ListItemIcon>
										<ListItemText
											primary={text}
											primaryTypographyProps={{ fontSize: "1.05rem" }}
										/>
									</ListItem>
								))}
							</List>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">
								Benefits of Our Expert Assessments
							</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{surveyBenefits.map((benefit, index) => (
										<ListItem
											key={index}
											sx={{ py: 1 }}>
											<ListItemIcon>
												<CheckCircleOutlineIcon sx={{ color: JW_BLUE }} />
											</ListItemIcon>
											<ListItemText
												primary={benefit}
												primaryTypographyProps={{ fontWeight: 500 }}
											/>
										</ListItem>
									))}
								</List>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<ContactSection />
		</>
	);
}
