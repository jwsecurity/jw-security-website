import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import PageHero from '../common/PageHero';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContactSection from '../common/ContactSection';

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

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.12)',
  },
}));

const EmergencyDoorOpeningPage = () => {
  const features = [
    {
      title: "Fast Response Time",
      description: "Our technicians are strategically located to provide quick emergency response throughout South London and Surrey."
    },
    {
      title: "Non-Destructive Entry",
      description: "We use specialized tools and techniques to open doors with minimal or no damage to your property."
    },
    {
      title: "24/7 Availability",
      description: "Our emergency door opening service is available around the clock, including weekends and holidays."
    },
    {
      title: "Fully Equipped Technicians",
      description: "Our locksmiths arrive with all necessary tools and components to resolve most lock emergencies on the first visit."
    }
  ];

  const benefits = [
    "Quick response to minimize inconvenience",
    "Expertly trained locksmiths for damage-free entry",
    "Full security assessment during service",
    "Replacement locks can be fitted immediately if required",
    "All types of doors and locks handled",
    "Competitive pricing with transparent quotes"
  ];

  return (
    <>
      <Header />
      <PageHero 
        title="Emergency Door Opening"
        subtitle="Fast, professional assistance when you're locked out of your home or business"
        backgroundImage="/images/jw/locksmith-in-installing-new-house-door-lock-hand-holds-the-screwdriver.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 }}}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                Professional Emergency Door Opening Services
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Being locked out of your home or business can be stressful and disruptive. At JW Security, we provide fast, reliable emergency door opening services with a focus on non-destructive entry techniques to minimize damage to your property.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our experienced locksmiths are equipped with specialized tools and extensive training to handle all types of lock emergencies. We can gain entry to virtually any locked door, including UPVC doors, wooden doors, and composite doors with various locking mechanisms.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                We understand that lockouts can happen at any time, which is why our emergency door opening service is available 24 hours a day, 7 days a week. Simply call our emergency number, and we'll dispatch the nearest available locksmith to your location.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/a-locksmith-is-repairing-an-interior-door-lock-close-up-of-male-hands-repairing-or-replacing-an.jpg"
                alt="Emergency door opening service"
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
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Why Choose Our Emergency Door Opening Service
            </SectionTitle>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <FeatureCard>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: alpha('#000', 0.7) }}>
                      {feature.description}
                    </Typography>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h5">
                Benefits of Our Service
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
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h5">
                What to Do When You're Locked Out
              </SectionTitle>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                If you find yourself locked out of your property, follow these steps:
              </Typography>
              <List sx={{ pl: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
                  <Typography sx={{ fontSize: '1.05rem' }}>
                    Call our emergency number immediately: <strong>0208 646 7931</strong>
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
                  <Typography sx={{ fontSize: '1.05rem' }}>
                    Provide your exact location and details about the lock
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
                  <Typography sx={{ fontSize: '1.05rem' }}>
                    Our dispatcher will give you an estimated arrival time
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
                  <Typography sx={{ fontSize: '1.05rem' }}>
                    Wait in a safe place nearby until our locksmith arrives
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
                  <Typography sx={{ fontSize: '1.05rem' }}>
                    Be prepared to show identification proving your residence or ownership
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ContactSection />
      <Footer />
    </>
  );
};

export default EmergencyDoorOpeningPage;