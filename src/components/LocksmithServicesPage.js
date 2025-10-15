import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import ContactSection from './common/ContactSection';
import PageHero from './common/PageHero';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyIcon from '@mui/icons-material/Key';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

const BrandCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: alpha(JW_BLUE, 0.03),
  borderRadius: '8px',
  border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
  transition: 'all 0.2s',
  '&:hover': {
    backgroundColor: alpha(JW_CYAN, 0.05),
    transform: 'translateY(-3px)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  }
}));

const LocksmithServicesPage = () => {
  const faqs = [
    {
      question: "How quickly can you arrive for emergency locksmith services?",
      answer: "Our emergency locksmith team typically arrives within 20-30 minutes for most London locations. We have mobile units strategically positioned across the city to ensure rapid response times, 24 hours a day, 7 days a week."
    },
    {
      question: "Are your locksmiths qualified and insured?",
      answer: "Yes, all JW Security locksmiths are Master Locksmiths Association (MLA) certified, DBS checked, and fully insured. We maintain comprehensive public liability insurance and all our work comes with a 12-month guarantee."
    },
    {
      question: "Can you open a lock without damaging it?",
      answer: "In most cases, yes. Our skilled locksmiths use non-destructive entry techniques whenever possible. We carry specialized tools and have extensive experience with various lock types. However, some high-security locks or damaged mechanisms may require drilling as a last resort."
    },
    {
      question: "Do you work with smart locks and keyless entry systems?",
      answer: "Absolutely. We install, repair, and maintain all types of smart locks including Yale, August, Nuki, and other leading brands. Our technicians are trained in the latest digital security technologies and can integrate smart locks with your home automation systems."
    },
    {
      question: "What areas of London do you cover?",
      answer: "We provide locksmith services across all London boroughs, with specialist teams in Central London, North London, South London, East London, and West London. We also serve Greater London areas including Surrey borders."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Locksmith Services",
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
    "description": "Professional locksmith services in London including emergency lockouts, lock installation, high-security upgrades, and 24/7 emergency response.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "65",
      "highPrice": "500",
      "offerCount": "6"
    }
  };

  const locksmithServices = [
    {
      title: 'Residential Locksmith',
      icon: <HomeIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Complete home security solutions including lock installation, repair, and emergency services.',
      services: [
        'Lock installation and replacement',
        'High-security lock upgrades',
        'Master key systems',
        'Lock rekeying services',
        'Deadbolt installation',
        'Smart lock installation'
      ]
    },
    {
      title: 'Commercial Locksmith',
      icon: <BusinessIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Professional security solutions for businesses of all sizes with minimal disruption.',
      services: [
        'Access control systems',
        'Master key systems',
        'Panic bar installation',
        'Commercial grade locks',
        'Key card systems',
        'Security consultation'
      ]
    },
    {
      title: 'Emergency Services',
      icon: <SecurityIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: '24/7 emergency locksmith services for lockouts and urgent security needs.',
      services: [
        '24/7 emergency response',
        'Lockout assistance',
        'Broken key extraction',
        'Lock damage repair',
        'Emergency rekeying',
        'Burglary damage repair'
      ]
    },
    {
      title: 'Auto Locksmith',
      icon: <KeyIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Specialist automotive locksmith services for all vehicle makes and models.',
      services: [
        'Car key replacement',
        'Transponder key programming',
        'Car lockout service',
        'Ignition repair',
        'Remote key fob programming',
        'Emergency trunk opening'
      ]
    },
    {
      title: 'Safe Services',
      icon: <LockIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Expert safe installation, opening, and maintenance services.',
      services: [
        'Safe installation',
        'Safe opening and repair',
        'Combination changes',
        'Safe relocation',
        'Electronic safe servicing',
        'Vault services'
      ]
    },
    {
      title: 'Security Upgrades',
      icon: <BuildIcon sx={{ fontSize: 35, color: JW_CYAN }} />,
      description: 'Comprehensive security assessments and upgrade recommendations.',
      services: [
        'Security surveys',
        'High-security lock installation',
        'Digital lock systems',
        'Keyless entry systems',
        'Security hardware upgrades',
        'Multi-point locking systems'
      ]
    }
  ];

  const lockBrands = [
    'Yale', 'Chubb', 'Union', 'ERA', 'Banham', 'Ingersoll',
    'ASSA ABLOY', 'Mul-T-Lock', 'EVVA', 'Kaba', 'Sargent', 'Medeco',
    'Schlage', 'Kwikset', 'Master Lock', 'Abus', 'Dom', 'Wilka'
  ];

  const features = [
    'MLA Certified Locksmiths',
    '24/7 Emergency Service',
    'Fully Insured & Licensed',
    'No Call-Out Charges',
    'Fixed Price Quotes',
    'All Work Guaranteed',
    '30+ Years Experience',
    'DBS Checked Staff'
  ];

  return (
    <>
      <Helmet>
        <title>Locksmith Services London | 24/7 Emergency Locksmith | JW Security</title>
        <meta name="description" content="Professional locksmith services in London. 24/7 emergency response, residential & commercial locks, high-security upgrades. MLA certified locksmiths. Call 020 7946 0125." />
        <meta name="keywords" content="locksmith London, emergency locksmith, 24 hour locksmith, lock repair, lock installation, master locksmith, commercial locksmith, residential locksmith" />
        <link rel="canonical" href="https://jwsecurity.co.uk/services/locksmith" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <Header />
      <PageHero 
        title="Locksmith Services"
        subtitle="Professional locksmith solutions for homes, businesses, and vehicles across London"
        backgroundImage="/images/jw/locksmith-maintenance.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                London's Trusted Master Locksmiths Since 1991
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                When you're locked out at 2 AM or need urgent security upgrades after a break-in, you need a locksmith you can trust. JW Security has been London's go-to locksmith service for over three decades, combining traditional craftsmanship with cutting-edge security technology.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our Master Locksmiths Association certified technicians arrive fully equipped to handle any lock-related challenge. From period property mortice locks in Victorian conversions to the latest smart lock systems in modern apartments, we have the expertise and tools to provide immediate solutions. We specialize in non-destructive entry techniques, saving you the cost and hassle of lock replacement whenever possible.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                What sets us apart is our commitment to honest, transparent service. We provide fixed-price quotes before starting any work, with no hidden call-out charges or surprise fees. Our 24/7 emergency service means you're never left stranded, and our average response time of 20-30 minutes across London ensures help arrives when you need it most.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/confident-locksmith-looking-at-camera.jpg"
                alt="Professional locksmith at work"
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
              Our Locksmith Services
            </SectionTitle>
            <Grid container spacing={4}>
              {locksmithServices.map((service, index) => (
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
                      {service.services.map((item, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={item} 
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
              Lock Brands We Service
            </SectionTitle>
            <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Our experienced locksmiths work with all major lock manufacturers and security brands:
            </Typography>
            <Grid container spacing={2}>
              {lockBrands.map((brand, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <BrandCard>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {brand}
                    </Typography>
                  </BrandCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/locksmith-in-workshop-makes-new-key-use-grinding-engraving-machine.jpg"
                alt="Locksmith workshop"
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
                Why Choose JW Security Locksmiths?
              </SectionTitle>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
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
                Get a Free Locksmith Quote
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Frequently Asked Questions
            </SectionTitle>
            {faqs.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: alpha(JW_BLUE, 0.02),
                    '&:hover': {
                      backgroundColor: alpha(JW_CYAN, 0.05),
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      <ContactSection 
        title="Need a Locksmith?"
        subtitle="Available 24/7 for emergency services and scheduled appointments"
      />
      <Footer />
    </>
  );
};

export default LocksmithServicesPage;