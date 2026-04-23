
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  const services = [
    {
      title: 'Retrato Profesional',
      image: 'https://images.unsplash.com/photo-1544212408-c711b7c19b92',
      description: 'Destaca tu perfil profesional con retratos de alta calidad. Utilizamos iluminación de estudio avanzada y dirección experta para capturar tu autenticidad y proyectar confianza en el mundo corporativo y artístico.',
      photoPrice: 'Desde $1,200 MXN',
      videoPrice: 'Desde $2,500 MXN',
      reverse: false,
      isFeatured: false
    },
    {
      title: 'Cobertura de Eventos',
      image: 'https://images.unsplash.com/photo-1470781125250-124de17ebdea',
      description: 'Documentamos de manera discreta y elegante cada momento de tu evento. Desde conferencias corporativas hasta celebraciones privadas, aseguramos que la esencia y emoción queden inmortalizadas para siempre.',
      photoPrice: 'Desde $3,500 MXN',
      videoPrice: 'Desde $5,000 MXN',
      reverse: true,
      isFeatured: false
    },
    {
      title: 'Trabajo Comercial',
      image: 'https://images.unsplash.com/photo-1557798747-712ace5f33e1',
      description: 'Imágenes potentes que venden. Creamos fotografías y videos de producto meticulosamente elaborados para e-commerce, catálogos y campañas publicitarias. Resaltamos texturas y detalles que marcan la diferencia.',
      photoPrice: 'Desde $2,800 MXN',
      videoPrice: 'Desde $4,500 MXN',
      reverse: false,
      isFeatured: false
    },
    {
      title: 'Contenido Social',
      image: 'https://images.unsplash.com/photo-1647964186073-51a605191343',
      description: 'Contenido vibrante y dinámico diseñado específicamente para dominar las redes sociales. Formatos verticales, reels impactantes y fotografías que detienen el scroll para potenciar tu marca personal o negocio.',
      photoPrice: 'Desde $2,000 MXN',
      videoPrice: 'Desde $3,500 MXN',
      reverse: true,
      isFeatured: true // Featured section
    },
    {
      title: 'Recuperación de Video',
      image: 'https://images.unsplash.com/photo-1574717024757-c1ec4d86ae82',
      description: 'El tiempo degrada las cintas, pero nosotros rescatamos tus memorias. Digitalizamos formatos análogos (VHS, miniDV, 8mm) a resoluciones modernas (MP4) con limpieza de imagen y estabilización técnica.',
      photoPrice: null,
      videoPrice: 'Desde $350 MXN / cinta',
      reverse: false,
      isFeatured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - JMdigitall</title>
        <meta name="description" content="Descubre nuestros servicios de fotografía, video corporativo, contenido social y recuperación de video." />
      </Helmet>

      <Header />

      <main className="pt-24 bg-background min-h-screen">
        {/* Page Intro Header */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="luxury-container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Nuestra Experiencia
              </span>
              <h1 className="font-serif mb-6 text-foreground">Soluciones Audiovisuales</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Cada proyecto es único. Diseñamos nuestras producciones para adaptarse a tu visión, utilizando equipo de vanguardia y una perspectiva cinematográfica.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
