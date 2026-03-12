"use client";
import React, {
	useState,
	useRef,
	useEffect,
	useCallback,
	Suspense,
	lazy,
} from "react";
import {
	Box,
	Typography,
	Grid,
	Container,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Divider,
	Paper,
	Stack,
	useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Header from "./Header";
import { motion } from "framer-motion";
import KeyIcon from "@mui/icons-material/Key";
import PhoneIcon from "@mui/icons-material/Phone";
import OptimizedImage from "./common/OptimizedImage";
import HandymanIcon from "@mui/icons-material/Handyman";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { styled, keyframes, alpha, useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(20%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-20%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const JW_CYAN = "#00c6d7";
const JW_BLUE = "#1c2e4a";

const AnimatedBox = styled(Box, {
	shouldForwardProp: (prop) => prop !== "animation" && prop !== "delay",
})(({ animation, delay }) => ({
	animation: `${animation || fadeInUp} 1s ease-out forwards`,
	opacity: 0,
	animationDelay: delay || "0s",
}));

const HeroSectionStyled = styled(Box)(({ theme }) => ({
	position: "relative",
	color: "white",
	padding: 0,
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	textAlign: "left",
	marginTop: 0,
	paddingTop: "5rem",
	overflow: "hidden",

	[theme.breakpoints.down("md")]: {
		minHeight: "unset",
		paddingTop: "6.5rem",
		paddingBottom: "5rem",
	},
	[theme.breakpoints.down("sm")]: {
		paddingTop: "6rem",
		paddingBottom: "4rem",
	},
}));

const HeroOverlay = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(28, 46, 74, 0.7)",
	zIndex: 2,
});

const HeroCollageGrid = styled(Box)(({ theme }) => ({
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridTemplateRows: "repeat(3, 1fr)",
	gap: "0px",
	zIndex: 1,
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const CollageItem = styled(Box)({
	overflow: "hidden",
	position: "relative",
});

const MobileHeroImage = styled(Box)(({ theme }) => ({
	"position": "absolute",
	"top": 0,
	"left": 0,
	"right": 0,
	"bottom": 0,
	"zIndex": 1,
	"display": "none",
	[theme.breakpoints.down("md")]: {
		display: "block",
	},
	"& img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	},
}));

const HeroContent = styled(Container)(({ theme }) => ({
	position: "relative",
	zIndex: 3,
	paddingLeft: theme.spacing(5),
	paddingTop: 0,
	paddingBottom: theme.spacing(8),
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	height: "100%",
	[theme.breakpoints.down("md")]: {
		paddingLeft: theme.spacing(2.5),
		paddingRight: theme.spacing(2.5),
		paddingTop: theme.spacing(0),
		paddingBottom: theme.spacing(4),
		justifyContent: "flex-start",
	},
	[theme.breakpoints.down("sm")]: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingBottom: theme.spacing(3),
		width: "100%",
		maxWidth: "100%",
	},
}));

const HeroLogo = styled("img")({
	width: "250px",
	height: "auto",
	marginBottom: "20px",
});

const HeroTitle = styled(Typography)(({ theme }) => ({
	fontFamily: "'Poppins', Arial, sans-serif",
	fontWeight: 800,
	fontSize: "3rem",
	lineHeight: 1.2,
	marginBottom: "2.5rem",
	maxWidth: "600px",
	textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
	letterSpacing: "-0.02em",
	color: "white",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.5rem",
		marginBottom: "1.875rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2rem",
		marginBottom: "1.5rem",
		maxWidth: "100%",
	},
}));

const HeroCallText = styled(Box)(({ theme }) => ({
	marginBottom: "1.875rem",
	[theme.breakpoints.down("sm")]: {
		marginBottom: "1.5rem",
	},
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	"fontFamily": "'Open Sans', Arial, sans-serif",
	"fontSize": "1.25rem",
	"lineHeight": 1.5,
	"fontWeight": 400,
	"color": "white",
	"& strong": {
		fontWeight: 600,
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.125rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.125rem",
	},
}));

const HeroPhoneNumber = styled(Typography)(({ theme }) => ({
	fontFamily: "'Poppins', Arial, sans-serif",
	fontSize: "1.5rem",
	fontWeight: 700,
	color: JW_CYAN,
	fontStyle: "italic",
	textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
	marginTop: "0.3125rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.375rem",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.25rem",
	},
}));

const HeroButton = styled(Button)(({ theme }) => ({
	"fontFamily": "'Poppins', Arial, sans-serif",
	"backgroundColor": "white",
	"color": "#333",
	"padding": "10px 35px",
	"fontWeight": 600,
	"fontSize": "16px",
	"borderRadius": "30px",
	"textTransform": "none",
	"boxShadow": "0 2px 5px rgba(0,0,0,0.2)",
	"letterSpacing": "0.5px",
	"minHeight": "44px",
	"&:hover": {
		backgroundColor: "#f0f0f0",
	},
	[theme.breakpoints.down("md")]: {
		padding: "12px 30px",
		fontSize: "16px",
		minHeight: "48px",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "14px 25px",
		fontSize: "16px",
		minHeight: "48px",
		width: "100%",
		maxWidth: "280px",
	},
}));

const Section = styled(Box, {
	shouldForwardProp: (prop) => prop !== "odd",
})(({ theme, odd = true }) => ({
	padding: theme.spacing(10, 0),
	backgroundColor: odd ? theme.palette.grey[100] : "white",
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(6, 0),
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(4, 0),
	},
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
	"fontFamily": "'Poppins', Arial, sans-serif",
	"fontWeight": 700,
	"marginBottom": theme.spacing(1),
	"color": "#223555",
	"position": "relative",
	"display": "inline-block",
	"paddingBottom": theme.spacing(1),
	"letterSpacing": "-0.01em",
	"&::after": {
		content: '""',
		position: "absolute",
		width: "60px",
		height: "4px",
		backgroundColor: JW_CYAN,
		bottom: 0,
		left: "50%",
		transform: "translateX(-50%)",
	},
}));

