
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import PhotoComparisonSlider from '@/components/PhotoComparisonSlider.jsx';
import VhsClip from '@/components/VhsClip.jsx';

function PortfolioGalleryModal({ isOpen, category, onClose, onNext, onPrev }) {
  const [selectedItem, setSelectedItem] = useState(null); // For fullscreen single item view within modal

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSelectedItem(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (selectedItem) setSelectedItem(null);
        else onClose();
      }
      if (e.key === 'ArrowRight' && !selectedItem) onNext();
      if (e.key === 'ArrowLeft' && !selectedItem) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedItem, onClose, onNext, onPrev]);

  if (!isOpen || !category) return null;

  const renderItem = (item, compact = false) => {
    if (item.kind === 'comparison') {
      return (
        <PhotoComparisonSlider
          beforeSrc={item.before}
          afterSrc={item.after}
          beforeLabel="Antes"
          afterLabel="Después"
          className={compact ? 'h-full' : ''}
        />
      );
    }

    if (item.kind === 'vhs') {
      return (
        <VhsClip
          title={item.title}
          subtitle={item.subtitle}
          src={item.src}
          poster={item.poster}
          compact={compact}
        />
      );
    }

    return (
      <img
        src={item.src}
        alt={item.alt}
        className="h-full w-full object-cover"
        draggable="false"
      />
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col overflow-y-auto"
      >
        {/* Header Controls */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-background to-transparent pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-4">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            >
              <LayoutGrid className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide uppercase hidden md:inline">Volver</span>
            </button>
          </div>
          
          <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 text-center">
            <h2 className="font-serif text-xl md:text-2xl text-white">{category.title}</h2>
            <p className="text-primary text-xs uppercase tracking-widest mt-1">Colección</p>
          </div>

          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 px-4 md:px-8 pb-16 max-w-7xl mx-auto w-full pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {category.items.map((itemUrl, idx) => (
              <motion.div
                key={`${category.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="hover-zoom-container rounded-xl cursor-pointer bg-card border border-border shadow-md overflow-hidden"
                onClick={() => setSelectedItem(itemUrl)}
              >
                <div className={`w-full ${itemUrl.kind === 'comparison' ? 'aspect-[4/5] md:aspect-square' : 'aspect-[4/5] md:aspect-square'}`}>
                  {renderItem(itemUrl)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-border/60 pt-8 md:flex-row md:justify-center md:gap-6">
            <button
              onClick={onPrev}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-md border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Anterior</span>
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-md border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-lg"
            >
              <span className="text-sm font-medium uppercase tracking-wide">Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Fullscreen Single Item View */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black flex items-center justify-center p-4 md:p-12"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
                {selectedItem.kind === 'comparison' ? (
                  <div className="w-full max-w-6xl">
                    <PhotoComparisonSlider
                      beforeSrc={selectedItem.before}
                      afterSrc={selectedItem.after}
                      beforeLabel="Antes"
                      afterLabel="Después"
                    />
                  </div>
                ) : selectedItem.kind === 'vhs' ? (
                  <div className="w-full max-w-5xl">
                    <VhsClip
                      title={selectedItem.title}
                      subtitle={selectedItem.subtitle}
                      src={selectedItem.src}
                      poster={selectedItem.poster}
                    />
                  </div>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

export default PortfolioGalleryModal;
