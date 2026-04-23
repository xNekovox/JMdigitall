
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Camera, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function ServiceCard({ title, image, description, photoPrice, videoPrice, reverse, isFeatured }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={ref} 
      className={`py-24 md:py-32 border-b border-border/50 relative overflow-hidden ${
        isFeatured ? 'bg-card/50' : 'bg-background'
      }`}
    >
      {isFeatured && (
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      )}
      
      <div className="luxury-container">
        <div className={`flex flex-col gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
          
          {/* Image Side with Parallax */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl h-[50vh] md:h-[70vh] relative border border-border shadow-2xl">
            <motion.div style={{ y }} className="absolute inset-[-15%] w-[130%] h-[130%]">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {isFeatured && (
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-xs rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                  Servicio Estrella
                </span>
              </div>
            )}
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`font-serif text-4xl md:text-5xl mb-6 ${isFeatured ? 'text-primary' : 'text-foreground'}`}>
                {title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-light">
                {description}
              </p>

              {/* Dual Pricing Cards */}
              {(photoPrice || videoPrice) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {photoPrice && (
                    <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full transform translate-x-8 -translate-y-8 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
                      <Camera className="w-6 h-6 text-primary mb-4" />
                      <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Fotografía</h4>
                      <p className="text-2xl font-serif text-foreground">{photoPrice}</p>
                    </div>
                  )}
                  {videoPrice && (
                    <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full transform translate-x-8 -translate-y-8 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
                      <Film className="w-6 h-6 text-primary mb-4" />
                      <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Videografía</h4>
                      <p className="text-2xl font-serif text-foreground">{videoPrice}</p>
                    </div>
                  )}
                </div>
              )}

              <Link to="/contacto">
                <Button size="lg" className={`px-8 py-6 text-base font-medium group transition-all duration-300 ${
                  isFeatured 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                    : 'bg-card hover:bg-white/5 border border-border text-foreground hover:border-primary'
                }`}>
                  Más información
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
