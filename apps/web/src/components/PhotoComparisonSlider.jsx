import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function PhotoComparisonSlider({ beforeSrc, afterSrc, beforeLabel = 'Antes', afterLabel = 'Después', className = '' }) {
  const [position, setPosition] = useState(52);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next, 0, 100));
  }, []);

  const handlePointerDown = (event) => {
    isDraggingRef.current = true;
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = useCallback((event) => {
    if (!isDraggingRef.current) return;
    updateFromClientX(event.clientX);
  }, [updateFromClientX]);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="relative aspect-[4/5] md:aspect-[16/10] select-none touch-none">
        <img src={beforeSrc} alt={beforeLabel} className="absolute inset-0 h-full w-full object-cover" draggable="false" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img src={afterSrc} alt={afterLabel} className="h-full w-full object-cover" draggable="false" />
        </div>

        <div
          className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
          style={{ left: `${position}%`, transform: 'translateX(-1px)' }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-background/90 text-white shadow-2xl backdrop-blur-md">
            <span className="text-sm font-semibold tracking-widest">↔</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 rounded-md bg-background/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
          {beforeLabel}
        </div>
        <div className="absolute bottom-4 right-4 rounded-md bg-background/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
          {afterLabel}
        </div>

        <motion.input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Comparador de antes y después"
        />
      </div>
    </div>
  );
}

export default PhotoComparisonSlider;
