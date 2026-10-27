"use client";
import React from "react";
import Link from "next/link";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	Chip,
} from "@mui/material";
import PageHero from "./common/PageHero";
import PlaceIcon from "@mui/icons-material/Place";
import ContactSection from "./common/ContactSection";
import { alpha, styled, useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DomainIcon from "@mui/icons-material/Domain";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VillaIcon from "@mui/icons-material/Villa";
import ExploreIcon from "@mui/icons-material/Explore";
import CastleIcon from "@mui/icons-material/Castle";
import ParkIcon from "@mui/icons-material/Park";
import TerrainIcon from "@mui/icons-material/Terrain";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BusinessIcon from "@mui/icons-material/Business";
import DiamondIcon from "@mui/icons-material/Diamond";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

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

const LocationCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"display": "flex",
	"flexDirection": "column",
	"transition": "all 0.3s ease",
	"overflow": "hidden",
	"borderRadius": "12px",
	"border": "1px solid",
	"borderColor": alpha(JW_BLUE, 0.08),
	"boxShadow": "0 4px 12px rgba(0,0,0,0.05)",
	"&:hover": {
		"transform": "translateY(-8px)",
		"boxShadow": "0 12px 28px rgba(0,0,0,0.12)",
		"borderColor": JW_CYAN,
		"& .location-icon": {
			transform: "scale(1.1)",
			backgroundColor: JW_CYAN,
			color: "white",
		},
		"& .learn-more-text": {
			color: JW_CYAN,
		},
		"& .arrow-icon": {
			transform: "translateX(4px)",
		},
	},
}));

const LocationIconBox = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	backgroundColor: alpha(JW_CYAN, 0.1),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2),
	transition: "all 0.3s ease",
	color: JW_BLUE,
}));

const CategorySection = styled(Box)(({ theme }) => ({
	"marginBottom": theme.spacing(8),
	"&:last-child": {
		marginBottom: 0,
	},
}));

