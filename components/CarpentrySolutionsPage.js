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
	Paper,
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
	const carpentryServices = [
		{
			title: "Door Installation & Repair",
			icon: <DoorSlidingIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Expert installation and repair of interior and exterior doors, including frames and hardware.",
			services: [
				"Internal door hanging and fitting",
				"External door installation",
				"Door frame repair and replacement",
				"Fire door installation and certification",
				"Sliding and bi-fold door systems",
				"Door furniture fitting",
			],
		},
		{
			title: "Window Repairs & Replacement",
			icon: <WindowIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Professional window repair, restoration, and replacement services for all property types.",
			services: [
				"Sash window repair and restoration",
				"Window frame replacement",
				"Double glazing unit replacement",
				"Window furniture and hardware",
				"Draught proofing solutions",
				"Window security upgrades",
			],
		},
		{
			title: "Kitchen Fitting",
			icon: <KitchenIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Complete kitchen installation services from cabinet fitting to worktop installation.",
			services: [
				"Kitchen cabinet installation",
				"Worktop fitting and cutting",
				"Kitchen island construction",
				"Splashback installation",
				"Plinth and cornice fitting",
				"Appliance housing and integration",
			],
		},
		{
			title: "Flooring Installation",
			icon: <HomeIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Professional installation of various flooring types with precision and care.",
			services: [
				"Hardwood floor installation",
				"Laminate flooring fitting",
				"Engineered wood flooring",
				"Floor repair and restoration",
				"Skirting board installation",
				"Subfloor preparation and leveling",
			],
		},
		{
			title: "Staircase & Balustrade",
			icon: <StairsIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Construction, repair, and renovation of staircases and balustrade systems.",
			services: [
				"Staircase construction and repair",
				"Handrail installation",
				"Balustrade fitting",
				"Spindle replacement",
				"Stair treads and risers",
				"Under-stair storage solutions",
			],
		},
		{
			title: "Bespoke Furniture & Joinery",
			icon: <CarpenterIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
			description:
				"Custom-made furniture and joinery solutions tailored to your specific requirements.",
			services: [
				"Built-in wardrobes and storage",
				"Custom shelving systems",
				"Bespoke cabinet making",
				"Office furniture and desks",
				"Media units and entertainment centers",
				"Alcove units and bookcases",
			],
		},
	];

	const additionalServices = [
		"Decking and outdoor structures",
		"Shop fitting and commercial joinery",
		"Partition walls and stud work",
		"Loft boarding and access",
		"Garden sheds and storage",
		"Fence repair and installation",
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
				title="Carpentry Solutions"
				subtitle="Professional carpentry and joinery services for residential and commercial properties"
				backgroundImage="/images/jw/carpentry-plane-tool-for-woodworking-in-workshop.jpg"
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
								Master Carpenters Serving London Since 1991
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Whether you need a door that won&apos;t close properly fixed
								today or are planning a complete home renovation, JW
								Security&apos;s carpentry division delivers craftsmanship you
								can trust. Our team of time-served carpenters brings decades of
								experience to every project, from emergency repairs to bespoke
								joinery installations.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We understand that quality carpentry is about more than just
								wood and tools - it&apos;s about creating solutions that enhance
								your property while standing the test of time. Our carpenters
								are experts in both traditional techniques and modern methods,
								allowing us to work seamlessly with period properties in
								conservation areas as well as contemporary homes and offices.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								What truly sets us apart is our integrated approach. As part of
								JW Security, we ensure all carpentry work complements your
								property&apos;s security needs. Installing a new door?
								We&apos;ll make sure it&apos;s fitted with appropriate locks and
								meets insurance requirements. Need window repairs? We&apos;ll
								check the security hardware while we&apos;re there. This
								holistic approach saves you time and ensures nothing is
								overlooked.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/hand-saw-on-a-wooden-table-in-carpentry-workshop.jpg"
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
								We can source and work with specific materials based on your
								project requirements.
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
									<ListItem sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary="Over 30 years of carpentry experience" />
									</ListItem>
									<ListItem sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary="Fully insured and qualified carpenters" />
									</ListItem>
									<ListItem sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary="Free quotations and project consultations" />
									</ListItem>
									<ListItem sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary="High-quality materials and finishes" />
									</ListItem>
									<ListItem sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary="Clean, tidy, and respectful service" />
									</ListItem>
									<ListItem sx={{ py: 1 }}>
										<ListItemIcon>
											<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
										</ListItemIcon>
										<ListItemText primary="Competitive pricing with no hidden costs" />
									</ListItem>
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
									Get a Free Carpentry Quote
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
			<ContactSection
				title="Need Carpentry Services?"
				subtitle="Contact us today for a free consultation and quotation on your carpentry project"
			/>
		</>
	);
}