const StyledButton = styled(Button)(({ theme }) => ({
	"backgroundColor": JW_CYAN,
	"color": "white",
	"padding": theme.spacing(1.5, 4),
	"fontWeight": "bold",
	"&:hover": {
		backgroundColor: "#223555",
	},
}));

const ClientLogo = styled("img")({
	"maxWidth": "120px",
	"maxHeight": "60px",
	"objectFit": "contain",
	"filter": "grayscale(100%)",
	"opacity": 0.7,
	"transition": "filter 0.3s, opacity 0.3s",
	"&:hover": {
		filter: "grayscale(0%)",
		opacity: 1,
	},
});

const TestimonialWrapper = styled(Box)(({ theme }) => ({
	position: "relative",
	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(6),
	minHeight: "350px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "100%",
	maxWidth: "1000px",
	margin: "0 auto",
	paddingLeft: { xs: "40px", sm: "60px", md: "80px" },
	paddingRight: { xs: "40px", sm: "60px", md: "80px" },
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
	"padding": theme.spacing(4),
	"borderRadius": "12px",
	"boxShadow": "0 10px 30px rgba(0,0,0,0.08)",
	"backgroundColor": "#fff",
	"maxWidth": "800px",
	"width": "100%",
	"margin": "0 auto",
	"position": "relative",
	"overflow": "visible",
	"transition": "transform 0.3s ease",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
	},
	"animation": `${fadeIn} 0.5s ease forwards`,
}));

const TestimonialNavigation = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginTop: theme.spacing(3),
	gap: theme.spacing(1),
}));

const TestimonialQuoteIcon = styled(Box)(({ theme }) => ({
	position: "absolute",
	top: "-24px",
	left: "30px",
	backgroundColor: JW_CYAN,
	color: "white",
	width: "48px",
	height: "48px",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow: "0 4px 10px rgba(0,198,215,0.3)",
}));

const TestimonialDot = styled(Box, {
	shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
	"width": "12px",
	"height": "12px",
	"borderRadius": "50%",
	"backgroundColor": active ? JW_CYAN : alpha(JW_CYAN, 0.3),
	"cursor": "pointer",
	"transition": "all 0.2s ease",
	"&:hover": {
		transform: "scale(1.2)",
		backgroundColor: active ? JW_CYAN : alpha(JW_CYAN, 0.5),
	},
}));

const SectionTitleUnderlined = styled(Typography)(({ theme }) => ({
	"fontFamily": "'Poppins', Arial, sans-serif",
	"fontWeight": 700,
	"marginBottom": theme.spacing(4),
	"color": "#223555",
	"position": "relative",
	"display": "inline-block",
	"paddingBottom": theme.spacing(1),
	"textAlign": "center",
	"letterSpacing": "-0.01em",
	"&::after": {
		content: '""',
		position: "absolute",
		width: "80px",
		height: "3px",
		backgroundColor: JW_CYAN,
		bottom: 0,
		left: "50%",
		transform: "translateX(-50%)",
	},
}));

const ServiceIconsContainer = styled(Box)(({ theme }) => ({
	position: "absolute",
	bottom: "60px",
	left: 0,
	right: 0,
	display: "flex",
	justifyContent: "center",
	gap: theme.spacing(4),
	zIndex: 10,
	width: "100%",
	[theme.breakpoints.down("md")]: {
		bottom: "40px",
		gap: theme.spacing(3),
	},
	[theme.breakpoints.down("sm")]: {
		bottom: "30px",
		gap: theme.spacing(2),
	},
}));

const ServiceIconWrapper = styled(Box)(({ theme }) => ({
	"display": "flex",
	"flexDirection": "column",
	"alignItems": "center",
	"width": "110px",
	"cursor": "pointer",
	"transition": "transform 0.3s ease",
	"&:hover": {
		transform: "translateY(-5px)",
	},
	[theme.breakpoints.down("md")]: {
		width: "90px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "80px",
	},
}));

