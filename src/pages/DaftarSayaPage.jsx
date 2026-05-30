// src/pages/DaftarSayaPage.jsx
import React from "react";
import SmartImage from "../components/SmartImage";
import { MY_LIST_DATA } from "../data/mediaData";

// --- COMPONENT: MY LIST PAGE ---
export default function DaftarSayaPage() {
  return (
    <div className="pt-24 md:pt-28 px-4 md:px-10 min-h-screen pb-12 animate-fadeIn">
      <h1 className="text-xl md:text-2xl font-bold text-grey-100 mb-6 md:mb-8 tracking-wide">
        Daftar Saya
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
        {MY_LIST_DATA.map((movie) => (
          <div
            key={movie.id}
            className="relative cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 shadow-md group rounded-md aspect-[2/3] overflow-hidden"
          >
            <SmartImage
              src={movie.img}
              alt={movie.title}
              fallbackGrad={movie.grad}
              title={movie.title}
              className="w-full h-full"
            />

            {movie.badge && (
              <span className="absolute top-2 left-2 bg-brand-primary text-white text-[8px] md:text-[9px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wider z-20">
                {movie.badge}
              </span>
            )}

            {movie.badgeRight && (
              <div className="absolute top-0 right-2 bg-brand-error text-white text-[8px] font-black px-1 py-1.5 rounded-b-sm text-center uppercase leading-tight z-20 shadow-sm">
                Top
                <br />
                <span className="text-[9px]">10</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-xs font-bold text-white truncate">
                {movie.title}
              </p>
              <p className="text-[10px] text-grey-400 mt-0.5">
                {movie.type} • {movie.genre}
              </p>
              <p className="text-[10px] text-grey-300 mt-0.5 font-semibold">
                ⭐ {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
