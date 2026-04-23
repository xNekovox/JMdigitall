
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-6">
              <span className="flex h-16 items-center rounded-2xl border border-border/60 bg-background/70 px-3 shadow-sm backdrop-blur-sm">
                <img 
                  src="/images/Logo.png" 
                  alt="JMdigitall Logo" 
                  className="h-12 w-auto object-contain drop-shadow-[0_6px_18px_rgba(15,23,42,0.12)]"
                />
              </span>
              <span className="font-serif text-2xl font-semibold text-primary">JMdigitall</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Excelencia en producción audiovisual y fotografía profesional. Capturando la esencia de cada momento con calidad cinematográfica.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-primary">Contacto</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <a href="mailto:contacto@jmdigitall.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                contacto@jmdigitall.com
              </a>
              <a href="tel:+525513538825" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                55 1353 8825
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Roberto Esquerra 1, Palmatitla<br/>Gustavo A. Madero, 07170<br/>Ciudad de México, CDMX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-primary">Enlaces Rápidos</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
              <Link to="/portafolio" className="hover:text-primary transition-colors">Portafolio</Link>
              <Link to="/acerca-de" className="hover:text-primary transition-colors">Acerca de</Link>
              <Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-primary">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} JMdigitall. Todos los derechos reservados.</p>
          <div className="flex gap-6 md:pr-24 lg:pr-28">
            <Link to="/politica-privacidad" className="hover:text-primary transition-colors duration-200">
              Política de Privacidad
            </Link>
            <Link to="/terminos-de-servicio" className="hover:text-primary transition-colors duration-200">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
