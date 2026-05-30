// src/components/Hero.jsx
import React, { useState } from "react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";

// --- COMPONENT: DYNAMIC HERO BANNER ---
export default function Hero({ title, description, bannerImg, ageBadge }) {
  const [isMuted, setIsMuted] = useState(true);
  const [heroBgError, setHeroBgError] = useState(false);

  return (
    <div className="relative h-[38vh] sm:h-[45vh] md:h-[70vh] w-full bg-[#181A1C] overflow-hidden">
      {!heroBgError && bannerImg ? (
        <img
          src={bannerImg}
          alt={`${title} Banner`}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          onError={() => setHeroBgError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-tr from-grey-900 to-[#181A1C] opacity-60" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-[#181A1C]/40 to-transparent" />
      <div className="absolute bottom-10 md:bottom-16 left-4 md:left-10 max-w-2xl z-30 right-4">
        <h1 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 tracking-tight text-grey-100">
          {title}
        </h1>
        <p className="text-grey-400 text-xs md:text-sm mb-5 md:mb-6 leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-3 md:gap-4">
          {/* Mulai */}
          <button className="flex items-center gap-1.5 md:gap-2 bg-brand-primary hover:bg-brand-primaryHover text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full font-semibold transition shadow-lg text-xs md:text-sm">
            <Play fill="currentColor" className="w-4 h-4" />
            Mulai
          </button>

          {/* Selengkapnya */}
          <button className="flex items-center gap-1.5 md:gap-2 bg-[#22282A] hover:bg-[#2B3235] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold transition text-xs md:text-sm">
            <Info className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Selengkapnya
          </button>

          {/* Rating Usia */}
          {ageBadge && (
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-grey-300/40 bg-black/20 flex items-center justify-center text-xs md:text-sm font-medium text-grey-100/80">
              {ageBadge}
            </span>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-10 md:bottom-16 right-4 md:right-10 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 flex items-center justify-center"
        aria-label={isMuted ? "Volume Off" : "Volume On"}
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
        )}
      </button>
    </div>
  );
}
