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

export default function EmergencyDoorOpeningPage() {
	const features = [
		{
			title: "Fast Response Time",
			description:
				"Our technicians are strategically located to provide quick emergency response throughout South London and Surrey.",
		},
		{
			title: "Non-Destructive Entry",
			description:
				"We use specialized tools and techniques to open doors with minimal or no damage to your property.",
		},
		{
			title: "24/7 Availability",
			description:
				"Our emergency door opening service is available around the clock, including weekends and holidays.",
		},
		{
			title: "Fully Equipped Technicians",
			description:
				"Our locksmiths arrive with all necessary tools and components to resolve most lock emergencies on the first visit.",
		},
	];

	const benefits = [
		"Quick response to minimize inconvenience",
		"Expertly trained locksmiths for damage-free entry",
		"Full security assessment during service",
		"Replacement locks can be fitted immediately if required",
		"All types of doors and locks handled",
		"Competitive pricing with transparent quotes",
	];

	return (
		<>
			<PageHero
				title="Emergency Door Opening"
				subtitle="Fast, professional assistance when you're locked out of your home or business"
				backgroundImage="/images/jw/locksmith-in-installing-new-house-door-lock-hand-holds-the-screwdriver.jpg"
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
								src="/images/jw/a-locksmith-is-repairing-an-interior-door-lock-close-up-of-male-hands-repairing-or-replacing-an.jpg"
								alt="Emergency door opening service"
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
								Professional Emergency Door Opening Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Being locked out of your home or business can be stressful and
								disruptive. At JW Security, we provide fast, reliable emergency
								door opening services with a focus on non-destructive entry
								techniques to minimize damage to your property.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our experienced locksmiths are equipped with specialized tools
								and extensive training to handle all types of lock emergencies.
								We can gain entry to virtually any locked door, including UPVC
								doors, wooden doors, and composite doors with various locking
								mechanisms.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								We understand that lockouts can happen at any time, which is why
								our emergency door opening service is available 24 hours a day,
								7 days a week. Simply call our emergency number, and we&apos;ll
								dispatch the nearest available locksmith to your location.
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
								Why Choose Our Emergency Service
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We pride ourselves on our rapid response and professional
								approach. Our goal is to get you back inside your property as
								quickly as possible, using the most efficient and least invasive
								methods available today.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our locksmiths are fully vetted and insured, providing you with
								the peace of mind that your security is in expert hands even
								during an emergency.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{features.map((feature, index) => (
									<Grid
										size={{ xs: 12, sm: 12 }}
										key={index}>
										<FeatureCard
											sx={{
												p: 2,
												display: "flex",
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
												<CheckCircleOutlineIcon
													sx={{ color: JW_CYAN, fontSize: 24 }}
												/>
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
													{feature.title}
												</Typography>
												<Typography
													variant="body2"
													sx={{ color: alpha("#000", 0.65) }}>
													{feature.description}
												</Typography>
											</Box>
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
								What to Do When You&apos;re Locked Out
							</SectionTitle>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7, mb: 3 }}>
								If you find yourself locked out, stay calm and follow these
								steps to resolve the situation safely:
							</Typography>
							<List sx={{ pl: 0 }}>
								{[
									"Call our emergency number immediately: 0208 646 7931",
									"Provide your exact location and details about the lock mechanism",
									"Our dispatcher will give you an accurate estimated arrival time",
									"Wait in a safe, well-lit place nearby until our locksmith arrives",
									"Have identification ready proving your residence or ownership",
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
							<SectionTitle variant="h5">Benefits of Our Service</SectionTitle>
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
