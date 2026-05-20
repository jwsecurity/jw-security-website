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
import HomeIcon from "@mui/icons-material/Home";
import StairsIcon from "@mui/icons-material/Stairs";
import WindowIcon from "@mui/icons-material/Window";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HandymanIcon from "@mui/icons-material/Handyman";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
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

const MaterialCard = styled(Paper)(({ theme }) => ({
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

export default function CarpentrySolutionsPage() {
	const faqs = [
		{
			question: "What carpentry services do you offer?",
			answer:
				"Door fitting, window repairs, kitchen fitting, flooring, staircase work, bespoke joinery, and property maintenance carpentry across London and Surrey.",
		},
		{
			question: "Do you offer door fitting in London?",
			answer:
				"Yes. Internal and external door fitting, including hanging, frame adjustment, and hardware fitting. Call 0208 646 7931 for a quote.",
		},
		{
			question: "Can you help with internal door fitting?",
			answer:
				"Yes. We fit internal doors in homes, flats, offices, and managed buildings across South London and Surrey, including non-standard frame sizes.",
		},
		{
			question: "Do you provide bespoke carpentry in London?",
			answer:
				"Yes. Fitted wardrobes, shelving, alcove units, and built-in storage built to the measurements of the room. Free site visit before any work is agreed.",
		},
		{
			question: "What areas do you cover?",
			answer:
				"We cover London, Surrey, and surrounding areas, including Wimbledon, Clapham, Battersea, Putney, Chelsea, Kingston, Richmond, and nearby locations.",
		},
		{
			question: "How much does carpentry cost in London?",
			answer:
				"Costs vary by job. A door rehang is usually one to two hours. Bespoke work is quoted after a free site visit. Written quotes provided before anything starts.",
		},
	];

	const carpentryServices = [
		{
			title: "Door Installation And Repair",
			icon: <DoorSlidingIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Door fitting in London for internal and external doors, including repairs, adjustments, and new installations. Dropped hinges, swollen frames, misaligned latches: we diagnose the actual fault and sort it. Internal door fitting covers homes, flats, and commercial premises, including non-standard frame sizes common in older London properties.",
			services: [
				"Internal door fitting",
				"External door installation",
				"Door frame adjustment",
				"Hinges, handles, and latch fitting",
				"Door easing and alignment",
				"General door repairs",
			],
		},
		{
			title: "Window Repairs And Replacement",
			icon: <WindowIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Timber window repairs for frames, sashes, and fittings that have worn or shifted. In older properties, sash cords fail and frames swell with age. Where the timber is still good, we repair rather than replace.",
			services: [
				"Sash window repairs",
				"Timber frame repairs",
				"Section replacement",
				"Window furniture fitting",
				"Draught reduction work",
				"Minor security upgrades",
			],
		},
		{
			title: "Kitchen Fitting",
			icon: <KitchenIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Cabinet fitting, worktop cutting, trims, and plinth work. We fit kitchens from supply-only clients or alongside a kitchen supplier who needs a carpenter on site.",
			services: [
				"Cabinet fitting",
				"Worktop cutting and fitting",
				"End panels and trims",
				"Plinth fitting",
				"Appliance housing",
			],
		},
		{
			title: "Flooring Installation",
			icon: <HomeIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Hardwood, laminate, and engineered wood flooring. We prepare the subfloor, fit the boards, and refit or replace skirting once the floor is down.",
			services: [
				"Hardwood, laminate, and engineered wood flooring",
				"Floor repair work",
				"Skirting board fitting",
				"Subfloor preparation",
			],
		},
		{
			title: "Staircases And Balustrades",
			icon: <StairsIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Stair repairs for loose spindles, worn treads, and handrails that have worked themselves free. Common in managed blocks and period houses.",
			services: [
				"Stair and tread repairs",
				"Handrail and balustrade fitting",
				"Spindle replacement",
				"Newel post repairs",
			],
		},
		{
			title: "Bespoke Furniture And Joinery",
			icon: <CarpenterIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Bespoke carpentry in London for fitted wardrobes, alcove shelving, media units, and built-in storage. Built to the room's actual dimensions, not adapted from standard sizes.",
			services: [
				"Built-in wardrobes and alcove units",
				"Custom shelving and fitted cabinets",
				"Desk, office, and media units",
			],
		},
	];

	const additionalServices = [
		"Decking and outdoor timber work",
		"Shop fitting and commercial joinery",
		"Partition walls",
		"Loft boarding",
		"Fencing and gate repairs",
		"Property maintenance carpentry",
		"Emergency carpentry repairs",
	];

	const materialsWeWorkWith = [
		"Hardwood",
		"Softwood",
		"MDF",
		"Plywood",
		"Veneered boards",
		"Laminate",
		"Composite materials",
		"Reclaimed timber",
	];

	return (
		<>
			<PageHero
				title="Carpentry Services In London"
				subtitle="Reliable carpentry services in London for residential and commercial properties across London, Surrey, and surrounding areas. JW Security has provided door fitting, joinery repairs, and bespoke timber work since 1991."
				backgroundImage="/images/jw/carpentry-plane-tool-for-woodworking-in-workshop.webp"
				minHeight="45vh"
				centerContent={true}
			/>
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={6}>
						<Grid
							item
							xs={12}
							md={6}>
							<SectionTitle variant="h4">
								Experienced Carpenters Working Across London Since 1991
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security&apos;s carpentry team works in homes, flats,
								offices, shops, and managed buildings. Some jobs are quick fixes:
								a door catching on the frame, a sash that no longer runs freely,
								a floor section that has been lifted. Others take longer, like a
								set of fitted wardrobes built around an awkward alcove or a
								staircase that needs rebuilding from the newel post up.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Each job gets the same attention. Our carpenters are employed
								directly by us, not subcontracted. The work is measured, fitted,
								and finished with care before we leave.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/hand-saw-on-a-wooden-table-in-carpentry-workshop.webp"
								alt="Professional carpentry workshop"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
					</Grid>
					<Box sx={{ mt: 8, mb: 6 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4, textAlign: "center" }}>
							Our Carpentry Services
						</SectionTitle>
						<Grid
							container
							spacing={4}>
							{carpentryServices.map((service, index) => (
								<Grid
									item
									xs={12}
									md={6}
									lg={4}
									key={index}>
									<ServiceCard>
										<IconBox>{service.icon}</IconBox>
										<Typography
											variant="h5"
											sx={{ mb: 2, fontWeight: 600, color: JW_BLUE }}>
											{service.title}
										</Typography>
										<Typography
											paragraph
											sx={{ mb: 2, color: "text.secondary" }}>
											{service.description}
										</Typography>
										<List dense>
											{service.services.map((item, idx) => (
												<ListItem
													key={idx}
													sx={{ py: 0.5, px: 0 }}>
													<ListItemIcon sx={{ minWidth: 30 }}>
														<CheckCircleOutlineIcon
															sx={{ fontSize: 18, color: JW_CYAN }}
														/>
													</ListItemIcon>
													<ListItemText
														primary={item}
														primaryTypographyProps={{
															fontSize: "0.9rem",
															color: "text.secondary",
														}}
													/>
												</ListItem>
											))}
										</List>
									</ServiceCard>
								</Grid>
							))}
						</Grid>
					</Box>
					<Grid
						container
						spacing={6}
						sx={{ my: 6 }}>
						<Grid
							item
							xs={12}
							md={6}>
							<SectionTitle variant="h5">
								Additional Carpentry Services
							</SectionTitle>
							<Grid
								container
								spacing={2}>
								{additionalServices.map((service, index) => (
									<Grid
										item
										xs={12}
										sm={6}
										key={index}>
										<Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
											<HandymanIcon
												sx={{ fontSize: 20, color: JW_CYAN, mr: 1 }}
											/>
											<Typography variant="body1">{service}</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<SectionTitle variant="h5">Materials We Work With</SectionTitle>
							<Grid
								container
								spacing={2}>
								{materialsWeWorkWith.map((material, index) => (
									<Grid
										item
										xs={6}
										sm={4}
										key={index}>
										<MaterialCard>
											<Typography
												variant="body1"
												sx={{ fontWeight: 500 }}>
												{material}
											</Typography>
										</MaterialCard>
									</Grid>
								))}
							</Grid>
							<Typography
								sx={{ mt: 3, fontStyle: "italic", color: alpha("#000", 0.6) }}>
								We can work with materials on site or supply timber that suits
								the job.
							</Typography>
						</Grid>
					</Grid>
					<Box sx={{ mt: 8, mb: 6 }}>
						<Grid
							container
							spacing={6}>
							<Grid
								item
								xs={12}
								md={6}>
								<Box
									component="img"
									src="/images/jw/house-construction-challange-wood-house-construction-challange-caucasian-carpenter-contractor-wearing-safety-harness-front-160501312.webp"
									alt="Professional carpenter at work"
									sx={{
										width: "100%",
										height: "auto",
										borderRadius: "10px",
										boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
									}}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<SectionTitle variant="h5">
									Why Choose JW Security Carpentry?
								</SectionTitle>
								<List>
									{[
										"30+ years of carpentry experience in London and Surrey",
										"Own team on every job, no subcontractors",
										"Free site visits and written quotes",
										"Clean finish in occupied properties",
										"No hidden costs",
									].map((feature, index) => (
										<ListItem
											key={index}
											sx={{ py: 1 }}>
											<ListItemIcon>
												<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
											</ListItemIcon>
											<ListItemText primary={feature} />
										</ListItem>
									))}
								</List>
								<Button
									variant="contained"
									size="large"
									component="a"
									href="/contact"
									sx={{
										"mt": 3,
										"backgroundColor": JW_CYAN,
										"&:hover": {
											backgroundColor: JW_BLUE,
										},
									}}>
									Get A Free Carpentry Quote
								</Button>
							</Grid>
						</Grid>
					</Box>
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
								Find answers to common questions about our carpentry services.
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
				title="Need Carpentry Services?"
				subtitle="Contact us today for a free consultation and quotation on your carpentry project"
			/>
		</>
	);
}
