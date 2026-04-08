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
				backgroundImage="/images/jw/symmetric-security-cameras.webp"
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
								alt="Security installation specialist"
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
							<SectionTitle variant="h4">Our Security Barriers</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								From high-street shop fronts to residential driveway entrances,
								we provide the physical deterrence you need.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our barrier solutions are built to withstand the toughest
								conditions while maintaining a professional and clean appearance
								for your property.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{products.map((product, index) => (
									<Grid
										size={{ xs: 12 }}
										key={index}>
										<ProductCard sx={{ p: 2.5 }}>
											<Typography
												variant="h6"
												sx={{
													fontWeight: 600,
													color: JW_BLUE,
													mb: 1,
													fontSize: "1.1rem",
												}}>
												{product.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.65) }}>
												{product.description}
											</Typography>
										</ProductCard>
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
							<Box
								component="img"
								src="/images/jw/symmetric-security-cameras.webp"
								alt="Barrier applications"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">Applications</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our systems are flexible enough for any setting, providing peace
								of mind for varied environments.
							</Typography>
							<Grid
								container
								spacing={2}>
								{applications.map((application, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<Typography
											variant="subtitle2"
											sx={{
												fontWeight: 800,
												color: JW_BLUE,
												mb: 1.5,
												textTransform: "uppercase",
												letterSpacing: 1,
											}}>
											{application.type}
										</Typography>
										<List
											dense
											sx={{ p: 0 }}>
											{application.examples.slice(0, 3).map((example, idx) => (
												<ListItem
													key={idx}
													sx={{ px: 0, py: 0.2 }}>
													<ListItemIcon sx={{ minWidth: 28 }}>
														<CheckCircleOutlineIcon
															sx={{ color: JW_CYAN, fontSize: 16 }}
														/>
													</ListItemIcon>
													<ListItemText
														primary={example}
														primaryTypographyProps={{ fontSize: "0.9rem" }}
													/>
												</ListItem>
											))}
										</List>
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
						spacing={6}>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">Our Security Process</SectionTitle>
							<Box sx={{ mb: 0 }}>
								{[
									{
										t: "Consultation",
										d: "Thorough property assessment to understand your unique security needs.",
									},
									{
										t: "Custom Design",
										d: "Precision engineering to ensure your barriers fit perfectly and look great.",
									},
									{
										t: "Installation",
										d: "Efficient, professional fitting with minimal disruption to your daily life.",
									},
									{
										t: "Quality Check",
										d: "Rigorous testing to guarantee the integrity of your new security barrier.",
									},
								].map((step, idx) => (
									<Box
										key={idx}
										sx={{ mb: 2.5, display: "flex", gap: 2 }}>
										<Typography
											variant="h6"
											sx={{ color: JW_CYAN, fontWeight: 900 }}>
											0{idx + 1}
										</Typography>
										<Box>
											<Typography
												variant="subtitle1"
												sx={{
													fontWeight: 700,
													color: JW_BLUE,
													lineHeight: 1.2,
													mb: 0.5,
												}}>
												{step.t}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.6) }}>
												{step.d}
											</Typography>
										</Box>
									</Box>
								))}
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">Benefits of Our Barriers</SectionTitle>
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
											sx={{ py: 0.8 }}>
											<ListItemIcon sx={{ minWidth: 35 }}>
												<CheckCircleOutlineIcon
													sx={{ color: JW_BLUE, fontSize: 20 }}
												/>
											</ListItemIcon>
											<ListItemText
												primary={benefit}
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

			<ContactSection
				title="Enhance Your Property Security"
				subtitle="Contact our team to discuss custom security barriers for your home or business. We provide free consultations and competitive quotes for all our security solutions."
			/>
		</>
	);
}
