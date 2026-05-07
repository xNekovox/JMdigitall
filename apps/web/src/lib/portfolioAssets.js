const SVG_NS = 'http://www.w3.org/2000/svg';

function encodeSvg(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function seeded(value) {
  const n = Math.sin(value * 999.71) * 10000;
  return n - Math.floor(n);
}

function makeBokeh(seed, accent, accent2) {
  const circles = [];
  const total = 7;

  for (let index = 0; index < total; index += 1) {
    const r = 34 + Math.round(seeded(seed + index * 11) * 88);
    const cx = 80 + Math.round(seeded(seed + index * 17 + 2) * 1120);
    const cy = 70 + Math.round(seeded(seed + index * 19 + 5) * 760);
    const opacity = 0.16 + seeded(seed + index * 13 + 9) * 0.22;
    const fill = index % 2 === 0 ? accent : accent2;
    circles.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity.toFixed(2)}" filter="url(#blur)" />`);
  }

  return circles.join('');
}

function weddingMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <ellipse cx="-128" cy="42" rx="86" ry="120" fill="none" stroke="${palette.accent}" stroke-width="18" opacity="0.9" />
      <ellipse cx="60" cy="-12" rx="122" ry="156" fill="none" stroke="${palette.accent2}" stroke-width="18" opacity="0.95" />
      <path d="M-250 146 C-150 92,-84 84,0 130 C82 172,150 164,250 118" fill="none" stroke="${palette.light}" stroke-width="20" stroke-linecap="round" opacity="0.85" />
      <path d="M-28 -152 C-100 -36,-106 66,-44 186 C2 276,88 292,148 240" fill="none" stroke="${palette.soft}" stroke-width="24" stroke-linecap="round" opacity="0.55" />
      <circle cx="-174" cy="-126" r="24" fill="${palette.light}" opacity="0.75" />
      <circle cx="170" cy="-116" r="20" fill="${palette.light}" opacity="0.65" />
      <g transform="translate(-8 -20)">
        <path d="M-72 24 C-48 -74, 50 -86, 84 4 C104 56, 76 144, 2 186 C-74 146,-102 82,-72 24Z" fill="${palette.muted}" opacity="0.9" />
        <path d="M-22 -20 L24 -20 L82 122 L8 162 L-56 122 Z" fill="${palette.accent}" opacity="0.9" />
        <path d="M-12 -20 L54 -58 L104 -32 L50 2 Z" fill="${palette.accent2}" opacity="0.9" />
      </g>
    </g>
  `;
}

function quinceMotif(palette) {
  return `
    <g transform="translate(600 435)">
      <path d="M-170 176 C-168 52,-114 -56,4 -110 C120 -56,174 58,174 176 C76 200,-76 200,-170 176Z" fill="${palette.muted}" opacity="0.92" />
      <path d="M-112 178 C-102 108,-90 14,-24 -20 C18 6, 56 48, 74 106 C94 158,74 204,0 206 C-70 206,-104 204,-112 178Z" fill="${palette.accent}" opacity="0.95" />
      <path d="M-24 -126 C10 -166,66 -166,98 -126" fill="none" stroke="${palette.light}" stroke-width="20" stroke-linecap="round" />
      <path d="M-6 -136 C24 -178,76 -178,108 -136" fill="none" stroke="${palette.accent2}" stroke-width="14" stroke-linecap="round" />
      <circle cx="2" cy="10" r="20" fill="${palette.light}" opacity="0.65" />
      <circle cx="-160" cy="-94" r="24" fill="${palette.light}" opacity="0.35" />
      <circle cx="154" cy="-112" r="18" fill="${palette.light}" opacity="0.32" />
    </g>
  `;
}

function baptismMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <circle cx="0" cy="0" r="150" fill="none" stroke="${palette.light}" stroke-width="16" opacity="0.72" />
      <path d="M-28 -178 C-52 -122,-32 -78,0 -54 C32 -78,52 -122,28 -178 Z" fill="${palette.accent}" opacity="0.92" />
      <path d="M-30 -22 C-12 -66,12 -66,30 -22 C42 16,34 82,0 118 C-34 82,-42 16,-30 -22Z" fill="${palette.muted}" opacity="0.94" />
      <path d="M-92 98 C-44 134,44 134,92 98" fill="none" stroke="${palette.accent2}" stroke-width="16" stroke-linecap="round" />
      <circle cx="-148" cy="-22" r="18" fill="${palette.light}" opacity="0.28" />
      <circle cx="150" cy="-10" r="24" fill="${palette.light}" opacity="0.25" />
    </g>
  `;
}

