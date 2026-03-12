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
import { alpha } from "@mui/material/styles";

const JW_BLUE = "#1c2e4a";

export default function BlogPage() {
	const posts = [
		{
			title: "How to choose a secure door lock",
			slug: "how-to-choose-secure-door-lock",
			excerpt: "A quick guide to lock grades, cylinders and what to look for.",
		},
	];

	return (
		<>
			<PageHero
				title="Blog & Tips"
				subtitle="Practical security advice and answers to common questions"
				backgroundImage="/images/jw/locksmith.jpg"
				minHeight="40vh"
				centerContent
			/>
			<Box sx={{ py: { xs: 6, md: 8 } }}>
				<Container>
					<Grid
						container
						spacing={3}>
						{posts.map((p) => (
							<Grid
								item
								xs={12}
								md={6}
								key={p.slug}>
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
											{p.title}
										</Typography>
										<Typography sx={{ color: "text.secondary", mb: 2 }}>
											{p.excerpt}
										</Typography>
										<Button
											component="a"
											href={`/blog/${p.slug}`}
											size="small"
											sx={{ textTransform: "none" }}>
											Read more
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
