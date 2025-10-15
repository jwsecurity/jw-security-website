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
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
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

const MayfairPage = () => {
  const localAreas = [
    {
      name: 'Bond Street',
      landmarks: ['Luxury boutiques', 'Sotheby\'s', 'Royal Arcade'],
      description: 'World-renowned shopping district with flagship stores and exclusive galleries.'
    },
    {
      name: 'Grosvenor Square',
      landmarks: ['Former US Embassy', 'Millennium Hotel', 'Garden Square'],
      description: 'Historic square surrounded by Grade II listed buildings and luxury residences.'
    },
    {
      name: 'Mount Street',
      landmarks: ['Scott\'s restaurant', 'Mount Street Gardens', 'The Connaught'],
      description: 'Elegant street known for its red-brick Queen Anne architecture and fine dining.'
    },
    {
      name: 'Berkeley Square',
      landmarks: ['Annabel\'s', 'Morton\'s Club', 'Historic plane trees'],
      description: 'Prestigious square home to exclusive private members\' clubs and luxury offices.'
    }
  ];

  const premiumServices = [
    {
      title: 'Ultra High-Security Solutions',
      description: 'Cutting-edge security systems for Mayfair\'s most exclusive properties and businesses.',
      features: [
        'Multi-point locking systems with biometric access',
        'Invisible security measures for listed buildings',
        'Integration with 24/7 concierge services',
        'Diplomatic-grade security installations'
      ]
    },
    {
      title: 'Luxury Retail Security',
      description: 'Specialized security for Bond Street boutiques and high-value commercial premises.',
      features: [
        'Electronic master key systems',
        'Time-delay safes and vault rooms',
        'Discrete panic button installations',
        'After-hours security protocols'
      ]
    }
  ];

  const mayfairExpertise = [
    {
      title: 'Private Members\' Clubs',
      content: 'We provide discrete security solutions for Mayfair\'s exclusive clubs, understanding the need for seamless access control that maintains the ambiance while ensuring member safety and privacy.'
    },
    {
      title: 'Embassy & Diplomatic Security',
      content: 'With numerous embassies and diplomatic residences in Mayfair, we offer security installations that meet international diplomatic standards, including ballistic-rated locks and reinforced entry systems.'
    },
    {
      title: 'Art & Auction Houses',
      content: 'Mayfair\'s concentration of galleries and auction houses requires specialized security. We provide climate-controlled secure storage solutions and sophisticated access systems for high-value collections.'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "JW Security - Mayfair Locksmith & Security Services",
    "image": "https://jwsecurity.co.uk/images/jw/jw-logo.png",
    "description": "Premium locksmith and security services in Mayfair, London. Ultra high-security solutions, luxury retail security, diplomatic-grade installations. Serving Bond Street, Grosvenor Square, and Berkeley Square.",
    "@id": "https://jwsecurity.co.uk/locations/mayfair",
    "url": "https://jwsecurity.co.uk/locations/mayfair",
    "telephone": "020 7946 0125",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mayfair",
      "addressRegion": "London",
      "postalCode": "W1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5116,
      "longitude": -0.1481
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
    "priceRange": "£££",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Bond Street"
      },
      {
        "@type": "Place",
        "name": "Grosvenor Square"
      },
      {
        "@type": "Place",
        "name": "Mount Street"
      },
      {
        "@type": "Place",
        "name": "Berkeley Square"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.5116,
        "longitude": -0.1481
      },
      "geoRadius": "2000"
    }
  };

  return (
    <>
      <Helmet>
        <title>Locksmith Mayfair | Premium Security Services W1 | JW Security</title>
        <meta name="description" content="Elite locksmith and security services in Mayfair, W1. Ultra high-security solutions for luxury properties, diplomatic security, Bond Street retail. 24/7 emergency response. Call 020 7946 0125." />
        <meta name="keywords" content="locksmith Mayfair, emergency locksmith Mayfair W1, Mayfair security services, Bond Street locksmith, Grosvenor Square security, luxury property security Mayfair" />
        <link rel="canonical" href="https://jwsecurity.co.uk/locations/mayfair" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <Header />
      <PageHero 
        title="Elite Security Services in Mayfair"
        subtitle="Protecting London's most prestigious district with uncompromising security solutions"
        backgroundImage="/images/jw/pexels-kseniachernaya-5768107-scaled.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                Mayfair's Premier Security Specialists
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                In the heart of London's most exclusive district, JW Security delivers security solutions that match Mayfair's exceptional standards. From the luxury boutiques of Bond Street to the diplomatic residences of Grosvenor Square, we protect what matters most with discretion and expertise.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our Mayfair division specializes in ultra high-security installations that blend seamlessly with the area's architectural grandeur. We understand that security in Mayfair demands more than just protection - it requires solutions that respect the aesthetic and operational requirements of luxury properties, exclusive businesses, and diplomatic premises.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                With three decades of experience serving Mayfair's elite clientele, we've built our reputation on reliability, discretion, and technical excellence. Our team includes specialists in diplomatic security, luxury retail protection, and high-net-worth residential security.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ServiceCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedUserIcon sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE }}>
                      Security Credentials
                    </Typography>
                  </Box>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                      </ListItemIcon>
                      <ListItemText primary="Metropolitan Police approved" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                      </ListItemIcon>
                      <ListItemText primary="Security Industry Authority licensed" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                      </ListItemIcon>
                      <ListItemText primary="Diplomatic security clearance" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 18, color: JW_CYAN }} />
                      </ListItemIcon>
                      <ListItemText primary="Insurance industry recognized" />
                    </ListItem>
                  </List>
                </ServiceCard>
                
                <ServiceCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ fontSize: 40, color: JW_CYAN, mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE }}>
                      Priority Response
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    VIP service levels for Mayfair clients
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText 
                        primary="15-20 minute emergency response" 
                        secondary="Dedicated Mayfair rapid response unit"
                      />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText 
                        primary="Direct priority hotline" 
                        secondary="Skip the queue with VIP access"
                      />
                    </ListItem>
                  </List>
                </ServiceCard>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, mb: 6 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Mayfair Districts We Protect
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
                      Key locations:
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
              Premium Security Solutions for Mayfair
            </SectionTitle>
            <Grid container spacing={4}>
              {premiumServices.map((service, index) => (
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
              Specialized Mayfair Security Expertise
            </SectionTitle>
            <Grid container spacing={3}>
              {mayfairExpertise.map((item, index) => (
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

          <Box sx={{ mt: 8, p: 4, backgroundColor: alpha(JW_BLUE, 0.03), borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: JW_BLUE, mb: 3, textAlign: 'center' }}>
              Trusted by Mayfair's Elite
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <BusinessIcon sx={{ fontSize: 50, color: JW_CYAN, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Luxury Retailers
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Protecting Bond Street's premier boutiques and flagship stores
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <HomeIcon sx={{ fontSize: 50, color: JW_CYAN, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Private Residences
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Securing Mayfair's most exclusive homes and penthouses
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <SecurityIcon sx={{ fontSize: 50, color: JW_CYAN, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Diplomatic Properties
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Meeting international security standards for embassies
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/locksmith-hands-maintenance-and-handyman-with-tools-home-renovation-and-fixing-change-door-locks.jpg"
                alt="Premium locksmith services in Mayfair"
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
                The Mayfair Security Standard
              </SectionTitle>
              <List>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="White Glove Service" 
                    secondary="Professional presentation befitting Mayfair's standards"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Absolute Discretion" 
                    secondary="Confidential service with signed NDAs available"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Cutting-Edge Technology" 
                    secondary="Latest security innovations from global manufacturers"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="24/7 VIP Support" 
                    secondary="Dedicated account management and priority response"
                  />
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Comprehensive Insurance" 
                    secondary="Full coverage for high-value properties and contents"
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
                Request VIP Consultation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ContactSection 
        title="Secure Your Mayfair Property Today"
        subtitle="Contact our specialist team for a discrete security consultation"
      />
      <Footer />
    </>
  );
};

export default MayfairPage;