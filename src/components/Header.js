import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar, Toolbar, Container, Button, Box, Typography,
  IconButton, Menu, MenuItem, useMediaQuery, Drawer,
  Collapse, List, ListItem, ListItemText, Divider,
  Paper, Grid, Stack, Fade, Popper, ClickAwayListener
} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import KeyIcon from '@mui/icons-material/Key';
import HandymanIcon from '@mui/icons-material/Handyman';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';

// JW Security color constants
const JW_CYAN = '#00c6d7';
const JW_BLUE = '#1c2e4a';

// Styled components for frosted glass effect
const FrostedGlassAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled'
})(({ theme, scrolled }) => ({
  backgroundColor: scrolled
    ? alpha(JW_BLUE, 0.85)
    : 'rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)', // For Safari
  boxShadow: scrolled ? '0 5px 25px rgba(0, 0, 0, 0.12)' : 'none',
  borderBottom: scrolled ? `1px solid ${alpha('#ffffff', 0.12)}` : `1px solid ${alpha('#ffffff', 0.1)}`,
  transition: 'all 0.4s ease',
  zIndex: 1400,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
  },
}));

const NavigationButton = styled(Button)(({ theme, active }) => ({
  color: 'white',
  fontWeight: 500,
  fontFamily: "'Poppins', Arial, sans-serif",
  position: 'relative',
  padding: theme.spacing(2, 1.8),
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(1.5, 1.2),
    fontSize: '14px',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: active ? '30px' : '0',
    height: '2px',
    backgroundColor: JW_CYAN,
    transition: 'width 0.3s ease'
  },
  '&:hover': {
    backgroundColor: 'transparent',
    '&::after': {
      width: '30px'
    }
  },
  textTransform: 'none',
  letterSpacing: '0.5px',
  fontSize: '15px',
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: JW_CYAN,
  color: JW_BLUE,
  fontFamily: "'Poppins', Arial, sans-serif",
  boxShadow: '0 4px 10px rgba(0, 198, 215, 0.25)',
  fontWeight: 600,
  borderRadius: '6px',
  padding: '10px 20px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: alpha(JW_CYAN, 0.85),
    boxShadow: '0 6px 15px rgba(0, 198, 215, 0.3)',
    transform: 'translateY(-2px)'
  },
  transition: 'all 0.2s ease',
}));

const MegaMenuContainer = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + 5px)',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'auto',
  minWidth: '250px',
  backgroundColor: alpha(JW_BLUE, 0.98),
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(1.5, 0),
  zIndex: 1350,
  border: `1px solid ${alpha('#fff', 0.15)}`,
  opacity: 0,
  transformOrigin: 'top center',
  transition: 'opacity 0.25s ease-in-out, transform 0.25s ease-in-out',
  pointerEvents: 'none',
  '&.open': {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0)',
    pointerEvents: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '220px',
  }
}));

const MegaMenuItem = styled(MenuItem)(({ theme }) => ({
  color: alpha('#fff', 0.9),
  padding: theme.spacing(1.2, 2.5),
  fontSize: '0.95rem',
  display: 'flex',
  alignItems: 'center',
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1.5),
    fontSize: '1.1rem',
    color: JW_CYAN,
  },
  '&:hover': {
    backgroundColor: alpha(JW_CYAN, 0.1),
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
    fontSize: '0.9rem',
  }
}));

const HighlightedMenuItem = styled(MegaMenuItem)(({ theme }) => ({
  backgroundColor: alpha(JW_CYAN, 0.15),
  color: 'white',
  borderLeft: `3px solid ${JW_CYAN}`,
  '&:hover': {
    backgroundColor: alpha(JW_CYAN, 0.25),
  }
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  borderRadius: '8px',
  marginBottom: theme.spacing(1),
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: alpha('#fff', 0.05)
  }
}));

