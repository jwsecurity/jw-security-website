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
	Paper,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import PageHero from "./common/PageHero";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Lock from "@mui/icons-material/Lock";
import Key from "@mui/icons-material/Key";
import { CarCrash } from "@mui/icons-material";

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

const ServiceCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"padding": theme.spacing(3),
	"transition": "all 0.3s ease",
	"boxShadow": "0 4px 12px rgba(0,0,0,0.08)",
	"border": "1px solid",
	"borderColor": "transparent",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
		borderColor: JW_CYAN,
	},
}));

const IconBox = styled(Box)(({ theme }) => ({
	"width": "70px",
	"height": "70px",
	"borderRadius": "50%",
	"backgroundColor": alpha(JW_CYAN, 0.1),
	"display": "flex",
	"alignItems": "center",
	"justifyContent": "center",
	"marginBottom": theme.spacing(2),
	"transition": "all 0.3s ease",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.2),
		transform: "scale(1.1)",
	},
}));

const BrandCard = styled(Paper)(({ theme }) => ({
	"padding": theme.spacing(2),
	"textAlign": "center",
	"backgroundColor": alpha(JW_BLUE, 0.03),
	"borderRadius": "8px",
	"border": `1px solid ${alpha(JW_BLUE, 0.1)}`,
	"transition": "all 0.2s",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.05),
		transform: "translateY(-3px)",
		boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
	},
}));

