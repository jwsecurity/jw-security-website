import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider, Paper } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import PageHero from '../common/PageHero';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContactSection from '../common/ContactSection';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import HandymanIcon from '@mui/icons-material/Handyman';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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

const ProblemSolutionCard = styled(Paper)(({ theme, isProblem }) => ({
  padding: theme.spacing(3),
  backgroundColor: isProblem ? alpha('#f44336', 0.05) : alpha('#4caf50', 0.05),
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: isProblem ? '#f44336' : '#4caf50',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
  }
}));

const UPVCDoorsWindowsPage = () => {
  const services = [
    {
      title: "UPVC Door Lock Repair",
      description: "We diagnose and fix issues with jammed, misaligned, or damaged UPVC door locks to restore proper functionality.",
      icon: <BuildIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "Window Lock & Handle Repair",
      description: "Expert repair of UPVC window locks, handles, and espagnolette mechanisms for secure and smooth operation.",
      icon: <SecurityIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "Lock Replacement & Upgrades",
      description: "We replace worn or outdated door and window locks with high-security alternatives that meet modern standards.",
      icon: <HandymanIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "Emergency Services",
      description: "Fast response for lock failures and lockouts, gaining access with minimal damage to your doors or windows.",
      icon: <ErrorOutlineIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    }
  ];

  const commonProblems = [
    {
      problem: "Door lock sticking or jamming",
      solution: "Professional lubrication and mechanism adjustment to ensure smooth operation"
    },
    {
      problem: "Window handle not engaging or turning freely",
      solution: "Repair or replacement of window gearbox and espagnolette mechanism"
    },
    {
      problem: "Handle lifting required to engage door locks",
      solution: "Realignment of the multi-point locking system and adjustment of the gearbox"
    },
    {
      problem: "Window not closing properly or staying shut",
      solution: "Adjustment of window hinges and realignment with frame for proper seal"
    },
    {
      problem: "Key difficult to turn or stuck in lock",
      solution: "Lock cylinder cleaning, lubrication, or replacement if worn or damaged"
    },
    {
      problem: "Door or window dropping and misaligning",
      solution: "Hinge adjustment and alignment to properly engage with the frame and keep locks aligned"
    }
  ];

  const benefits = [
    "Expertise with all major UPVC door and window brands",
    "Non-destructive repair techniques where possible",
    "Emergency service for lockouts and failures",
    "Upgrade options for enhanced security",
    "All work fully guaranteed",
    "Insurance-approved locks available",
    "Fast response time to minimize inconvenience",
    "Comprehensive service for both doors and windows"
  ];

  return (
    <>
      <Header />
      <PageHero 
        title="UPVC Doors & Windows"
        subtitle="Specialist repair and replacement services for UPVC door locks and window mechanisms"
        backgroundImage="/images/jw/a-japanese-male-worker-checks-the-locks-on-a-house.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 }}}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                UPVC Doors & Windows Specialists
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                JW Security specializes in the comprehensive repair, maintenance, and replacement of UPVC door locks and window mechanisms for residential and commercial properties. Our experienced technicians are familiar with all major brands, providing expert solutions for all UPVC security issues.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                UPVC doors and windows feature complex locking systems that require specialized knowledge to service effectively. From multi-point door locks to window espagnolette mechanisms, whether you're experiencing difficulties with your existing hardware or looking to upgrade your security, our team delivers professional, reliable service.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                We pride ourselves on using non-destructive techniques wherever possible, ensuring your doors and windows remain undamaged during repairs or replacements. Our goal is to restore full functionality and security with minimal disruption to your property.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/carpenter-installing-door-lock-in-the-new-house-with-a-screwdriver.jpg"
                alt="UPVC door lock installation"
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
              Our UPVC Doors & Windows Services
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

          <Box sx={{ my: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Common UPVC Door & Window Problems & Solutions
            </SectionTitle>
            {commonProblems.map((item, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <ProblemSolutionCard isProblem={true}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#d32f2f', mb: 1 }}>
                    Problem: {item.problem}
                  </Typography>
                </ProblemSolutionCard>
                <ProblemSolutionCard isProblem={false}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#2e7d32', mb: 1 }}>
                    Solution: {item.solution}
                  </Typography>
                </ProblemSolutionCard>
              </Box>
            ))}
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/door-technician.jpg"
                alt="Professional door technician working on UPVC door"
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
                Why Choose Our UPVC Services
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

          <Box sx={{ mt: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              UPVC Brands We Service
            </SectionTitle>
            <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Our technicians are experienced with all major UPVC door and window brands and mechanisms, including balcony doors. We work with:
            </Typography>
            <Grid container spacing={2}>
              {[
                'Yale', 'ERA', 'Mila', 'Avocet', 'Fullex', 'GU', 'KFV', 
                'Lockmaster', 'Maco', 'Millenco', 'Roto', 'Safeware', 
                'Schuco', 'Siegenia', 'Sobinco', 'Winkhaus'
              ].map((brand, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Box sx={{ 
                    p: 2, 
                    textAlign: 'center', 
                    border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: alpha(JW_CYAN, 0.05),
                      transform: 'translateY(-3px)',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    }
                  }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {brand}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography sx={{ mt: 3, fontStyle: 'italic', color: alpha('#000', 0.6) }}>
              * This is not an exhaustive list. If you don't see your lock brand listed, please contact us - we likely still service it.
            </Typography>
          </Box>
        </Container>
      </Box>

      <ContactSection 
        title="Having UPVC Door or Window Problems?"
        subtitle="Contact our specialists for fast diagnosis and repair. We provide emergency services and free quotations for all UPVC door and window lock issues."
      />
      <Footer />
    </>
  );
};

export default UPVCDoorsWindowsPage;