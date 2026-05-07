import React from 'react';
import { motion } from 'framer-motion';
import { Play, SkipBack } from 'lucide-react';

function VhsClip({ title, subtitle, artwork, compact = false }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black ${compact ? 'aspect-[4/5]' : 'aspect-[16/10] md:aspect-[4/3]'}`}>
      <img src={artwork} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-70" draggable="false" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1),rgba(10,10,10,0.56)),repeating-linear-gradient(180deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_4px,transparent_7px)]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-[-18%] w-[18%] bg-white/30 blur-xl mix-blend-screen"
        animate={{ x: ['0%', '620%'], opacity: [0, 0.55, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-white/85">
        <div className="rounded-md border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] backdrop-blur-md">
          VHS · 00:05
        </div>
        <div className="rounded-md border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] backdrop-blur-md">
          REC
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-18 w-18 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.12)]"
        >
          <Play className="ml-1 h-8 w-8" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/92 via-black/40 to-transparent p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg text-white">{title}</h4>
            <p className="text-xs uppercase tracking-[0.3em] text-white/65">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2 text-white/75">
            <SkipBack className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-[0.25em]">Loop</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_55%)] opacity-40" />
    </div>
  );
}

export default VhsClip;
