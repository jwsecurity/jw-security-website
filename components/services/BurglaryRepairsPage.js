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

export default function BurglaryRepairsPage() {
	const services = [
		{
			title: "Door Repairs",
			description:
				"Complete repair or replacement of damaged doors, frames, and hardware to restore security.",
		},
		{
			title: "Window Repairs",
			description:
				"Fixing or replacing broken windows, including emergency boarding up services.",
		},
		{
			title: "Lock Replacement",
			description:
				"Installation of new high-security locks to replace compromised or damaged locking systems.",
		},
		{
			title: "Security Upgrades",
			description:
				"Recommendations and implementation of enhanced security measures to prevent future break-ins.",
		},
	];

	const benefits = [
		"Rapid response to secure your property quickly",
		"Comprehensive repairs to all entry points",
		"High-quality materials and workmanship",
		"Professional security assessment included",
		"Insurance-approved repairs and documentation",
		"Peace of mind with fully guaranteed work",
	];

	return (
		<>
			<PageHero
				title="Burglary Repairs"
				subtitle="Prompt and reliable repairs to secure your property after a break-in"
				backgroundImage="/images/jw/locksmith-man-and-maintenance-handyman-with-home-renovation-and-fixing-change-door-locks-with.jpg"
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
								Professional Burglary Repair Services
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								After a break-in, securing your property quickly is essential
								for your safety and peace of mind. JW Security provides
								comprehensive burglary repair services to restore the security
								of your home or business with minimal delay.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our skilled technicians can repair or replace damaged doors,
								frames, windows, and locks, ensuring that your property is
								secure against further intrusion. We understand that burglaries
								can be distressing, so we work efficiently and professionally to
								help you regain your sense of security.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								In addition to repairs, we provide expert advice on security
								improvements to help prevent future incidents. Our services are
								available 24/7 for emergency situations, allowing us to secure
								your property quickly even after hours.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box
								component="img"
								src="/images/jw/closeup-of-a-professional-locksmith-installing-a-new-lock-on-a-house-exterior-door-with-the-inside.jpg"
								alt="Burglary repair service"
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
							sx={{ mb: 4 }}>
							Our Burglary Repair Services
						</SectionTitle>
						<Grid
							container
							spacing={3}>
							{services.map((service, index) => (
								<Grid
									item
									xs={12}
									sm={6}
									key={index}>
									<FeatureCard>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
											{service.title}
										</Typography>
										<Typography
											variant="body1"
											sx={{ color: alpha("#000", 0.7) }}>
											{service.description}
										</Typography>
									</FeatureCard>
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
								Benefits of Our Burglary Repair Service
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
								What to Do After a Break-In
							</SectionTitle>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								If you&apos;ve experienced a break-in, follow these steps:
							</Typography>
							<List sx={{ pl: 2 }}>
								<ListItem
									sx={{ display: "list-item", listStyleType: "decimal" }}>
									<Typography sx={{ fontSize: "1.05rem" }}>
										Ensure your safety first - do not enter if you suspect the
										intruder might still be inside
									</Typography>
								</ListItem>
								<ListItem
									sx={{ display: "list-item", listStyleType: "decimal" }}>
									<Typography sx={{ fontSize: "1.05rem" }}>
										Call the police to report the break-in
									</Typography>
								</ListItem>
								<ListItem
									sx={{ display: "list-item", listStyleType: "decimal" }}>
									<Typography sx={{ fontSize: "1.05rem" }}>
										Contact JW Security at <strong>0208 646 7931</strong> for
										emergency repairs
									</Typography>
								</ListItem>
								<ListItem
									sx={{ display: "list-item", listStyleType: "decimal" }}>
									<Typography sx={{ fontSize: "1.05rem" }}>
										Document the damage for insurance purposes (take photos)
									</Typography>
								</ListItem>
								<ListItem
									sx={{ display: "list-item", listStyleType: "decimal" }}>
									<Typography sx={{ fontSize: "1.05rem" }}>
										Notify your insurance company about the incident
									</Typography>
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<ContactSection />
		</>
	);
}
