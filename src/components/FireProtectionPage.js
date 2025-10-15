import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Paper } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import ContactSection from './common/ContactSection';
import PageHero from './common/PageHero';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const JW_BLUE = '#1c2e4a';
const JW_CYAN = '#00c6d7';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: JW_BLUE,
  position: 'relative',
  paddingBottom: theme.spacing(1.5),
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '50px',
    height: '3px',
    backgroundColor: JW_CYAN,
    bottom: 0,
    left: 0,
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  border: '1px solid',
  borderColor: 'transparent',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.12)',
    borderColor: JW_CYAN,
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: alpha(JW_CYAN, 0.1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(JW_CYAN, 0.2),
    transform: 'scale(1.1)',
  }
}));

const ComplianceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: alpha(JW_BLUE, 0.03),
  borderRadius: '8px',
  border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
  marginBottom: theme.spacing(2),
}));

const FireProtectionPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fire Protection Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JW Security",
      "image": "https://jwsecurity.co.uk/images/jw/jw-logo.png",
      "telephone": "020 7946 0125",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "description": "Comprehensive fire protection services including fire door installation, inspection and maintenance, fire alarms, emergency lighting, and fire extinguisher services. BS 476 and BS EN compliant.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "150",
      "highPrice": "5000"
    }
  };

  const fireProtectionServices = [
    {
      title: 'Fire Door Inspections',
      icon: <DoorSlidingIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Regular inspections of fire doors to ensure they meet British Standards and provide adequate protection.',
      details: [
        'Visual inspection of door leaves, frames, and glazing',
        'Checking of intumescent seals and smoke seals',
        'Testing of self-closing devices and door operation',
        'Gap measurement and certification',
        'Detailed inspection reports with recommendations',
        'BS 476 and BS EN compliance verification'
      ]
    },
    {
      title: 'Fire Door Maintenance',
      icon: <WarningAmberIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Comprehensive maintenance services to keep fire doors functioning correctly and compliant with regulations.',
      details: [
        'Adjustment of door closers and hinges',
        'Replacement of damaged seals and strips',
        'Repair of door leaves and frames',
        'Lock and handle servicing',
        'Preventative maintenance schedules',
        'Emergency repair services'
      ]
    },
    {
      title: 'Fire Door Installation',
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Professional installation of new fire doors with certified products meeting all safety standards.',
      details: [
        'FD30 and FD60 rated door installation',
        'Complete door set supply and fit',
        'Ironmongery selection and fitting',
        'Intumescent seal installation',
        'Third-party certification',
        'Building regulations compliance'
      ]
    },
    {
      title: 'Fire Alarm Systems',
      icon: <WarningAmberIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Design, installation, and maintenance of fire detection and alarm systems for all property types.',
      details: [
        'Conventional and addressable systems',
        'Wireless fire alarm solutions',
        'Integration with existing systems',
        'Regular testing and maintenance',
        'BS 5839 compliant installations',
        '24/7 monitoring options available'
      ]
    },
    {
      title: 'Emergency Lighting',
      icon: <FlashlightOnIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Installation and maintenance of emergency lighting systems to ensure safe evacuation routes.',
      details: [
        'LED emergency lighting solutions',
        'Exit sign installation and maintenance',
        'Monthly and annual testing services',
        'Battery replacement programs',
        'BS 5266 compliance',
        'Emergency lighting design and planning'
      ]
    },
    {
      title: 'Fire Extinguisher Services',
      icon: <FireExtinguisherIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Supply, installation, and servicing of fire extinguishers suitable for all fire classifications.',
      details: [
        'Water, foam, CO2, and powder extinguishers',
        'Annual servicing and maintenance',
        'Extended service and refurbishment',
        'Fire blanket supply and installation',
        'Staff training on extinguisher use',
        'Fire point setup and signage'
      ]
    }
  ];

  const complianceStandards = [
    {
      title: 'Regulatory Reform (Fire Safety) Order 2005',
      description: 'We ensure all our work complies with the Fire Safety Order requirements for commercial premises.'
    },
    {
      title: 'British Standards Compliance',
      description: 'All installations and maintenance work meets relevant British Standards including BS 476, BS 5839, and BS 5266.'
    },
    {
      title: 'Building Regulations',
      description: 'Our fire door installations comply with Approved Document B of the Building Regulations.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Protection Services London | Fire Doors & Safety Systems | JW Security</title>
        <meta name="description" content="Professional fire protection services in London. Fire door installation, inspection & maintenance, fire alarms, emergency lighting. BS 476 compliant. Call 020 7946 0125." />
        <meta name="keywords" content="fire protection London, fire door installation, fire door inspection, fire alarm systems, emergency lighting, fire safety compliance" />
        <link rel="canonical" href="https://jwsecurity.co.uk/services/fire-protection" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <Header />
      <PageHero 
        title="Fire Protection Services"
        subtitle="Comprehensive fire safety solutions including fire doors, alarms, and emergency systems"
        backgroundImage="/images/jw/pexels-tima-miroshnichenko-6790761-scaled.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                Complete Fire Protection Solutions
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                JW Security provides comprehensive fire protection services to safeguard your property and ensure compliance with all relevant fire safety regulations. Our expert team specializes in the installation, maintenance, and inspection of fire safety systems throughout London.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                From fire door installations and inspections to complete fire alarm systems and emergency lighting, we deliver solutions that protect lives and property. Our services are designed to meet the specific needs of residential buildings, commercial properties, and public facilities.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                All our work is carried out by qualified technicians and complies with British Standards and the Regulatory Reform (Fire Safety) Order 2005. We provide detailed documentation and certification for all installations and inspections.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/cctv-camera-on-white-ceiling.jpg"
                alt="Fire safety equipment installation"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, mb: 6 }}>
            <SectionTitle variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
              Our Fire Protection Services
            </SectionTitle>
            <Grid container spacing={4}>
              {fireProtectionServices.map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <ServiceCard>
                    <IconBox>
                      {service.icon}
                    </IconBox>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: JW_BLUE }}>
                      {service.title}
                    </Typography>
                    <Typography paragraph sx={{ mb: 2, color: 'text.secondary' }}>
                      {service.description}
                    </Typography>
                    <List dense>
                      {service.details.map((detail, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={detail} 
                            primaryTypographyProps={{ 
                              fontSize: '0.9rem',
                              color: 'text.secondary'
                            }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </ServiceCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Compliance & Standards
            </SectionTitle>
            <Grid container spacing={3}>
              {complianceStandards.map((standard, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ComplianceCard>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
                      {standard.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {standard.description}
                    </Typography>
                  </ComplianceCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/pexels-life-of-pix-8092-scaled.jpg"
                alt="Fire safety inspection"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h5">
                Why Choose JW Security for Fire Protection?
              </SectionTitle>
              <List>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText primary="Over 30 years of experience in fire safety" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText primary="Fully certified and insured technicians" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText primary="24/7 emergency response available" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText primary="Comprehensive maintenance contracts" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText primary="Free site surveys and quotations" />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText primary="Coverage across all of London" />
                </ListItem>
              </List>
              <Button 
                variant="contained" 
                size="large" 
                component={Link} 
                to="/contact"
                sx={{ 
                  mt: 3,
                  backgroundColor: JW_CYAN,
                  '&:hover': {
                    backgroundColor: JW_BLUE,
                  }
                }}
              >
                Get a Free Fire Safety Quote
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ContactSection 
        title="Need Fire Protection Services?"
        subtitle="Contact us today for a free fire safety assessment and quotation"
      />
      <Footer />
    </>
  );
};

export default FireProtectionPage;