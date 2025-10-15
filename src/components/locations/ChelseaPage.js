import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Paper } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import ContactSection from '../common/ContactSection';
import PageHero from '../common/PageHero';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import LockIcon from '@mui/icons-material/Lock';
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

const AreaCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: alpha(JW_BLUE, 0.03),
  borderRadius: '8px',
  border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
  marginBottom: theme.spacing(2),
}));

const ChelseaPage = () => {
  const localAreas = [
    {
      name: 'Kings Road',
      landmarks: ['Saatchi Gallery', 'Duke of York Square', 'Chelsea Old Town Hall'],
      description: 'The heart of Chelsea with luxury boutiques, galleries, and prestigious residential properties.'
    },
    {
      name: 'Chelsea Harbour',
      landmarks: ['Chelsea Harbour Marina', 'Design Centre', 'Luxury apartments'],
      description: 'Exclusive waterfront development with high-end residences requiring sophisticated security.'
    },
    {
      name: 'Sloane Square',
      landmarks: ['Royal Court Theatre', 'Peter Jones', 'Sloane Gardens'],
      description: 'Upscale area bordering Belgravia with Georgian terraces and modern luxury developments.'
    },
    {
      name: 'World\'s End',
      landmarks: ['World\'s End Estate', 'Chelsea Studios', 'Cremorne Gardens'],
      description: 'Diverse neighbourhood mixing social housing with period conversions and new developments.'
    }
  ];

  const specializedServices = [
    {
      title: 'Luxury Property Security',
      description: 'Bespoke security solutions for Chelsea\'s premium residences, combining discretion with effectiveness.',
      features: [
        'Invisible security grilles and shutters',
        'Biometric and keyless entry systems',
        'Integration with home automation',
        'Panic room installations'
      ]
    },
    {
      title: 'Period Property Expertise',
      description: 'Specialist knowledge of Chelsea\'s historic architecture and appropriate security enhancements.',
      features: [
        'Conservation-compliant lock upgrades',
        'Sash window security solutions',
        'Period-appropriate hardware',
        'Listed building experience'
      ]
    }
  ];

  const chelseaInsights = [
    {
      title: 'Chelsea Flower Show Security',
      content: 'During the annual Chelsea Flower Show, we provide enhanced security services for local businesses and residences experiencing increased footfall. Our team understands the unique challenges this world-famous event brings to the area.'
    },
    {
      title: 'River Thames Properties',
      content: 'Properties along Chelsea Embankment face unique security challenges including flood risks and public access. We provide specialized solutions including water-resistant locks and enhanced ground-floor security.'
    },
    {
      title: 'Artist Studios & Galleries',
      content: 'Chelsea\'s thriving arts scene requires specialized security for valuable artworks. We offer discrete monitoring systems and access control suitable for galleries and private collections.'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "JW Security - Chelsea Locksmith & Security Services",
    "image": "https://jwsecurity.co.uk/images/jw/jw-logo.png",
    "description": "Expert locksmith and security services in Chelsea, London. 24/7 emergency response, luxury property security, period property specialists. Serving Kings Road, Sloane Square, and Chelsea Harbour.",
    "@id": "https://jwsecurity.co.uk/locations/chelsea",
    "url": "https://jwsecurity.co.uk/locations/chelsea",
    "telephone": "020 7946 0125",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chelsea",
      "addressRegion": "London",
      "postalCode": "SW3",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4871,
      "longitude": -0.1687
    },
    "openingHoursSpecification": {
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
    },
    "priceRange": "££-£££",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Kings Road"
      },
      {
        "@type": "Place",
        "name": "Chelsea Harbour"
      },
      {
        "@type": "Place",
        "name": "Sloane Square"
      },
      {
        "@type": "Place",
        "name": "World's End"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.4871,
        "longitude": -0.1687
      },
      "geoRadius": "3000"
    }
  };

  return (
    <>
      <Helmet>
        <title>Locksmith Chelsea | 24/7 Emergency Locksmith & Security Services SW3</title>
        <meta name="description" content="Professional locksmith services in Chelsea, SW3. 24/7 emergency response, luxury property security, period property specialists. Serving Kings Road, Sloane Square & Chelsea Harbour. Call 020 7946 0125." />
        <meta name="keywords" content="locksmith Chelsea, emergency locksmith Chelsea SW3, Chelsea security services, Kings Road locksmith, Sloane Square locksmith, luxury property security Chelsea" />
        <link rel="canonical" href="https://jwsecurity.co.uk/locations/chelsea" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <Header />
      <PageHero 
        title="Locksmith & Security Services in Chelsea"
        subtitle="Premium security solutions for one of London's most exclusive neighbourhoods"
        backgroundImage="/images/jw/pexels-cottonbro-5089178-scaled.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                Chelsea's Trusted Security Experts
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                JW Security has been safeguarding Chelsea's prestigious properties for over 30 years. From the boutique-lined Kings Road to the exclusive riverside developments at Chelsea Harbour, we understand the unique security requirements of this distinguished area.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our Chelsea specialists combine traditional craftsmanship with innovative security technology. Whether you're locked out of your Sloane Square townhouse, need high-security locks for your riverside apartment, or require a comprehensive security audit for your commercial premises, we deliver solutions that match Chelsea's exceptional standards.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                We take pride in our discrete, professional service that respects the privacy and sophistication our Chelsea clients expect. Our rapid response team knows every street and square, ensuring we reach you quickly in emergencies - typically within 20-30 minutes.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ServiceCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE }}>
                      Serving All of Chelsea
                    </Typography>
                  </Box>
                  <List dense>
                    {localAreas.map((area, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                        </ListItemIcon>
                        <ListItemText primary={area.name} />
                      </ListItem>
                    ))}
                  </List>
                </ServiceCard>
                
                <ServiceCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LockIcon sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE }}>
                      Premium Lock Brands
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    We supply and install only the finest security products
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Banham, Yale, Chubb" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Era, Union, Ingersoll" />
                    </ListItem>
                  </List>
                </ServiceCard>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, mb: 6 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Chelsea Neighbourhoods We Cover
            </SectionTitle>
            <Grid container spacing={3}>
              {localAreas.map((area, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <AreaCard>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
                      {area.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {area.description}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Notable locations:
                    </Typography>
                    <List dense sx={{ mt: 0.5 }}>
                      {area.landmarks.map((landmark, idx) => (
                        <ListItem key={idx} sx={{ py: 0, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 25 }}>
                            <LocationOnIcon sx={{ fontSize: 16, color: JW_CYAN }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={landmark}
                            primaryTypographyProps={{ fontSize: '0.875rem' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AreaCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 8, mb: 6 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Specialized Security for Chelsea Properties
            </SectionTitle>
            <Grid container spacing={4}>
              {specializedServices.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ServiceCard>
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

          <Box sx={{ my: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Local Chelsea Knowledge That Makes a Difference
            </SectionTitle>
            <Grid container spacing={3}>
              {chelseaInsights.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper sx={{ p: 3, height: '100%', backgroundColor: alpha(JW_CYAN, 0.05) }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {item.content}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h5">
                Why Chelsea Residents Choose JW Security
              </SectionTitle>
              <List>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Discrete, Professional Service" 
                    secondary="Respecting the privacy our Chelsea clients value"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Period Property Specialists" 
                    secondary="Expert knowledge of Chelsea's historic buildings"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Insurance Approved Locks" 
                    secondary="Meeting the highest security standards"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="24/7 Emergency Response" 
                    secondary="Always available when you need us most"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Transparent Pricing" 
                    secondary="Clear quotes with no hidden charges"
                  />
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
                Request Emergency Service
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/locksmith-in-workshop-makes-new-key-use-grinding-engraving-machine.jpg"
                alt="Professional locksmith services in Chelsea"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, p: 4, backgroundColor: alpha(JW_BLUE, 0.03), borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: JW_BLUE, mb: 3, textAlign: 'center' }}>
              Emergency Locksmith Services Available 24/7
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <AccessTimeIcon sx={{ fontSize: 50, color: JW_CYAN, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Rapid Response
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    20-30 minute average arrival time across Chelsea
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <PhoneIcon sx={{ fontSize: 50, color: JW_CYAN, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Direct Line
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Call 020 7946 0125 for immediate assistance
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <SecurityIcon sx={{ fontSize: 50, color: JW_CYAN, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Fixed Pricing
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    No call-out charges, transparent quotes upfront
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <ContactSection 
        title="Need a Locksmith in Chelsea?"
        subtitle="Available 24/7 for emergencies or to schedule a security consultation"
      />
      <Footer />
    </>
  );
};

export default ChelseaPage;