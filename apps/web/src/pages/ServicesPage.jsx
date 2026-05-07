
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import PageHeaderDivider from '@/components/PageHeaderDivider.jsx';
import { serviceCards } from '@/lib/portfolioAssets.js';

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Servicios - JMdigitall</title>
        <meta name="description" content="Descubre nuestros servicios de fotografía, video, contenido social, recuperación de video y restauración de foto." />
      </Helmet>

      <Header />

      <main className="pt-24 bg-background min-h-screen">
        <PageHeaderDivider />
        {/* Page Intro Header */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="luxury-container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif mb-6 text-foreground">Soluciones Audiovisuales</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Cada proyecto es único. Diseñamos nuestras producciones para adaptarse a tu visión, con material original, enfoque editorial y una estética consistente en todo el catálogo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <div className="flex flex-col">
          {serviceCards.map((service, index) => (
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
