// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Star,
  User,
} from "lucide-react";

// --- COMPONENT: NAVBAR ---
export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const navLinkClass = (targetView) => `
    cursor-pointer transition text-[11px] sm:text-xs md:text-sm py-1 font-semibold whitespace-nowrap tracking-wide
    ${
      currentView === targetView
        ? "text-grey-100"
        : "text-grey-400 hover:text-grey-100"
    }
  `;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#181A1C]/95 backdrop-blur-sm border-b border-grey-900/60 flex items-center justify-between px-3 sm:px-6 md:px-10 py-4 transition-all">
      <div className="flex items-center gap-4 sm:gap-8 overflow-hidden">
        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer flex-shrink-0 select-none"
          onClick={() => setView("home")}
        >
          <img
            src="movie-open.png"
            alt="Chill Icon"
            className="block md:hidden h-5 w-auto object-contain brightness-110"
          />
          <img
            src="Logo.png"
            alt="Chill Logo"
            className="hidden md:block w-[103.55px] h-[44px] object-contain brightness-110"
          />
        </div>

        {/* SUB MENU HORIZONTAL */}
        <div className="flex gap-3 sm:gap-6 items-center">
          <span
            onClick={() => setView("series")}
            className={navLinkClass("series")}
          >
            Series
          </span>
          <span onClick={() => setView("film")} className={navLinkClass("film")}>
            Film
          </span>
          <span
            onClick={() => setView("daftar-saya")}
            className={navLinkClass("daftar-saya")}
          >
            Daftar Saya
          </span>
          <span
            onClick={() => setView("dashboard")}
            className={navLinkClass("dashboard")}
          >
            Dashboard
          </span>
        </div>
      </div>

      {/* PROFILE DROPDOWN */}
      <div className="flex items-center flex-shrink-0">
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 cursor-pointer group/avatar select-none"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-grey-700 bg-grey-800 transition group-hover/avatar:border-transparent flex items-center justify-center">
              {!avatarError ? (
                <img
                  src="avatar.png"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white bg-brand-primary">
                  U
                </div>
              )}
            </div>
            <ChevronDown
              className={`w-3 h-3 text-grey-400 group-hover/avatar:text-grey-100 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
              <div className="absolute right-0 mt-3 w-44 bg-[#181A1C] rounded-xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-50 flex flex-col">
                <span
                  onClick={() => {
                    setView("dashboard");
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-grey-800/40 rounded-lg transition text-grey-100 hover:text-brand-primary cursor-pointer"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-[13px] font-medium">Dashboard CRUD</span>
                </span>

                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-grey-800/40 rounded-lg transition text-grey-100 hover:text-brand-primary"
                >
                  <User className="w-4 h-4" fill="currentColor" />
                  <span className="text-[13px] font-medium">Profil Saya</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-grey-800/40 rounded-lg transition text-grey-100 hover:text-brand-primary"
                >
                  <Star className="w-4 h-4" fill="currentColor" />
                  <span className="text-[13px] font-medium">Ubah Premium</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-grey-800/40 rounded-lg transition text-grey-100 hover:text-brand-primary"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-[13px] font-medium">Keluar</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