const Header = React.memo(() => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState('');
  const servicesButtonRef = useRef(null);

  // Handle scroll effect for frosted glass
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Service mega menu data
  const services = [
    {
      title: 'Fire Protection',
      icon: <ShieldIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
      description: 'Comprehensive fire safety and protection solutions',
      link: '/services/fire-protection',
      highlighted: true
    },
    {
      title: 'Locksmith Services',
      icon: <LockIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
      description: 'Professional door and window security solutions for high-end properties',
      link: '/services/locksmith'
    },
    {
      title: 'Security Systems',
      icon: <SecurityIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
      description: 'Modern security installations with premium materials and attention to detail',
      link: '/services/security'
    },
    {
      title: 'Emergency Services',
      icon: <ShieldIcon sx={{ color: JW_CYAN, fontSize: 28 }} />,
      description: '24/7 rapid response from our team of expert technicians',
      link: '/services/emergency'
    },
  ];

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMegaMenuToggle = (event) => {
    setMegaMenuAnchorEl(megaMenuAnchorEl ? null : servicesButtonRef.current);
  };

  const handleMegaMenuClose = () => {
    setMegaMenuAnchorEl(null);
  };

  const handleMobileSubMenuToggle = (menu) => {
    setMobileSubMenu(mobileSubMenu === menu ? '' : menu);
  };

  const isPathActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <FrostedGlassAppBar position="fixed" scrolled={scrolled ? 1 : 0} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
            py: scrolled ? 0.8 : 1.5,
            transition: 'padding 0.3s ease',
            [theme.breakpoints.down('md')]: {
              py: scrolled ? 0.5 : 0.8
            }
          }}>
            {/* Logo */}
            <Box component={Link} to="/" sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'white',
              mr: 4,
              [theme.breakpoints.down('md')]: {
                mr: 2
              },
              '&:hover': { opacity: 0.9 }
            }}>
              <Box
                component="img"
                src="/images/jw/jw-logo.png"
                alt="JW Security"
                sx={{
                  height: 38,
                  [theme.breakpoints.down('md')]: {
                    height: 30
                  }
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                  <NavigationButton
                    component={Link}
                    to="/"
                    active={isPathActive('/')}
                    aria-label="Home"
                  >
                    Home
                  </NavigationButton>
                  <NavigationButton
                    component={Link}
                    to="/residential"
                    active={isPathActive('/residential')}
                    aria-label="Residential"
                  >
                    Residential
                  </NavigationButton>
                  <NavigationButton
                    component={Link}
                    to="/commercial"
                    active={isPathActive('/commercial')}
                    aria-label="Commercial"
                  >
                    Commercial
                  </NavigationButton>

                  <Box sx={{ position: 'relative' }}>
                    <NavigationButton
                      ref={servicesButtonRef}
                      onClick={handleMegaMenuToggle}
                      active={location.pathname.includes('/services') || Boolean(megaMenuAnchorEl)}
                      endIcon={
                        <KeyboardArrowDownIcon
                          sx={{
                            transition: 'transform 0.3s',
                            transform: megaMenuAnchorEl ? 'rotate(180deg)' : 'rotate(0)'
                          }}
                        />
                      }
                      aria-haspopup="true"
                      aria-expanded={Boolean(megaMenuAnchorEl)}
                      aria-label="Services Menu"
                    >
                      Services
                    </NavigationButton>

                    <Popper
                      open={Boolean(megaMenuAnchorEl)}
                      anchorEl={megaMenuAnchorEl}
                      role="menu"
                      placement="bottom-start"
                      transition
                      disablePortal
                      sx={{ zIndex: 1350 }}
                    >
                      {({ TransitionProps, placement }) => (
                        <Fade {...TransitionProps} timeout={250}>
                          <MegaMenuContainer className={Boolean(megaMenuAnchorEl) ? 'open' : ''}>
                            <ClickAwayListener onClickAway={handleMegaMenuClose}>
                              <List component="nav" dense aria-label="services menu">
                                {services.map((service, index) => (
                                  service.highlighted ? (
                                    <HighlightedMenuItem
                                      key={index}
                                      component={Link}
                                      to={service.link}
                                      onClick={handleMegaMenuClose}
                                      role="menuitem"
                                    >
                                      {service.icon}
                                      {service.title}
                                    </HighlightedMenuItem>
                                  ) : (
                                    <MegaMenuItem
                                      key={index}
                                      component={Link}
                                      to={service.link}
                                      onClick={handleMegaMenuClose}
                                      role="menuitem"
                                    >
                                      {service.icon}
                                      {service.title}
                                    </MegaMenuItem>
                                  )
                                ))}
                                <Divider sx={{ my: 1, borderColor: alpha('#fff', 0.1) }} />
                                <MegaMenuItem
                                  component={Link}
                                  to="/services"
                                  onClick={handleMegaMenuClose}
                                  sx={{ fontWeight: 'bold', color: JW_CYAN }}
                                  role="menuitem"
                                >
                                  <ArrowForwardIosIcon sx={{ fontSize: '1rem !important' }} /> View All Services
                                </MegaMenuItem>
                              </List>
                            </ClickAwayListener>
                          </MegaMenuContainer>
                        </Fade>
                      )}
                    </Popper>
                  </Box>

                  <NavigationButton
                    component={Link}
                    to="/about"
                    active={isPathActive('/about')}
                    aria-label="About Us"
                  >
                    About Us
                  </NavigationButton>
                  <NavigationButton
                    component={Link}
                    to="/case-studies"
                    active={isPathActive('/case-studies')}
                    aria-label="Case Studies"
                  >
                    Case Studies
                  </NavigationButton>
                  <NavigationButton
                    component={Link}
                    to="/blog"
                    active={isPathActive('/blog')}
                    aria-label="Blog"
                  >
                    Blog
                  </NavigationButton>

                  <NavigationButton
                    component={Link}
                    to="/contact"
                    active={isPathActive('/contact')}
                    aria-label="Contact"
                  >
                    Contact
                  </NavigationButton>
                </Box>

                <Stack direction="row" spacing={3} alignItems="center">
                  <Box sx={{
                    p: 2.5,
                    bgcolor: alpha(JW_BLUE, 0.6),
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                  }}>

                    <Box sx={{
                      width: 40,
                      height: 40,
                      bgcolor: alpha('#fff', 0.1),
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <PhoneIcon sx={{ color: JW_CYAN }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.8rem', color: alpha('#fff', 0.8) }}>
                        24/7 Emergency Service
                      </Typography>
                      <Typography sx={{ fontWeight: 600, color: JW_CYAN }}>
                        0208 646 7931
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ContactButton component={Link} to="/quote" aria-label="Request a quote">
                      Request a Quote
                    </ContactButton>
                    <Box
                      component="a"
                      href="https://wa.me/447822013982"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'max-content',
                        mt: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        borderRadius: '50px',
                        padding: '6px 16px',
                        fontWeight: 600,
                        boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)',
                        fontSize: '0.85rem',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateX(-50%) translateY(-2px)',
                          boxShadow: '0 6px 15px rgba(37, 211, 102, 0.4)',
                          backgroundColor: '#20bd5a',
                        }
                      }}
                    >
                      <WhatsAppIcon sx={{ fontSize: 18, mr: 0.8 }} />
                      Message Us
                    </Box>
                  </Box>
                </Stack>
              </>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <Box sx={{ ml: 'auto' }}>
                <IconButton
                  color="inherit"
                  aria-label="open menu"
                  onClick={handleMobileMenuToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </FrostedGlassAppBar>

      {/* Mobile Menu Drawer */}
      {isMobile && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleMobileMenuToggle}
          sx={{
            zIndex: 1350,
            '& .MuiDrawer-paper': {
              width: '85%',
              maxWidth: '350px',
              backgroundColor: JW_BLUE,
              backgroundImage: `linear-gradient(to bottom, ${alpha(JW_BLUE, 0.98)}, ${alpha(JW_BLUE, 0.95)})`,
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: theme.spacing(3, 2),
              zIndex: 1350,
            },
            '& .MuiBackdrop-root': {
              zIndex: 1300,
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/images/jw/jw-logo.png"
                alt="JW Security"
                sx={{ height: 32 }}
              />
            </Box>
            <IconButton
              color="inherit"
              aria-label="close menu"
              onClick={handleMobileMenuToggle}
              sx={{ color: alpha('#fff', 0.7) }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ my: 2, borderColor: alpha('#fff', 0.1) }} />

          <List component="nav">
            <MobileNavItem
              button
              component={Link}
              to="/"
              onClick={handleMobileMenuToggle}
              selected={isPathActive('/')}
              sx={{
                backgroundColor: isPathActive('/') ? alpha(JW_CYAN, 0.1) : 'transparent',
                '&.Mui-selected': { color: JW_CYAN }
              }}
            >
              <ListItemText primary="Home" />
            </MobileNavItem>

            <MobileNavItem
              button
              component={Link}
              to="/residential"
              onClick={handleMobileMenuToggle}
              selected={isPathActive('/residential')}
              sx={{
                backgroundColor: isPathActive('/residential') ? alpha(JW_CYAN, 0.1) : 'transparent',
                '&.Mui-selected': { color: JW_CYAN }
              }}
            >
              <ListItemText primary="Residential" />
            </MobileNavItem>

            <MobileNavItem
              button
              component={Link}
              to="/commercial"
              onClick={handleMobileMenuToggle}
              selected={isPathActive('/commercial')}
              sx={{
                backgroundColor: isPathActive('/commercial') ? alpha(JW_CYAN, 0.1) : 'transparent',
                '&.Mui-selected': { color: JW_CYAN }
              }}
            >
              <ListItemText primary="Commercial" />
            </MobileNavItem>

            <MobileNavItem
              button
              onClick={() => handleMobileSubMenuToggle('services')}
              aria-expanded={mobileSubMenu === 'services'}
              aria-controls="services-submenu"
            >
              <ListItemText primary="Services" />
              <ArrowDropDownIcon
                sx={{
                  ml: 1,
                  transition: 'transform 0.3s',
                  transform: mobileSubMenu === 'services' ? 'rotate(180deg)' : 'rotate(0)'
                }}
              />
            </MobileNavItem>

            <Collapse in={mobileSubMenu === 'services'} timeout="auto" unmountOnExit id="services-submenu">
              <List component="div" disablePadding>
                {services.map((service, index) => (
                  <MobileNavItem
                    key={index}
                    button
                    component={Link}
                    to={service.link}
                    onClick={handleMobileMenuToggle}
                    sx={{
                      pl: 4,
                      ...(service.highlighted && {
                        backgroundColor: alpha(JW_CYAN, 0.12),
                        borderLeft: `3px solid ${JW_CYAN}`,
                        pl: 3.7
                      })
                    }}
                  >
                    <Box sx={{ mr: 2, display: 'flex' }}>
                      {React.cloneElement(service.icon, { sx: { fontSize: 20 } })}
                    </Box>
                    <ListItemText
                      primary={service.title}
                      primaryTypographyProps={{
                        fontSize: '0.95rem',
                        ...(service.highlighted && { fontWeight: 600 })
                      }}
                    />
                  </MobileNavItem>
                ))}
              </List>
            </Collapse>

            <MobileNavItem
              button
              component={Link}
              to="/about"
              onClick={handleMobileMenuToggle}
              selected={isPathActive('/about')}
              sx={{
                backgroundColor: isPathActive('/about') ? alpha(JW_CYAN, 0.1) : 'transparent',
                '&.Mui-selected': { color: JW_CYAN }
              }}
            >
              <ListItemText primary="About Us" />
            </MobileNavItem>

            <MobileNavItem
              button
              component={Link}
              to="/case-studies"
              onClick={handleMobileMenuToggle}
              selected={isPathActive('/case-studies')}
              sx={{
                backgroundColor: isPathActive('/case-studies') ? alpha(JW_CYAN, 0.1) : 'transparent',
                '&.Mui-selected': { color: JW_CYAN }
              }}
            >
              <ListItemText primary="Case Studies" />
            </MobileNavItem>

            <MobileNavItem
              button
              component={Link}
              to="/blog"
              onClick={handleMobileMenuToggle}
              selected={isPathActive('/blog')}
              sx={{
                backgroundColor: isPathActive('/blog') ? alpha(JW_CYAN, 0.1) : 'transparent',
                '&.Mui-selected': { color: JW_CYAN }
              }}
            >
              <ListItemText primary="Blog" />
            </MobileNavItem>

            <MobileNavItem
              button
              component={Link}
              to="/contact"
              onClick={handleMobileMenuToggle}
              selected={isPathActive('/contact')}
              sx={{
                backgroundColor: isPathActive('/contact') ? alpha(JW_CYAN, 0.1) : 'transparent',
                '&.Mui-selected': { color: JW_CYAN }
              }}
            >
              <ListItemText primary="Contact" />
            </MobileNavItem>
          </List>

          <Box sx={{ mt: 4, pt: 3, borderTop: `1px solid ${alpha('#fff', 0.1)}` }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              24/7 Emergency Service
            </Typography>
            <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: JW_CYAN, mb: 2 }}>
              0208 646 7931
            </Typography>

            <ContactButton
              component={Link}
              to="/quote"
              onClick={handleMobileMenuToggle}
              fullWidth
            >
              Request a Quote
            </ContactButton>
            <Box
              component="a"
              href="https://wa.me/447822013982"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                backgroundColor: '#25D366',
                color: '#ffffff',
                borderRadius: '50px',
                padding: '8px 20px',
                fontWeight: 600,
                boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 15px rgba(37, 211, 102, 0.4)',
                  backgroundColor: '#20bd5a',
                }
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 20, mr: 1 }} />
              Message Us
            </Box>
          </Box>
        </Drawer>
      )}
    </>
  );
});

export default Header; 
