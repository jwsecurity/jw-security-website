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
				"Security shutters for doors, windows, shopfronts, and other openings that need stronger protection. Manual and electric options are available depending on the site.",
			features: [],
		},
		{
			title: "Security Gates",
			description:
				"Security gates for entrances, driveways, side access, rear yards, and commercial perimeters where controlled entry matters.",
			features: [],
		},
		{
			title: "Security Grilles",
			description:
				"Fixed and retractable security grilles for windows, doors, and internal openings where visibility and airflow still need to be maintained.",
			features: [],
		},
	];

	const applications = [
		{
			type: "Residential Applications",
			examples: [
				"Front and rear door protection",
				"Ground floor windows",
				"Basement windows",
				"Patio doors",
				"French doors",
				"Side gates and garden access",
			],
		},
		{
			type: "Commercial Applications",
			examples: [
				"Shopfronts and display windows",
				"Office entrances",
				"Staff access doors",
				"Warehouse doors",
				"Loading bays",
				"Storage areas",
			],
		},
		{
			type: "Specialized Applications",
			examples: [
				"Listed buildings needing discreet protection",
				"High value storage areas",
				"Properties in higher risk locations",
				"Internal security zones",
				"Shared access points",
			],
		},
	];

	const benefits = [
		"Stronger physical protection against forced entry",
		"Visible deterrent for vulnerable doors, windows, and shopfronts",
		"Security shutters London for residential and commercial sites",
		"Security grilles London for windows, doors, and shared access areas",
		"Manual and electric shutter options available",
		"Roller shutter repair London for damaged or faulty shutters",
		"Shutter lock repair London where locking parts have failed",
		"Security grilles installation London for fixed or retractable protection",
	];

	return (
		<>
			<PageHero
				title="Shutters, Gates And Grilles In London"
				subtitle="Security shutters, gates, and grilles for homes, shops, offices, and commercial properties across London and Surrey."
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
								Physical Security Barriers For London Properties
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Some properties need more than a lock or alarm. A shopfront,
								rear entrance, ground floor window, loading bay, or storage
								area can need a physical barrier that makes forced access harder.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security supplies, installs, and repairs shutters, gates, and
								grilles across London and Surrey. We work with homeowners,
								landlords, managing agents, shops, offices, and commercial
								premises that need stronger protection without making the building
								difficult to use.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								From new security shutters in London to roller shutter repair,
								shutter lock repair, and security grilles installation, we look
								at the opening, the daily use of the site, and the level of
								protection needed before recommending the right option.
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
								From shopfronts to residential entrances, we provide physical
								security barriers that help protect vulnerable access points.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								The aim is simple. Make the property harder to target while
								keeping access, appearance, and daily use in mind.
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
								Our shutters, gates, and grilles can be used across residential,
								commercial, and higher risk sites where visible physical protection
								is needed.
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
										d: "We look at the access point, the type of property, and the level of protection you need.",
									},
									{
										t: "Measure And Design",
										d: "The shutter, gate, or grille is measured for the opening so it fits the site and works as expected.",
									},
									{
										t: "Installation Or Repair",
										d: "Our team carries out fitting, roller shutter repair, shutter lock repair, or grille installation with care.",
									},
									{
										t: "Final Check",
										d: "We test the barrier, check movement and locking, and make sure you know how to use it.",
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
							<SectionTitle variant="h5">Benefits Of Our Barriers</SectionTitle>
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
				title="Need shutters, gates, or grilles fitted or repaired?"
				subtitle="JW Security helps homes, shops, offices, landlords, and commercial sites across London and Surrey protect vulnerable openings with fitted physical barriers. For 24/7 urgent assistance, call our emergency hotline: 0208 646 7931."
			/>
		</>
	);
}
