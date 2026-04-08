"use client";
import {
	Box,
	Grid,
	Card,
	Button,
	Container,
	Typography,
	CardContent,
} from "@mui/material";
import PageHero from "./common/PageHero";
import { styled, alpha } from "@mui/material/styles";

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

export default function CommercialPage() {
	const services = [
		{
			title: "Access Control & Alarms",
			desc: "Secure access and monitored alarm systems for offices and estates.",
			link: "/services/security",
		},
		{
			title: "CCTV Systems",
			desc: "Professional design, installation and maintenance of CCTV across sites.",
			link: "/services/security",
		},
		{
			title: "Fire Doors & Compliance",
			desc: "Inspections, installation and certification for commercial premises.",
			link: "/services/fire-protection",
		},
		{
			title: "Shutters, Gates & Grilles",
			desc: "Physical security for storefronts and plant rooms.",
			link: "/services/shutters-gates-grilles",
		},
		{
			title: "Master Key Systems",
			desc: "Hierarchical keying for landlords, schools and facilities.",
			link: "/services/locks-and-safes",
		},
		{
			title: "Emergency Response",
			desc: "24/7 call‑out for break‑ins and urgent issues.",
			link: "/services/emergency-door-opening",
		},
	];

	return (
		<>
			<PageHero
				title="Commercial Security"
				subtitle="Trusted by managing agents, schools, estates and NHS"
				backgroundimage="/images/jw/security-camera.webp"
				minHeight="40vh"
				centerContent
			/>
			<Box sx={{ py: { xs: 6, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={3}>
						{services.map((s, i) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={i}>
								<Card
									sx={{
										height: "100%",
										borderRadius: 2,
										border: `1px solid ${alpha(JW_BLUE, 0.08)}`,
										boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
									}}>
									<CardContent>
										<Typography
											variant="h6"
											sx={{ fontWeight: 700, color: JW_BLUE, mb: 1 }}>
											{s.title}
										</Typography>
										<Typography sx={{ color: "text.secondary", mb: 2 }}>
											{s.desc}
										</Typography>
										<Button
											component="a"
											href={s.link}
											size="small"
											sx={{ textTransform: "none" }}>
											Learn more
										</Button>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
					<Box sx={{ mt: 6, textAlign: "center" }}>
						<SectionTitle
							variant="h5"
							sx={{ display: "inline-block" }}>
							Need a proposal for your site?
						</SectionTitle>
						<Box sx={{ mt: 2 }}>
							<Button
								component="a"
								href="/quote"
								variant="contained"
								sx={{
									backgroundColor: JW_CYAN,
									color: "#fff",
									px: 3,
									py: 1.2,
									textTransform: "none",
								}}>
								Request a Quote
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
}
