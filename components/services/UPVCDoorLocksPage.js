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
	Paper,
	Button,
} from "@mui/material";
import React from "react";
import PageHero from "../common/PageHero";
import BuildIcon from "@mui/icons-material/Build";
import { styled, alpha } from "@mui/material/styles";

const CTABanner = styled(Box)(({ theme }) => ({
	backgroundColor: "#00c6d7",
	padding: theme.spacing(4, 0),
	textAlign: "center",
	color: "#1c2e4a",
}));
import ContactSection from "../common/ContactSection";
import SecurityIcon from "@mui/icons-material/Security";
import HandymanIcon from "@mui/icons-material/Handyman";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
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
	"transition": "transform 0.3s, box-shadow 0.3s",
	"boxShadow": "0 4px 12px rgba(0,0,0,0.08)",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
	},
}));

const IconBox = styled(Box)(({ theme }) => ({
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	backgroundColor: alpha(JW_CYAN, 0.1),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: theme.spacing(2),
}));

const ProblemSolutionCard = styled(Paper)(({ theme, isProblem }) => ({
	"padding": theme.spacing(3),
	"backgroundColor": isProblem
		? alpha("#f44336", 0.05)
		: alpha("#4caf50", 0.05),
	"borderRadius": "8px",
	"marginBottom": theme.spacing(2),
	"position": "relative",
	"&::before": {
		content: '""',
		position: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
		width: "4px",
		backgroundColor: isProblem ? "#f44336" : "#4caf50",
		borderTopLeftRadius: "8px",
		borderBottomLeftRadius: "8px",
	},
}));

