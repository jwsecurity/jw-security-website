"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardMedia,
	CardContent,
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
	"display": "flex",
	"flexDirection": "column",
	"transition": "transform 0.3s, box-shadow 0.3s",
	"overflow": "hidden",
	"borderRadius": "8px",
	"boxShadow": "0 4px 15px rgba(0,0,0,0.08)",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
	},
}));

const LockTypeList = styled(Box)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
	gap: theme.spacing(2),
	margin: theme.spacing(3, 0),
}));

const LockTypeItem = styled(Box)(({ theme }) => ({
	"display": "flex",
	"alignItems": "center",
	"padding": theme.spacing(1.5),
	"backgroundColor": alpha(JW_CYAN, 0.05),
	"borderRadius": "6px",
	"transition": "background-color 0.2s",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.1),
	},
}));

export default function LocksAndSafesPage() {
	const lockProducts = [
		{
			title: "High Security Door Locks",
			description:
				"Strong door locks for homes, flats, offices, shops, and shared entrances where basic hardware is no longer enough.",
			image: "/images/jw/locksmith.webp",
		},
		{
			title: "Digital Smart Locks",
			description:
				"Smart locks, keypad systems, and digital entry options for properties that need keyless access and easier control.",
			image: "/images/jw/tools-to-repair-in-old-locksmiths-workshop.webp",
		},
		{
			title: "Home Safes",
			description:
				"Home safes for valuables, documents, jewellery, keys, and personal items that need secure storage inside the property.",
			image:
				"/images/jw/ancient-tools-and-spare-parts-in-old-locksmiths-workshop.webp",
		},
		{
			title: "Commercial Grade Safes",
			description:
				"Safes for offices, shops, and business premises that need secure storage for cash, documents, stock, or sensitive items.",
			image:
				"/images/jw/keys-set-on-blue-background-door-lock-keys-and-safes-for-property-security-and-house-protection.webp",
		},
	];

	const lockTypes = [
		"Mortice locks",
		"Cylinder locks",
		"Euro profile cylinders",
		"Rim cylinders",
		"Night latches",
		"Multi point locks",
		"Deadbolts",
		"Digital locks",
		"Smart locks",
		"Padlocks",
		"Cabinet locks",
		"Window locks",
	];

	const safeTypes = [
		"Home safes",
		"Wall safes",
		"Wall safe installation",
		"Floor safes",
		"Floor safe fitting",
		"Fire resistant safes",
		"Data safes",
		"Deposit safes",
		"Hotel safes",
		"Commercial grade safes",
		"Safe opening and repair",
	];

	const services = [
		"Supply and fitting of high security locks",
		"Lock repair and maintenance",
		"Lock replacement and upgrades",
		"Key cutting and duplication",
		"Master key system setup",
		"Safe installation London for home and commercial safes",
		"Safe opening London for lost keys, failed locks, or access issues",
		"Wall safe installation for homes, offices, and managed properties",
		"Floor safe fitting for secure storage needs",
		"Security product advice",
		"Lock and safe upgrades",
		"Help with lost safe keys or codes",
	];

	return (
		<>
			<PageHero
				title="Locks And Safes In London"
				subtitle="Locks, safes, smart locks, and security hardware supplied and fitted for homes, businesses, and managed properties across London and Surrey, including safe installation, wall safe installation, and floor safe fitting."
				backgroundImage="/images/jw/small-locksmiths-workshop-with-ancient-tools.webp"
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
								src="/images/jw/tools-to-repair-in-old-locksmiths-workshop.webp"
								alt="Professional lock installation"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">Locks And Safes Supplied And Fitted</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								The right lock or safe depends on what you need to protect, how the space is used, and who needs access.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								A front door needs a different setup from a stock room, office cabinet, shared entrance, or home safe. Some properties need stronger cylinders. Others need digital access, restricted keys, or a safe fixed securely in the right place.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security supplies and fits locks and safes in London for homeowners, landlords, managing agents, offices, shops, and commercial premises.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								We help you choose suitable products, fit them correctly, and make sure they are ready for day to day use before we leave.
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
							<SectionTitle variant="h4">Our Security Products</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We supply and fit physical security products for homes, businesses, and managed properties that need stronger access control, safer storage, or better protection at key entry points.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								From high security locks and smart lock systems to home safes and commercial grade safes, we help match the product to the building rather than pushing a standard option.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{lockProducts.map((product, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<ProductCard>
											<CardMedia
												component="img"
												height="120"
												image={product.image}
												alt={product.title}
											/>
											<CardContent sx={{ p: 2 }}>
												<Typography
													variant="subtitle2"
													sx={{
														fontWeight: 700,
														color: JW_BLUE,
														mb: 0.5,
														lineHeight: 1.2,
													}}>
													{product.title}
												</Typography>
												<Typography
													variant="caption"
													sx={{
														color: alpha("#000", 0.6),
														display: "block",
														lineHeight: 1.3,
													}}>
													{product.description}
												</Typography>
											</CardContent>
										</ProductCard>
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
							<Box
								component="img"
								src="/images/jw/ancient-tools-and-spare-parts-in-old-locksmiths-workshop.webp"
								alt="Ancient tools"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">Types Of Locks We Supply</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We supply and fit many of the lock types commonly used across London homes, flats, offices, shops, and managed buildings.
							</Typography>
							<Grid
								container
								spacing={1}>
								{lockTypes.map((type, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<LockTypeItem sx={{ p: 1, mb: 1 }}>
											<CheckCircleOutlineIcon
												sx={{ color: JW_CYAN, mr: 1, fontSize: 18 }}
											/>
											<Typography
												variant="body2"
												sx={{ fontWeight: 600, fontSize: "0.85rem" }}>
												{type}
											</Typography>
										</LockTypeItem>
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
							<SectionTitle variant="h4">Safe Solutions</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We help with safe installation in London, safe opening, safe repair, and secure fitting for residential and commercial use, including wall safes, floor safes, and commercial grade safes.
							</Typography>
							<Grid
								container
								spacing={1}>
								{safeTypes.map((type, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<LockTypeItem sx={{ bgcolor: "white", p: 1, mb: 1 }}>
											<CheckCircleOutlineIcon
												sx={{ color: JW_BLUE, mr: 1, fontSize: 18 }}
											/>
											<Typography
												variant="body2"
												sx={{ fontWeight: 600, fontSize: "0.85rem" }}>
												{type}
											</Typography>
										</LockTypeItem>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/locksmith-man-and-maintenance-handyman-with-home-renovation-and-fixing-change-door-locks-with.webp"
								alt="Safe installation"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: { xs: 5, md: 8 } }}>
				<Container>
					<SectionTitle
						variant="h4"
						sx={{ mb: 4 }}>
						Our Locks And Safes Services
					</SectionTitle>
					<Grid
						container
						spacing={6}>
						<Grid size={{ xs: 12, md: 6 }}>
							<List>
								{services
									.slice(0, Math.ceil(services.length / 2))
									.map((service, index) => (
										<ListItem
											key={index}
											sx={{ py: 1 }}>
											<ListItemIcon>
												<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
											</ListItemIcon>
											<ListItemText primary={service} />
										</ListItem>
									))}
							</List>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<List>
								{services
									.slice(Math.ceil(services.length / 2))
									.map((service, index) => (
										<ListItem
											key={index}
											sx={{ py: 1 }}>
											<ListItemIcon>
												<CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
											</ListItemIcon>
											<ListItemText primary={service} />
										</ListItem>
									))}
							</List>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<ContactSection
				title="Need Expert Advice On Locks Or Safes?"
				subtitle="Not sure which lock, cylinder, smart lock, or safe is right for your property? JW Security can advise on suitable options for homes, landlords, offices, shops, managed buildings, and commercial premises across London and Surrey."
			/>
		</>
	);
}