const CircleIcon = styled(Box)(({ theme }) => ({
	width: "80px",
	height: "80px",
	backgroundColor: "white",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: "10px",
	boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
	[theme.breakpoints.down("md")]: {
		width: "65px",
		height: "65px",
		marginBottom: "8px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "55px",
		height: "55px",
		marginBottom: "6px",
	},
}));

const TestimonialCarousel = React.memo(function TestimonialCarousel({
	testimonialsData,
}) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [animation, setAnimation] = useState(fadeIn);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const autoPlayRef = useRef(null);

	const goToNext = useCallback(() => {
		setAnimation(slideInRight);
		setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
	}, [testimonialsData.length]);

	const goToPrev = useCallback(() => {
		setAnimation(slideInLeft);
		setCurrentIndex((prev) =>
			prev === 0 ? testimonialsData.length - 1 : prev - 1,
		);
	}, [testimonialsData.length]);

	const goToSlide = (index) => {
		setAnimation(index > currentIndex ? slideInRight : slideInLeft);
		setCurrentIndex(index);
	};

	useEffect(() => {
		if (isAutoPlaying) {
			autoPlayRef.current = setInterval(goToNext, 5000);
		}

		return () => autoPlayRef.current && clearInterval(autoPlayRef.current);
	}, [isAutoPlaying, goToNext]);

	const handleMouseEnter = () => setIsAutoPlaying(false);
	const handleMouseLeave = () => setIsAutoPlaying(true);

	const testimonial = testimonialsData[currentIndex];

	return (
		<TestimonialWrapper
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<TestimonialCard sx={{ animation: `${animation} 0.5s ease forwards` }}>
				<TestimonialQuoteIcon>
					<FormatQuoteIcon />
				</TestimonialQuoteIcon>

				<Typography
					variant="body1"
					sx={{
						mt: 2,
						fontStyle: "italic",
						color: alpha("#000", 0.7),
						fontSize: "1.05rem",
						lineHeight: 1.7,
						mb: 3,
					}}>
					&quot;{testimonial.text}&quot;
				</Typography>
				<Divider sx={{ mb: 3 }} />
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Box
							sx={{
								width: 50,
								height: 50,
								borderRadius: "50%",
								backgroundColor: alpha(JW_CYAN, 0.1),
								mr: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: JW_BLUE,
								fontWeight: 700,
								fontSize: "1.2rem",
							}}>
							{testimonial.author.charAt(0)}
						</Box>
						<Box>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: 600, color: JW_BLUE, mb: 0.3 }}>
								{testimonial.author}
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: alpha("#000", 0.6) }}>
								{testimonial.position}
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<Typography
							sx={{
								fontSize: "0.85rem",
								color: alpha("#000", 0.5),
								fontWeight: 500,
							}}>
							Checkatrade
						</Typography>
						<Box
							sx={{
								backgroundColor: "#00A651",
								color: "white",
								px: 1.2,
								py: 0.4,
								borderRadius: "4px",
								fontSize: "0.85rem",
								fontWeight: 600,
							}}>
							{testimonial.rating}/10
						</Box>
					</Box>
				</Box>
			</TestimonialCard>
			<TestimonialNavigation>
				{testimonialsData.map((_, index) => (
					<TestimonialDot
						key={index}
						active={index === currentIndex}
						onClick={() => goToSlide(index)}
					/>
				))}
			</TestimonialNavigation>
			{isAutoPlaying && (
				<Box
					sx={{
						position: "absolute",
						bottom: 0,
						width: "100%",
						height: "3px",
						overflow: "hidden",
						borderRadius: "3px",
						backgroundColor: alpha(JW_CYAN, 0.1),
					}}>
					<Box
						sx={{
							"height": "100%",
							"width": "100%",
							"backgroundColor": JW_CYAN,
							"animation": "autoPlayProgress 5s linear",
							"transformOrigin": "left center",
							"@keyframes autoPlayProgress": {
								"0%": { transform: "scaleX(0)" },
								"100%": { transform: "scaleX(1)" },
							},
						}}
					/>
				</Box>
			)}
		</TestimonialWrapper>
	);
});

const LazyTestimonialCarousel = lazy(() =>
	Promise.resolve({ default: TestimonialCarousel }),
);

const DecorativeLine = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "3px",
	backgroundColor: JW_CYAN,
	margin: "0 0 16px 0",
}));

