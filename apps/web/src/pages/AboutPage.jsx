
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Acerca de - JMdigitall</title>
        <meta name="description" content="Conoce más sobre JMdigitall, nuestra historia y pasión por la producción audiovisual." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="luxury-container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Nuestra Historia</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              En JMdigitall, somos apasionados por la imagen y el sonido. Con años de experiencia en el sector audiovisual, nos dedicamos a capturar la esencia de cada momento, producto o marca, entregando resultados que superan las expectativas.
            </p>
            <div className="cinematic-image rounded-2xl overflow-hidden border border-border shadow-2xl aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32" 
                alt="Equipo de cámara profesional" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
