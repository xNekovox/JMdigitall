
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Inicio - JMdigitall</title>
        <meta name="description" content="JMdigitall: Excelencia en producción audiovisual y fotografía profesional. Capturando la esencia de cada momento con calidad cinematográfica." />
      </Helmet>

      <Header />

      <main className="bg-background min-h-screen">
        <div className="flex flex-col md:flex-row min-h-screen">
          
          {/* Left Side - Sticky Content */}
          <div className="w-full md:w-1/2 md:sticky md:top-0 h-auto md:h-screen flex items-center justify-center p-8 md:p-16 lg:p-24 pt-32 md:pt-0 z-10 bg-background">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="font-serif text-foreground mb-6 leading-tight">
                Elevando tu <span className="text-primary italic">visión</span> a través del lente.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 font-light leading-relaxed">
                En JMdigitall, transformamos ideas en narrativas visuales impactantes. Especialistas en fotografía profesional, producción de video y recuperación de formatos análogos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                    Solicita tu cotización
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 group">
                    Explorar servicios
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Scrolling Images */}
          <div className="w-full md:w-1/2 flex flex-col bg-card">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="h-[70vh] md:h-screen relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1632789413875-695790ba93ce"
                alt="Estudio de fotografía profesional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-serif text-2xl text-white mb-2">Producción Comercial</h3>
                <p className="text-white/80 text-sm">Calidad de estudio para tu marca</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="h-[70vh] md:h-screen relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1505544743595-b74a9766c9f6"
                alt="Retrato fotográfico profesional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-serif text-2xl text-white mb-2">Retrato Profesional</h3>
                <p className="text-white/80 text-sm">Capturando la esencia auténtica</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="h-[70vh] md:h-screen relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1686245189976-cb9f1cc79891"
                alt="Producción de video cinematográfico"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="font-serif text-2xl text-white mb-2">Cinematografía</h3>
                <p className="text-white/80 text-sm">Narrativas visuales en movimiento</p>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
