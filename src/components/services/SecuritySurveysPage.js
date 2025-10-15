import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import PageHero from '../common/PageHero';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContactSection from '../common/ContactSection';
import SecurityIcon from '@mui/icons-material/Security';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import AssessmentIcon from '@mui/icons-material/Assessment';

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

const SurveyTypeCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3.5),
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
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

const SurveyProcessCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '8px',
  border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
  marginBottom: theme.spacing(2),
  backgroundColor: alpha(JW_CYAN, 0.03),
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: alpha(JW_CYAN, 0.07),
  }
}));

const SecuritySurveysPage = () => {
  const surveyTypes = [
    {
      title: "Residential Security Surveys",
      description: "Comprehensive assessments of home security vulnerabilities with tailored recommendations for families and homeowners.",
      icon: <HomeIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "Commercial Security Surveys",
      description: "Detailed evaluation of business premises to identify security risks and compliance issues, with custom solutions.",
      icon: <BusinessIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    },
    {
      title: "Post-Incident Security Assessments",
      description: "Specialized surveys after break-ins or security breaches to identify weaknesses and prevent future incidents.",
      icon: <AssessmentIcon sx={{ fontSize: 30, color: JW_CYAN }} />
    }
  ];

  const surveyProcess = [
    {
      step: "Initial Consultation",
      description: "We discuss your security concerns, requirements, and budget to understand your needs."
    },
    {
      step: "On-Site Assessment",
      description: "Our security expert conducts a thorough examination of your property, identifying vulnerabilities and security gaps."
    },
    {
      step: "Detailed Report",
      description: "You receive a comprehensive security assessment with clear recommendations and prioritized actions."
    },
    {
      step: "Solution Implementation",
      description: "Optional implementation of recommended security measures by our experienced technicians."
    },
    {
      step: "Follow-Up Verification",
      description: "Post-implementation check to ensure all security measures are functioning correctly."
    }
  ];

  const surveyBenefits = [
    "Identification of security vulnerabilities before they can be exploited",
    "Professional recommendations based on industry best practices",
    "Prioritized security improvements to match your budget",
    "Compliance with insurance requirements",
    "Peace of mind knowing your security has been professionally assessed",
    "Documentation of security measures for insurance purposes"
  ];

  return (
    <>
      <Header />
      <PageHero 
        title="Full Security Surveys"
        subtitle="Comprehensive property assessments to identify vulnerabilities and enhance your security"
        backgroundImage="/images/jw/maintenance-concept-focused-serious-young-locksmith-with-tattoo-on-hand-wearing-blue-uniform.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 }}}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                Professional Security Survey Services
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                At JW Security, we offer comprehensive security surveys to help identify vulnerabilities in your property's defenses. Our professional assessments provide you with actionable insights and recommendations to enhance your security setup.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Whether you're concerned about the security of your home, business premises, or have recently experienced a security breach, our thorough surveys can highlight areas for improvement and help protect what matters most to you.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                Each security survey is conducted by our experienced specialists who bring years of expertise in identifying vulnerabilities that others might miss. We take a comprehensive approach, examining physical security, access points, existing systems, and procedural aspects to provide you with a complete security picture.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/security-camera.jpg"
                alt="Security survey assessment"
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
              Our Security Survey Services
            </SectionTitle>
            <Grid container spacing={4}>
              {surveyTypes.map((type, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <SurveyTypeCard>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 2 }}>
                      <IconBox>
                        {type.icon}
                      </IconBox>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
                        {type.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: alpha('#000', 0.7), textAlign: 'center' }}>
                      {type.description}
                    </Typography>
                  </SurveyTypeCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Our Security Survey Process
            </SectionTitle>
            {surveyProcess.map((step, index) => (
              <SurveyProcessCard key={index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box 
                    sx={{ 
                      width: 30, 
                      height: 30, 
                      borderRadius: '50%', 
                      bgcolor: JW_BLUE, 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      mr: 2,
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 0.5 }}>
                      {step.step}
                    </Typography>
                    <Typography variant="body1" sx={{ color: alpha('#000', 0.7) }}>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </SurveyProcessCard>
            ))}
          </Box>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h5">
                Benefits of Our Security Surveys
              </SectionTitle>
              <List>
                {surveyBenefits.map((benefit, index) => (
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
                When to Consider a Security Survey
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                A professional security survey is particularly valuable in these situations:
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography paragraph sx={{ fontSize: '1.05rem', mb: 2 }}>
                  • When moving into a new home or business premises
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.05rem', mb: 2 }}>
                  • After a security breach or burglary attempt
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.05rem', mb: 2 }}>
                  • If you're storing valuable items or sensitive information
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.05rem', mb: 2 }}>
                  • When renovating or expanding your property
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.05rem', mb: 2 }}>
                  • If you're concerned about increases in local crime
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.05rem', mb: 2 }}>
                  • For insurance requirement compliance
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ContactSection />
      <Footer />
    </>
  );
};

export default SecuritySurveysPage;