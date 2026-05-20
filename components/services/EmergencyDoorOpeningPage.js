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
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import PageHero from "../common/PageHero";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "../common/ContactSection";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));

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
				"Quick attendance for lockouts and urgent access issues across London and Surrey.",
		},
		{
			title: "Non Destructive Entry",
			description:
				"We use non destructive entry methods where possible to reduce unnecessary damage.",
		},
		{
			title: "24/7 Availability",
			description:
				"Emergency door opening support for situations that cannot wait until later.",
		},
		{
			title: "Fully Equipped Technicians",
			description:
				"Our team arrives with the tools needed for common lock and door access problems.",
		},
	];

	const benefits = [
		"Quick response to urgent lockout situations",
		"Experienced locksmiths for residential and commercial properties",
		"Non destructive entry where possible",
		"Help with failed locks and jammed mechanisms",
		"Access restored without unnecessary delay",
		"Clear pricing before work starts",
	];

	const faqs = [
		{
			question: "Do You Provide Emergency Door Opening In London?",
			answer:
				"Yes. We provide emergency door opening in London for homes, flats, offices, shops, and commercial premises.",
		},
		{
			question: "Can You Help If I Am Locked Out Of My House?",
			answer:
				"Yes. We attend house lockouts, flat lockouts, and other residential access problems across London and Surrey.",
		},
		{
			question: "Do You Use Non Destructive Entry?",
			answer:
				"Where possible, yes. We assess the lock and door first and use the most suitable entry method for the situation.",
		},
		{
			question: "What If The Lock Has Failed?",
			answer:
				"If the lock, cylinder, or mechanism has failed, we explain the fault and advise what needs to be done after access is regained.",
		},
		{
			question: "Do You Work With Businesses And Managed Buildings?",
			answer:
				"Yes. We provide emergency door opening for offices, managed properties, communal entrances, and commercial buildings.",
		},
		{
			question: "What Areas Do You Cover?",
			answer:
				"We cover London, Surrey, and surrounding areas. Call us if you want to confirm your location.",
		},
	];

	return (
		<>
			<PageHero
				title="Emergency Door Opening In London"
				subtitle="Fast emergency door opening for homes, flats, offices, and business premises across London and Surrey when you are locked out or cannot regain access."
				backgroundImage="/images/jw/locksmith-in-installing-new-house-door-lock-hand-holds-the-screwdriver.webp"
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
								src="/images/jw/a-locksmith-is-repairing-an-interior-door-lock-close-up-of-male-hands-repairing-or-replacing-an.webp"
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
								Getting locked out can happen without warning. Keys get left
								inside. Locks fail. Doors close behind you. When that happens,
								you need a fast response from someone who deals with access
								problems every day.
							</Typography>

							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides emergency door opening in London for
								residential and commercial properties that need urgent help
								regaining entry. We attend lockouts for homes, flats, offices,
								shops, and managed buildings, using the most suitable method for
								the situation in front of us.
							</Typography>

							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Where possible, we aim for non destructive entry. If the issue
								is caused by a failed lock, damaged cylinder, snapped key, or
								faulty mechanism, we explain what has gone wrong and what needs
								to happen next.
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
						Speak to JW Security for urgent access help and wider property
						security work across London and Surrey.
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
								Why Choose Our Emergency Door Opening Service
							</SectionTitle>

							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We focus on urgent access problems that need quick attention.
								If you are locked out of your property, the priority is getting
								you back inside without delay and without making the situation
								worse.
							</Typography>

							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our team deals with home lockouts, office lockouts, communal
								entrance access issues, and other urgent door opening jobs
								across London and Surrey.
							</Typography>

							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Because every lockout is different, we assess the door, lock,
								and access point first, then use the most suitable method to
								regain entry as safely as possible.
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
								What To Do When You Are Locked Out
							</SectionTitle>

							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7, mb: 3 }}>
								If you are locked out, the best thing to do is stay calm and
								avoid forcing the door or damaging the lock. That often turns a
								simple access issue into a bigger repair job.
							</Typography>

							<List sx={{ pl: 0 }}>
								{[
									"Call our emergency number and explain the situation",
									"Tell us whether it is a home, flat, office, or commercial property",
									"Let us know if the keys are lost, left inside, or if the lock has failed",
									"Wait at the property until our locksmith arrives",
									"Have identification ready where possible",
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
							<SectionTitle variant="h5">Benefits Of Our Service</SectionTitle>

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

			<CTABanner sx={{ py: 8 }}>
				<Container>
					<Typography
						variant="h3"
						sx={{ fontWeight: 800, mb: 3 }}>
						Need Professional Access Assistance?
					</Typography>

					<Typography
						variant="h6"
						sx={{ mb: 4, fontWeight: 400, color: "white", opacity: 0.9 }}>
						If you are locked out of your home, flat, office, shop, or managed
						property, JW Security provides fast emergency door opening across
						London and Surrey. Get in touch now for urgent access help or to speak
						with our team about the issue.
					</Typography>

					<Button
						variant="contained"
						size="large"
						href="/contact"
						sx={{
							"fontWeight": 900,
							"px": 6,
							"py": 2,
							"fontSize": "1.1rem",
							"bgcolor": JW_BLUE,
							"color": "white",
							"&:hover": { bgcolor: "white", color: JW_BLUE },
						}}>
						GET A FREE CONSULTATION
					</Button>
				</Container>
			</CTABanner>

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_BLUE, 0.02) }}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 5 }}>
							<SectionTitle variant="h4">Common Questions</SectionTitle>

							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Find answers to common questions about our emergency door
								opening services.
							</Typography>

							<Button
								variant="contained"
								size="large"
								href="/contact"
								sx={{
									"fontWeight": 900,
									"px": 4,
									"py": 1.5,
									"bgcolor": JW_CYAN,
									"color": JW_BLUE,
									"&:hover": { bgcolor: JW_BLUE, color: "white" },
								}}>
								STILL HAVE QUESTIONS?
							</Button>
						</Grid>

						<Grid size={{ xs: 12, md: 7 }}>
							{faqs.map((faq, index) => (
								<Accordion
									key={index}
									sx={{
										"mb": 1.5,
										"boxShadow": "0 2px 8px rgba(0,0,0,0.05)",
										"borderRadius": "8px !important",
										"&::before": { display: "none" },
									}}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon sx={{ color: JW_CYAN }} />}
										sx={{
											"px": 3,
											"py": 0.5,
											"&.Mui-expanded": { minHeight: 48 },
										}}>
										<Typography
											variant="subtitle1"
											sx={{ fontWeight: 700, color: JW_BLUE }}>
											{faq.question}
										</Typography>
									</AccordionSummary>

									<AccordionDetails sx={{ px: 3, pb: 3 }}>
										<Typography
											sx={{
												lineHeight: 1.7,
												color: alpha("#000", 0.6),
												fontSize: "0.95rem",
											}}>
											{faq.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							))}
						</Grid>
					</Grid>
				</Container>
			</Box>

			<ContactSection />
		</>
	);
}