export default function HomePage() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const clients = [
		{ name: "Alpha Property", logo: "/images/trusted/Alpha Propery.png" },
		{ name: "Antony Roberts", logo: "/images/trusted/Antony Roberts.png" },
		{ name: "Garton Jones", logo: "/images/trusted/Garton Jones.webp" },
		{ name: "EPML", logo: "/images/trusted/EPML.png" },
		{
			name: "Haus Block Management",
			logo: "/images/trusted/Haus Block Management.png",
		},
		{
			name: "Hurford Salvi Carr",
			logo: "/images/trusted/Hurford Salvi Carr.jpg",
		},
		{ name: "Rampton Baseley", logo: "/images/trusted/Rampton Baseley.png" },
	];

	const testimonialsData = [
		{
			text: "Couldn't be more pleased with the service provided by JW Security and advice provided by Luca, they repaired my Schuco doors in under an hour and for a very cheap cost compared to the brand's cost. I was very pleased with the service provided and it saved me a couple of Thousand pounds.",
			author: "Verified Customer",
			position: "Door Repair • SW6",
			rating: 10,
			date: "5 days ago",
		},
		{
			text: "Julian was extremely responsive and helpful in changing our locks at very short notice and after normal business hours. Highly recommend!",
			author: "Verified Customer",
			position: "Emergency Lock Change • SE27",
			rating: 10,
			date: "20 March",
		},
		{
			text: "JW Security were very professional and completed the work well and in good time. Will be contacting them next time work needs to be done.",
			author: "Verified Customer",
			position: "General Work • SW4",
			rating: 10,
			date: "30 May",
		},
	];

	const securityNeeds = [
		{
			title: "Fire Protection",
			icon: <WarningOutlinedIcon sx={{ fontSize: 36, color: JW_CYAN }} />,
			description:
				"Comprehensive fire safety solutions including risk assessments, alarm systems, emergency lighting, and fire extinguishers.",
			link: "/services/fire-protection",
		},
		{
			title: "Carpentry Solutions",
			icon: <HandymanIcon sx={{ fontSize: 36, color: JW_CYAN }} />,
			description:
				"Expert carpentry services including fire door installation, custom woodwork, repairs, and maintenance for residential and commercial properties.",
			link: "/services/carpentry",
		},
		{
			title: "Emergency Door Opening",
			icon: <KeyIcon sx={{ fontSize: 36 }} />,
			description:
				"Fast, non-destructive entry for homes and businesses when you're locked out. 24/7 rapid response.",
			link: "/services/emergency-door-opening",
		},
		{
			title: "Mobile Key Cutting",
			icon: <KeyIcon sx={{ fontSize: 36 }} />,
			description:
				"On-site key cutting service with registered key system. We come to you with our mobile workshop for convenient key duplication.",
			link: "/services/key-cutting",
		},
		{
			title: "UPVC Doors & Windows",
			icon: <GridViewOutlinedIcon sx={{ fontSize: 36 }} />,
			description:
				"Specialist repair and replacement of UPVC door and window locks, handles, and mechanisms for enhanced security.",
			link: "/services/upvc-doors-windows",
		},
		{
			title: "Security Systems",
			icon: <SecurityOutlinedIcon sx={{ fontSize: 36 }} />,
			description:
				"Modern CCTV, alarm systems, and access control solutions professionally installed with premium materials.",
			link: "/services/security",
		},
	];

	const faqData = [
		{
			question: "How do I get a price quote for your services?",
			answer:
				"You can get a free, no-obligation price quote by contacting us directly. We offer bespoke solutions, so every project begins with a free security check and insurance schedule review to understand your specific needs. This allows us to provide an accurate estimate. Call us or use the contact form on our website.",
		},
		{
			question:
				"Can I become a regular customer or set up a maintenance contract?",
			answer:
				"Yes, we value long-term relationships with our clients. We work with many repeat customers, including residential properties, businesses, and managing agents. We can discuss regular maintenance schedules or ongoing security service agreements tailored to your requirements.",
		},
		{
			question: "What areas do you cover?",
			answer:
				"JW Security is based in Wandsworth and our mobile service covers the whole of London as well as Surrey. If you're unsure whether we cover your specific area, please don't hesitate to contact us.",
		},
		{
			question: "Do you offer emergency call-out services?",
			answer:
				"Yes, we provide a 24/7 emergency call-out service for urgent issues such as lockouts, burglary repairs, or critical security system failures. Our team aims to respond quickly to ensure your property is secured.",
		},
		{
			question: "How long has JW Security been in business?",
			answer:
				"JW Security (previously known as 1st Call Security) was established in 1991. We have over 30 years of experience in providing locksmith and security related services to South London and Surrey.",
		},
	];

	const fadeInUpVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const fadeInLeftVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, x: -30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const fadeInRightVariants = {
		hidden: isMobile ? { opacity: 0 } : { opacity: 0, x: 30 },
		visible: isMobile
			? { opacity: 1, transition: { duration: 0.3 } }
			: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<>
			<Header />
			<HeroSectionStyled>
				<HeroCollageGrid>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/locksmith.jpg"
							alt="Professional locksmith at work"
							loading="eager"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/carpentry-plane-tool-for-woodworking-in-workshop.jpg"
							alt="Carpentry tools in workshop"
							loading="eager"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/security-camera.jpg"
							alt="Security camera installation"
							loading="eager"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/pexels-caio-64609-scaled.jpg"
							alt="Security professional"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/hand-saw-on-a-wooden-table-in-carpentry-workshop.jpg"
							alt="Carpentry hand saw tool"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/cctv-camera-on-white-ceiling.jpg"
							alt="CCTV security camera"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/carpenter-installing-door-lock-in-the-new-house-with-a-screwdriver.jpg"
							alt="Carpenter installing door lock"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/pexels-life-of-pix-8092-scaled.jpg"
							alt="Professional tools"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
					<CollageItem>
						<OptimizedImage
							src="/images/jw/symmetric-security-cameras.jpg"
							alt="Multiple security cameras"
							sx={{ width: "100%", height: "100%" }}
						/>
					</CollageItem>
				</HeroCollageGrid>
				<MobileHeroImage>
					<OptimizedImage
						src="/images/jw/locksmith.jpg"
						alt="Professional locksmith services"
						loading="eager"
						sx={{ width: "100%", height: "100%" }}
					/>
				</MobileHeroImage>
				<HeroOverlay />
				<HeroContent>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: isMobile
									? { duration: 0.3 }
									: { staggerChildren: 0.2 },
							},
						}}>
						<motion.div variants={fadeInUpVariants}>
							<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
								<Box
									component="img"
									src="/images/jw/jw-logo.png"
									alt="JW Security"
									sx={{
										height: { xs: "50px", sm: "60px", md: "70px" },
										width: "auto",
									}}
								/>
							</Box>
						</motion.div>
						<motion.div variants={fadeInUpVariants}>
							<HeroTitle
								variant="h1"
								sx={{
									wordBreak: "break-word",
								}}>
								Locksmith, Carpentry and
								<br />
								Fire Protection Specialists
							</HeroTitle>
						</motion.div>
						<motion.div variants={fadeInUpVariants}>
							<HeroCallText>
								<HeroSubtitle>
									<strong>Call us now</strong> for emergency call out
									<br />
									or a free estimate:
								</HeroSubtitle>
								<HeroPhoneNumber>0208 646 7931</HeroPhoneNumber>
							</HeroCallText>
						</motion.div>
						<motion.div variants={fadeInUpVariants}>
							<HeroButton
								variant="contained"
								disableElevation
								component="a"
								href="/contact">
								Get a Free Quote
							</HeroButton>
						</motion.div>
					</motion.div>
				</HeroContent>
				<ServiceIconsContainer
					sx={{
						display: { xs: "none", md: "flex" },
					}}>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.5 }}>
						<ServiceIconWrapper
							component="a"
							href="/services/locksmith"
							sx={{ textDecoration: "none" }}>
							<CircleIcon>
								<KeyIcon
									sx={{
										fontSize: { xs: 24, sm: 28, md: 34 },
										color: "#333",
									}}
								/>
							</CircleIcon>
							<Typography
								sx={{
									color: "white",
									fontWeight: 600,
									fontSize: { xs: "12px", sm: "14px", md: "15px" },
									textAlign: "center",
								}}>
								Locksmiths
							</Typography>
						</ServiceIconWrapper>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9, duration: 0.5 }}>
						<ServiceIconWrapper
							component="a"
							href="/services/carpentry"
							sx={{ textDecoration: "none" }}>
							<CircleIcon>
								<HandymanIcon
									sx={{
										fontSize: { xs: 24, sm: 28, md: 34 },
										color: "#333",
									}}
								/>
							</CircleIcon>
							<Typography
								sx={{
									color: "white",
									fontWeight: 600,
									fontSize: { xs: "12px", sm: "14px", md: "15px" },
									textAlign: "center",
								}}>
								Carpentry
							</Typography>
						</ServiceIconWrapper>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.0, duration: 0.5 }}>
						<ServiceIconWrapper
							component="a"
							href="/services/fire-protection"
							sx={{ textDecoration: "none" }}>
							<CircleIcon>
								<WarningOutlinedIcon
									sx={{
										fontSize: { xs: 24, sm: 28, md: 34 },
										color: "#333",
									}}
								/>
							</CircleIcon>
							<Typography
								sx={{
									color: "white",
									fontWeight: 600,
									fontSize: { xs: "12px", sm: "14px", md: "15px" },
									textAlign: "center",
								}}>
								Fire Protection
							</Typography>
						</ServiceIconWrapper>
					</motion.div>
				</ServiceIconsContainer>
			</HeroSectionStyled>
			<Section odd>
				<Container maxWidth="xl">
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column-reverse", sm: "row" },
							alignItems: "center",
							gap: { xs: 4, sm: 5, md: 6 },
						}}>
						<Box
							sx={{
								width: { xs: "100%", sm: "40%", md: "45%" },
								flex: { xs: "1 1 auto", sm: "0 0 40%", md: "0 0 45%" },
							}}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInLeftVariants}>
								<OptimizedImage
									src="/images/jw/locksmith.jpg"
									alt="Locksmith repairing door lock"
									sx={{
										width: "100%",
										height: "auto",
										borderRadius: "12px",
										boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
										maxHeight: { xs: "400px", md: "500px" },
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</motion.div>
						</Box>
						<Box
							sx={{
								width: { xs: "100%", sm: "60%", md: "55%" },
								flex: { xs: "1 1 auto", sm: "0 0 60%", md: "0 0 55%" },
								pl: { sm: 3, md: 4, lg: 6 },
							}}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInRightVariants}>
								<Typography
									variant="h6"
									sx={{
										color: JW_CYAN,
										mb: 1,
										textTransform: "uppercase",
										fontWeight: "600",
									}}>
									Introducing Us
								</Typography>
								<SectionTitle
									variant="h3"
									component="h2"
									sx={{
										"textAlign": "left",
										"&::after": { left: 0, transform: "none" },
										"fontSize": { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
										"mb": 3,
									}}>
									Security is Our Specialty
								</SectionTitle>
								<Typography
									paragraph
									sx={{
										my: 2.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									JW Security provides an extensive range of locksmith and
									security related services to South London and Surrey since
									1991.
								</Typography>
								<Typography
									paragraph
									sx={{
										mb: 3.5,
										fontSize: { xs: "1.125rem", md: "1.05rem" },
										lineHeight: 1.7,
									}}>
									Everything we do is bespoke and our team of highly experienced
									engineers pride themselves in their quality of work, level of
									professionalism and exhaustive product knowledge.
								</Typography>
								<StyledButton
									variant="contained"
									component="a"
									href="/about"
									size="large">
									Discover More
								</StyledButton>
							</motion.div>
						</Box>
					</Box>
				</Container>
			</Section>
			<Section>
				<Container sx={{ textAlign: "center" }}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUpVariants}>
						<SectionTitle
							variant="h4"
							component="h2"
							sx={{ mb: 7, fontSize: "2.2rem" }}>
							Trusted By Leading Names
						</SectionTitle>
					</motion.div>
					<Grid
						container
						spacing={5}
						justifyContent="center"
						alignItems="center">
						{clients.map((client, index) => (
							<Grid
								item
								xs={6}
								sm={4}
								md={2}
								key={index}>
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.3 }}
									variants={fadeInUpVariants}
									transition={{ delay: index * 0.1 }}>
									<ClientLogo
										src={client.logo}
										alt={client.name}
									/>
								</motion.div>
							</Grid>
						))}
					</Grid>
				</Container>
			</Section>
			<Section
				odd
				sx={{ py: { xs: 6, md: 8 } }}>
				<Container maxWidth="xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUpVariants}>
						<Typography
							variant="h3"
							component="h2"
							sx={{
								textAlign: "center",
								mb: { xs: 5, md: 7 },
								fontWeight: 700,
								fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
								color: "#1c2e4a",
							}}>
							Meeting Your Security Needs
						</Typography>
					</motion.div>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								sm: "1fr 1fr",
								md: "1fr 1fr 1fr",
							},
							gap: 3,
						}}>
						{securityNeeds.map((item, index) => (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.1 }}
								variants={fadeInUpVariants}
								transition={{ delay: index * 0.1 }}>
								<Box
									sx={{
										"height": "100%",
										"width": "100%",
										"backgroundColor": "white",
										"borderRadius": "10px",
										"boxShadow": "0 2px 10px rgba(0,0,0,0.05)",
										"transition": "transform 0.3s ease, box-shadow 0.3s ease",
										"overflow": "hidden",
										"&:hover": {
											transform: "translateY(-5px)",
											boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
										},
									}}>
									<Box
										sx={{
											p: { xs: 3, sm: 3.5 },
											display: "flex",
											flexDirection: "column",
											height: "100%",
										}}>
										<Box
											sx={{ mb: 2.5, display: "flex", alignItems: "center" }}>
											<Box
												sx={{
													color: "#00c6d7",
													mr: 2,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
												}}>
												{React.cloneElement(item.icon, {
													sx: { fontSize: 32 },
												})}
											</Box>
											<Typography
												variant="h6"
												component="h3"
												sx={{
													fontWeight: "600",
													color: "#1A233C",
													fontSize: "1.15rem",
													lineHeight: 1.3,
												}}>
												{item.title}
											</Typography>
										</Box>
										<Typography
											sx={{
												fontSize: { xs: "1rem", md: "0.95rem" },
												lineHeight: 1.65,
												color: "#555",
												mb: 2.5,
												flexGrow: 1,
											}}>
											{item.description}
										</Typography>
										<Box sx={{ mt: "auto" }}>
											<Link
												href={item.link}
												passHref>
												<Button
													component="span"
													sx={{
														"color": "#007bff",
														"fontWeight": 500,
														"textTransform": "none",
														"fontSize": "0.95rem",
														"padding": 0,
														"minWidth": "auto",
														"textAlign": "left",
														"&:hover": {
															backgroundColor: "transparent",
															textDecoration: "underline",
															color: "#0056b3",
														},
													}}>
													Learn more
												</Button>
											</Link>
										</Box>
									</Box>
								</Box>
							</motion.div>
						))}
					</Box>
				</Container>
			</Section>
			<Section>
				<Container maxWidth="xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUpVariants}>
						<Box sx={{ textAlign: "center", mb: 7 }}>
							<DecorativeLine sx={{ mx: "auto", mb: 2.5 }} />
							<Typography
								variant="h3"
								component="h2"
								sx={{
									fontWeight: 700,
									fontSize: { xs: "2.2rem", md: "2.5rem" },
									color: JW_BLUE,
								}}>
								Checkatrade Reviews
							</Typography>
							<Typography
								sx={{
									maxWidth: "700px",
									mx: "auto",
									mt: 2,
									color: alpha("#000", 0.6),
									fontSize: "1.05rem",
								}}>
								Real reviews from verified customers on Checkatrade
							</Typography>
						</Box>
					</motion.div>
					<Suspense
						fallback={
							<Box
								sx={{
									minHeight: "350px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: "100%",
									maxWidth: "1000px",
									margin: "0 auto",
								}}>
								<Typography>Loading testimonials...</Typography>
							</Box>
						}>
						<LazyTestimonialCarousel testimonialsData={testimonialsData} />
					</Suspense>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUpVariants}>
						<Box sx={{ mt: 5, textAlign: "center" }}>
							<Button
								href="https://www.checkatrade.com/trades/jwsecurity"
								target="_blank"
								variant="outlined"
								endIcon={<KeyboardArrowRightIcon />}
								sx={{
									"color": JW_CYAN,
									"borderColor": alpha(JW_CYAN, 0.5),
									"py": 1.2,
									"px": 3.5,
									"textTransform": "none",
									"fontWeight": 600,
									"borderWidth": 1.5,
									"borderRadius": "6px",
									"&:hover": {
										borderColor: JW_CYAN,
										backgroundColor: alpha(JW_CYAN, 0.04),
										transform: "translateY(-2px)",
									},
								}}>
								View All Reviews on Checkatrade
							</Button>
						</Box>
					</motion.div>
				</Container>
			</Section>
			<Section odd>
				<Container maxWidth="xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUpVariants}>
						<Box sx={{ textAlign: "center", mb: 6 }}>
							<DecorativeLine sx={{ mx: "auto", mb: 2.5 }} />
							<Typography
								variant="h3"
								component="h2"
								sx={{
									fontWeight: 700,
									fontSize: { xs: "2.2rem", md: "2.5rem" },
									color: JW_BLUE,
								}}>
								Frequently Asked Questions
							</Typography>
							<Typography
								sx={{
									maxWidth: "700px",
									mx: "auto",
									mt: 2,
									color: alpha("#000", 0.6),
									fontSize: "1.05rem",
								}}>
								Get answers to common questions about our premium security
								services
							</Typography>
						</Box>
					</motion.div>
					<Box
						sx={{
							"maxWidth": "900px",
							"mx": "auto",
							"& .MuiAccordion-root": {
								"bgcolor": "white",
								"borderRadius": "8px",
								"boxShadow": "0 5px 20px rgba(0,0,0,0.05)",
								"&:not(:last-child)": {
									mb: 2,
								},
								"&:before": {
									display: "none",
								},
							},
							"& .MuiAccordionSummary-root": {
								px: 3,
								py: 1.5,
							},
							"& .MuiAccordionDetails-root": {
								px: 3,
								py: 2,
								borderTop: `1px solid ${alpha("#000", 0.08)}`,
							},
						}}>
						{faqData.map((faq, index) => (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.1 }}
								variants={fadeInUpVariants}
								transition={{ delay: index * 0.1 }}>
								<Accordion
									disableGutters
									elevation={0}
									sx={{
										"overflow": "hidden",
										"transition": "all 0.3s ease",
										"&:hover": {
											boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
										},
									}}>
									<AccordionSummary
										expandIcon={
											<ExpandMoreIcon
												sx={{
													color: JW_CYAN,
													fontSize: 28,
												}}
											/>
										}>
										<Typography sx={{ fontWeight: 600, color: JW_BLUE }}>
											{faq.question}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography
											sx={{ color: alpha("#000", 0.7), lineHeight: 1.7 }}>
											{faq.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</motion.div>
						))}
					</Box>
				</Container>
			</Section>
			<Box
				sx={{
					"py": { xs: 8, md: 10 },
					"backgroundImage": `linear-gradient(to right, ${alpha(JW_BLUE, 0.95)}, ${alpha(JW_BLUE, 0.92)}), url(/images/jw/locksmith-maintenance.jpg)`,
					"backgroundSize": "cover",
					"backgroundPosition": "center",
					"backgroundAttachment": "fixed",
					"color": "white",
					"position": "relative",
					"&::before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: "5px",
						background: `linear-gradient(to right, ${alpha(JW_CYAN, 0.7)}, ${JW_CYAN})`,
					},
				}}>
				<Container maxWidth="xl">
					<Grid
						container
						spacing={5}
						alignItems="center"
						justifyContent="center">
						<Grid
							item
							xs={12}
							md={7}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInUpVariants}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										textAlign: "center",
									}}>
									<Typography
										variant="h3"
										sx={{
											fontWeight: 700,
											mb: 3,
											fontSize: { xs: "2rem", md: "2.5rem" },
											textShadow: "0 2px 10px rgba(0,0,0,0.2)",
											color: "white",
										}}>
										Premium Security Solutions for High-End Properties
									</Typography>
									<Typography
										sx={{
											fontSize: "1.1rem",
											mb: 5,
											maxWidth: "600px",
											lineHeight: 1.7,
											color: alpha("#fff", 0.9),
										}}>
										Our expert team provides bespoke security solutions with
										meticulous attention to detail. Trust JW Security to protect
										what matters most to you with over 30 years of experience.
									</Typography>
									<Stack
										direction={{ xs: "column", sm: "row" }}
										spacing={2.5}
										justifyContent="center">
										<Button
											component="a"
											href="/contact"
											variant="contained"
											size="large"
											sx={{
												"bgcolor": JW_CYAN,
												"color": JW_BLUE,
												"fontWeight": 600,
												"px": 4,
												"py": 1.5,
												"fontSize": "1rem",
												"borderRadius": "6px",
												"textTransform": "none",
												"boxShadow": "0 5px 15px rgba(0, 198, 215, 0.3)",
												"&:hover": {
													bgcolor: alpha(JW_CYAN, 0.9),
													boxShadow: "0 8px 25px rgba(0, 198, 215, 0.4)",
													transform: "translateY(-3px)",
												},
												"transition": "all 0.3s ease",
											}}>
											Get a Free Consultation
										</Button>
										<Button
											component="a"
											href="/services"
											variant="outlined"
											size="large"
											sx={{
												"color": "#fff",
												"borderColor": alpha("#fff", 0.5),
												"fontWeight": 600,
												"px": 4,
												"py": 1.5,
												"fontSize": "1rem",
												"borderRadius": "6px",
												"textTransform": "none",
												"&:hover": {
													borderColor: "#fff",
													bgcolor: alpha("#fff", 0.1),
													transform: "translateY(-3px)",
												},
												"transition": "all 0.3s ease",
											}}>
											View Our Services
										</Button>
									</Stack>
								</Box>
							</motion.div>
						</Grid>
						<Grid
							item
							xs={12}
							md={5}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								variants={fadeInRightVariants}>
								<Box
									sx={{
										p: 3.5,
										bgcolor: alpha("#fff", 0.05),
										backdropFilter: "blur(10px)",
										borderRadius: "12px",
										border: `1px solid ${alpha("#fff", 0.1)}`,
										boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										textAlign: "center",
									}}>
									<Typography
										variant="h5"
										sx={{ fontWeight: 600, mb: 3, color: "white" }}>
										24/7 Emergency Service
									</Typography>
									<Typography
										sx={{ mb: 1, fontSize: "1.1rem", lineHeight: 1.7 }}>
										Locked out? Security breach? We provide rapid response
										services for all emergencies.
									</Typography>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											my: 3,
											justifyContent: "center",
										}}>
										<Box
											sx={{
												mr: 2.5,
												width: 56,
												height: 56,
												borderRadius: "50%",
												bgcolor: alpha(JW_CYAN, 0.15),
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}>
											<PhoneIcon sx={{ color: JW_CYAN, fontSize: 28 }} />
										</Box>
										<Box>
											<Typography
												sx={{ fontSize: "0.9rem", color: alpha("#fff", 0.85) }}>
												Call our emergency hotline
											</Typography>
											<Typography
												sx={{
													fontWeight: 700,
													fontSize: "1.8rem",
													color: JW_CYAN,
												}}>
												0208 646 7931
											</Typography>
										</Box>
									</Box>
									<Button
										component="a"
										href="/contact"
										fullWidth
										variant="contained"
										sx={{
											"bgcolor": JW_CYAN,
											"color": JW_BLUE,
											"fontWeight": 600,
											"py": 1.5,
											"fontSize": "1rem",
											"borderRadius": "6px",
											"textTransform": "none",
											"boxShadow": "0 5px 15px rgba(0, 198, 215, 0.3)",
											"&:hover": {
												bgcolor: alpha(JW_CYAN, 0.9),
												boxShadow: "0 8px 25px rgba(0, 198, 215, 0.4)",
											},
											"mt": 1,
										}}>
										Contact Us Now
									</Button>
								</Box>
							</motion.div>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
