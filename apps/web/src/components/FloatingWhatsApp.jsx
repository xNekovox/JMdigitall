
import React from 'react';
import { motion } from 'framer-motion';

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/525513538825"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full border border-emerald-400/40 bg-[#25D366] text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5b] group"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="w-7 h-7 fill-current"
      >
        <path d="M19.11 17.23c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22s.96 2.58 1.09 2.76c.13.18 1.88 2.87 4.55 4.03.64.28 1.15.45 1.54.58.65.21 1.24.18 1.7.11.52-.08 1.58-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31Z" />
        <path d="M27.12 4.88A15.87 15.87 0 0 0 16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.58 2.15 8L0 32l8.22-2.11A15.93 15.93 0 0 0 16 32c8.84 0 16-7.16 16-16 0-4.27-1.66-8.29-4.88-11.12ZM16 29.3c-2.43 0-4.82-.65-6.91-1.89l-.5-.3-4.88 1.25 1.3-4.76-.33-.52A13.24 13.24 0 0 1 2.7 16C2.7 8.67 8.67 2.7 16 2.7c3.56 0 6.91 1.39 9.43 3.91A13.24 13.24 0 0 1 29.3 16c0 7.33-5.97 13.3-13.3 13.3Z" />
      </svg>
      <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        ¿En qué podemos ayudarte?
      </span>
    </motion.a>
  );
}

export default FloatingWhatsApp;
