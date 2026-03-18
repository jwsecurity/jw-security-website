"use client";
import {
	Box,
	Container,
	Typography,
	Grid,
	TextField,
	Button,
	Paper,
	Snackbar,
	Alert,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	RadioGroup,
	FormControlLabel,
	Radio,
	CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import ReCaptcha from "@/components/common/ReCaptcha";

const JW_CYAN = "#00c6d7";
const JW_BLUE = "#1c2e4a";

const PageHero = styled(Box)(({ theme }) => ({
	position: "relative",
	backgroundColor: JW_BLUE,
	color: "white",
	padding: theme.spacing(16, 0, 10),
	paddingTop: `calc(${theme.spacing(10)} + 90px)`,
	minHeight: "45vh",
	display: "flex",
	alignItems: "center",
	backgroundImage:
		"linear-gradient(rgba(28, 46, 74, 0.85), rgba(28, 46, 74, 0.85)), url(/images/jw/security-camera.jpg)",
	backgroundSize: "cover",
	backgroundPosition: "center",
}));

const DecorativeLine = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "3px",
	backgroundColor: JW_CYAN,
	marginBottom: theme.spacing(2),
}));

const QuoteFormCard = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(4),
	boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
	borderRadius: "12px",
	backgroundColor: "#fff",
	border: "1px solid rgba(0,0,0,0.04)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
	"marginBottom": theme.spacing(2.5),
	"& .MuiOutlinedInput-root": {
		"borderRadius": "6px",
		"transition": "all 0.2s ease",
		"&:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: alpha(JW_CYAN, 0.5),
		},
		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: JW_CYAN,
			borderWidth: "2px",
		},
	},
	"& .MuiInputLabel-outlined.Mui-focused": {
		color: JW_BLUE,
	},
}));

const StyledButton = styled(Button)(({ theme }) => ({
	"backgroundColor": JW_CYAN,
	"color": JW_BLUE,
	"padding": theme.spacing(1.5, 4),
	"fontWeight": 600,
	"borderRadius": "6px",
	"fontSize": "15px",
	"textTransform": "none",
	"boxShadow": "0 4px 10px rgba(0, 198, 215, 0.25)",
	"transition": "all 0.3s ease",
	"&:hover": {
		backgroundColor: JW_CYAN,
		boxShadow: "0 6px 15px rgba(0, 198, 215, 0.35)",
		transform: "translateY(-2px)",
	},
	"&:disabled": {
		backgroundColor: alpha(JW_CYAN, 0.6),
		color: alpha(JW_BLUE, 0.6),
	},
}));

const EstimatorBox = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2.5),
	borderRadius: "10px",
	border: `1px solid ${alpha(JW_CYAN, 0.25)}`,
	backgroundColor: alpha(JW_CYAN, 0.04),
}));

const serviceOptions = [
	{ value: "locksmith", label: "Locksmith Visit" },
	{ value: "cctv", label: "CCTV Installation" },
	{ value: "alarm", label: "Alarm System" },
	{ value: "fire-door", label: "Fire Door Inspection" },
];

function estimateCost(service, propertyType, urgency) {
	const base =
		{
			"locksmith": 95,
			"cctv": 500,
			"alarm": 450,
			"fire-door": 150,
		}[service] || 0;

	const multiplier =
		(propertyType === "commercial" ? 1.3 : 1) *
		(urgency === "urgent" ? 1.2 : 1);
	const low = Math.round(base * multiplier);
	const high = Math.round(low * 1.6);
	return { low, high };
}

