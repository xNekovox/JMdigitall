
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/525513538825"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-card border border-primary/30 shadow-lg shadow-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        ¿En qué podemos ayudarte?
      </span>
    </motion.a>
  );
}

export default FloatingWhatsApp;
