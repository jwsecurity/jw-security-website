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
import { styled, alpha } from "@mui/material/styles";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));
import ContactSection from "../common/ContactSection";
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

const FeatureCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"padding": theme.spacing(3),
	"transition": "transform 0.3s, box-shadow 0.3s",
	"boxShadow": "0 4px 12px rgba(0,0,0,0.08)",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
	},
}));

export default function BurglaryRepairsPage() {
	const services = [
		{
			title: "Door Repairs",
			description:
				"Complete repair or replacement of damaged doors, frames, and hardware to restore security.",
		},
		{
			title: "Window Repairs",
			description:
				"Fixing or replacing broken windows, including emergency boarding up services.",
		},
		{
			title: "Lock Replacement",
			description:
				"Installation of new high-security locks to replace compromised or damaged locking systems.",
		},
		{
			title: "Security Upgrades",
			description:
				"Recommendations and implementation of enhanced security measures to prevent future break-ins.",
		},
	];

	const benefits = [
		"Rapid response to secure your property quickly",
		"Comprehensive repairs to all entry points",
		"High-quality materials and workmanship",
		"Professional security assessment included",
		"Insurance-approved repairs and documentation",
		"Peace of mind with fully guaranteed work",
	];

	return (
		<>
			<PageHero
				title="Burglary Repairs"
				subtitle="Prompt and reliable repairs to secure your property after a break-in"
				backgroundImage="/images/jw/locksmith-man-and-maintenance-handyman-with-home-renovation-and-fixing-change-door-locks-with.webp"
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
								src="/images/jw/closeup-of-a-professional-locksmith-installing-a-new-lock-on-a-house-exterior-door-with-the-inside.webp"
								alt="Burglary repair service"
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
								Professional Burglary Repair Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								After a break-in, securing your property quickly is essential
								for your safety and peace of mind. JW Security provides
								comprehensive burglary repair services to restore the security
								of your home or business with minimal delay.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our skilled technicians can repair or replace damaged doors,
								frames, windows, and locks, ensuring that your property is
								secure against further intrusion. We understand that burglaries
								can be distressing, so we work efficiently and professionally to
								help you regain your sense of security.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								In addition to repairs, we provide expert advice on security
								improvements to help prevent future incidents. Our services are
								available 24/7 for emergency situations, allowing us to secure
								your property quickly even after hours.
							</Typography>
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

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								Our Burglary Repair Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We offer a complete range of repair services to handle any
								damage caused by forced entry. Our priority is to restore your
								property&apos;s physical security while ensuring all repairs
								meet the highest standards of quality and durability.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our team is equipped to handle emergency boarding up, structural
								repairs to door frames, and precision lock installations on the
								spot.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{services.map((service, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<FeatureCard sx={{ p: 2.5 }}>
											<Typography
												variant="h6"
												sx={{
													fontWeight: 600,
													color: JW_BLUE,
													mb: 1,
													fontSize: "1.1rem",
												}}>
												{service.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.7) }}>
												{service.description}
											</Typography>
										</FeatureCard>
									</Grid>
								))}
							</Grid>
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
								What to Do After a Break-In
							</SectionTitle>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7, mb: 3 }}>
								If you&apos;ve experienced a break-in, follow these critical
								steps to ensure your safety and protect your environment:
							</Typography>
							<List sx={{ pl: 0 }}>
								{[
									"Ensure your safety first - do not enter if you suspect the intruder might still be inside",
									"Call the police immediately to report the break-in",
									"Contact JW Security at 0208 646 7931 for emergency securement",
									"Document the damage with photos for insurance purposes",
									"Notify your insurance provider about the incident",
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
								Benefits of Our Expert Service
							</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{benefits.map((benefit, index) => (
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
