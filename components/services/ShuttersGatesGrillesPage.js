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
	Divider,
} from "@mui/material";
import PageHero from "../common/PageHero";
import { styled, alpha } from "@mui/material/styles";
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

const ProductCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"padding": theme.spacing(3.5),
	"transition": "transform 0.3s, box-shadow 0.3s",
	"boxShadow": "0 4px 15px rgba(0,0,0,0.08)",
	"borderRadius": "10px",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
	},
}));

const FeatureList = styled(List)(({ theme }) => ({
	"padding": 0,
	"& .MuiListItem-root": {
		padding: theme.spacing(1, 0),
	},
}));

const ApplicationCard = styled(Box)(({ theme }) => ({
	"padding": theme.spacing(2.5),
	"backgroundColor": alpha(JW_CYAN, 0.05),
	"borderRadius": "8px",
	"marginBottom": theme.spacing(2),
	"transition": "background-color 0.2s",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.1),
	},
}));

export default function ShuttersGatesGrillesPage() {
	const products = [
		{
			title: "Security Shutters",
			description:
				"Custom-designed security shutters providing robust protection for windows, doors, and other openings. Available in manual or electric operation.",
			features: [
				"Excellent security for windows and doors",
				"Visual deterrent to intruders",
				"Insulation and noise reduction benefits",
				"Light control and privacy",
				"Weather protection",
			],
		},
		{
			title: "Security Gates",
			description:
				"Heavy-duty gates for entrances, driveways, and perimeter security. We offer retractable, sliding, and swinging gate options to suit various requirements.",
			features: [
				"Controlled access to properties",
				"Strong physical barrier",
				"Available with various locking mechanisms",
				"Optional automation systems",
				"Durable materials for long-term security",
			],
		},
		{
			title: "Security Grilles",
			description:
				"Expandable or fixed grilles providing effective protection while maintaining visibility and ventilation. Ideal for commercial properties and ground-floor windows.",
			features: [
				"Effective security with visibility",
				"Allows for ventilation",
				"Retractable options available",
				"Custom sizing for any opening",
				"Various designs and finishes",
			],
		},
	];

	const applications = [
		{
			type: "Residential Applications",
			examples: [
				"Front and rear door security",
				"Ground floor and basement windows",
				"Patio doors and French windows",
				"Entrance gates for driveways",
				"Garden and side access security",
			],
		},
		{
			type: "Commercial Applications",
			examples: [
				"Shop fronts and display windows",
				"Office entrances and windows",
				"Warehouse loading bays",
				"Commercial property perimeters",
				"Server rooms and restricted areas",
			],
		},
		{
			type: "Specialized Applications",
			examples: [
				"Listed buildings requiring discreet security",
				"High-value storage areas",
				"Properties in high-risk locations",
				"Temporary security for vacant properties",
				"Seasonal properties with periodic occupation",
			],
		},
	];

	const benefits = [
		"Enhanced physical security against break-ins",
		"Powerful visual deterrent to potential intruders",
		"Custom designed to fit your property perfectly",
		"Multiple operation options (manual, electric, remote control)",
		"Various finishes to complement your property's aesthetics",
		"Professional installation ensuring optimal performance",
		"Durable materials for long-lasting protection",
		"May help reduce insurance premiums",
	];

	return (
		<>
			<PageHero
				title="Shutters, Gates & Grilles"
				subtitle="Custom-designed physical security barriers to protect your property"
				backgroundImage="/images/jw/symmetric-security-cameras.jpg"
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
								Premium Physical Security Solutions
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides high-quality security shutters, gates, and
								grilles to create robust physical barriers protecting your
								property from unauthorized access. Our solutions are
								custom-designed to meet your specific security requirements
								while complementing the aesthetics of your property.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We offer a comprehensive service including consultation, design,
								manufacturing, and professional installation. Our experts will
								assess your property and recommend the most suitable security
								solutions based on your vulnerability assessment, usage
								patterns, and budget.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								All our products are constructed using durable materials and
								quality components to ensure reliable performance and long-term
								security. We work with both residential and commercial clients
								to enhance property protection through effective physical
								security barriers.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/confident-locksmith-looking-at-camera.jpg"
								alt="Security installation specialist"
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
							Our Security Barrier Products
						</SectionTitle>
						<Grid
							container
							spacing={4}>
							{products.map((product, index) => (
								<Grid
									item
									xs={12}
									md={4}
									key={index}>
									<ProductCard>
										<Typography
											variant="h5"
											component="h3"
											sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
											{product.title}
										</Typography>
										<Typography
											variant="body1"
											sx={{ color: alpha("#000", 0.7), mb: 3 }}>
											{product.description}
										</Typography>
										<Divider sx={{ mb: 2 }} />
										<Typography
											variant="subtitle2"
											sx={{ fontWeight: 600, mb: 1 }}>
											Key Features:
										</Typography>
										<FeatureList>
											{product.features.map((feature, idx) => (
												<ListItem
													key={idx}
													disableGutters>
													<ListItemIcon sx={{ minWidth: 36 }}>
														<CheckCircleOutlineIcon
															sx={{ color: JW_CYAN, fontSize: 20 }}
														/>
													</ListItemIcon>
													<ListItemText
														primary={feature}
														primaryTypographyProps={{ fontSize: "0.95rem" }}
													/>
												</ListItem>
											))}
										</FeatureList>
									</ProductCard>
								</Grid>
							))}
						</Grid>
					</Box>

					<Box sx={{ my: 8 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Applications
						</SectionTitle>
						<Typography
							paragraph
							sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
							Our security shutters, gates, and grilles are suitable for a wide
							range of applications:
						</Typography>
						<Grid
							container
							spacing={4}>
							{applications.map((application, index) => (
								<Grid
									item
									xs={12}
									md={4}
									key={index}>
									<Typography
										variant="h6"
										sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
										{application.type}
									</Typography>
									{application.examples.map((example, idx) => (
										<ApplicationCard key={idx}>
											<Typography variant="body1">{example}</Typography>
										</ApplicationCard>
									))}
								</Grid>
							))}
						</Grid>
					</Box>

					<Grid
						container
						spacing={6}
						sx={{ mt: 4 }}>
						<Grid
							item
							xs={12}
							md={6}>
							<SectionTitle variant="h5">
								Benefits of Our Security Barriers
							</SectionTitle>
							<List>
								{benefits.map((benefit, index) => (
									<ListItem
										key={index}
										sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary={benefit} />
									</ListItem>
								))}
							</List>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<SectionTitle variant="h5">
								Our Security Barrier Process
							</SectionTitle>
							<Box sx={{ mb: 3 }}>
								<Typography
									variant="h6"
									sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
									1. Consultation and Assessment
								</Typography>
								<Typography
									variant="body1"
									sx={{ mb: 3 }}>
									We begin with a thorough assessment of your property to
									understand your security needs, usage patterns, and aesthetic
									preferences.
								</Typography>

								<Typography
									variant="h6"
									sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
									2. Custom Design
								</Typography>
								<Typography
									variant="body1"
									sx={{ mb: 3 }}>
									Our team designs security solutions specifically for your
									property, ensuring proper fit and functionality.
								</Typography>

								<Typography
									variant="h6"
									sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
									3. Professional Installation
								</Typography>
								<Typography
									variant="body1"
									sx={{ mb: 3 }}>
									Experienced technicians install your security barriers with
									minimal disruption to your property or business.
								</Typography>

								<Typography
									variant="h6"
									sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
									4. Quality Assurance
								</Typography>
								<Typography variant="body1">
									We perform thorough testing after installation to ensure all
									components work correctly and provide the intended security.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<ContactSection
				title="Enhance Your Property Security"
				subtitle="Contact our team to discuss custom security barriers for your home or business. We provide free consultations and competitive quotes for all our security solutions."
			/>
		</>
	);
}