export default function UPVCDoorsWindowsPage() {
	const services = [
		{
			title: "UPVC Door Lock Repair",
			description:
				"uPVC door repair in London for jammed locks, failed gearboxes, stiff handles, and multi point systems that no longer engage properly.",
			icon: <BuildIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Window Lock & Handle Repair",
			description:
				"uPVC window repair in London for broken handles, faulty window locks, seized mechanisms, and windows that no longer open or close smoothly.",
			icon: <SecurityIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Lock Replacement & Upgrades",
			description:
				"Replacement locks, cylinders, handles, and security hardware for uPVC doors and windows where the existing parts are worn, damaged, or outdated.",
			icon: <HandymanIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
		{
			title: "Emergency Services",
			description:
				"Fast help for uPVC doors or windows that cannot be locked, opened, closed, or secured properly.",
			icon: <ErrorOutlineIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
		},
	];

	const commonProblems = [
		{
			problem: "Door lock sticking or jamming",
			solution:
				"Mechanism adjustment, lubrication, or gearbox repair where the lock is stiff or hard to operate.",
		},
		{
			problem: "Window handle not engaging or turning freely",
			solution:
				"Repair or replacement of window handles, espagnolette mechanisms, and locking parts.",
		},
		{
			problem: "Handle lifting required to engage door locks",
			solution:
				"Realignment of the multi point locking system and adjustment of hinges or gearbox parts.",
		},
		{
			problem: "Door not closing properly",
			solution:
				"Hinge adjustment, frame checks, and lock alignment to help the door close and secure correctly.",
		},
		{
			problem: "Window will not open or shut",
			solution:
				"Checks for seized hinges, faulty locks, damaged handles, or failed internal window mechanisms.",
		},
	];

	const benefits = [
		"Experience with major uPVC door and window brands",
		"uPVC door lock repair for failed or jammed mechanisms",
		"Help with uPVC window repair and double glazing repair issues",
		"Non destructive repair methods where possible",
		"Replacement parts available for common lock and handle faults",
		"Emergency help when doors or windows cannot be secured",
		"Clear advice before repair or replacement work begins",
		"Support for homes, landlords, and managed buildings",
	];

	return (
		<>
			<PageHero
				title="UPVC Door And Window Repair In London"
				subtitle="Specialist uPVC door repair, uPVC window repair, door lock repair, and double glazing repair support for homes, landlords, and managed properties across London and Surrey."
				backgroundImage="/images/jw/a-japanese-male-worker-checks-the-locks-on-a-house.webp"
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
								src="/images/jw/carpenter-installing-door-lock-in-the-new-house-with-a-screwdriver.webp"
								alt="UPVC door lock installation"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
								}}
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h4">
								UPVC Door And Window Specialists
							</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								uPVC doors and windows can fail in small ways at first. A handle starts feeling stiff. A window will not close properly. A door needs lifting before the lock engages. Over time, these small faults can turn into a bigger access or security problem.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								JW Security provides uPVC door repair in London for homes, flats, landlords, and managed buildings where doors, windows, locks, handles, hinges, or mechanisms need attention.
							</Typography>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We deal with multi point locking systems, failed gearboxes, jammed handles, dropped doors, worn hinges, window locks, and double glazing related faults where the frame, handle, or locking system is no longer working as it should.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								The aim is to repair the fault where possible before recommending replacement. If a part has failed, we explain what has gone wrong and what needs to be changed.
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
							<SectionTitle variant="h4">Our Specialised Services</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								We repair and replace common uPVC door and window parts, especially where the locking system, handle, hinge, or mechanism has stopped working correctly.
							</Typography>
							<Typography
								paragraph
								sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
								Our tools and techniques are specifically designed for high-precision adjustments and repairs on modern multi-point systems.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Grid
								container
								spacing={2}>
								{services.map((service, index) => (
									<Grid
										size={{ xs: 12, sm: 6 }}
										key={index}>
										<ServiceCard sx={{ p: 2.5 }}>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													mb: 1,
													gap: 1.5,
												}}>
												{React.cloneElement(service.icon, {
													sx: { fontSize: 24 },
												})}
												<Typography
													variant="subtitle1"
													sx={{
														fontWeight: 800,
														color: JW_BLUE,
														lineHeight: 1.2,
													}}>
													{service.title}
												</Typography>
											</Box>
											<Typography
												variant="body2"
												sx={{ color: alpha("#000", 0.6) }}>
												{service.description}
											</Typography>
										</ServiceCard>
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
							<SectionTitle variant="h4">Problems And Solutions</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.7 }}>
								uPVC mechanisms often fail because parts wear, shift, or fall out of alignment. Here are some of the common issues we deal with.
							</Typography>
							<Box sx={{ maxHeight: "400px", overflowY: "auto", pr: 1 }}>
								{commonProblems.map((item, index) => (
									<Box
										key={index}
										sx={{ mb: 2 }}>
										<ProblemSolutionCard
											isProblem={true}
											sx={{ p: 2, mb: 0.5 }}>
											<Typography
												variant="body2"
												sx={{ fontWeight: 700, color: "#d32f2f" }}>
												{item.problem}
											</Typography>
										</ProblemSolutionCard>
										<ProblemSolutionCard
											isProblem={false}
											sx={{ p: 2 }}>
											<Typography
												variant="body2"
												sx={{ fontWeight: 600, color: "#2e7d32" }}>
												{item.solution}
											</Typography>
										</ProblemSolutionCard>
									</Box>
								))}
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box
								component="img"
								src="/images/jw/a-japanese-male-worker-checks-the-locks-on-a-house.webp"
								alt="UPVC lock check"
								sx={{
									width: "100%",
									height: "auto",
									borderRadius: "10px",
									boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
								}}
							/>
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
							<SectionTitle variant="h5">
								Why Choose Our UPVC Services
							</SectionTitle>
							<Box
								sx={{
									p: 3,
									bgcolor: alpha(JW_CYAN, 0.05),
									borderRadius: 3,
									border: `1px solid ${alpha(JW_CYAN, 0.1)}`,
								}}>
								<List>
									{benefits.map((benefit, index) => (
										<ListItem
											key={index}
											sx={{ py: 0.8 }}>
											<ListItemIcon sx={{ minWidth: 35 }}>
												<CheckCircleOutlineIcon
													sx={{ color: JW_BLUE, fontSize: 20 }}
												/>
											</ListItemIcon>
											<ListItemText
												primary={benefit}
												primaryTypographyProps={{
													fontWeight: 500,
													fontSize: "0.95rem",
												}}
											/>
										</ListItem>
									))}
								</List>
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<SectionTitle variant="h5">Brands We Service</SectionTitle>
							<Typography
								paragraph
								sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
								Our techniques are compatible with all major industry
								manufacturers and balcony door specialists.
							</Typography>
							<Grid
								container
								spacing={1}>
								{[
									"Yale",
									"ERA",
									"Mila",
									"Avocet",
									"Fullex",
									"GU",
									"KFV",
									"Lockmaster",
									"Maco",
									"Millenco",
									"Roto",
									"Winkhaus",
								].map((brand, index) => (
									<Grid
										size={{ xs: 4 }}
										key={index}>
										<Box
											sx={{
												p: 1,
												textAlign: "center",
												border: `1px solid ${alpha(JW_BLUE, 0.05)}`,
												borderRadius: "4px",
												bgcolor: "white",
												fontSize: "0.8rem",
												fontWeight: 700,
												color: JW_BLUE,
											}}>
											{brand}
										</Box>
									</Grid>
								))}
							</Grid>
							<Typography
								sx={{
									mt: 2,
									fontStyle: "italic",
									color: alpha("#000", 0.5),
									fontSize: "0.8rem",
								}}>
								* And many others. Contact us for any non-listed brands.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<ContactSection
				title="Having UPVC Door or Window Problems?"
				subtitle="Contact our specialists for fast diagnosis and repair. We provide emergency services and free quotations for all UPVC door and window lock issues."
			/>
		</>
	);
}
