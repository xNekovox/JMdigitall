
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageHeaderDivider from '@/components/PageHeaderDivider.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Acerca de - JMdigitall</title>
        <meta name="description" content="Conoce más sobre JMdigitall, nuestra historia y pasión por la producción audiovisual." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-24 bg-background min-h-screen">
        <PageHeaderDivider />
        <section className="editorial-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="luxury-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex max-w-4xl flex-col items-center text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Nuestra Historia</h1>
              <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-12">
                En JMdigitall somos expertos en el ámbito de los eventos sociales, con más de 30 años de experiencia capturando momentos que merecen perdurar. Nos distingue el profesionalismo, la sensibilidad para contar cada historia y el compromiso de entregar un trabajo impecable en bodas, XV años, bautizos y celebraciones especiales. Combinamos técnica, experiencia y trato cercano para que cada proyecto refleje emoción, calidad y confianza.
              </p>
              <div className="cinematic-image w-full rounded-2xl overflow-hidden border border-border shadow-2xl aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32" 
                  alt="Equipo de cámara profesional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