export default function LocksmithServicesPage() {
	const faqs = [
		{
			question: "What do you actually do?",
			answer:
				"Lock repairs, new lock fitting, lock replacements, key cutting, and general property security work for homes and businesses.",
		},
		{
			question: "Do you fix locks or just change them?",
			answer:
				"Depends what's wrong with it. If it's fixable, we'll fix it. If it's not, we'll replace it.",
		},
		{
			question: "Do you work with landlords?",
			answer:
				"Yeah. We do lock work for landlords, letting agents, and property managers all the time.",
		},
		{
			question: "Where do you cover?",
			answer:
				"South London, Surrey, and across London. Call us if you're not sure whether we cover your area.",
		},
		{
			question: "How fast can you get here?",
			answer:
				"Depends where you are and what we've got on. Ring us and we'll let you know the expected arrival time.",
		},
	];

	const locksmithServices = [
		{
			title: "Lock Repairs",
			icon: <Lock sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Stiff locks, jammed cylinders, broken springs, worn mechanisms. We'll have a look and tell you if it's worth fixing or needs replacing.",
			services: [
				"Lock installation and replacement",
				"High-security lock upgrades",
				"Master key systems",
				"Lock rekeying services",
				"Deadbolt installation",
				"Smart lock installation",
			],
		},
		{
			title: "Key Cutting ",
			icon: <Key sx={{ fontSize: 35, color: JW_CYAN }} />,
			description: "Need a spare? We cut keys on site for most lock types.",
			services: [
				"24/7 emergency response",
				"Lockout assistance",
				"Broken key extraction",
				"Lock damage repair",
				"Emergency rekeying",
				"Burglary damage repair",
			],
		},
		{
			title: "Lock Replacement",
			icon: <Lock sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Old locks wear out. Sometimes they break. Sometimes you just want something better. We carry stock for most common types, so it's usually sorted the same day.",
			services: [
				"Access control systems",
				"Master key systems",
				"Panic bar installation",
				"Commercial grade locks",
				"Key card systems",
				"Security consultation",
			],
		},

		{
			title: "Auto Locksmith",
			icon: <CarCrash sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Auto locksmith support for vehicle lock and key issues, helping drivers regain access and deal with common lock related problems.",
			services: [
				"Car key replacement",
				"Transponder key programming",
				"Car lockout service",
				"Ignition repair",
				"Remote key fob programming",
				"Emergency trunk opening",
			],
		},
		{
			title: "Safe Services",
			icon: <LockIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Expert safe installation, opening, and maintenance services.",
			services: [
				"Safe installation",
				"Safe opening and repair",
				"Combination changes",
				"Safe relocation",
				"Electronic safe servicing",
				"Vault services",
			],
		},
		{
			title: "Security Upgrades",
			icon: <BuildIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Comprehensive security assessments and upgrade recommendations.",
			services: [
				"Security surveys",
				"High-security lock installation",
				"Digital lock systems",
				"Keyless entry systems",
				"Security hardware upgrades",
				"Multi-point locking systems",
			],
		},
	];

	const lockBrands = [
		"Yale",
		"Chubb",
		"Union",
		"ERA",
		"Banham",
		"Ingersoll",
		"ASSA ABLOY",
		"Mul-T-Lock",
		"EVVA",
		"Kaba",
		"Sargent",
		"Medeco",
		"Schlage",
		"Kwikset",
		"Master Lock",
		"Abus",
		"Dom",
		"Wilka",
	];

	const features = [
		"MLA Certified Locksmiths",
		"24/7 Emergency Service",
		"Fully Insured & Licensed",
		"No Call-Out Charges",
		"Fixed Price Quotes",
		"All Work Guaranteed",
		"30+ Years Experience",
		"DBS Checked Staff",
	];

	return (
		<>
			<PageHero
				title="Locksmith Services In London"
				subtitle="Lock broken? Need a new one fitted? We handle lock repairs, replacements, and installations for homes and businesses across London, and we do the job properly."
				backgroundImage="/images/jw/locksmith-maintenance.webp"
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
								src="/images/jw/confident-locksmith-looking-at-camera.webp"
								alt="Professional locksmith at work"
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
								Locksmith Work Since 1991
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Locks break. Keys go missing. Cylinders jam up and won't turn.
								When that happens, you need someone who'll fix it without making
								things worse.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We've been doing locksmith jobs across London since 1991.
								Houses, flats, offices, shops - if there's a lock problem, we've
								probably dealt with it before.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								We work with mortice locks, cylinder locks, multipoint systems,
								Yale locks, and most other types fitted on London properties.
								Quick repairs where possible. Replacements when needed. Honest
								advice either way.
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
								Our Professional Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We provide locksmith support for planned work and urgent
								callouts across London. Our service covers homes, businesses,
								managed properties, and vehicles, with a focus on secure access,
								dependable repairs, and properly fitted locks.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{locksmithServices.slice(0, 4).map((service, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<ServiceCard sx={{ p: 2.5 }}>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													mb: 1,
													gap: 1.5,
												}}>
												{React.cloneElement(service.icon, {
													sx: { fontSize: 24 },
												})}
												<Typography
													variant="subtitle1"
													sx={{
														fontWeight: 800,
														color: JW_BLUE,
														lineHeight: 1.2,
													}}>
													{service.title}
												</Typography>
											</Box>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.6) }}>
												{service.description}
											</Typography>
										</ServiceCard>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: { xs: 5, md: 8 }, bgcolor: alpha(JW_CYAN, 0.05) }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h2">Why Use Us?</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Been doing this in London for over 30 years. Our locksmiths know
								what they're doing, they're insured, and they've seen every type
								of lock problem going.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								No call centers. No subcontractors showing up. Just London-based
								locksmiths who know the job.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={1}>
								{lockBrands.slice(0, 12).map((brand, index) => (
									<Grid
										size={{ xs: 4 }}
										key={index}>
										<Box
											sx={{
												p: 1.5,
												textAlign: "center",
												border: `1px solid ${alpha(JW_BLUE, 0.05)}`,
												borderRadius: "4px",
												bgcolor: "white",
												fontSize: "0.8rem",
												fontWeight: 700,
												color: JW_BLUE,
											}}>
											{brand}
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: 0 }}>
				<Box
					sx={{
						py: 8,
						backgroundColor: JW_CYAN,
						textAlign: "center",
						color: JW_BLUE,
					}}>
					<Container>
						<Typography
							variant="h4"
							sx={{ fontWeight: 900, mb: 3 }}>
							URGENT LOCKSMITH HELP?
						</Typography>
						<Typography
							variant="h6"
							sx={{ mb: 4, opacity: 0.9 }}>
							Contact London&apos;s most reliable security team for immediate
							dispatch.
						</Typography>
						<Button
							variant="contained"
							size="large"
							href="tel:02086467931"
							sx={{
								"fontWeight": 900,
								"px": 6,
								"py": 2,
								"fontSize": "1.2rem",
								"bgcolor": JW_BLUE,
								"color": "white",
								"&:hover": { bgcolor: "white", color: JW_BLUE },
							}}>
							CALL US: 0208 646 7931
						</Button>
					</Container>
				</Box>
			</Box>

			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}
						alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith-in-workshop-makes-new-key-use-grinding-engraving-machine.webp"
								alt="Locksmith workshop"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">Why Choose JW Security?</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{features.map((feature, index) => (
										<ListItem
											key={index}
											sx={{ py: 0.8 }}>
											<ListItemIcon sx={{ minWidth: 35 }}>
												<CheckCircleOutlineIcon
													sx={{ color: JW_BLUE, fontSize: 20 }}
												/>
											</ListItemIcon>
											<ListItemText
												primary={feature}
												primaryTypographyProps={{
													fontWeight: 500,
													fontSize: "0.95rem",
												}}
											/>
										</ListItem>
									))}
								</List>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

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
								Find answers to common concerns about our professional locksmith
								services.
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

			<ContactSection
				title="Need a Locksmith?"
				subtitle="Available 24/7 for emergency services and scheduled appointments"
			/>
		</>
	);
}
