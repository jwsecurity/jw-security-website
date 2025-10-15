import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import PageHero from '../common/PageHero';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContactSection from '../common/ContactSection';
import LockIcon from '@mui/icons-material/Lock';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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

const ProductCard = styled(Card)(({ theme }) => ({
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

const FeatureBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(JW_BLUE, 0.03),
  borderRadius: '8px',
  border: `1px solid ${alpha(JW_BLUE, 0.1)}`,
  marginBottom: theme.spacing(2),
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: alpha(JW_BLUE, 0.05),
  }
}));

const FAQItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${alpha('#000', 0.1)}`,
  '&:last-child': {
    marginBottom: 0,
    paddingBottom: 0,
    borderBottom: 'none',
  }
}));

const ElectronicKeyPadsPage = () => {
  const keypads = [
    {
      title: "Digital Code Keypads",
      description: "Simple electronic keypads with numeric codes for access, ideal for basic security needs without requiring keys.",
      icon: <LockIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
      applications: [
        "Internal doors in offices",
        "Store rooms and supply closets",
        "Residential side entrances",
        "Basic access control requirements"
      ]
    },
    {
      title: "Advanced Smart Keypads",
      description: "Sophisticated access systems with multiple code options, temporary codes, audit trails, and remote management capabilities.",
      icon: <BusinessIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
      applications: [
        "Main business entrances",
        "Secure areas requiring audit logs",
        "Multi-user environments",
        "Properties requiring remote management"
      ]
    },
    {
      title: "Biometric Entry Systems",
      description: "High-security access control using fingerprint, facial recognition, or other biometric identifiers along with keypad functionality.",
      icon: <HomeIcon sx={{ fontSize: 30, color: JW_CYAN }} />,
      applications: [
        "High-security areas",
        "Executive offices",
        "Valuable item storage",
        "Sensitive data rooms"
      ]
    }
  ];

  const features = [
    "Keyless entry - no more lost keys or lockouts",
    "Multiple user codes for family members, staff, or temporary visitors",
    "Audit trail capabilities to track access",
    "Temporary code creation for one-time or limited-time access",
    "Battery operation with low battery warnings",
    "Mechanical key override for emergency access",
    "Weather-resistant options for external installation",
    "Integration with alarm and smart home systems"
  ];

  const faqs = [
    {
      question: "Are electronic keypads secure?",
      answer: "Yes, modern electronic keypads offer excellent security when properly installed and configured. They eliminate risks associated with lost or stolen keys and many models include anti-tamper features and lockout functions after multiple incorrect code entries. Advanced models also offer audit trails to monitor access attempts."
    },
    {
      question: "What happens if the batteries die?",
      answer: "Most electronic keypads include low battery warnings well before power failure. Additionally, quality models feature emergency override options such as external battery contacts or mechanical key backup systems to ensure you're never locked out due to power loss."
    },
    {
      question: "Can electronic keypads be installed on any door?",
      answer: "Electronic keypads can be installed on most standard doors, including wooden, UPVC, composite, and aluminum doors. During our assessment, we'll confirm compatibility with your specific door type and recommend the most suitable model. Some specialty doors may require custom mounting solutions."
    },
    {
      question: "Can I change the access codes myself?",
      answer: "Yes, all electronic keypads we install allow simple user programming to change access codes. We provide full training during installation and leave behind user manuals with clear instructions. More advanced systems may offer app-based management for even easier code changes."
    }
  ];

  return (
    <>
      <Header />
      <PageHero 
        title="Electronic Key Pads"
        subtitle="Modern keyless entry solutions for convenient and enhanced access control"
        backgroundImage="/images/jw/home-ip-video-surveillance-concept.jpg"
        minHeight="45vh"
        centerContent={true}
      />

      <Box sx={{ py: { xs: 5, md: 8 }}}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h4">
                Advanced Keyless Entry Solutions
              </SectionTitle>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                JW Security supplies and installs a wide range of electronic keypad systems to provide convenient, secure access control for both residential and commercial properties. Our keyless entry solutions eliminate the need for traditional keys, offering enhanced security and flexibility.
              </Typography>
              <Typography paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Electronic keypads provide numerous advantages over conventional locks, including the ability to create unique access codes for different users, temporary codes for visitors, and detailed access logs. They're ideal for properties that require controlled access for multiple individuals or temporary staff.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                Our expert technicians will assess your specific requirements and recommend the most suitable electronic keypad system for your needs. We handle everything from consultation and product selection to professional installation and user training, ensuring your new access system functions perfectly.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/jw/cctv-camera-on-white-ceiling.jpg"
                alt="Modern electronic security system"
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
              Our Electronic Keypad Solutions
            </SectionTitle>
            <Grid container spacing={4}>
              {keypads.map((keypad, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ProductCard>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 2 }}>
                      <IconBox>
                        {keypad.icon}
                      </IconBox>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 2 }}>
                        {keypad.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: alpha('#000', 0.7), mb: 3, textAlign: 'center' }}>
                      {keypad.description}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
                      Ideal Applications:
                    </Typography>
                    <List dense>
                      {keypad.applications.map((app, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleOutlineIcon sx={{ color: JW_CYAN, fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={app} primaryTypographyProps={{ fontSize: '0.95rem' }} />
                        </ListItem>
                      ))}
                    </List>
                  </ProductCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Key Features & Benefits
            </SectionTitle>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <FeatureBox>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleOutlineIcon sx={{ color: JW_CYAN, mr: 1.5, flexShrink: 0 }} />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {feature}
                      </Typography>
                    </Box>
                  </FeatureBox>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Our Electronic Keypad Process
            </SectionTitle>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box 
                  component="img"
                  src="/images/jw/locksmith-in-workshop-makes-new-key-use-grinding-engraving-machine-1.jpg"
                  alt="Locksmith workshop professional"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
                  1. Consultation & Assessment
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We discuss your requirements, assess your property, and recommend suitable electronic keypad options.
                </Typography>
                
                <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
                  2. Product Selection
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We help you select the most appropriate electronic keypad system based on your security needs, budget, and property specifications.
                </Typography>
                
                <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
                  3. Professional Installation
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Our skilled technicians install your new electronic keypad system, ensuring proper function and integration with existing door hardware.
                </Typography>
                
                <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE, mb: 1 }}>
                  4. System Programming & Training
                </Typography>
                <Typography variant="body1">
                  We program your new system with initial access codes and provide comprehensive training on its operation and management.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <SectionTitle variant="h4" sx={{ mb: 4 }}>
              Frequently Asked Questions
            </SectionTitle>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <HelpOutlineIcon sx={{ color: JW_CYAN, mr: 1.5, mt: 0.5, flexShrink: 0 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: JW_BLUE }}>
                    {faq.question}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ ml: 5, color: alpha('#000', 0.7) }}>
                  {faq.answer}
                </Typography>
              </FAQItem>
            ))}
          </Box>
        </Container>
      </Box>

      <ContactSection 
        title="Upgrade Your Access Control"
        subtitle="Contact us to discuss electronic keypad solutions for your property. Our experts will guide you through the options and provide a free, no-obligation quote."
      />
      <Footer />
    </>
  );
};

export default ElectronicKeyPadsPage;