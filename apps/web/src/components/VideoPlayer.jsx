
import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

function VideoPlayer({ src, poster, autoPlay = false }) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // If the src is an image (placeholder for portfolio), we render it as an image but with video styling
  const isPlaceholder = src && (src.includes('unsplash.com') || src.match(/\.(jpeg|jpg|gif|png)$/));

  if (isPlaceholder) {
    return (
      <div className="relative w-full h-full bg-black group hover-zoom-container rounded-lg overflow-hidden">
        <img src={src} alt="Video thumbnail" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] backdrop-blur-sm"
          >
            <Play className="w-8 h-8 ml-1" />
          </motion.div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-md border border-white/10 uppercase tracking-widest">
            Video
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={isMuted}
        loop={autoPlay}
        playsInline
        onClick={togglePlay}
      />
      
      {/* Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button onClick={toggleMute} className="text-white hover:text-primary transition-colors">
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
          <div className="flex-1" />
          <button onClick={toggleFullscreen} className="text-white hover:text-primary transition-colors">
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
            <Play className="w-8 h-8 ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
