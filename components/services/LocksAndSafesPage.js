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
			title: "High-Security Door Locks",
			description:
				"Advanced locking mechanisms offering exceptional protection against picking, bumping, and other entry methods.",
			image: "/images/jw/locksmith.jpg",
		},
		{
			title: "Digital Smart Locks",
			description:
				"Keyless entry systems with PIN codes, fingerprint access, or mobile app control for convenient security.",
			image: "/images/jw/tools-to-repair-in-old-locksmiths-workshop.jpg",
		},
		{
			title: "Home Safes",
			description:
				"Secure storage for valuables, documents, and other important items with fire and theft protection.",
			image:
				"/images/jw/ancient-tools-and-spare-parts-in-old-locksmiths-workshop.jpg",
		},
		{
			title: "Commercial Grade Safes",
			description:
				"Heavy-duty safes for businesses with advanced security features and customizable options.",
			image:
				"/images/jw/keys-set-on-blue-background-door-lock-keys-and-safes-for-property-security-and-house-protection.jpg",
		},
	];

	const lockTypes = [
		"Mortice Locks",
		"Cylinder Locks",
		"Euro Profile Cylinders",
		"Rim Cylinders",
		"Night Latches",
		"Multi-point Locks",
		"Deadbolts",
		"Digital Locks",
		"Smart Locks",
		"Padlocks",
		"Cabinet Locks",
		"Window Locks",
	];

	const safeTypes = [
		"Home Safes",
		"Wall Safes",
		"Floor Safes",
		"Fire-resistant Safes",
		"Data Safes",
		"Deposit Safes",
		"Gun Safes",
		"Hotel Safes",
		"Commercial Grade Safes",
	];

	const services = [
		"Supply and installation of high-security locks",
		"Lock repair and maintenance",
		"Lock replacement and upgrades",
		"Key cutting and duplication",
		"Master key system implementation",
		"Safe installation and securing",
		"Safe unlocking and repair",
		"Security assessments and recommendations",
		"Emergency lockout assistance",
	];

	return (
		<>
			<PageHero
				title="Locks & Safes"
				subtitle="High-quality security products from trusted brands, professionally installed"
				backgroundImage="/images/jw/small-locksmiths-workshop-with-ancient-tools.jpg"
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
							<SectionTitle variant="h4">Premium Locks & Safes</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security supplies and installs a comprehensive range of
								high-quality locks and safes to protect your valuable
								possessions and ensure the security of your property. We work
								with leading security brands to provide reliable, durable
								solutions for both residential and commercial clients.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our experts can advise on the most suitable security products
								for your specific needs, whether you require advanced door
								locks, window security, or safes for storing valuables. We pride
								ourselves on offering products that meet or exceed insurance
								standards, giving you peace of mind.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								In addition to product supply, we provide professional
								installation services to ensure your new locks and safes are
								correctly fitted for optimal security performance. Our skilled
								technicians can also maintain, repair, or upgrade existing
								security hardware.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/tools-to-repair-in-old-locksmiths-workshop.jpg"
								alt="Professional lock installation"
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
							Our Security Products
						</SectionTitle>
						<Grid
							container
							spacing={4}>
							{lockProducts.map((product, index) => (
								<Grid
									item
									xs={12}
									sm={6}
									key={index}>
									<ProductCard>
										<CardMedia
											component="img"
											height="200"
											image={product.image}
											alt={product.title}
										/>
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography
												variant="h6"
												component="h3"
												sx={{ fontWeight: 600, color: JW_BLUE, mb: 1.5 }}>
												{product.title}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.7) }}>
												{product.description}
											</Typography>
										</CardContent>
									</ProductCard>
								</Grid>
							))}
						</Grid>
					</Box>

					<Box sx={{ my: 8 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Types of Locks We Supply
						</SectionTitle>
						<Typography
							paragraph
							sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
							We offer a comprehensive range of lock types to suit various
							applications and security requirements:
						</Typography>
						<LockTypeList>
							{lockTypes.map((type, index) => (
								<LockTypeItem key={index}>
									<CheckCircleOutlineIcon sx={{ color: JW_CYAN, mr: 1.5 }} />
									<Typography
										variant="body1"
										sx={{ fontWeight: 500 }}>
										{type}
									</Typography>
								</LockTypeItem>
							))}
						</LockTypeList>
					</Box>

					<Divider sx={{ my: 6 }} />

					<Box sx={{ my: 8 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Safe Solutions
						</SectionTitle>
						<Typography
							paragraph
							sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
							Protect your valuables, important documents, and cash with our
							range of high-quality safes:
						</Typography>
						<Grid
							container
							spacing={3}>
							<Grid
								item
								xs={12}
								md={6}>
								<LockTypeList sx={{ gridTemplateColumns: "1fr" }}>
									{safeTypes.map((type, index) => (
										<LockTypeItem key={index}>
											<CheckCircleOutlineIcon
												sx={{ color: JW_CYAN, mr: 1.5 }}
											/>
											<Typography
												variant="body1"
												sx={{ fontWeight: 500 }}>
												{type}
											</Typography>
										</LockTypeItem>
									))}
								</LockTypeList>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<Box
									component="img"
									src="/images/jw/ancient-tools-and-spare-parts-in-old-locksmiths-workshop.jpg"
									alt="Locksmith tools and equipment"
									sx={{
										width: "100%",
										height: "auto",
										borderRadius: "10px",
										boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
									}}
								/>
							</Grid>
						</Grid>
					</Box>

					<Box sx={{ my: 8 }}>
						<SectionTitle
							variant="h4"
							sx={{ mb: 4 }}>
							Our Locks & Safes Services
						</SectionTitle>
						<Grid
							container
							spacing={6}>
							<Grid
								item
								xs={12}
								md={6}>
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
							<Grid
								item
								xs={12}
								md={6}>
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
					</Box>
				</Container>
			</Box>
			<ContactSection
				title="Need Expert Advice on Locks or Safes?"
				subtitle="Our security specialists can help you select the right products for your property's specific requirements. Contact us for a personalized consultation."
			/>
		</>
	);
}
