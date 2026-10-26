"use client";
import {
	AppBar,
	Toolbar,
	Container,
	Button,
	Box,
	Typography,
	IconButton,
	MenuItem,
	useMediaQuery,
	Drawer,
	Collapse,
	List,
	ListItem,
	ListItemText,
	Divider,
	Paper,
	Stack,
	Fade,
	Popper,
	ClickAwayListener,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LockIcon from "@mui/icons-material/Lock";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import ShieldIcon from "@mui/icons-material/Shield";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SecurityIcon from "@mui/icons-material/Security";
import React, { useState, useEffect, useRef } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const JW_CYAN = "#00c6d7";
const JW_BLUE = "#1c2e4a";

const FrostedGlassAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "scrolled",
})(({ theme, scrolled }) => ({
	backgroundColor: scrolled ? alpha(JW_BLUE, 0.85) : "rgba(0, 0, 0, 0.1)",
	backdropFilter: "blur(10px)",
	WebkitBackdropFilter: "blur(10px)",
	boxShadow: scrolled ? "0 5px 25px rgba(0, 0, 0, 0.12)" : "none",
	borderBottom: scrolled
		? `1px solid ${alpha("#ffffff", 0.12)}`
		: `1px solid ${alpha("#ffffff", 0.1)}`,
	transition: "all 0.4s ease",
	zIndex: 1400,
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	width: "100%",
	height: "auto",
	[theme.breakpoints.down("md")]: {
		boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
	},
}));

const NavigationButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
	"color": "white",
	"fontWeight": 500,
	"fontFamily": "var(--font-poppins), Arial, sans-serif",
	"position": "relative",
	"padding": theme.spacing(2, 1.8),
	[theme.breakpoints.down("lg")]: {
		padding: theme.spacing(1.5, 1.2),
		fontSize: "14px",
	},
	"&::after": {
		content: '""',
		position: "absolute",
		bottom: "12px",
		left: "50%",
		transform: "translateX(-50%)",
		width: active ? "30px" : "0",
		height: "2px",
		backgroundColor: JW_CYAN,
		transition: "width 0.3s ease",
	},
	"&:hover": {
		"backgroundColor": "transparent",
		"&::after": {
			width: "30px",
		},
	},
	"textTransform": "none",
	"letterSpacing": "0.5px",
	"fontSize": "15px",
}));

const ContactButton = styled(Button)(({ theme }) => ({
	"backgroundColor": JW_CYAN,
	"color": JW_BLUE,
	"fontFamily": "var(--font-poppins), Arial, sans-serif",
	"boxShadow": "0 4px 10px rgba(0, 198, 215, 0.25)",
	"fontWeight": 600,
	"borderRadius": "6px",
	"padding": "17px 20px",

	"textTransform": "none",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.85),
		boxShadow: "0 6px 15px rgba(0, 198, 215, 0.3)",
		transform: "translateY(-2px)",
	},
	"transition": "all 0.2s ease",
}));

const MegaMenuContainer = styled(Paper)(({ theme }) => ({
	"position": "absolute",
	"top": "calc(100% + 5px)",
	"left": "50%",
	"transform": "translateX(-50%)",
	"width": "auto",
	"minWidth": "250px",
	"backgroundColor": alpha(JW_BLUE, 0.98),
	"backdropFilter": "blur(15px)",
	"WebkitBackdropFilter": "blur(15px)",
	"borderRadius": "8px",
	"boxShadow": "0 10px 30px rgba(0, 0, 0, 0.2)",
	"padding": theme.spacing(1.5, 0),
	"zIndex": 1350,
	"border": `1px solid ${alpha("#fff", 0.15)}`,
	"opacity": 0,
	"transformOrigin": "top center",
	"transition": "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
	"pointerEvents": "none",
	"&.open": {
		opacity: 1,
		transform: "translateX(-50%) translateY(0)",
		pointerEvents: "auto",
	},
	[theme.breakpoints.down("sm")]: {
		minWidth: "220px",
	},
}));

const MegaMenuItem = styled(MenuItem)(({ theme }) => ({
	"color": alpha("#fff", 0.9),
	"padding": theme.spacing(1.2, 2.5),
	"fontSize": "0.95rem",
	"display": "flex",
	"alignItems": "center",
	"& .MuiSvgIcon-root": {
		marginRight: theme.spacing(1.5),
		fontSize: "1.1rem",
		color: JW_CYAN,
	},
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.1),
		color: "white",
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(1, 2),
		fontSize: "0.9rem",
	},
}));

