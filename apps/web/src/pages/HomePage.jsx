
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageHeaderDivider from '@/components/PageHeaderDivider.jsx';

const homePortfolioHighlights = [
  {
    title: 'Conexión Auténtica',
    description: 'Momentos íntimos y espontáneos con una mirada emocional.',
    image: 'https://images.unsplash.com/photo-1641849460748-7081ab1a4cef?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Bodas',
    description: 'Coberturas elegantes para historias que merecen recordarse siempre.',
    image: 'https://images.unsplash.com/photo-1654948225465-7bb3bb526a37'
  },
  {
    title: 'XV Años',
    description: 'Celebraciones inolvidables capturadas con estilo y sensibilidad.',
    image: 'https://images.unsplash.com/photo-1702342457205-0fc57f22d647'
  },
  {
    title: 'Bautizos',
    description: 'Recuerdos familiares llenos de detalle, calidez y tradición.',
    image: 'https://images.unsplash.com/photo-1681936488857-2054f68fa8a4'
  },
  {
    title: 'Presentaciones',
    description: 'Cobertura visual para escenario, presencia y energía en vivo.',
    image: 'https://images.unsplash.com/photo-1587824923807-3c2dbdf7f6d1'
  },
  {
    title: 'Retrato Profesional',
    description: 'Imagen personal cuidada para proyectar confianza y carácter.',
    image: 'https://images.unsplash.com/photo-1586732711591-12c04655338f'
  },
  {
    title: 'Social Media',
    description: 'Contenido visual pensado para destacar en plataformas digitales.',
    image: 'https://images.unsplash.com/photo-1652947700748-ab25276b9624'
  },
  {
    title: 'Photobooks',
    description: 'Álbumes impresos tipo scrapbook para conservar recuerdos con diseño.',
    image: 'https://images.unsplash.com/photo-1677658288115-28905b06b520?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Foto estudio',
    description: 'Producciones en estudio con control total de luz, pose y atmósfera.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4'
  },
  {
    title: 'Producto',
    description: 'Fotografía comercial que resalta materiales, forma y deseo de compra.',
    image: 'https://images.unsplash.com/photo-1700952633119-fb79919833f6'
  },
  {
    title: 'Corporativo',
    description: 'Imagen empresarial para marcas, equipos y comunicación profesional.',
    image: 'https://images.unsplash.com/photo-1544212408-c711b7c19b92'
  },
  {
    title: 'Recuperación de Video',
    description: 'Rescate y digitalización de memorias en formatos análogos.',
    image: 'https://images.unsplash.com/photo-1692728676745-b48faf6dd68d'
  }
];

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
                Cada evento cuenta una<span className="text-primary italic"> historia.</span>
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
            {homePortfolioHighlights.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, delay: index * 0.03 }}
                className="h-[62vh] md:h-[72vh] relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
