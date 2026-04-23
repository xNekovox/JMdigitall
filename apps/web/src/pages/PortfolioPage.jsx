
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCategoryCard from '@/components/PortfolioCategoryCard.jsx';
import PortfolioGalleryModal from '@/components/PortfolioGalleryModal.jsx';
import PageHeaderDivider from '@/components/PageHeaderDivider.jsx';

// Data strictly constructed based on the prompt's provided images
const portfolioData = [
  {
    id: 'conexion-autentica',
    title: 'Conexión Auténtica',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1561652183-4c74556c6c99',
    items: [
      'https://images.unsplash.com/photo-1561652183-4c74556c6c99',
      'https://images.unsplash.com/photo-1607032095529-a36c1e009e0f',
      'https://images.unsplash.com/photo-1683768087032-435983e3061f',
      'https://images.unsplash.com/photo-1698648972226-52ca08d487a2',
      'https://images.unsplash.com/photo-1659037717152-d134c2d8a0eb',
      'https://images.unsplash.com/photo-1643699750022-ce19a1cf79cf',
      'https://images.unsplash.com/photo-1693129551108-c1e0ab10f10e',
      'https://images.unsplash.com/photo-1676321942534-94e11b146a24',
      'https://images.unsplash.com/photo-1554831724-dbfa5f3e1f67'
    ]
  },
  {
    id: 'bodas',
    title: 'Bodas',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1691611737031-45cca28b183e',
    items: [
      'https://images.unsplash.com/photo-1691611737031-45cca28b183e',
      'https://images.unsplash.com/photo-1654948225465-7bb3bb526a37',
      'https://images.unsplash.com/photo-1697953059052-37083c25a3bc',
      'https://images.unsplash.com/photo-1612724094849-9ae3324cf216',
      'https://images.unsplash.com/photo-1698530947835-ce72bdbe0977',
      'https://images.unsplash.com/photo-1567485392045-dbdd51ed7321',
      'https://images.unsplash.com/photo-1683238095203-30cd94c01575',
      'https://images.unsplash.com/photo-1614725077723-139ccd57f7f8',
      'https://images.unsplash.com/photo-1601760271585-f90920867abe'
    ]
  },
  {
    id: 'xv-anos',
    title: 'XV Años',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1639542484685-b2c62315945f',
    items: [
      'https://images.unsplash.com/photo-1639542484685-b2c62315945f',
      'https://images.unsplash.com/photo-1702342457205-0fc57f22d647',
      'https://images.unsplash.com/photo-1692459297334-c2c26a5f28af',
      'https://images.unsplash.com/photo-1700811594131-dd5897ecc385',
      'https://images.unsplash.com/photo-1687462045844-934df0cda8c4',
      'https://images.unsplash.com/photo-1683027667987-e12a688e44f0',
      'https://images.unsplash.com/photo-1702342456762-c4243dde0234',
      'https://images.unsplash.com/photo-1700811594290-07ebde5d04e0',
      'https://images.unsplash.com/photo-1659077188208-f860a81553ca'
    ]
  },
  {
    id: 'bautizos',
    title: 'Bautizos',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1681936481601-b0299c9f740b',
    items: [
      'https://images.unsplash.com/photo-1681936481601-b0299c9f740b',
      'https://images.unsplash.com/photo-1681936488857-2054f68fa8a4',
      'https://images.unsplash.com/photo-1681936480327-50c4bbd5784b',
      'https://images.unsplash.com/photo-1682951036905-eab50825b977',
      'https://images.unsplash.com/photo-1681936488860-2ff770872d4f',
      'https://images.unsplash.com/photo-1681936481013-3b1e2863ee8f',
      'https://images.unsplash.com/photo-1691037817024-a59b9813dbf5',
      'https://images.unsplash.com/photo-1566516171511-1c411a59c8ba',
      'https://images.unsplash.com/photo-1685882595766-1b0640fa5ccf'
    ]
  },
  {
    id: 'presentaciones',
    title: 'Presentaciones',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1470781125250-124de17ebdea',
    items: [
      'https://images.unsplash.com/photo-1470781125250-124de17ebdea',
      'https://images.unsplash.com/photo-1587824923807-3c2dbdf7f6d1',
      'https://images.unsplash.com/photo-1570772680233-8370070cad9d',
      'https://images.unsplash.com/photo-1700902894527-c1ef530d814c',
      'https://images.unsplash.com/photo-1700936656167-5dc37a6f1e20',
      'https://images.unsplash.com/photo-1605064470755-4c70d72fa87d',
      'https://images.unsplash.com/photo-1509726993422-dff6352bbe9e',
      'https://images.unsplash.com/photo-1549045345-058277380fc3',
      'https://images.unsplash.com/photo-1682617367472-e2f2597fe750'
    ]
  },
  {
    id: 'retrato-profesional',
    title: 'Retrato Profesional',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1544212408-c711b7c19b92',
    items: [
      'https://images.unsplash.com/photo-1544212408-c711b7c19b92',
      'https://images.unsplash.com/photo-1586732711591-12c04655338f',
      'https://images.unsplash.com/photo-1580128637491-c71348998fd7',
      'https://images.unsplash.com/photo-1585066039196-e30d097340be',
      'https://images.unsplash.com/photo-1690562568374-ad1612f1318e',
      'https://images.unsplash.com/photo-1575383596664-30f4489f9786',
      'https://images.unsplash.com/photo-1536785533700-934dd2b2b6fc',
      'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      'https://images.unsplash.com/photo-1493882552576-fce827c6161e'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1647964186073-51a605191343',
    items: [
      'https://images.unsplash.com/photo-1647964186073-51a605191343',
      'https://images.unsplash.com/photo-1652947700748-ab25276b9624',
      'https://images.unsplash.com/photo-1594665953835-e42598ed2ae6',
      'https://images.unsplash.com/photo-1647866276881-62c3caa1a9fc',
      'https://images.unsplash.com/photo-1648803336451-d882ce46e68c',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
      'https://images.unsplash.com/flagged/photo-1581390476309-53d67f8a918a',
      'https://images.unsplash.com/photo-1683170139203-d8a41d680358',
      'https://images.unsplash.com/photo-1585043245597-b08ca46ee184'
    ]
  },
  {
    id: 'photobooks',
    title: 'Photobooks',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1677658288237-2fff291a34f0?auto=format&fit=crop&w=1200&q=80',
    items: [
      'https://images.unsplash.com/photo-1677658288237-2fff291a34f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677658288115-28905b06b520?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677658287194-2208467d7280?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528569937393-ee892b976859?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1647541707168-82f7024cbc20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677658288237-2fff291a34f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677658288115-28905b06b520?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677658287194-2208467d7280?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528569937393-ee892b976859?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'foto-estudio',
    title: 'Foto estudio',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    items: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      'https://images.unsplash.com/photo-1464863979621-258859e62245',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
    ]
  },
  {
    id: 'producto',
    title: 'Producto',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1557798747-712ace5f33e1',
    items: [
      'https://images.unsplash.com/photo-1557798747-712ace5f33e1',
      'https://images.unsplash.com/photo-1700952633119-fb79919833f6',
      'https://images.unsplash.com/photo-1632065509860-4fbcfc89ed7c',
      'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      'https://images.unsplash.com/flagged/photo-1575390130987-1963e3889769',
      'https://images.unsplash.com/photo-1627006116697-7e113c20dcbd',
      'https://images.unsplash.com/photo-1598932324015-91232f2bca84',
      'https://images.unsplash.com/photo-1654170311172-4a8ad4caf69c',
      'https://images.unsplash.com/photo-1525969276162-34955f79600a'
    ]
  },
  {
    id: 'corporativo',
    title: 'Corporativo',
    isVideo: false,
    thumbnail: 'https://images.unsplash.com/photo-1493882552576-fce827c6161e',
    items: [
      'https://images.unsplash.com/photo-1493882552576-fce827c6161e',
      'https://images.unsplash.com/photo-1544212408-c711b7c19b92',
      'https://images.unsplash.com/photo-1586732711591-12c04655338f',
      'https://images.unsplash.com/photo-1550981386-254b2d7dc235',
      'https://images.unsplash.com/photo-1692525084492-1b66e54a65f3',
      'https://images.unsplash.com/photo-1700952633119-fb79919833f6',
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2',
      'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      'https://images.unsplash.com/photo-1682617367472-e2f2597fe750'
    ]
  },
  {
    id: 'recuperacion-video',
    title: 'Recuperación de Video',
    isVideo: true,
    thumbnail: 'https://images.unsplash.com/photo-1574717024757-c1ec4d86ae82',
    items: [
      'https://images.unsplash.com/photo-1574717024757-c1ec4d86ae82',
      'https://images.unsplash.com/photo-1692728676745-b48faf6dd68d',
      'https://images.unsplash.com/photo-1619097647550-0fe7f031c18b',
      'https://images.unsplash.com/photo-1700349959856-b7450ef067ee',
      'https://images.unsplash.com/photo-1696389500310-cd6d247cb609',
      'https://images.unsplash.com/photo-1682506457554-b34c9682e985',
      // Padding array to 9 items for consistency in grid
      'https://images.unsplash.com/photo-1574717024757-c1ec4d86ae82',
      'https://images.unsplash.com/photo-1692728676745-b48faf6dd68d',
      'https://images.unsplash.com/photo-1619097647550-0fe7f031c18b'
    ]
  }
];

function PortfolioPage() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleNext = () => {
    setSelectedCategoryIndex((prev) => (prev === portfolioData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedCategoryIndex((prev) => (prev === 0 ? portfolioData.length - 1 : prev - 1));
  };

  const selectedCategory = selectedCategoryIndex !== null ? portfolioData[selectedCategoryIndex] : null;

  return (
    <>
      <Helmet>
        <title>Portafolio - JMdigitall</title>
        <meta name="description" content="Explora nuestro portafolio de fotografía y video profesional organizado por categorías." />
      </Helmet>

      <Header />

      <main className="pt-24 bg-background min-h-screen">
        <PageHeaderDivider />
        {/* Header Section */}
        <section className="editorial-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="luxury-container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif mb-6 text-foreground">Portafolio</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Nuestro trabajo habla por sí mismo. Descubre cómo capturamos la esencia de cada momento en diferentes disciplinas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="pb-32">
          <div className="luxury-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
              {portfolioData.map((category, index) => (
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
