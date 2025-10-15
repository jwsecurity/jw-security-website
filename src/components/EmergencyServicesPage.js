import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Paper } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import ContactSection from './common/ContactSection';
import PageHero from './common/PageHero';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeIcon from '@mui/icons-material/Home';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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

const EmergencyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  border: '2px solid',
  borderColor: JW_CYAN,
  backgroundColor: alpha(JW_CYAN, 0.02),
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.12)',
    backgroundColor: alpha(JW_CYAN, 0.05),
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
}));

const EmergencyButton = styled(Button)(({ theme }) => ({
  backgroundColor: JW_CYAN,
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: theme.spacing(2, 4),
  marginTop: theme.spacing(2),
  boxShadow: `0 5px 15px ${alpha(JW_CYAN, 0.4)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: JW_BLUE,
    transform: 'translateY(-3px)',
    boxShadow: `0 8px 20px ${alpha(JW_CYAN, 0.5)}`,
  }
}));

const EmergencyServicesPage = () => {
  const emergencyServices = [
    {
      title: 'Emergency Lockout Service',
      icon: <LockOpenIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Locked out of your property? Our expert locksmiths provide rapid, non-destructive entry 24/7.',
      features: [
        'Average 20-30 minute response time',
        'Non-destructive entry techniques',
        'All lock types and brands',
        'Residential and commercial',
        'No call-out charges'
      ]
    },
    {
      title: 'Burglary Damage Repair',
      icon: <LocalPoliceIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Immediate response to secure your property after a break-in with emergency repairs and upgrades.',
      features: [
        'Emergency boarding services',
        'Lock replacement and upgrades',
        'Door and frame repairs',
        'Security assessment included',
        'Insurance documentation'
      ]
    },
    {
      title: 'Lost Key Replacement',
      icon: <HomeIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Fast key cutting and lock replacement services when you\'ve lost your keys.',
      features: [
        'On-site key cutting',
        'Lock rekeying services',
        'Master key systems',
        'Spare keys created',
        'Security advice provided'
      ]
    },
    {
      title: 'Lock Mechanism Failure',
      icon: <BuildIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Expert repair when locks jam, break, or fail to operate correctly.',
      features: [
        'All lock types serviced',
        'Immediate temporary solutions',
        'Permanent repairs available',
        'Upgrade options offered',
        'Warranty on all work'
      ]
    }
  ];

  const responseProcess = [
    {
      step: '1',
      title: 'Call Our Emergency Line',
      description: 'Phone 020 7946 0125 any time, day or night. Our emergency team is always ready.'
    },
    {
      step: '2',
      title: 'Describe Your Situation',
      description: 'Tell us your location and the nature of your emergency. We\'ll provide an estimated arrival time.'
    },
    {
      step: '3',
      title: 'Rapid Dispatch',
      description: 'Our nearest available technician is immediately dispatched to your location.'
    },
    {
      step: '4',
      title: 'Professional Resolution',
      description: 'Our expert resolves your emergency quickly and efficiently, with transparent pricing.'
    }
  ];

  const coverageAreas = [
    'Central London - 15-20 minutes',
    'North London - 20-30 minutes',
    'South London - 20-30 minutes',
    'East London - 25-35 minutes',
    'West London - 20-30 minutes',
    'Greater London - 30-45 minutes'
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "JW Security 24/7 Emergency Locksmith Services",
    "description": "24/7 emergency locksmith services in London. Rapid response for lockouts, burglary repairs, and lock failures. Average 20-30 minute response time.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JW Security",
      "telephone": "020 7946 0125",
      "address": {
        "@type": "PostalAddress",
        "@id": "https://jwsecurity.co.uk/#address",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Emergency locksmith callout",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+44-20-7946-0125",
        "contactType": "emergency",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>24/7 Emergency Locksmith London | Rapid Response | JW Security</title>
        <meta name="description" content="24/7 emergency locksmith services in London. Locked out? Need urgent repairs? 20-30 minute response time. No call-out charges. Call 020 7946 0125 now." />
        <meta name="keywords" content="emergency locksmith London, 24 hour locksmith, locked out, burglary repair, emergency lock repair, urgent locksmith" />
        <link rel="canonical" href="https://jwsecurity.co.uk/services/emergency" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <Header />
      <PageHero 
        title="24/7 Emergency Services"
        subtitle="Immediate response when you need us most - Available every hour of every day"
        backgroundImage="/images/jw/closeup-of-a-professional-locksmith-installing-a-new-lock-on-a-house-exterior-door-with-the-inside.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: JW_BLUE, mb: 3 }}>
              Need Emergency Help Now?
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, color: 'text.secondary' }}>
              Don't panic - help is just a phone call away
            </Typography>
            <EmergencyButton 
              startIcon={<PhoneIcon />} 
              component="a" 
              href="tel:02079460125"
              size="large"
            >
              Call Now: 020 7946 0125
            </EmergencyButton>
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              Average response time: 20-30 minutes across London
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                When Every Second Counts
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Being locked out of your home or discovering your property has been broken into is stressful and frightening. That's why JW Security maintains a dedicated emergency response team available 24 hours a day, 365 days a year. We understand that security emergencies don't follow business hours.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our emergency locksmiths are strategically positioned across London to ensure rapid response times. Each technician carries a fully-stocked van with tools and parts to resolve most emergencies in a single visit. We specialize in non-destructive entry techniques, saving you the cost and hassle of replacing locks unnecessarily.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                What truly matters in an emergency is trust. All our emergency technicians are DBS checked, fully insured, and carry identification. We provide upfront pricing with no hidden call-out charges, because the last thing you need during a crisis is a financial surprise.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <EmergencyCard>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AccessTimeIcon sx={{ fontSize: 50, color: JW_CYAN, mr: 2 }} />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: JW_BLUE }}>
                      Response Times by Area
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Our average arrival times across London
                    </Typography>
                  </Box>
                </Box>
                <List dense>
                  {coverageAreas.map((area, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <LocationOnIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={area}
                        primaryTypographyProps={{ fontWeight: 500 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </EmergencyCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, mb: 6 }}>
            <SectionTitle variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
              Emergency Services We Provide
            </SectionTitle>
            <Grid container spacing={4}>
              {emergencyServices.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
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
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            primaryTypographyProps={{ fontSize: '0.9rem' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </ServiceCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8, p: 4, backgroundColor: alpha(JW_BLUE, 0.03), borderRadius: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: JW_BLUE, mb: 4, textAlign: 'center' }}>
              How Our Emergency Response Works
            </Typography>
            <Grid container spacing={3}>
              {responseProcess.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: JW_CYAN,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      margin: '0 auto',
                      mb: 2
                    }}>
                      {item.step}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/locksmith-hands-maintenance-and-handyman-with-tools-home-renovation-and-fixing-change-door-locks.jpg"
                alt="Emergency locksmith response"
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
                Why Choose JW Security for Emergencies?
              </SectionTitle>
              <List>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Genuine 24/7 Availability" 
                    secondary="Not just an answering service - real technicians ready to help"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="No Call-Out Charges" 
                    secondary="You only pay for the work completed"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Fixed Price Quotes" 
                    secondary="Clear pricing before we start any work"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="ID Verified Technicians" 
                    secondary="All staff are DBS checked and carry identification"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Fully Equipped Vans" 
                    secondary="Most emergencies resolved in one visit"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, p: 4, backgroundColor: alpha(JW_CYAN, 0.1), borderRadius: 2, textAlign: 'center' }}>
            <SecurityIcon sx={{ fontSize: 60, color: JW_BLUE, mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
              Prevention is Better Than Cure
            </Typography>
            <Typography paragraph sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              While we're always here for emergencies, we also offer security assessments to help prevent them. 
              Consider scheduling a security survey to identify potential vulnerabilities before they become emergencies.
            </Typography>
            <Button 
              variant="outlined" 
              component={Link} 
              to="/services/security-surveys"
              sx={{ 
                borderColor: JW_BLUE,
                color: JW_BLUE,
                '&:hover': {
                  borderColor: JW_CYAN,
                  backgroundColor: alpha(JW_CYAN, 0.1),
                }
              }}
            >
              Learn About Security Surveys
            </Button>
          </Box>
        </Container>
      </Box>

      <ContactSection 
        title="Emergency? Call Us Now"
        subtitle="020 7946 0125 - Available 24/7, 365 days a year"
      />
      <Footer />
    </>
  );
};

export default EmergencyServicesPage;