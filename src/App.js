import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import QuotePage from './components/QuotePage';
import ResidentialPage from './components/ResidentialPage';
import CommercialPage from './components/CommercialPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import BlogPage from './components/BlogPage';
import HowToChooseSecureDoorLock from './components/blog/HowToChooseSecureDoorLock';
import LocksmithServicesPage from './components/LocksmithServicesPage';
import FireProtectionPage from './components/FireProtectionPage';
import SecuritySystemsPage from './components/SecuritySystemsPage';
import EmergencyServicesPage from './components/EmergencyServicesPage';
import CarpentrySolutionsPage from './components/CarpentrySolutionsPage';
// Import location pages
import KensingtonPage from './components/locations/KensingtonPage';
import ChelseaPage from './components/locations/ChelseaPage';
import MayfairPage from './components/locations/MayfairPage';
// Import additional service pages
import EmergencyDoorOpeningPage from './components/services/EmergencyDoorOpeningPage';
import BurglaryRepairsPage from './components/services/BurglaryRepairsPage';
import SecuritySurveysPage from './components/services/SecuritySurveysPage';
import LocksAndSafesPage from './components/services/LocksAndSafesPage';
import ShuttersGatesGrillesPage from './components/services/ShuttersGatesGrillesPage';
import UPVCDoorsWindowsPage from './components/services/UPVCDoorLocksPage';
import KeyCuttingPage from './components/services/KeyCuttingPage';
import ElectronicKeyPadsPage from './components/services/ElectronicKeyPadsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Create a theme instance with the website's color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#223555', // Deep blue from the site
    },
    secondary: {
      main: '#00c6d7', // Brand blue accent
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h4: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1.2rem',
    },
    h6: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 500,
    },
    button: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
    },
  },
});

function App() {
  // Add scrolling animation effects
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/residential" element={<ResidentialPage />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/how-to-choose-secure-door-lock" element={<HowToChooseSecureDoorLock />} />
            <Route path="/services/locksmith" element={<LocksmithServicesPage />} />
            <Route path="/services/fire-protection" element={<FireProtectionPage />} />
            <Route path="/services/security" element={<SecuritySystemsPage />} />
            <Route path="/services/emergency" element={<EmergencyServicesPage />} />
            <Route path="/services/carpentry" element={<CarpentrySolutionsPage />} />
            {/* Additional service pages */}
            <Route path="/services/emergency-door-opening" element={<EmergencyDoorOpeningPage />} />
            <Route path="/services/burglary-repairs" element={<BurglaryRepairsPage />} />
            <Route path="/services/security-surveys" element={<SecuritySurveysPage />} />
            <Route path="/services/locks-and-safes" element={<LocksAndSafesPage />} />
            <Route path="/services/shutters-gates-grilles" element={<ShuttersGatesGrillesPage />} />
            <Route path="/services/upvc-doors-windows" element={<UPVCDoorsWindowsPage />} />
            <Route path="/services/upvc-door-locks" element={<UPVCDoorsWindowsPage />} />
            <Route path="/services/key-cutting" element={<KeyCuttingPage />} />
            <Route path="/services/electronic-key-pads" element={<ElectronicKeyPadsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Location pages */}
            <Route path="/locations/kensington" element={<KensingtonPage />} />
            <Route path="/locations/chelsea" element={<ChelseaPage />} />
            <Route path="/locations/mayfair" element={<MayfairPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