function childrenPartyMotif(palette) {
  return `
    <g transform="translate(600 440)">
      <rect x="-108" y="54" width="216" height="144" rx="28" fill="${palette.muted}" opacity="0.96" />
      <rect x="-76" y="-10" width="152" height="86" rx="22" fill="${palette.accent}" opacity="0.98" />
      <rect x="-102" y="128" width="204" height="24" rx="12" fill="${palette.accent2}" opacity="0.95" />
      <circle cx="-150" cy="-122" r="36" fill="${palette.light}" opacity="0.85" />
      <circle cx="142" cy="-128" r="30" fill="${palette.light}" opacity="0.75" />
      <circle cx="-184" cy="-54" r="22" fill="${palette.light}" opacity="0.7" />
      <path d="M-150 154 C-82 112,-26 102,0 116 C32 100,82 104,150 154" fill="none" stroke="${palette.soft}" stroke-width="18" stroke-linecap="round" opacity="0.9" />
      <path d="M-16 -126 C-28 -162,6 -174,20 -136" fill="none" stroke="${palette.light}" stroke-width="14" stroke-linecap="round" />
    </g>
  `;
}

function portraitMotif(palette) {
  return `
    <g transform="translate(600 425)">
      <circle cx="0" cy="0" r="172" fill="${palette.muted}" opacity="0.96" />
      <circle cx="0" cy="0" r="108" fill="none" stroke="${palette.light}" stroke-width="18" opacity="0.4" />
      <path d="M-44 -48 C-28 -88, 20 -88, 42 -44 C60 0, 44 54, 2 70 C-48 54,-60 2,-44 -48Z" fill="${palette.accent}" opacity="0.9" />
      <path d="M-118 146 C-86 78,-28 50,0 50 C28 50,86 78,118 146" fill="${palette.accent2}" opacity="0.82" />
      <rect x="-214" y="-150" width="74" height="280" rx="24" fill="${palette.light}" opacity="0.18" />
      <rect x="140" y="-126" width="88" height="238" rx="24" fill="${palette.light}" opacity="0.12" />
    </g>
  `;
}

function socialMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <rect x="-116" y="-190" width="232" height="380" rx="38" fill="${palette.muted}" opacity="0.96" />
      <rect x="-90" y="-150" width="180" height="270" rx="20" fill="${palette.soft}" opacity="0.92" />
      <circle cx="0" cy="136" r="18" fill="${palette.light}" opacity="0.72" />
      <circle cx="-208" cy="-38" r="44" fill="none" stroke="${palette.accent}" stroke-width="18" opacity="0.95" />
      <circle cx="208" cy="-8" r="58" fill="none" stroke="${palette.accent2}" stroke-width="18" opacity="0.9" />
      <rect x="-242" y="28" width="88" height="54" rx="18" fill="${palette.accent2}" opacity="0.9" />
      <rect x="154" y="94" width="108" height="64" rx="18" fill="${palette.accent}" opacity="0.9" />
      <path d="M-180 176 C-120 108,-46 86,0 118 C46 86,120 108,180 176" fill="none" stroke="${palette.light}" stroke-width="18" stroke-linecap="round" opacity="0.8" />
    </g>
  `;
}

function photobookMotif(palette) {
  return `
    <g transform="translate(600 440)">
      <path d="M-220 -90 C-128 -138, -48 -128, 0 -72 C48 -128, 128 -138, 220 -90 L220 154 C128 112, 48 118, 0 164 C-48 118,-128 112,-220 154 Z" fill="${palette.muted}" opacity="0.95" />
      <path d="M-6 -82 L-6 154" stroke="${palette.light}" stroke-width="12" opacity="0.8" />
      <rect x="-176" y="-34" width="134" height="88" rx="12" fill="${palette.accent}" opacity="0.9" />
      <rect x="42" y="-20" width="132" height="72" rx="12" fill="${palette.accent2}" opacity="0.9" />
      <rect x="-150" y="78" width="124" height="62" rx="12" fill="${palette.soft}" opacity="0.88" />
      <circle cx="-76" cy="22" r="20" fill="${palette.light}" opacity="0.5" />
      <circle cx="108" cy="20" r="18" fill="${palette.light}" opacity="0.42" />
    </g>
  `;
}

function productMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <ellipse cx="0" cy="168" rx="210" ry="34" fill="${palette.light}" opacity="0.14" />
      <rect x="-86" y="4" width="172" height="180" rx="36" fill="${palette.muted}" opacity="0.96" />
      <rect x="-44" y="-152" width="88" height="128" rx="24" fill="${palette.accent}" opacity="0.95" />
      <rect x="-22" y="-194" width="44" height="54" rx="18" fill="${palette.accent2}" opacity="0.96" />
      <circle cx="-182" cy="-108" r="36" fill="${palette.light}" opacity="0.2" />
      <circle cx="182" cy="-86" r="44" fill="${palette.light}" opacity="0.14" />
      <path d="M-136 86 C-74 28,-28 8,0 8 C28 8,74 28,136 86" fill="none" stroke="${palette.soft}" stroke-width="18" stroke-linecap="round" opacity="0.92" />
    </g>
  `;
}

function corporateMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <rect x="-210" y="-168" width="420" height="320" rx="30" fill="${palette.muted}" opacity="0.96" />
      <path d="M-172 -104 H172" stroke="${palette.light}" stroke-width="12" opacity="0.18" />
      <path d="M-172 -20 H172" stroke="${palette.light}" stroke-width="12" opacity="0.18" />
      <path d="M-172 64 H172" stroke="${palette.light}" stroke-width="12" opacity="0.18" />
      <path d="M-112 118 L-58 54 L12 86 L84 16 L148 44" fill="none" stroke="${palette.accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="-146" y="-92" width="92" height="208" rx="14" fill="${palette.accent2}" opacity="0.9" />
      <rect x="-16" y="-46" width="92" height="162" rx="14" fill="${palette.accent}" opacity="0.9" />
      <rect x="112" y="-2" width="56" height="118" rx="14" fill="${palette.soft}" opacity="0.92" />
    </g>
  `;
}

function vhsMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <rect x="-240" y="-148" width="480" height="296" rx="36" fill="${palette.muted}" opacity="0.98" />
      <rect x="-194" y="-96" width="388" height="182" rx="24" fill="${palette.soft}" opacity="0.92" />
      <circle cx="-126" cy="0" r="58" fill="none" stroke="${palette.accent}" stroke-width="22" />
      <circle cx="126" cy="0" r="58" fill="none" stroke="${palette.accent2}" stroke-width="22" />
      <rect x="-28" y="-54" width="56" height="108" rx="16" fill="${palette.light}" opacity="0.82" />
      <path d="M-152 -178 C-98 -128,-34 -108,0 -114 C42 -116,96 -144,152 -178" fill="none" stroke="${palette.light}" stroke-width="14" stroke-linecap="round" opacity="0.5" />
      <path d="M-164 124 C-80 154,80 154,164 124" fill="none" stroke="${palette.accent}" stroke-width="14" stroke-linecap="round" opacity="0.55" />
    </g>
  `;
}

function restorationBeforeMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <rect x="-216" y="-150" width="432" height="300" rx="24" fill="${palette.muted}" opacity="0.92" />
      <rect x="-172" y="-106" width="340" height="218" rx="18" fill="${palette.light}" opacity="0.08" />
      <path d="M-156 -80 L-92 -32 L-42 -82 L8 -26 L68 -64 L138 20 L170 -6" fill="none" stroke="${palette.light}" stroke-width="10" opacity="0.18" />
      <path d="M-120 136 C-82 66,-24 34,0 34 C24 34,82 66,120 136" fill="${palette.accent2}" opacity="0.22" />
      <path d="M-18 -26 C-2 -68,24 -68,40 -26 C52 4,44 52,12 72 C-20 52,-30 4,-18 -26Z" fill="${palette.soft}" opacity="0.35" />
      <path d="M-218 -146 L-150 -100" stroke="${palette.accent}" stroke-width="10" opacity="0.35" />
      <path d="M170 -136 L216 -86" stroke="${palette.accent2}" stroke-width="10" opacity="0.3" />
      <path d="M-220 18 H220" stroke="${palette.light}" stroke-width="8" stroke-dasharray="10 14" opacity="0.12" />
    </g>
  `;
}

function restorationAfterMotif(palette) {
  return `
    <g transform="translate(600 430)">
      <rect x="-220" y="-154" width="440" height="308" rx="24" fill="${palette.muted}" opacity="0.96" />
      <rect x="-176" y="-110" width="352" height="224" rx="18" fill="${palette.soft}" opacity="0.94" />
      <circle cx="0" cy="-28" r="76" fill="${palette.accent}" opacity="0.92" />
      <path d="M-68 96 C-32 38, 32 38, 68 96" fill="none" stroke="${palette.accent2}" stroke-width="22" stroke-linecap="round" />
      <circle cx="-124" cy="-90" r="18" fill="${palette.light}" opacity="0.7" />
      <circle cx="128" cy="-72" r="18" fill="${palette.light}" opacity="0.65" />
      <path d="M-180 -146 L-112 -108" stroke="${palette.light}" stroke-width="8" opacity="0.22" />
      <path d="M164 -126 L218 -80" stroke="${palette.light}" stroke-width="8" opacity="0.2" />
      <path d="M-150 128 C-90 92,-40 74,0 76 C40 74,90 92,150 128" fill="none" stroke="${palette.soft}" stroke-width="14" opacity="0.7" />
    </g>
  `;
}

const MOTIFS = {
  wedding: weddingMotif,
  quince: quinceMotif,
  baptism: baptismMotif,
  children: childrenPartyMotif,
  portrait: portraitMotif,
  social: socialMotif,
  photobook: photobookMotif,
  product: productMotif,
  corporate: corporateMotif,
  vhs: vhsMotif,
  restorationBefore: restorationBeforeMotif,
  restorationAfter: restorationAfterMotif,
};

const PALETTES = {
  wedding: { bgA: '#271321', bgB: '#7c4f2d', accent: '#f2c96d', accent2: '#f8e7bc', light: '#fff8ea', muted: '#1b1320', soft: '#b26b57' },
  quince: { bgA: '#160b2f', bgB: '#6e2f75', accent: '#f5b3e7', accent2: '#ffe4fb', light: '#fff6fd', muted: '#2b153f', soft: '#d48dc8' },
  baptism: { bgA: '#071d2f', bgB: '#2c7083', accent: '#9fe2f5', accent2: '#d8fbff', light: '#f3feff', muted: '#143848', soft: '#78b7c9' },
  children: { bgA: '#14283a', bgB: '#fd8b54', accent: '#ffce58', accent2: '#7ce0ff', light: '#fff7ea', muted: '#2e3347', soft: '#ff9f63' },
  portrait: { bgA: '#0e1729', bgB: '#273a53', accent: '#f5c9a4', accent2: '#c98b6f', light: '#f9efe7', muted: '#182638', soft: '#8ca1bd' },
  social: { bgA: '#09131f', bgB: '#2d5b8a', accent: '#69d2ff', accent2: '#ff7d6d', light: '#f8fbff', muted: '#173048', soft: '#89a7cd' },
  photobook: { bgA: '#111827', bgB: '#5a4938', accent: '#f5d7a1', accent2: '#d9b07c', light: '#fffaf3', muted: '#2a3140', soft: '#907359' },
  product: { bgA: '#10121a', bgB: '#55606f', accent: '#e8c67e', accent2: '#c7d3df', light: '#f7f4ec', muted: '#20252f', soft: '#7f8c9d' },
  corporate: { bgA: '#0c1620', bgB: '#264b60', accent: '#89d7ff', accent2: '#c5f2ff', light: '#f3fbff', muted: '#1e3040', soft: '#6c93af' },
  vhs: { bgA: '#14111e', bgB: '#4e4269', accent: '#73fff0', accent2: '#ffb36a', light: '#fefcff', muted: '#251d30', soft: '#886fb3' },
  restoration: { bgA: '#2b2118', bgB: '#8c6e48', accent: '#f1cd96', accent2: '#d8b48b', light: '#fff6ea', muted: '#4d3d2d', soft: '#c29d77' },
  restorationBefore: { bgA: '#241a14', bgB: '#6f5a42', accent: '#d2a36f', accent2: '#b68c61', light: '#f5e4c8', muted: '#453829', soft: '#a87d57' },
  restorationAfter: { bgA: '#2b2118', bgB: '#8c6e48', accent: '#f1cd96', accent2: '#d8b48b', light: '#fff6ea', muted: '#4d3d2d', soft: '#c29d77' },
};

export function createArtworkSrc({ theme, variant = 0, title, subtitle, label }) {
  const palette = PALETTES[theme];
  const svg = `
    <svg xmlns="${SVG_NS}" viewBox="0 0 1200 900" role="img" aria-label="${escapeXml(title || label || theme)}">
      <defs>
        <linearGradient id="bg-${theme}-${variant}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.bgA}" />
          <stop offset="100%" stop-color="${palette.bgB}" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.12" />
          </feComponentTransfer>
        </filter>
        <radialGradient id="vignette-${theme}-${variant}" cx="50%" cy="42%" r="75%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.58" />
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg-${theme}-${variant})" />
      <rect width="1200" height="900" fill="${palette.light}" opacity="0.02" />
      <g opacity="0.95">
        ${makeBokeh(variant + theme.length, palette.accent, palette.accent2)}
      </g>
      <g opacity="0.96">
        ${MOTIFS[theme] ? MOTIFS[theme](palette, variant) : ''}
      </g>
      <rect width="1200" height="900" fill="url(#vignette-${theme}-${variant})" />
      <rect width="1200" height="900" filter="url(#grain)" opacity="0.58" />
      <g transform="translate(80 78)">
        <rect x="0" y="0" width="300" height="72" rx="20" fill="rgba(255,255,255,0.08)" />
        <text x="26" y="46" fill="#ffffff" font-family="Georgia, serif" font-size="34" font-weight="700">${escapeXml(title || label || theme)}</text>
      </g>
      ${subtitle ? `
        <g transform="translate(80 824)">
          <rect x="0" y="0" width="410" height="56" rx="18" fill="#ffffff" fill-opacity="0.08" />
          <text x="22" y="36" fill="#ffffff" fill-opacity="0.9" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="500">${escapeXml(subtitle)}</text>
        </g>
      ` : ''}
    </svg>
  `;

  return encodeSvg(svg);
}

function createComparisonPair(variant = 0) {
  return {
    before: createArtworkSrc({
      theme: 'restorationBefore',
      variant,
      title: 'Antes',
      subtitle: 'Foto desgastada y con daño',
    }),
    after: createArtworkSrc({
      theme: 'restorationAfter',
      variant,
      title: 'Después',
      subtitle: 'Restaurada y retocada',
    }),
  };
}

function createVhsClipData(variant = 0) {
  return {
    theme: 'vhs',
    variant,
    title: `Clip VHS ${variant + 1}`,
    subtitle: 'Fiesta nocturna · 5 segundos',
    palette: PALETTES.vhs,
    artwork: createArtworkSrc({
      theme: 'vhs',
      variant,
      title: `VHS ${variant + 1}`,
      subtitle: 'Fiesta nocturna',
    }),
  };
}

function makeImageSeries(theme, title, subtitle, count = 6) {
  return Array.from({ length: count }, (_, index) => ({
    kind: 'image',
    src: createArtworkSrc({
      theme,
      variant: index,
      title: `${title} ${index + 1}`,
      subtitle,
    }),
    alt: `${title} ${index + 1}`,
  }));
}

function makeVhsSeries(count = 4) {
  return Array.from({ length: count }, (_, index) => ({
    kind: 'vhs',
    ...createVhsClipData(index),
  }));
}

function makeComparisonSeries(count = 4) {
  return Array.from({ length: count }, (_, index) => ({
    kind: 'comparison',
    title: `Restauración ${index + 1}`,
    ...createComparisonPair(index),
  }));
}

export const portfolioCategories = [
  {
    id: 'bodas',
    title: 'Bodas',
    description: 'Coberturas elegantes y luminosas para historias que merecen quedarse para siempre.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'wedding', variant: 0, title: 'Bodas', subtitle: 'Cobertura emotiva y elegante' }),
    items: makeImageSeries('wedding', 'Bodas', 'Momentos íntimos y celebración', 6),
  },
  {
    id: 'xv-anos',
    title: 'XV Años',
    description: 'Retratos de quinceaños con composición editorial, brillo y energía festiva.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'quince', variant: 0, title: 'XV Años', subtitle: 'Glitter, gala y emoción' }),
    items: makeImageSeries('quince', 'XV Años', 'Vestido, luz y celebración', 6),
  },
  {
    id: 'bautizos',
    title: 'Bautizos',
    description: 'Memorias familiares cálidas, limpias y delicadas para un día irrepetible.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'baptism', variant: 0, title: 'Bautizos', subtitle: 'Tradición y luz suave' }),
    items: makeImageSeries('baptism', 'Bautizos', 'Ambiente solemne y familiar', 6),
  },
  {
    id: 'presentaciones',
    title: 'Presentaciones infantiles',
    description: 'Fiestas de 3 años con energía, color, globos y el encanto de una celebración familiar.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'children', variant: 0, title: 'Fiesta infantil', subtitle: 'Cumple de 3 años' }),
    items: makeImageSeries('children', 'Fiesta infantil', 'Globos, pastel y diversión', 6),
  },
  {
    id: 'retrato-profesional',
    title: 'Retrato Profesional',
    description: 'Retratos con control de luz y dirección para una imagen cuidada y auténtica.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'portrait', variant: 0, title: 'Retrato', subtitle: 'Luz de estudio y carácter' }),
    items: makeImageSeries('portrait', 'Retrato', 'Iluminación y composición limpia', 6),
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Contenido dinámico pensado para destacar en redes sin perder estética de marca.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'social', variant: 0, title: 'Social Media', subtitle: 'Scroll-stopping content' }),
    items: makeImageSeries('social', 'Social', 'Vertical, directo y vibrante', 6),
  },
  {
    id: 'photobooks',
    title: 'Photobooks',
    description: 'Álbumes y memorias impresas con tratamiento editorial y narrativa visual.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'photobook', variant: 0, title: 'Photobooks', subtitle: 'Diseño y memoria tangible' }),
    items: makeImageSeries('photobook', 'Photobook', 'Diseño editorial impreso', 6),
  },
  {
    id: 'producto',
    title: 'Producto',
    description: 'Fotografía comercial que resalta textura, forma y valor percibido.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'product', variant: 0, title: 'Producto', subtitle: 'Luz de catálogo premium' }),
    items: makeImageSeries('product', 'Producto', 'E-commerce y campaña', 6),
  },
  {
    id: 'corporativo',
    title: 'Corporativo',
    description: 'Imágenes empresariales con orden, claridad y presencia ejecutiva.',
    isVideo: false,
    mediaType: 'image',
    thumbnail: createArtworkSrc({ theme: 'corporate', variant: 0, title: 'Corporativo', subtitle: 'Marca, equipo y estrategia' }),
    items: makeImageSeries('corporate', 'Corporativo', 'Marca y comunicación interna', 6),
  },
  {
    id: 'recuperacion-video',
    title: 'Recuperación de Video',
    description: 'Rescate de memorias análogas en formato VHS con estética de archivo y reproducción visual tipo clip.',
    isVideo: true,
    mediaType: 'vhs',
    thumbnail: createArtworkSrc({ theme: 'vhs', variant: 0, title: 'VHS', subtitle: 'Recuperación de video' }),
    items: makeVhsSeries(4),
  },
  {
    id: 'recuperacion-retoque-foto',
    title: 'Recuperación y Retoque de Foto',
    description: 'Restauramos imágenes antiguas para que vuelvan a verse limpias, nítidas y actuales.',
    isVideo: false,
    mediaType: 'comparison',
    thumbnail: createArtworkSrc({ theme: 'restorationAfter', variant: 0, title: 'Restauración', subtitle: 'Antes y después' }),
    items: makeComparisonSeries(4),
  },
];

export const homePortfolioHighlights = portfolioCategories.map((category) => ({
  title: category.title,
  description: category.description,
  image: category.thumbnail,
}));

export const serviceCards = [
  {
    title: 'Social',
    image: createArtworkSrc({ theme: 'wedding', variant: 1, title: 'Social', subtitle: 'Bodas, XV y bautizos' }),
    description: 'Cobertura audiovisual de eventos sociales con una mirada elegante y sensible. Documentamos bodas, XV años, bautizos y celebraciones especiales con énfasis en emoción, detalle y ritmo narrativo.',
    photoPrice: 'Desde $3,200 MXN',
    videoPrice: 'Desde $5,500 MXN',
    reverse: true,
    isFeatured: false,
  },
  {
    title: 'Retrato Profesional',
    image: createArtworkSrc({ theme: 'portrait', variant: 1, title: 'Retrato', subtitle: 'Imagen personal y branding' }),
    description: 'Retratos de alta calidad para perfiles profesionales, marca personal y portafolios. Buscamos una imagen limpia, auténtica y sólida, con dirección de pose e iluminación precisa.',
    photoPrice: 'Desde $1,200 MXN',
    videoPrice: 'Desde $2,500 MXN',
    reverse: false,
    isFeatured: false,
  },
  {
    title: 'Cobertura de Eventos',
    image: createArtworkSrc({ theme: 'children', variant: 1, title: 'Eventos', subtitle: 'Fiestas infantiles y celebraciones' }),
    description: 'Documentamos de manera discreta y elegante cada momento de tu evento. Desde fiestas infantiles hasta celebraciones privadas, aseguramos que la esencia y emoción queden inmortalizadas para siempre.',
    photoPrice: 'Desde $3,500 MXN',
    videoPrice: 'Desde $5,000 MXN',
    reverse: true,
    isFeatured: false,
  },
  {
    title: 'Trabajo Comercial',
    image: createArtworkSrc({ theme: 'product', variant: 1, title: 'Producto', subtitle: 'Catálogo y campañas' }),
    description: 'Imágenes potentes que venden. Creamos fotografía y video de producto pensados para e-commerce, catálogos y campañas publicitarias, con foco en textura, forma y valor visual.',
    photoPrice: 'Desde $2,800 MXN',
    videoPrice: 'Desde $4,500 MXN',
    reverse: false,
    isFeatured: false,
  },
  {
    title: 'Contenido Social',
    image: createArtworkSrc({ theme: 'social', variant: 1, title: 'Contenido social', subtitle: 'Vertical y dinámico' }),
    description: 'Contenido vibrante y dinámico diseñado para dominar redes sociales. Formatos verticales, reels y fotografía con intención visual para potenciar tu marca personal o negocio.',
    photoPrice: 'Desde $2,000 MXN',
    videoPrice: 'Desde $3,500 MXN',
    reverse: true,
    isFeatured: true,
  },
  {
    title: 'Recuperación de Video',
    image: createArtworkSrc({ theme: 'vhs', variant: 1, title: 'VHS', subtitle: 'Rescate de video análogo' }),
    description: 'El tiempo degrada las cintas, pero nosotros rescatamos tus memorias. Digitalizamos formatos análogos con una reproducción visual inspirada en el archivo original y estética VHS.',
    photoPrice: null,
    videoPrice: 'Desde $150 MXN / cinta',
    reverse: false,
    isFeatured: false,
  },
  {
    title: 'Recuperación y Retoque de Foto',
    image: createArtworkSrc({ theme: 'restorationAfter', variant: 1, title: 'Restauración', subtitle: 'Antes y después' }),
    description: 'Restauramos fotografías antiguas, corregimos daño por tiempo y hacemos retoque fino para devolverles nitidez, color y presencia sin perder su esencia original.',
    photoPrice: 'Desde $280 MXN / foto',
    videoPrice: null,
    reverse: true,
    isFeatured: false,
  },
];

export const bookingServiceOptions = [
  'Fotografía Social',
  'Video Social',
  'Fotografía Profesional',
  'Video Profesional',
  'Fotografía de Producto',
  'Video de Producto',
  'Fotografía Corporativa',
  'Video Corporativa',
  'Recuperación de Video Análogo',
  'Recuperación y Retoque de Foto',
  'Paquete Personalizado',
];
