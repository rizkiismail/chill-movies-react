// src/components/Footer.jsx
import React from "react";

// --- COMPONENT: FOOTER ---
export default function Footer() {
  return (
    <footer className="mt-20 px-4 md:px-10 py-12 bg-[#181A1C] text-grey-400 text-xs w-full border-t border-grey-900/40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 items-start">
          <img
            src="Logo.png"
            alt="Chill Logo"
            className="w-[163px] h-[44px] object-contain object-left flex-shrink-0 select-none"
          />
          <p className="text-grey-600 font-normal tracking-wide mt-1">
            @2023 Chill All Rights Reserved.
          </p>
        </div>

        <div>
          <h4 className="text-grey-100 font-bold mb-3 uppercase tracking-wider text-[11px]">
            Genre Populer
          </h4>
          <ul className="grid grid-rows-4 grid-cols-4  gap-1 text-grey-400">
            <li>Aksi</li>
            <li>Anak-anak</li>
            <li>Anime</li>
            <li>Britania</li>
            <li>Drama</li>
            <li>Fantasi Ilmiah & Fantasi</li>
            <li>Kejahatan</li>
            <li>KDrama</li>
            <li>Komedi</li>
            <li>Petualangan</li>
            <li>Perang</li>
            <li>Romantis</li>
            <li>Sains & Alam</li>
            <li>Thriller</li>
          </ul>
        </div>

        <div>
          <h4 className="text-grey-100 font-bold mb-3 uppercase tracking-wider text-[11px]">
            Bantuan
          </h4>
          <ul className="grid grid-cols-1 gap-2 text-grey-500">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