export default function QuotePage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		postcode: "",
		propertyType: "residential",
		service: "locksmith",
		urgency: "standard",
		preferredDate: "",
		details: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [recaptchaToken, setRecaptchaToken] = useState("");
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "success",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const res = await fetch("/api/quote", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...formData, recaptchaToken }),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Failed to submit");
			setSnackbar({
				open: true,
				message: "Thanks! We'll contact you with a tailored quote.",
				severity: "success",
			});
			setFormData({
				name: "",
				email: "",
				phone: "",
				postcode: "",
				propertyType: "residential",
				service: "locksmith",
				urgency: "standard",
				preferredDate: "",
				details: "",
			});
		} catch (err) {
			setSnackbar({
				open: true,
				message: "Sorry, something went wrong. Please try again or call us.",
				severity: "error",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const est = estimateCost(
		formData.service,
		formData.propertyType,
		formData.urgency,
	);

	return (
		<>
			<PageHero>
				<Container maxWidth="xl">
					<Box sx={{ maxWidth: 720 }}>
						<DecorativeLine />
						<Typography
							variant="h2"
							component="h1"
							sx={{ fontWeight: 700, mb: 2.5, color: "white" }}>
							Request a Quote
						</Typography>
						<Typography
							variant="h6"
							sx={{
								maxWidth: 680,
								opacity: 0.9,
								color: "rgba(255, 255, 255, 0.88)",
							}}>
							Get a fast, no‑obligation estimate for residential or commercial
							work
						</Typography>
					</Box>
				</Container>
			</PageHero>

			<Box sx={{ py: { xs: 6, md: 8 } }}>
				<Container maxWidth="xl">
					<Box sx={{ maxWidth: 1100, mx: "auto" }}>
						<Grid
							container
							spacing={4}
							alignItems="flex-start">
							<Grid
								item
								xs={12}
								md={7}
								sx={{ display: "flex", justifyContent: "center" }}>
								<QuoteFormCard
									component="form"
									onSubmit={handleSubmit}
									sx={{ width: "100%", maxWidth: 640 }}>
									<Typography
										variant="h5"
										sx={{ fontWeight: 700, mb: 1, color: JW_BLUE }}>
										Tell us about your project
									</Typography>
									<Typography sx={{ mb: 3, color: "text.secondary" }}>
										We aim to respond within 24 hours. For emergencies, please
										call 0208 646 7931.
									</Typography>
									<Grid
										container
										spacing={2.5}>
										<div className="w-full flex items-center gap-5">
											<Grid
												item
												style={{
													width: "100%",
												}}
												xs={12}>
												<StyledTextField
													label="Your Name"
													name="name"
													fullWidth
													required
													value={formData.name}
													onChange={handleChange}
												/>
											</Grid>
											<Grid
												item
												style={{
													width: "100%",
												}}
												xs={12}>
												<StyledTextField
													label="Email"
													name="email"
													type="email"
													fullWidth
													required
													value={formData.email}
													onChange={handleChange}
												/>
											</Grid>
										</div>
										<div className="w-full flex items-center gap-5">
											<Grid
												item
												style={{
													width: "100%",
												}}
												xs={12}>
												<StyledTextField
													label="Phone"
													name="phone"
													fullWidth
													value={formData.phone}
													onChange={handleChange}
												/>
											</Grid>
											<Grid
												item
												style={{
													width: "100%",
												}}
												xs={12}>
												<StyledTextField
													label="Postcode"
													name="postcode"
													fullWidth
													value={formData.postcode}
													onChange={handleChange}
												/>
											</Grid>
										</div>
										<div className="w-full flex items-start gap-5">
											<Grid
												item
												style={{
													width: "100%",
												}}
												xs={12}>
												<FormControl
													fullWidth
													sx={{ mb: 0 }}>
													<InputLabel id="service-label">Service</InputLabel>
													<Select
														labelId="service-label"
														label="Service"
														name="service"
														value={formData.service}
														onChange={handleChange}>
														{serviceOptions.map((opt) => (
															<MenuItem
																key={opt.value}
																value={opt.value}>
																{opt.label}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
											<Grid
												item
												style={{
													width: "100%",
												}}
												xs={12}>
												<FormControl
													fullWidth
													sx={{ mb: 0 }}>
													<InputLabel id="urgency-label">Urgency</InputLabel>
													<Select
														labelId="urgency-label"
														label="Urgency"
														name="urgency"
														value={formData.urgency}
														onChange={handleChange}>
														<MenuItem value="standard">
															Standard (1–5 days)
														</MenuItem>
														<MenuItem value="urgent">Urgent (24–48h)</MenuItem>
													</Select>
												</FormControl>
											</Grid>
											<Grid
												item
												style={{
													width: "100%",
												}}
												xs={12}>
												<StyledTextField
													label="Preferred Date"
													name="preferredDate"
													type="date"
													fullWidth
													InputLabelProps={{ shrink: true }}
													value={formData.preferredDate}
													onChange={handleChange}
												/>
											</Grid>
										</div>
										<Grid
											item
											style={{
												width: "100%",
											}}
											xs={12}>
											<FormControl
												component="fieldset"
												sx={{ mb: 1.5 }}>
												<Typography sx={{ fontWeight: 600, mb: 1 }}>
													Property Type
												</Typography>
												<RadioGroup
													row
													name="propertyType"
													value={formData.propertyType}
													onChange={handleChange}>
													<FormControlLabel
														value="residential"
														control={<Radio />}
														label="Residential"
													/>
													<FormControlLabel
														value="commercial"
														control={<Radio />}
														label="Commercial"
													/>
												</RadioGroup>
											</FormControl>
										</Grid>
										<Grid
											style={{
												width: "100%",
											}}>
											<StyledTextField
												label="Project Details"
												name="details"
												fullWidth
												required
												multiline
												minRows={5}
												value={formData.details}
												onChange={handleChange}
												placeholder="Tell us what you need, number of doors/cameras, access constraints, etc."
											/>
										</Grid>
									</Grid>
									<Grid
										item
										xs={12}>
										<ReCaptcha onVerify={(token) => setRecaptchaToken(token)} />
										<StyledButton
											type="submit"
											disabled={isSubmitting || !recaptchaToken}
											sx={{ alignSelf: { xs: "stretch", sm: "flex-start" } }}
											startIcon={
												isSubmitting ? (
													<CircularProgress
														size={20}
														color="inherit"
													/>
												) : null
											}>
											{isSubmitting ? "Submitting…" : "Request Quote"}
										</StyledButton>
									</Grid>
								</QuoteFormCard>
							</Grid>
							<Grid
								item
								xs={12}
								md={5}
								sx={{ display: "flex", justifyContent: "center" }}>
								<EstimatorBox sx={{ width: "100%", maxWidth: 360 }}>
									<Typography
										variant="h6"
										sx={{ fontWeight: 700, mb: 1, color: JW_BLUE }}>
										Quick Estimator (guide only)
									</Typography>
									<Typography sx={{ mb: 2, color: "text.secondary" }}>
										Based on your selections, typical projects fall between:
									</Typography>
									<Box
										sx={{
											p: 2.5,
											borderRadius: "8px",
											backgroundColor: "#fff",
											border: `1px dashed ${alpha(JW_CYAN, 0.4)}`,
										}}>
										<Typography
											sx={{
												fontSize: "1.75rem",
												fontWeight: 800,
												color: JW_BLUE,
											}}>
											£{est.low} – £{est.high}
										</Typography>
									</Box>
									<Typography
										sx={{ mt: 2, fontSize: "0.9rem", color: "text.secondary" }}>
										Final pricing depends on site conditions, brand choices and
										scope. We’ll confirm after a brief call or survey.
									</Typography>
									<Box sx={{ mt: 3 }}>
										<Typography sx={{ fontWeight: 600, mb: 1 }}>
											What affects price?
										</Typography>
										<ul style={{ margin: 0, paddingLeft: 18 }}>
											<li>Number of doors/cameras/zones</li>
											<li>Premium brands and finishes</li>
											<li>Out‑of‑hours or urgent access</li>
										</ul>
									</Box>
								</EstimatorBox>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
				<Alert
					onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
					severity={snackbar.severity}
					sx={{ width: "100%" }}>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</>
	);
}
