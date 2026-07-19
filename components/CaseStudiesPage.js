"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Chip,
} from "@mui/material";
import PageHero from "./common/PageHero";
import { styled, alpha } from "@mui/material/styles";
import ContactSection from "./common/ContactSection";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Image from "next/image";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const ImageBox = styled(Box)(({ theme, bgimage }) => ({
	width: "100%",
	height: 220,
	borderRadius: 8,
	backgroundImage: `url(${bgimage})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	transition: "transform 0.5s ease",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
	"flex": 1,
	"overflow": "hidden",
	"borderRadius": 8,
	"&:hover .zoom-image": {
		transform: "scale(1.1)",
	},
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
	"height": "100%",
	"display": "flex",
	"flexDirection": "column",
	"borderRadius": 16,
	"border": `1px solid ${alpha(JW_BLUE, 0.08)}`,
	"boxShadow": "0 4px 12px rgba(0,0,0,0.04)",
	"transition": "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
	"position": "relative",
	"overflow": "hidden",
	"&:hover": {
		"transform": "translateY(-8px)",
		"boxShadow": `0 16px 32px ${alpha(JW_BLUE, 0.12)}`,
		"borderColor": JW_CYAN,
		"& .card-title": {
			color: JW_CYAN,
		},
	},
}));

export default function CaseStudiesPage() {
	const studies = [
		{
			title: "Period Townhouse – High-Security Lock Upgrade",
			type: "Residential",
			description:
				"Upgraded original, worn-out period locks with modern, insurance-approved high-security cylinders while maintaining the aesthetic heritage of the wooden doors.",
			beforeImg: "/images/jw/case01before.jpg",
			afterImg: "/images/jw/case01after.jpg",
		},
		{
			title: "Commercial Estate – Multi‑block CCTV Install",
			type: "Commercial",
			description:
				"Secured a vulnerable business park by eliminating blind spots with a comprehensive 4K CCTV system, providing 24/7 remote monitoring capabilities to the management team.",
			beforeImg: "/images/jw/case02before.jpg",
			afterImg: "/images/jw/case02after.jpg",
		},
		{
			title: "Secondary School – Fire Door Compliance",
			type: "Commercial",
			description:
				"Replaced failing, non-compliant wooden doors across three campus buildings with certified, heavy-duty fire doors and integrated crash bars for safe emergency evacuations.",
			beforeImg: "/images/jw/case03before.jpg",
			afterImg: "/images/jw/case03after.jpg",
		},
		{
			title: "Luxury Apartment – Keyless Entry System",
			type: "Residential",
			description:
				"Transitioned a luxury penthouse from traditional vulnerable key-and-tumbler locks to a sleek, modern biometric and electronic keypad system for seamless owner access.",
			beforeImg: "/images/jw/case04before.jpg",
			afterImg: "/images/jw/case04after.jpg",
		},
	];

	return (
		<>
			<PageHero
				title="Case Studies"
				subtitle="Before/after results from recent residential and commercial work"
				backgroundImage="/images/jw/locksmith-maintenance.webp"
				minHeight="40vh"
				centerContent
			/>
			<Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: alpha("#000", 0.01) }}>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={4}>
						{studies.map((s, i) => (
							<Grid
								item
								xs={12}
								md={6}
								key={i}>
								<AnimatedCard>
									<CardContent
										sx={{
											p: 4,
											display: "flex",
											flexDirection: "column",
											flexGrow: 1,
										}}>
										<Typography
											variant="overline"
											sx={{
												color: JW_CYAN,
												fontWeight: 700,
												letterSpacing: 1.2,
												display: "block",
												mb: 0.5,
											}}>
											{s.type}
										</Typography>

										<Typography
											variant="h5"
											className="card-title"
											sx={{
												fontWeight: 700,
												color: JW_BLUE,
												mb: 1.5,
												lineHeight: 1.3,
												transition: "color 0.3s ease",
											}}>
											{s.title}
										</Typography>

										<Typography
											variant="body2"
											sx={{
												color: "text.secondary",
												mb: 4,
												lineHeight: 1.6,
												fontSize: "0.95rem",
											}}>
											{s.description}
										</Typography>

										<Box sx={{ display: "flex", gap: 2, mb: 4 }}>
											<Box sx={{ flex: 1 }}>
												<ImageContainer>
													<Image
														src={s.beforeImg}
														width={500}
														height={300}
														className="zoom-image"
														alt="Before photo"
													/>
												</ImageContainer>
												<Typography
													variant="caption"
													sx={{
														display: "block",
														mt: 1.5,
														color: "text.secondary",
														fontWeight: 600,
														textTransform: "uppercase",
														letterSpacing: 1,
														textAlign: "center",
													}}>
													Before
												</Typography>
											</Box>
											<Box sx={{ flex: 1 }}>
												<ImageContainer>
													<Image
														src={s.afterImg}
														width={500}
														height={300}
														className="zoom-image"
														alt="After photo"
													/>
												</ImageContainer>
												<Typography
													variant="caption"
													sx={{
														display: "block",
														mt: 1.5,
														color: JW_BLUE,
														fontWeight: 600,
														textTransform: "uppercase",
														letterSpacing: 1,
														textAlign: "center",
													}}>
													After
												</Typography>
											</Box>
										</Box>

										<Box sx={{ mt: "auto" }}>
											<Chip
												icon={
													<AutoAwesomeIcon
														sx={{ fontSize: "16px !important" }}
													/>
												}
												label="Full gallery coming soon"
												size="medium"
												sx={{
													"backgroundColor": alpha(JW_CYAN, 0.1),
													"color": JW_BLUE,
													"fontWeight": 500,
													"border": `1px solid ${alpha(JW_CYAN, 0.2)}`,
													"& .MuiChip-icon": {
														color: JW_CYAN,
													},
												}}
											/>
										</Box>
									</CardContent>
								</AnimatedCard>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			<ContactSection
				title="Ready to Secure Your Property?"
				subtitle="Contact us today for a free consultation and quotation"
			/>
		</>
	);
}
