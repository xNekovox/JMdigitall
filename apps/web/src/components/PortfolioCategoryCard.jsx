
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function PortfolioCategoryCard({ category, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onClick={onClick}
      className="hover-zoom-container col-span-1 row-span-1 min-h-[300px] rounded-2xl border border-border/50 shadow-lg cursor-pointer group"
    >
      <img
        src={category.thumbnail}
        alt={`Galería de ${category.title}`}
        className="hover-zoom-image"
        loading="lazy"
      />
      <div className="image-overlay-dark" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 flex items-end justify-between">
        <div>
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-2 block opacity-80 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {category.items.length} Proyectos
          </span>
          <h3 className="font-serif text-2xl text-white m-0">
            {category.title}
          </h3>
        </div>
        
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioCategoryCard;
