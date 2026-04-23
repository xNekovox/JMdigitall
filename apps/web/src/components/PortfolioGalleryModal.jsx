
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer.jsx';

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
        <div className="flex-1 px-4 md:px-8 pb-24 max-w-7xl mx-auto w-full pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {category.items.map((itemUrl, idx) => (
              <motion.div
                key={`${category.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="aspect-[4/5] md:aspect-square hover-zoom-container rounded-xl cursor-pointer bg-card border border-border shadow-md"
                onClick={() => setSelectedItem(itemUrl)}
              >
                {category.isVideo ? (
                  <VideoPlayer src={itemUrl} />
                ) : (
                  <>
                    <img 
                      src={itemUrl} 
                      alt={`${category.title} ${idx + 1}`} 
                      className="hover-zoom-image"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent flex justify-center gap-6 pointer-events-none z-40">
          <button
            onClick={onPrev}
            className="pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-md border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide hidden md:inline">Anterior</span>
          </button>
          <button
            onClick={onNext}
            className="pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-md border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-lg"
          >
            <span className="text-sm font-medium uppercase tracking-wide hidden md:inline">Siguiente</span>
            <ChevronRight className="w-5 h-5" />
          </button>
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
                {category.isVideo ? (
                  <VideoPlayer src={selectedItem} autoPlay />
                ) : (
                  <img 
                    src={selectedItem} 
                    alt="Vista expandida" 
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