export default function LocationsPage() {
	const theme = useTheme();

	// All 19 locations grouped by geographical regions
	const allLocations = [
		// South & South West London
		{
			title: "Tooting",
			postcode: "SW17",
			description:
				"Professional locksmith, lock replacement and emergency security services for residential and commercial properties across Tooting and SW17.",
			icon: <PlaceIcon sx={{ fontSize: 30 }} />,
			link: "/locations/tooting",
			category: "south-west",
		},
		{
			title: "Balham",
			postcode: "SW12",
			description:
				"Locksmith services, security upgrades and emergency access solutions for homeowners, landlords and businesses across Balham.",
			icon: <LocationCityIcon sx={{ fontSize: 30 }} />,
			link: "/locations/balham",
			category: "south-west",
		},
		{
			title: "Wimbledon",
			postcode: "SW19",
			description:
				"Residential and commercial locksmith services, lock replacement and security solutions for properties throughout Wimbledon.",
			icon: <ApartmentIcon sx={{ fontSize: 30 }} />,
			link: "/locations/wimbledon",
			category: "south-west",
			featured: true,
		},
		{
			title: "Streatham",
			postcode: "SW16",
			description:
				"Professional locksmith assistance, lock repairs and property security services for homes, shops and managed buildings in Streatham.",
			icon: <HomeWorkIcon sx={{ fontSize: 30 }} />,
			link: "/locations/streatham",
			category: "south-west",
		},
		{
			title: "Clapham",
			postcode: "SW4",
			description:
				"Locksmith, fire protection and security services for residential properties, commercial premises and landlords across Clapham.",
			icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
			link: "/locations/clapham",
			category: "south-west",
			featured: true,
		},
		{
			title: "Putney",
			postcode: "SW15",
			description:
				"Lock replacement, emergency locksmith assistance and security improvements for homes, businesses and managed properties in Putney.",
			icon: <VillaIcon sx={{ fontSize: 30 }} />,
			link: "/locations/putney",
			category: "south-west",
		},
		{
			title: "Earlsfield",
			postcode: "SW18",
			description:
				"Professional locksmith services, property security upgrades and emergency access assistance throughout Earlsfield.",
			icon: <DomainIcon sx={{ fontSize: 30 }} />,
			link: "/locations/earlsfield",
			category: "south-west",
		},
		{
			title: "Southfields",
			postcode: "SW18",
			description:
				"Residential and commercial locksmith services, lock repairs and security solutions for properties across Southfields.",
			icon: <PlaceIcon sx={{ fontSize: 30 }} />,
			link: "/locations/southfields",
			category: "south-west",
		},
		{
			title: "Colliers Wood",
			postcode: "SW19",
			description:
				"Reliable locksmith services, lock replacement and emergency property security solutions throughout Colliers Wood.",
			icon: <ExploreIcon sx={{ fontSize: 30 }} />,
			link: "/locations/colliers-wood",
			category: "south-west",
		},
		{
			title: "Battersea",
			postcode: "SW11",
			description:
				"Locksmith, fire protection and commercial security services for homes, offices, landlords and managed buildings across Battersea.",
			icon: <PrecisionManufacturingIcon sx={{ fontSize: 30 }} />,
			link: "/locations/battersea",
			category: "south-west",
			featured: true,
		},
		{
			title: "Wandsworth",
			postcode: "SW18",
			description:
				"Professional locksmith, lock replacement and security services for residential and commercial properties throughout Wandsworth.",
			icon: <BusinessIcon sx={{ fontSize: 30 }} />,
			link: "/locations/wandsworth",
			category: "south-west",
			featured: true,
		},

		// West & Central London
		{
			title: "Chelsea",
			postcode: "SW3, SW10",
			description:
				"Professional locksmith and security services for period homes, luxury apartments, shops and managed properties throughout Chelsea.",
			icon: <DiamondIcon sx={{ fontSize: 30 }} />,
			link: "/locations/chelsea",
			category: "west-central",
			featured: true,
		},
		{
			title: "Kensington",
			postcode: "W8, SW7",
			description:
				"Locksmith, lock replacement and property security solutions for residential and commercial premises across Kensington.",
			icon: <AccountBalanceIcon sx={{ fontSize: 30 }} />,
			link: "/locations/kensington",
			category: "west-central",
			featured: true,
		},
		{
			title: "Fulham",
			postcode: "SW6",
			description:
				"Residential locksmith services, commercial security solutions and emergency access assistance throughout Fulham.",
			icon: <LocationCityIcon sx={{ fontSize: 30 }} />,
			link: "/locations/fulham",
			category: "west-central",
		},
		{
			title: "Richmond",
			postcode: "TW9, TW10",
			description:
				"Professional locksmith, security upgrades and property access solutions for homes, businesses and managed buildings in Richmond.",
			icon: <ParkIcon sx={{ fontSize: 30 }} />,
			link: "/locations/richmond",
			category: "west-central",
			featured: true,
		},
		{
			title: "Hammersmith",
			postcode: "W6",
			description:
				"Lock replacement, commercial locksmith services and emergency security assistance for properties across Hammersmith.",
			icon: <DomainIcon sx={{ fontSize: 30 }} />,
			link: "/locations/hammersmith",
			category: "west-central",
		},
		{
			title: "Mayfair",
			postcode: "W1",
			description:
				"Professional locksmith and security solutions for private residences, offices, commercial premises and managed properties in Mayfair.",
			icon: <CastleIcon sx={{ fontSize: 30 }} />,
			link: "/locations/mayfair",
			category: "west-central",
			featured: true,
		},

		// North & Inner London
		{
			title: "Camden",
			postcode: "NW1",
			description:
				"Professional locksmith, lock replacement and security services for flats, shops, offices and managed properties across Camden.",
			icon: <StorefrontIcon sx={{ fontSize: 30 }} />,
			link: "/locations/camden",
			category: "north-inner",
			featured: true,
		},
		{
			title: "Islington",
			postcode: "N1",
			description:
				"Residential and commercial locksmith services, emergency access assistance and security improvements throughout Islington.",
			icon: <BusinessIcon sx={{ fontSize: 30 }} />,
			link: "/locations/islington",
			category: "north-inner",
			featured: true,
		},

		// Surrey
		{
			title: "Surrey",
			postcode: "GU, KT, RH",
			description:
				"Professional locksmith assistance, lock replacement, emergency access and property security services across Surrey and surrounding areas.",
			icon: <TerrainIcon sx={{ fontSize: 30 }} />,
			link: "/locations/surrey",
			category: "surrey",
			featured: true,
		},
	];

	const locationCategories = [
		{
			id: "south-west",
			title: "South & South West London",
			description:
				"Locksmith, emergency access and security services for homes, businesses and managed properties across South and South West London.",
		},
		{
			id: "west-central",
			title: "West & Central London",
			description:
				"Professional locksmith and security solutions for homes, offices, commercial premises and managed buildings across West and Central London.",
		},
		{
			id: "north-inner",
			title: "North & Inner London",
			description:
				"Locksmith, fire protection and security services for residential buildings, businesses and commercial properties across selected North and Inner London locations.",
		},
		{
			id: "surrey",
			title: "Surrey",
			description:
				"Locksmith and security services for residential and commercial properties across our Surrey service area.",
		},
	];

	return (
		<>
			<PageHero
				title="Areas We Serve"
				subtitle="Professional locksmith, fire protection and security services for residential and commercial properties across London and Surrey."
				backgroundImage="/images/jw/locksmith-maintenance.webp"
				minHeight="45vh"
				centerContent={true}
				ctaButton={true}
				ctaText="GET A FREE QUOTE"
				ctaLink="/quote"
			/>
			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container maxWidth="lg">
					<Box sx={{ mb: 6, textAlign: "center" }}>
						<SectionTitle
							variant="h4"
							component="h2"
							sx={{
								"mb": 3,
								"&::after": { left: "50%", transform: "translateX(-50%)" },
							}}>
							Locksmith & Security Services Across London
						</SectionTitle>
						<Typography
							sx={{
								maxWidth: "850px",
								mx: "auto",
								fontSize: "1.1rem",
								color: "text.secondary",
								lineHeight: 1.7,
							}}>
							With over 30 years of experience, JW Security provides
							professional locksmith, fire protection, security systems and
							emergency services across London and surrounding areas. We support
							homeowners, businesses, landlords and property managers with
							reliable solutions for their security and fire safety needs.
						</Typography>
					</Box>

					{locationCategories.map((category) => {
						const categoryLocations = allLocations.filter(
							(location) => location.category === category.id,
						);

						if (categoryLocations.length === 0) return null;

						return (
							<CategorySection key={category.id}>
								<Box sx={{ mb: 4 }}>
									<Typography
										variant="h5"
										component="h2"
										sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
										{category.title}
									</Typography>
									<Typography sx={{ color: "text.secondary" }}>
										{category.description}
									</Typography>
								</Box>

								<Grid
									container
									spacing={4}>
									{categoryLocations.map((location, index) => (
										<Grid
											size={{ xs: 12, sm: 6, md: 4 }}
											key={index}>
											<LocationCard>
												{location.icon && (
													<CardContent sx={{ pb: 0, pt: 3 }}>
														<Box
															sx={{
																display: "flex",
																justifyContent: "space-between",
																alignItems: "flex-start",
															}}>
															<LocationIconBox className="location-icon">
																{location.icon}
															</LocationIconBox>
															{location.postcode && (
																<Chip
																	label={location.postcode}
																	size="small"
																	sx={{
																		backgroundColor: alpha(JW_CYAN, 0.1),
																		color: JW_BLUE,
																		fontWeight: 600,
																		fontSize: "0.75rem",
																		border: `1px solid ${alpha(JW_CYAN, 0.25)}`,
																	}}
																/>
															)}
														</Box>
													</CardContent>
												)}
												<CardContent
													sx={{
														flexGrow: 1,
														pt: location.icon ? 1 : 3,
														display: "flex",
														flexDirection: "column",
													}}>
													<Typography
														variant="h6"
														component="h3"
														sx={{
															fontWeight: 600,
															mb: 2,
															color: JW_BLUE,
															fontSize: "1.2rem",
														}}>
														{location.title}
													</Typography>
													<Typography
														variant="body2"
														sx={{
															mb: 3,
															color: "text.secondary",
															lineHeight: 1.6,
															flexGrow: 1,
														}}>
														{location.description}
													</Typography>
													<Box
														sx={{
															display: "flex",
															alignItems: "center",
															gap: 0.5,
															mt: "auto",
														}}>
														<Link
															href={location.link}
															passHref
															style={{
																textDecoration: "none",
																display: "inline-flex",
																alignItems: "center",
																gap: "4px",
															}}>
															<Typography
																component="span"
																className="learn-more-text"
																sx={{
																	"color": JW_BLUE,
																	"fontWeight": 500,
																	"fontSize": "0.95rem",
																	"transition": "color 0.3s ease",
																	"&:hover": {
																		color: JW_CYAN,
																	},
																}}>
																Learn More
															</Typography>
															<ArrowForwardIcon
																className="arrow-icon"
																sx={{
																	fontSize: 18,
																	color: JW_BLUE,
																	transition: "transform 0.3s ease",
																}}
															/>
														</Link>
													</Box>
												</CardContent>
											</LocationCard>
										</Grid>
									))}
								</Grid>
							</CategorySection>
						);
					})}

					<Box
						sx={{
							mt: 8,
							p: 4,
							backgroundColor: alpha(JW_CYAN, 0.05),
							borderRadius: "12px",
							border: `1px solid ${alpha(JW_CYAN, 0.2)}`,
							textAlign: "center",
						}}>
						<Typography
							variant="h5"
							component="h2"
							sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
							Need Emergency Assistance in Your Area?
						</Typography>
						<Typography sx={{ mb: 3, color: "text.secondary" }}>
							Available 24/7 for emergency locksmith and security services
							across London and Surrey
						</Typography>
						<Button
							variant="contained"
							size="large"
							component="a"
							href="tel:02086467931"
							sx={{
								"backgroundColor": JW_CYAN,
								"color": "white",
								"px": 4,
								"py": 1.5,
								"fontSize": "1.1rem",
								"fontWeight": 600,
								"&:hover": {
									backgroundColor: JW_BLUE,
								},
							}}>
							Call Now: 0208 646 7931
						</Button>
					</Box>
				</Container>
			</Box>
			<ContactSection
				title="Ready to Secure Your Property?"
				subtitle="Contact us today for a free consultation and quotation"
			/>
		</>
	);
}
