import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import PageHero from './common/PageHero';
import ContactSection from './common/ContactSection';
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Color constants from the JW Security brand
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
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: alpha(JW_BLUE, 0.08),
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
    borderColor: JW_CYAN,
    '& .service-icon': {
      transform: 'scale(1.1)',
      backgroundColor: JW_CYAN,
      color: 'white',
    },
    '& .learn-more-text': {
      color: JW_CYAN,
    },
    '& .arrow-icon': {
      transform: 'translateX(4px)',
    }
  },
}));

const ServiceIconBox = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: alpha(JW_CYAN, 0.1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
}));

const CategorySection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  '&:last-child': {
    marginBottom: 0,
  }
}));

const ServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const allServices = [
    // Core Services
    {
      title: 'Fire Protection',
      description: 'Comprehensive fire safety solutions including fire door inspections, maintenance, installation, alarm systems, emergency lighting, and extinguisher services.',
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 30 }} />,
      link: '/services/fire-protection',
      category: 'core',
      featured: true
    },
    {
      title: 'Locksmith Services',
      description: 'Professional locksmith solutions with 24/7 emergency access, master key systems, and high-security locks for homes and businesses.',
      icon: <LockIcon sx={{ fontSize: 30 }} />,
      link: '/services/locksmith',
      category: 'core',
      featured: true
    },
    {
      title: 'Security Systems',
      description: 'Modern CCTV, alarm systems, and access control solutions professionally installed to protect your property.',
      icon: <SecurityIcon sx={{ fontSize: 30 }} />,
      link: '/services/security',
      category: 'core',
      featured: true
    },
    {
      title: 'Carpentry Solutions',
      description: 'Expert carpentry and joinery services including door installation, window repairs, kitchen fitting, and bespoke furniture.',
      icon: <BuildIcon sx={{ fontSize: 30 }} />,
      link: '/services/carpentry',
      category: 'core',
      featured: true
    },
    // Emergency Services
    {
      title: 'Emergency Door Opening',
      description: 'Fast, reliable emergency locksmith services available 24/7. We\'ll get you back inside with minimal damage to your property.',
      link: '/services/emergency-door-opening',
      category: 'emergency'
    },
    {
      title: 'Burglary Repairs',
      description: 'Immediate response to secure your property after a break-in. We repair damaged doors, frames, windows, and locks.',
      link: '/services/burglary-repairs',
      category: 'emergency'
    },
    // Security Services
    {
      title: 'Security Surveys',
      description: 'Professional security assessments to identify vulnerabilities and provide recommendations for enhanced protection.',
      link: '/services/security-surveys',
      category: 'security'
    },
    {
      title: 'Locks & Safes',
      description: 'Supply and installation of high-quality locks and safes from trusted brands to secure your valuables.',
      link: '/services/locks-and-safes',
      category: 'security'
    },
    {
      title: 'Shutters, Gates & Grilles',
      description: 'Custom-designed security shutters, gates, and grilles for enhanced property protection.',
      link: '/services/shutters-gates-grilles',
      category: 'security'
    },
    // Specialist Services
    {
      title: 'UPVC Doors & Windows',
      description: 'Specialist repair and replacement of UPVC door locks and window mechanisms including Schuco for balcony doors.',
      link: '/services/upvc-doors-windows',
      category: 'specialist'
    },
    {
      title: 'Electronic Key Pads',
      description: 'Modern keyless entry systems for convenient and secure access control in residential and commercial properties.',
      link: '/services/electronic-key-pads',
      category: 'specialist'
    },
    {
      title: 'Key Cutting Service',
      description: 'Professional key cutting and duplication services for all types of keys including specialized and security keys.',
      link: '/services/key-cutting',
      category: 'specialist'
    }
  ];

  const serviceCategories = [
    {
      id: 'core',
      title: 'Core Services',
      description: 'Our primary security and safety solutions'
    },
    {
      id: 'emergency',
      title: 'Emergency Services',
      description: '24/7 rapid response when you need us most'
    },
    {
      id: 'security',
      title: 'Security Solutions',
      description: 'Advanced security systems and assessments'
    },
    {
      id: 'specialist',
      title: 'Specialist Services',
      description: 'Specialized security and access solutions'
    }
  ];

  return (
    <>
      <Header />
      <PageHero 
        title="Our Services"
        subtitle="Comprehensive security solutions for residential and commercial properties across London"
        backgroundImage="/images/jw/locksmith-maintenance.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <SectionTitle variant="h4" sx={{ mb: 3, '&::after': { left: '50%', transform: 'translateX(-50%)' } }}>
              Complete Security & Safety Solutions
            </SectionTitle>
            <Typography sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.7 }}>
              With over 30 years of experience, JW Security provides professional locksmith, fire protection, security systems, and carpentry services throughout London. All our work is fully guaranteed and carried out by certified professionals.
            </Typography>
          </Box>

          {serviceCategories.map((category) => {
            const categoryServices = allServices.filter(service => service.category === category.id);
            
            return (
              <CategorySection key={category.id}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
                    {category.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {category.description}
                  </Typography>
                </Box>
                
                <Grid container spacing={3}>
                  {categoryServices.map((service, index) => (
                    <Grid item xs={12} sm={6} md={category.id === 'core' ? 3 : 4} key={index}>
                      <ServiceCard>
                        {service.icon && (
                          <CardContent sx={{ pb: 0 }}>
                            <ServiceIconBox className="service-icon">
                              {service.icon}
                            </ServiceIconBox>
                          </CardContent>
                        )}
                        <CardContent sx={{ flexGrow: 1, pt: service.icon ? 0 : 3 }}>
                          <Typography variant="h6" component="h3" sx={{ 
                            fontWeight: 600, 
                            mb: 2,
                            color: JW_BLUE,
                            fontSize: '1.2rem'
                          }}>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            mb: 3,
                            color: 'text.secondary',
                            lineHeight: 1.6,
                            minHeight: { xs: 'auto', md: '72px' }
                          }}>
                            {service.description}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Typography 
                              component={Link}
                              to={service.link}
                              className="learn-more-text"
                              sx={{ 
                                color: JW_BLUE,
                                textDecoration: 'none',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                  color: JW_CYAN
                                }
                              }}
                            >
                              Learn More
                            </Typography>
                            <ArrowForwardIcon 
                              className="arrow-icon"
                              sx={{ 
                                fontSize: 18, 
                                color: JW_BLUE,
                                transition: 'transform 0.3s ease'
                              }} 
                            />
                          </Box>
                        </CardContent>
                      </ServiceCard>
                    </Grid>
                  ))}
                </Grid>
              </CategorySection>
            );
          })}

          {/* Emergency Call Section */}
          <Box sx={{ 
            mt: 8, 
            p: 4, 
            backgroundColor: alpha(JW_CYAN, 0.05),
            borderRadius: '12px',
            border: `1px solid ${alpha(JW_CYAN, 0.2)}`,
            textAlign: 'center'
          }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
              Need Emergency Assistance?
            </Typography>
            <Typography sx={{ mb: 3, color: 'text.secondary' }}>
              Available 24/7 for emergency locksmith and security services
            </Typography>
            <Button
              variant="contained"
              size="large"
              component="a"
              href="tel:02086467931"
              sx={{
                backgroundColor: JW_CYAN,
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: JW_BLUE
                }
              }}
            >
              Call Now: 0208 646 7931
            </Button>
          </Box>
        </Container>
      </Box>

      <ContactSection 
        title="Ready to Secure Your Property?"
        subtitle="Contact us today for a free consultation and quotation"
      />
      <Footer />
    </>
  );
};

export default ServicesPage;