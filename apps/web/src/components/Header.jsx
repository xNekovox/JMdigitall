
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Acerca de', path: '/acerca-de' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="luxury-container py-2.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="flex h-12 items-center overflow-hidden rounded-2xl border border-border/60 bg-card/70 px-1.5 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:border-primary/20 group-hover:shadow-md sm:h-14">
              <img 
                src="/images/Logo.png" 
                alt="JMdigitall Logo" 
                className="h-[calc(100%-0.25rem)] w-auto object-contain drop-shadow-[0_6px_18px_rgba(15,23,42,0.12)] transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
              JMdigitall
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium tracking-wide transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-4">
                <Link to="/terminos-de-servicio" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground hover:text-primary">Términos de Servicio</Link>
                <Link to="/politica-privacidad" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground hover:text-primary">Política de Privacidad</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
