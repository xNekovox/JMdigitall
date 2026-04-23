
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageHeaderDivider from '@/components/PageHeaderDivider.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Inicio - JMdigitall</title>
        <meta name="description" content="JMdigitall: Excelencia en producción audiovisual y fotografía profesional. Capturando la esencia de cada momento con calidad cinematográfica." />
      </Helmet>

      <Header />

      <main className="bg-background min-h-screen">
        <PageHeaderDivider />
        <div className="flex flex-col md:flex-row min-h-screen">
          
          {/* Left Side - Sticky Content */}
          <div className="w-full md:w-1/2 md:sticky md:top-0 h-auto md:h-screen flex items-center justify-center p-8 md:p-16 lg:p-24 pt-36 md:pt-24 lg:pt-28 z-10 bg-background">
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
                  <Button
                    size="lg"
                    className="group relative w-full overflow-hidden rounded-full border border-primary/20 bg-gradient-to-r from-primary via-blue-500 to-cyan-400 px-8 py-6 text-base font-semibold text-primary-foreground shadow-[0_14px_35px_rgba(37,99,235,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(37,99,235,0.4)]"
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.28)_50%,transparent_85%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative flex items-center gap-3">
                      <span>Solicita tu cotización</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </span>
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative w-full overflow-hidden rounded-full border border-foreground/10 bg-foreground/[0.03] px-8 py-6 text-base font-semibold text-foreground shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-amber-950 hover:shadow-[0_16px_38px_rgba(217,119,6,0.18)]"
                  >
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative flex items-center gap-3">
                      <span>Explorar servicios</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/20 bg-white/80 text-amber-700 transition-all duration-300 group-hover:translate-x-1 group-hover:border-amber-500/30 group-hover:bg-amber-500 group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
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
                <h3 className="font-serif text-2xl text-white mb-2">Video social</h3>
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
