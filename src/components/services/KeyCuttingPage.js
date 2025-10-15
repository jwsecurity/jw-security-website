import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider, Paper, Chip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import PageHero from '../common/PageHero';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContactSection from '../common/ContactSection';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Color constants
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
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.12)',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: alpha(JW_CYAN, 0.1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const FeatureBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: alpha(JW_CYAN, 0.05),
  borderRadius: '10px',
  height: '100%',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
  }
}));

const KeyCuttingPage = () => {
  const services = [
    {
      title: "Mobile Key Cutting",
      description: "We come to you with our fully equipped mobile workshop, cutting keys on-site for maximum convenience.",
      icon: <DirectionsCarIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "Registered Key Systems",
      description: "We offer unique registered key systems that can only be duplicated with proper authorization.",
      icon: <VerifiedUserIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "All Key Types",
      description: "From standard house keys to high-security keys, we can duplicate virtually any key type.",
      icon: <VpnKeyIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "While You Wait Service",
      description: "Most keys cut within minutes while you wait, minimizing disruption to your day.",
      icon: <AccessTimeIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    }
  ];

  const keyTypes = [
    "Standard cylinder keys",
    "Mortise lock keys",
    "Yale type keys",
    "High-security keys",
    "Restricted profile keys",
    "Master key systems",
    "Padlock keys",
    "Window lock keys",
    "Cabinet and furniture keys",
    "Safe keys",
    "Car keys (non-transponder)",
    "Garage and shed keys"
  ];

  const benefits = [
    "Convenient mobile service - we come to you",
    "Professional key cutting equipment on board",
    "Registered key systems for enhanced security",
    "Experienced technicians ensure perfect cuts",
    "Competitive pricing with no call-out charges",
    "Same-day service available",
    "All keys tested before we leave"
  ];

  const registeredKeyFeatures = [
    {
      title: "Enhanced Security",
      description: "Keys can only be duplicated by authorized personnel with proper identification",
      icon: <VerifiedUserIcon />
    },
    {
      title: "Control Over Key Copies",
      description: "You decide who can have keys cut, preventing unauthorized duplication",
      icon: <VpnKeyIcon />
    },
    {
      title: "Unique Key Profiles",
      description: "Registered keys use patented profiles that standard key cutters cannot duplicate",
      icon: <ContentCutIcon />
    },
    {
      title: "Perfect for Businesses",
      description: "Ideal for commercial properties where key control is essential",
      icon: <LocationOnIcon />
    }
  ];

  return (
    <>
      <Header />
      <PageHero 
        title="Mobile Key Cutting Service"
        subtitle="Professional on-site key cutting with our fully equipped mobile workshop"
        backgroundImage="/images/jw/keys-set-on-blue-background-door-lock-keys-and-safes-for-property-security-and-house-protection.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 }}}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                Professional Mobile Key Cutting
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                JW Security offers a comprehensive mobile key cutting service throughout South London and Surrey. Our fully equipped vans carry professional key cutting equipment, allowing us to cut keys at your location for ultimate convenience.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Whether you need spare keys for your home, business, or are locked out and need immediate assistance, our mobile service saves you time and hassle. We carry a wide range of key blanks and can cut most keys on the spot.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                For enhanced security, we also offer registered key systems where keys can only be duplicated with proper authorization. This gives you complete control over who has access to your property.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/locksmith-in-workshop-makes-new-key-use-grinding-engraving-machine.jpg"
                alt="Key cutting machine in action"
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
              Our Key Cutting Services
            </SectionTitle>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <ServiceCard>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 2 }}>
                      <IconBox>
                        {service.icon}
                      </IconBox>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: alpha('#000', 0.7), textAlign: 'center' }}>
                      {service.description}
                    </Typography>
                  </ServiceCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8, backgroundColor: alpha(JW_BLUE, 0.03), p: 5, borderRadius: '15px' }}>
            <SectionTitle variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
              Registered Key System
            </SectionTitle>
            <Typography paragraph sx={{ textAlign: 'center', mb: 4, fontSize: '1.05rem', maxWidth: '800px', mx: 'auto' }}>
              Our unique registered key system provides the highest level of key control for your property. 
              Perfect for businesses, landlords, and security-conscious homeowners.
            </Typography>
            <Grid container spacing={3}>
              {registeredKeyFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FeatureBox>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <Box sx={{ color: JW_CYAN, mb: 2 }}>
                        {React.cloneElement(feature.icon, { sx: { fontSize: 40 } })}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1, fontSize: '1.1rem' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: alpha('#000', 0.7), fontSize: '0.9rem' }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </FeatureBox>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h5">
                Types of Keys We Cut
              </SectionTitle>
              <Grid container spacing={1} sx={{ mt: 2 }}>
                {keyTypes.map((keyType, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: '35px' }}>
                        <CheckCircleOutlineIcon sx={{ color: JW_CYAN, fontSize: '1.2rem' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={keyType} 
                        primaryTypographyProps={{ fontSize: '0.95rem' }}
                      />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h5">
                Why Choose Our Mobile Service
              </SectionTitle>
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon sx={{ color: JW_CYAN }} />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Paper sx={{ p: 4, backgroundColor: alpha(JW_CYAN, 0.05), borderRadius: '10px' }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
                Service Areas
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', mb: 3 }}>
                Our mobile key cutting service covers all areas of South London and Surrey
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                {['Wandsworth', 'Putney', 'Wimbledon', 'Richmond', 'Kingston', 'Croydon', 
                  'Sutton', 'Epsom', 'Clapham', 'Battersea', 'Tooting', 'Balham'].map((area) => (
                  <Chip 
                    key={area} 
                    label={area} 
                    sx={{ 
                      backgroundColor: 'white',
                      color: JW_BLUE,
                      border: `1px solid ${alpha(JW_BLUE, 0.2)}`
                    }} 
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      <ContactSection 
        title="Need Keys Cut Today?"
        subtitle="Contact us for fast, professional mobile key cutting service. We come to you with all the equipment needed to cut your keys on-site."
      />
      <Footer />
    </>
  );
};

export default KeyCuttingPage;