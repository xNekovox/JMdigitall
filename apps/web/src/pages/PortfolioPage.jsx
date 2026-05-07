import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCategoryCard from '@/components/PortfolioCategoryCard.jsx';
import PortfolioGalleryModal from '@/components/PortfolioGalleryModal.jsx';
import PageHeaderDivider from '@/components/PageHeaderDivider.jsx';
import { portfolioCategories } from '@/lib/portfolioAssets.js';

function PortfolioPage() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleNext = () => {
    setSelectedCategoryIndex((prev) => (prev === portfolioCategories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedCategoryIndex((prev) => (prev === 0 ? portfolioCategories.length - 1 : prev - 1));
  };

  const selectedCategory = selectedCategoryIndex !== null ? portfolioCategories[selectedCategoryIndex] : null;

  return (
    <>
      <Helmet>
        <title>Portafolio - JMdigitall</title>
        <meta name="description" content="Explora nuestro portafolio de fotografía y video profesional, con galerías creadas para cada módulo de trabajo." />
      </Helmet>

      <Header />

      <main className="pt-24 bg-background min-h-screen">
        <PageHeaderDivider />
        <section className="editorial-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="luxury-container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="font-serif mb-6 text-foreground">Portafolio</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Cada galería fue replanteada con material original local. Aquí verás fotografía generada para cada módulo, clips VHS simulados y la nueva comparación de restauración fotográfica.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-32">
          <div className="luxury-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
              {portfolioCategories.map((category, index) => (
                <PortfolioCategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                  onClick={() => setSelectedCategoryIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <PortfolioGalleryModal
        isOpen={selectedCategoryIndex !== null}
        category={selectedCategory}
        onClose={() => setSelectedCategoryIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <Footer />
    </>
  );
}

export default PortfolioPage;