const HighlightedMenuItem = styled(MegaMenuItem)(({ theme }) => ({
	"color": "white",
	"&:hover": {
		backgroundColor: alpha(JW_CYAN, 0.25),
	},
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
	"borderRadius": "8px",
	"marginBottom": theme.spacing(1),
	"transition": "background-color 0.2s ease",
	"&:hover": {
		backgroundColor: alpha("#fff", 0.05),
	},
}));

export default function Header() {
	const theme = useTheme();
	const pathname = usePathname();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
	const [locationsAnchorEl, setLocationsAnchorEl] = useState(null);
	const [mobileSubMenu, setMobileSubMenu] = useState("");
	const servicesButtonRef = useRef(null);
	const locationsButtonRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 30;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	useEffect(() => {
		setServicesAnchorEl(null);
		setLocationsAnchorEl(null);
		setMobileOpen(false);
	}, [pathname]);

	const services = [
		{
			title: "Fire Protection",
			icon: <ShieldIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			description: "Comprehensive fire safety and protection solutions",
			link: "/services/fire-protection",
			highlighted: true,
		},
		{
			title: "Locksmith Services",
			icon: <LockIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			description:
				"Professional door and window security solutions for high-end properties",
			link: "/services/locksmith",
			subPaths: [
				"/services/burglary-repairs",
				"/services/key-cutting",
				"/services/locks-and-safes",
				"/services/upvc-door-locks",
			],
		},
		{
			title: "Security Systems",
			icon: <SecurityIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			description:
				"Modern security installations with premium materials and attention to detail",
			link: "/services/security",
			subPaths: [
				"/services/electronic-key-pads",
				"/services/security-surveys",
				"/services/shutters-gates-grilles",
			],
		},
		{
			title: "Emergency Services",
			icon: <ShieldIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			description: "24/7 rapid response from our team of expert technicians",
			link: "/services/emergency",
			subPaths: ["/services/emergency-door-opening"],
		},
	];

	const locationsGroup = [
		{
			title: "Wimbledon",
			icon: <LocationOnIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			link: "/locations/wimbledon",
			highlighted: true,
		},
		{
			title: "Battersea",
			icon: <LocationOnIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			link: "/locations/battersea",
			highlighted: true,
		},
		{
			title: "Clapham",
			icon: <LocationOnIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			link: "/locations/clapham",
		},
		{
			title: "Balham",
			icon: <LocationOnIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
			link: "/locations/balham",
		},
	];

	const allLocationsList = [...locationsGroup];

	const isLocationActive = (loc) => {
		if (isPathActive(loc.link)) return true;
		if (
			loc.subPaths &&
			loc.subPaths.some((path) => pathname.startsWith(path))
		)
			return true;
		return false;
	};

	const isServiceActive = (service) => {
		if (isPathActive(service.link)) return true;
		if (
			service.subPaths &&
			service.subPaths.some((path) => pathname.startsWith(path))
		)
			return true;
		return false;
	};

	const handleMobileMenuToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleServicesToggle = () => {
		setLocationsAnchorEl(null);
		setServicesAnchorEl((prev) => (prev ? null : servicesButtonRef.current));
	};

	const handleServicesClose = () => {
		setServicesAnchorEl(null);
	};

	const handleLocationsToggle = () => {
		setServicesAnchorEl(null);
		setLocationsAnchorEl((prev) => (prev ? null : locationsButtonRef.current));
	};

	const handleLocationsClose = () => {
		setLocationsAnchorEl(null);
	};

	const handleMobileSubMenuToggle = (menu) => {
		setMobileSubMenu(mobileSubMenu === menu ? "" : menu);
	};

	const isPathActive = (path) => {
		if (path === "/") return pathname === path;
		return pathname.startsWith(path);
	};

	return (
		<>
			<FrostedGlassAppBar
				position="fixed"
				scrolled={scrolled ? 1 : 0}
				elevation={0}>
				<Box className="w-full">
					<Toolbar
						disableGutters
						sx={{
							px: 10,
							py: scrolled ? 0.8 : 1.5,
							transition: "padding 0.3s ease",
							[theme.breakpoints.down("md")]: {
								px: 5,
								py: scrolled ? 0.5 : 0.8,
							},
						}}>
						<Link
							href="/"
							style={{
								display: "flex",
								alignItems: "center",
								textDecoration: "none",
								color: "white",
							}}>
							<Box
								sx={{
									"display": "flex",
									"alignItems": "center",
									"mr": 4,
									[theme.breakpoints.down("md")]: { mr: 2 },
									"&:hover": { opacity: 0.9 },
								}}>
								<Image
									src="/images/jw/jw-logo.webp"
									alt="JW Security"
									width={170}
									height={60}
									priority
									fetchPriority="high"
								/>
							</Box>
						</Link>
						{!isMobile && (
							<>
								<Box sx={{ display: "flex", flexGrow: 1 }}>
									<Link
										href="/"
										passHref>
										<NavigationButton
											component="span"
											active={isPathActive("/")}
											aria-label="Home">
											Home
										</NavigationButton>
									</Link>
									<Link
										href="/residential"
										passHref>
										<NavigationButton
											component="span"
											active={isPathActive("/residential")}
											aria-label="Residential">
											Residential
										</NavigationButton>
									</Link>
									<Link
										href="/commercial"
										passHref>
										<NavigationButton
											component="span"
											active={isPathActive("/commercial")}
											aria-label="Commercial">
											Commercial
										</NavigationButton>
									</Link>
									<Box sx={{ position: "relative" }}>
										<NavigationButton
											ref={servicesButtonRef}
											onClick={handleServicesToggle}
											active={
												pathname.includes("/services") ||
												Boolean(servicesAnchorEl)
											}
											endIcon={
												<KeyboardArrowDownIcon
													sx={{
														transition: "transform 0.3s",
														transform: servicesAnchorEl
															? "rotate(180deg)"
															: "rotate(0)",
													}}
												/>
											}
											aria-haspopup="true"
											aria-expanded={Boolean(servicesAnchorEl)}
											aria-label="Services Menu">
											Services
										</NavigationButton>
										<Popper
											open={Boolean(servicesAnchorEl)}
											anchorEl={servicesAnchorEl}
											role="menu"
											placement="bottom-start"
											transition
											disablePortal
											sx={{ zIndex: 1350 }}>
											{({ TransitionProps }) => (
												<Fade
													{...TransitionProps}
													timeout={250}>
													<MegaMenuContainer
														className={Boolean(servicesAnchorEl) ? "open" : ""}>
														<ClickAwayListener
															onClickAway={handleServicesClose}>
															<List
																component="nav"
																dense
																aria-label="services menu">
																{services.map((service, index) =>
																	service.highlighted ? (
																		<Link
																			key={index}
																			href={service.link}
																			passHref>
																			<HighlightedMenuItem
																				component="span"
																				onClick={handleServicesClose}
																				role="menuitem"
																				sx={
																					isServiceActive(service)
																						? {
																								backgroundColor: alpha(
																									JW_CYAN,
																									0.15,
																								),
																								color: "white",
																								borderLeft: `3px solid ${JW_CYAN}`,
																							}
																						: {}
																				}>
																				{service.icon}
																				{service.title}
																			</HighlightedMenuItem>
																		</Link>
																	) : (
																		<Link
																			key={index}
																			href={service.link}
																			passHref>
																			<MegaMenuItem
																				component="span"
																				onClick={handleServicesClose}
																				role="menuitem"
																				sx={
																					isServiceActive(service)
																						? {
																								backgroundColor: alpha(
																									JW_CYAN,
																									0.15,
																								),
																								color: "white",
																								borderLeft: `3px solid ${JW_CYAN}`,
																							}
																						: {}
																				}>
																				{service.icon}
																				{service.title}
																			</MegaMenuItem>
																		</Link>
																	),
																)}
																<Divider
																	sx={{
																		my: 1,
																		borderColor: alpha("#fff", 0.1),
																	}}
																/>
																<Link
																	href="/services"
																	passHref>
																	<MegaMenuItem
																		component="span"
																		onClick={handleServicesClose}
																		sx={{ fontWeight: "bold", color: JW_CYAN }}
																		role="menuitem">
																		<ArrowForwardIosIcon
																			sx={{ fontSize: "1rem !important" }}
																		/>{" "}
																		View All Services
																	</MegaMenuItem>
																</Link>
															</List>
														</ClickAwayListener>
													</MegaMenuContainer>
												</Fade>
											)}
										</Popper>
									</Box>
									<Box sx={{ position: "relative" }}>
										<NavigationButton
											ref={locationsButtonRef}
											onClick={handleLocationsToggle}
											active={
												pathname.includes("/locations") ||
												Boolean(locationsAnchorEl)
											}
											endIcon={
												<KeyboardArrowDownIcon
													sx={{
														transition: "transform 0.3s",
														transform: locationsAnchorEl
															? "rotate(180deg)"
															: "rotate(0)",
													}}
												/>
											}
											aria-haspopup="true"
											aria-expanded={Boolean(locationsAnchorEl)}
											aria-label="Locations Menu">
											Locations
										</NavigationButton>
										<Popper
											open={Boolean(locationsAnchorEl)}
											anchorEl={locationsAnchorEl}
											role="menu"
											placement="bottom-start"
											transition
											disablePortal
											sx={{ zIndex: 1350 }}>
											{({ TransitionProps }) => (
												<Fade
													{...TransitionProps}
													timeout={250}>
													<MegaMenuContainer
														className={Boolean(locationsAnchorEl) ? "open" : ""}>
														<ClickAwayListener
															onClickAway={handleLocationsClose}>
															<List
																component="nav"
																dense
																aria-label="locations menu">
																{locationsGroup.map((loc, index) =>
																	loc.highlighted ? (
																		<Link
																			key={index}
																			href={loc.link}
																			passHref>
																			<HighlightedMenuItem
																				component="span"
																				onClick={handleLocationsClose}
																				role="menuitem"
																				sx={
																					isLocationActive(loc)
																						? {
																								backgroundColor: alpha(
																									JW_CYAN,
																									0.15,
																								),
																								color: "white",
																								borderLeft: `3px solid ${JW_CYAN}`,
																							}
																						: {}
																				}>
																				{loc.icon}
																				{loc.title}
																			</HighlightedMenuItem>
																		</Link>
																	) : (
																		<Link
																			key={index}
																			href={loc.link}
																			passHref>
																			<MegaMenuItem
																				component="span"
																				onClick={handleLocationsClose}
																				role="menuitem"
																				sx={
																					isLocationActive(loc)
																						? {
																								backgroundColor: alpha(
																									JW_CYAN,
																									0.15,
																								),
																								color: "white",
																								borderLeft: `3px solid ${JW_CYAN}`,
																							}
																						: {}
																				}>
																				{loc.icon}
																				{loc.title}
																			</MegaMenuItem>
																		</Link>
																	),
																)}
																<Divider
																	sx={{
																		my: 1,
																		borderColor: alpha("#fff", 0.1),
																	}}
																/>
																<Link
																	href="/locations"
																	passHref>
																	<MegaMenuItem
																		component="span"
																		onClick={handleLocationsClose}
																		sx={{ fontWeight: "bold", color: JW_CYAN }}
																		role="menuitem">
																		<ArrowForwardIosIcon
																			sx={{ fontSize: "1rem !important" }}
																		/>{" "}
																		View All Locations
																	</MegaMenuItem>
																</Link>
															</List>
														</ClickAwayListener>
													</MegaMenuContainer>
												</Fade>
											)}
										</Popper>
									</Box>
									<Link
										href="/about"
										passHref>
										<NavigationButton
											component="span"
											active={isPathActive("/about")}
											aria-label="About Us">
											About Us
										</NavigationButton>
									</Link>
									<Link
										href="/case-studies"
										passHref>
										<NavigationButton
											component="span"
											active={isPathActive("/case-studies")}
											aria-label="Case Studies">
											Case Studies
										</NavigationButton>
									</Link>
									<Link
										href="/blog"
										passHref>
										<NavigationButton
											component="span"
											active={isPathActive("/blog")}
											aria-label="Blog">
											Blog
										</NavigationButton>
									</Link>
									<Link
										href="/contact"
										passHref>
										<NavigationButton
											component="span"
											active={isPathActive("/contact")}
											aria-label="Contact">
											Contact
										</NavigationButton>
									</Link>
								</Box>
								<Stack
									direction="row"
									spacing={3}
									alignItems="center">
									<Box
										sx={{
											px: 2,
											py: 1,
											bgcolor: alpha(JW_BLUE, 0.6),
											borderRadius: "12px",
											boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
											display: "flex",
											alignItems: "center",
										}}>
										<Box
											sx={{
												width: 40,
												height: 40,
												bgcolor: alpha("#fff", 0.1),
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												mr: 2,
											}}>
											<PhoneIcon sx={{ color: JW_CYAN }} />
										</Box>
										<Box>
											<Typography
												sx={{ fontSize: "0.8rem", color: alpha("#fff", 0.8) }}>
												24/7 Emergency Service
											</Typography>
											<Link
												href="tel:02086467931"
												passHref>
												<Typography sx={{ fontWeight: 600, color: JW_CYAN }}>
													0208 646 7931
												</Typography>
											</Link>
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}>
										<Link
											href="/quote"
											passHref>
											<ContactButton
												component="span"
												aria-label="Request a quote">
												Request a Quote
											</ContactButton>
										</Link>
									</Box>
								</Stack>
							</>
						)}
						{isMobile && (
							<Box sx={{ ml: "auto" }}>
								<IconButton
									color="inherit"
									aria-label="open menu"
									onClick={handleMobileMenuToggle}>
									<MenuIcon />
								</IconButton>
							</Box>
						)}
					</Toolbar>
				</Box>
			</FrostedGlassAppBar>
			{isMobile && (
				<Drawer
					anchor="right"
					open={mobileOpen}
					onClose={handleMobileMenuToggle}
					sx={{
						"zIndex": 1350,
						"& .MuiDrawer-paper": {
							width: "85%",
							maxWidth: "350px",
							backgroundColor: JW_BLUE,
							backgroundImage: `linear-gradient(to bottom, ${alpha(JW_BLUE, 0.98)}, ${alpha(JW_BLUE, 0.95)})`,
							backdropFilter: "blur(10px)",
							color: "white",
							padding: theme.spacing(3, 2),
							zIndex: 1350,
						},
						"& .MuiBackdrop-root": {
							zIndex: 1300,
						},
					}}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							mb: 3,
						}}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Image
								src="/images/jw/jw-logo.webp"
								alt="JW Security"
								width={170}
								height={60}
								priority
								fetchPriority="high"
							/>
						</Box>
						<IconButton
							color="inherit"
							aria-label="close menu"
							onClick={handleMobileMenuToggle}
							sx={{ color: alpha("#fff", 0.7) }}>
							<CloseIcon />
						</IconButton>
					</Box>
					<Divider sx={{ my: 2, borderColor: alpha("#fff", 0.1) }} />
					<List component="nav">
						<Link
							href="/"
							passHref>
							<MobileNavItem
								button
								component="span"
								onClick={handleMobileMenuToggle}
								selected={isPathActive("/")}
								sx={{
									"backgroundColor": isPathActive("/")
										? alpha(JW_CYAN, 0.1)
										: "transparent",
									"&.Mui-selected": { color: JW_CYAN },
								}}>
								<ListItemText primary="Home" />
							</MobileNavItem>
						</Link>
						<Link
							href="/residential"
							passHref>
							<MobileNavItem
								button
								component="span"
								onClick={handleMobileMenuToggle}
								selected={isPathActive("/residential")}
								sx={{
									"backgroundColor": isPathActive("/residential")
										? alpha(JW_CYAN, 0.1)
										: "transparent",
									"&.Mui-selected": { color: JW_CYAN },
								}}>
								<ListItemText primary="Residential" />
							</MobileNavItem>
						</Link>
						<Link
							href="/commercial"
							passHref>
							<MobileNavItem
								button
								component="span"
								onClick={handleMobileMenuToggle}
								selected={isPathActive("/commercial")}
								sx={{
									"backgroundColor": isPathActive("/commercial")
										? alpha(JW_CYAN, 0.1)
										: "transparent",
									"&.Mui-selected": { color: JW_CYAN },
								}}>
								<ListItemText primary="Commercial" />
							</MobileNavItem>
						</Link>
						<MobileNavItem
							button
							onClick={() => handleMobileSubMenuToggle("services")}
							aria-expanded={mobileSubMenu === "services"}
							aria-controls="services-submenu">
							<ListItemText primary="Services" />
							<ArrowDropDownIcon
								sx={{
									ml: 1,
									transition: "transform 0.3s",
									transform:
										mobileSubMenu === "services"
											? "rotate(180deg)"
											: "rotate(0)",
								}}
							/>
						</MobileNavItem>
						<Collapse
							in={mobileSubMenu === "services"}
							timeout="auto"
							unmountOnExit
							id="services-submenu">
							<List
								component="div"
								disablePadding>
								{services.map((service, index) => (
									<Link
										key={index}
										href={service.link}
										passHref>
										<MobileNavItem
											button
											component="span"
											onClick={handleMobileMenuToggle}
											sx={{
												pl: 4,
												...(service.highlighted && {
													backgroundColor: alpha(JW_CYAN, 0.12),
													borderLeft: `3px solid ${JW_CYAN}`,
													pl: 3.7,
												}),
											}}>
											<Box sx={{ mr: 2, display: "flex" }}>
												{React.cloneElement(service.icon, {
													sx: { fontSize: 20 },
												})}
											</Box>
											<ListItemText
												primary={service.title}
												primaryTypographyProps={{
													fontSize: "0.95rem",
													...(service.highlighted && { fontWeight: 600 }),
												}}
											/>
										</MobileNavItem>
									</Link>
								))}
								<Link
									href="/services"
									passHref>
									<MobileNavItem
										button
										component="span"
										onClick={handleMobileMenuToggle}
										sx={{
											pl: 4,
											color: JW_CYAN,
										}}>
										<Box sx={{ mr: 2, display: "flex" }}>
											<ArrowForwardIosIcon sx={{ fontSize: 16 }} />
										</Box>
										<ListItemText
											primary="View All Services"
											primaryTypographyProps={{
												fontSize: "0.95rem",
												fontWeight: 600,
											}}
										/>
									</MobileNavItem>
								</Link>
							</List>
						</Collapse>
						<MobileNavItem
							button
							onClick={() => handleMobileSubMenuToggle("locations")}
							aria-expanded={mobileSubMenu === "locations"}
							aria-controls="locations-submenu">
							<ListItemText primary="Locations" />
							<ArrowDropDownIcon
								sx={{
									ml: 1,
									transition: "transform 0.3s",
									transform:
										mobileSubMenu === "locations"
											? "rotate(180deg)"
											: "rotate(0)",
								}}
							/>
						</MobileNavItem>
						<Collapse
							in={mobileSubMenu === "locations"}
							timeout="auto"
							unmountOnExit
							id="locations-submenu">
							<List
								component="div"
								disablePadding>
								{allLocationsList.map((loc, index) => (
									<Link
										key={index}
										href={loc.link}
										passHref>
										<MobileNavItem
											button
											component="span"
											onClick={handleMobileMenuToggle}
											sx={{
												pl: 4,
												...(isLocationActive(loc) && {
													backgroundColor: alpha(JW_CYAN, 0.12),
													borderLeft: `3px solid ${JW_CYAN}`,
													pl: 3.7,
												}),
											}}>
											<Box sx={{ mr: 2, display: "flex" }}>
												{React.cloneElement(loc.icon, {
													sx: { fontSize: 20 },
												})}
											</Box>
											<ListItemText
												primary={loc.title}
												primaryTypographyProps={{
													fontSize: "0.95rem",
													...(loc.highlighted && { fontWeight: 600 }),
												}}
											/>
										</MobileNavItem>
									</Link>
								))}
								<Link
									href="/locations"
									passHref>
									<MobileNavItem
										button
										component="span"
										onClick={handleMobileMenuToggle}
										sx={{
											pl: 4,
											color: JW_CYAN,
										}}>
										<Box sx={{ mr: 2, display: "flex" }}>
											<ArrowForwardIosIcon sx={{ fontSize: 16 }} />
										</Box>
										<ListItemText
											primary="View All Locations"
											primaryTypographyProps={{
												fontSize: "0.95rem",
												fontWeight: 700,
											}}
										/>
									</MobileNavItem>
								</Link>
							</List>
						</Collapse>
						<Link
							href="/about"
							passHref>
							<MobileNavItem
								button
								component="span"
								onClick={handleMobileMenuToggle}
								selected={isPathActive("/about")}
								sx={{
									"backgroundColor": isPathActive("/about")
										? alpha(JW_CYAN, 0.1)
										: "transparent",
									"&.Mui-selected": { color: JW_CYAN },
								}}>
								<ListItemText primary="About Us" />
							</MobileNavItem>
						</Link>
						<Link
							href="/case-studies"
							passHref>
							<MobileNavItem
								button
								component="span"
								onClick={handleMobileMenuToggle}
								selected={isPathActive("/case-studies")}
								sx={{
									"backgroundColor": isPathActive("/case-studies")
										? alpha(JW_CYAN, 0.1)
										: "transparent",
									"&.Mui-selected": { color: JW_CYAN },
								}}>
								<ListItemText primary="Case Studies" />
							</MobileNavItem>
						</Link>
						<Link
							href="/blog"
							passHref>
							<MobileNavItem
								button
								component="span"
								onClick={handleMobileMenuToggle}
								selected={isPathActive("/blog")}
								sx={{
									"backgroundColor": isPathActive("/blog")
										? alpha(JW_CYAN, 0.1)
										: "transparent",
									"&.Mui-selected": { color: JW_CYAN },
								}}>
								<ListItemText primary="Blog" />
							</MobileNavItem>
						</Link>
						<Link
							href="/contact"
							passHref>
							<MobileNavItem
								button
								component="span"
								onClick={handleMobileMenuToggle}
								selected={isPathActive("/contact")}
								sx={{
									"backgroundColor": isPathActive("/contact")
										? alpha(JW_CYAN, 0.1)
										: "transparent",
									"&.Mui-selected": { color: JW_CYAN },
								}}>
								<ListItemText primary="Contact" />
							</MobileNavItem>
						</Link>
					</List>
					<Box
						sx={{ mt: 4, pt: 3, borderTop: `1px solid ${alpha("#fff", 0.1)}` }}>
						<Typography sx={{ fontWeight: 600, mb: 1 }}>
							24/7 Emergency Service
						</Typography>
						<Typography
							sx={{
								fontSize: "1.25rem",
								fontWeight: 700,
								color: JW_CYAN,
								mb: 2,
							}}>
							0208 646 7931
						</Typography>
						<Link
							href="/quote"
							passHref>
							<ContactButton
								component="span"
								onClick={handleMobileMenuToggle}
								fullWidth>
								Request a Quote
							</ContactButton>
						</Link>
						<Box
							component="a"
							href="https://wa.me/447822013982"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								"mt": 2.5,
								"display": "flex",
								"alignItems": "center",
								"justifyContent": "center",
								"textDecoration": "none",
								"backgroundColor": "#25D366",
								"color": "#ffffff",
								"borderRadius": "6px",
								"padding": "10px 20px",
								"fontWeight": 600,
								"boxShadow": "0 4px 10px rgba(37, 211, 102, 0.3)",
								"fontSize": "0.9rem",
								"fontFamily": "'Poppins', Arial, sans-serif",
								"transition": "all 0.2s ease",
								"&:hover": {
									transform: "translateY(-2px)",
									boxShadow: "0 6px 15px rgba(37, 211, 102, 0.4)",
									backgroundColor: "#20bd5a",
								},
							}}>
							<WhatsAppIcon sx={{ fontSize: 24, mr: 1 }} />
							Message Us
						</Box>
					</Box>
				</Drawer>
			)}
			{!isMobile && (
				<Box
					component="a"
					href="https://wa.me/447822013982"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						"position": "fixed",
						"bottom": "30px",
						"right": "30px",
						"zIndex": 1500,
						"display": "flex",
						"alignItems": "center",
						"textDecoration": "none",
						"backgroundColor": "#25D366",
						"color": "white",
						"borderRadius": "50px",
						"padding": "10px 25px 10px 15px",
						"boxShadow": "0 4px 20px rgba(37, 211, 102, 0.4)",
						"transition": "transform 0.3s ease, box-shadow 0.3s ease",
						"&:hover": {
							transform: "scale(1.05)",
							boxShadow: "0 6px 25px rgba(37, 211, 102, 0.6)",
						},
					}}>
					<Image
						src="/images/jw/whatsapp-icon-design.webp"
						alt="WhatsApp"
						width={45}
						height={44}
						priority
						className="object-contain mr-3! drop-shadow-2xl"
					/>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: "1.1rem",
							fontFamily: "'Poppins', Arial, sans-serif",
						}}>
						Message Us
					</Typography>
				</Box>
			)}
		</>
	);
}
