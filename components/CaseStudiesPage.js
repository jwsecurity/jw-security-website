"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
} from "@mui/material";
import PageHero from "./common/PageHero";
import { styled, alpha } from "@mui/material/styles";

const JW_BLUE = "#1c2e4a";
const JW_CYAN = "#00c6d7";

const Placeholder = styled(Box)(({ theme }) => ({
	width: "100%",
	height: 180,
	borderRadius: 8,
	background: `repeating-linear-gradient(45deg, ${alpha("#000", 0.06)}, ${alpha("#000", 0.06)} 10px, transparent 10px, transparent 20px)`,
}));

export default function CaseStudiesPage() {
	const studies = [
		{ title: "Period Townhouse – Lock Upgrade", type: "Residential" },
		{ title: "Estate CCTV – Multi‑block Install", type: "Commercial" },
		{ title: "School Fire Doors – Compliance", type: "Commercial" },
		{ title: "Apartment Access – Keyless Entry", type: "Residential" },
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
			<Box sx={{ py: { xs: 6, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={3}>
						{studies.map((s, i) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={3}
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
											variant="overline"
											sx={{ color: JW_CYAN }}>
											{s.type}
										</Typography>
										<Typography
											variant="h6"
											sx={{ fontWeight: 700, color: JW_BLUE, mb: 1 }}>
											{s.title}
										</Typography>
										<Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
											<Box sx={{ flex: 1 }}>
												<Placeholder aria-label="Before photo placeholder" />
												<Typography
													variant="caption"
													sx={{
														display: "block",
														mt: 0.5,
														color: "text.secondary",
													}}>
													Before
												</Typography>
											</Box>
											<Box sx={{ flex: 1 }}>
												<Placeholder aria-label="After photo placeholder" />
												<Typography
													variant="caption"
													sx={{
														display: "block",
														mt: 0.5,
														color: "text.secondary",
													}}>
													After
												</Typography>
											</Box>
										</Box>
										<Button
											size="small"
											disabled
											sx={{ textTransform: "none" }}>
											Full gallery coming soon
										</Button>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
}
