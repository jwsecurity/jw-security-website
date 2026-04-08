import PageHero from "../common/PageHero";
import { Box, Container, Typography } from "@mui/material";

const JW_BLUE = "#1c2e4a";

export default function HowToChooseSecureDoorLock() {
	return (
		<>
			<PageHero
				title="How to choose a secure door lock"
				subtitle="Understanding lock grades, cylinders and standards"
				backgroundImage="/images/jw/locksmith.webp"
				minHeight="35vh"
				centerContent
			/>
			<Box sx={{ py: { xs: 6, md: 8 } }}>
				<Container maxWidth="md">
					<Typography
						variant="h3"
						sx={{
							fontWeight: 700,
							color: JW_BLUE,
							mb: 2,
							fontSize: { xs: "1.8rem", md: "2.2rem" },
						}}>
						Choosing a secure lock for your door
					</Typography>
					<Typography paragraph>
						The most important components are the cylinder and the lock case.
						Look for tested standards such as <strong>BS EN 1303</strong> for
						cylinders, <strong>TS 007</strong> and{" "}
						<strong>SS312 Diamond</strong> for anti‑snap protection. For mortice
						locks, choose <strong>BS 3621</strong> marked products.
					</Typography>
					<Typography paragraph>
						A professional locksmith can advise on the right combination of
						security and convenience for your property, including registered key
						systems, thumb‑turn cylinders for fire safety, and compatible
						furniture/escutcheons to complete the installation.
					</Typography>
					<Typography paragraph>
						For a tailored recommendation, <a href="/quote">request a quote</a>{" "}
						and we’ll help you select the best option for your door and
						insurance requirements.
					</Typography>
				</Container>
			</Box>
		</>
	);
}
