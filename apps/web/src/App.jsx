
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from '@/components/FloatingWhatsApp.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portafolio" element={<PortfolioPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/acerca-de" element={<AboutPage />} />
        <Route path="/terminos-de-servicio" element={<TermsOfServicePage />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
            <h1 className="font-serif text-6xl text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
            <a href="/" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
              Volver al inicio
            </a>
          </div>
        } />
      </Routes>
      <FloatingWhatsApp />
      <Toaster />
    </Router>
  );
}

export default App;
