// src/components/MovieRow.jsx
import React, { useMemo, useRef } from "react";
import SmartImage from "./SmartImage";

/**
 * MovieRow
 * - variant="poster" (default): kartu poster 2:3
 * - variant="continue": kartu landscape untuk "Melanjutkan Tonton ..."
 *
 * Catatan:
 * - Popup/preview saat hover sengaja DIHAPUS (sesuai request).
 */
export default function MovieRow({
  title,
  data,
  variant = "poster",
  hideArrows = false,
  noScroll = false,
}) {
  const rowRef = useRef(null);

  const cardSize = useMemo(() => {
    if (variant === "continue") {
      return noScroll
        ? "flex-none w-[280px] md:w-full aspect-video"
        : "w-[280px] md:w-[320px] aspect-video";
    }
    return "w-[140px] h-[210px] md:w-[195px] md:h-[290px]";
  }, [variant, noScroll]);

  const listClass = noScroll
    ? "flex md:grid md:grid-cols-4 gap-3 md:gap-4 overflow-x-auto md:overflow-visible hide-scrollbar pb-3"
    : "flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar pb-3 pt-1 scroll-smooth";

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;

      rowRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <div className="mb-10 md:mb-12 px-4 md:px-10 relative group/row">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-grey-100 tracking-wide">
        {title}
      </h2>

      <div className="relative">
        {!hideArrows && !noScroll && (
          <>
            {/* Arrow Left (hidden on mobile) */}
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/70 hover:bg-black/90 p-2 rounded-full border border-grey-800 shadow-2xl opacity-0 group-hover/row:opacity-100 transition-all duration-300 focus:outline-none -left-2 md:-left-4 backdrop-blur-xs !hidden sm:!flex"
              aria-label="Geser Kiri"
            >
              <img
                src="arrow-right.png"
                alt="Panah Kiri"
                className="w-3.5 h-3.5 rotate-180 brightness-200"
              />
            </button>
          </>
        )}
        <div ref={noScroll ? null : rowRef} className={listClass}>
          {data.map((movie) => (
            <div
              key={movie.id}
              className={`relative flex-none cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 shadow-md ${cardSize} rounded-md overflow-hidden`}
            >
              <SmartImage
                src={
                  variant === "continue"
                    ? movie.wideImg || movie.img
                    : movie.img
                }
                alt={movie.title}
                fallbackGrad={movie.grad}
                title={movie.title}
                className="w-full h-full"
                isLandscape={variant === "continue"}
              />

              {/* badges */}
              {movie.badge && (
                <span className="absolute top-2 left-2 bg-brand-primary text-white text-[9px] font-extrabold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  {movie.badge}
                </span>
              )}
              {movie.badgeRight && (
                <div className="absolute top-0 right-2 bg-brand-error text-white text-[8px] font-black px-1 py-1.5 rounded-b-sm text-center uppercase leading-tight shadow-sm">
                  Top
                  <br />
                  <span className="text-[9px]">10</span>
                </div>
              )}

              {/* bottom info (selalu tampil) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-end p-3">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm font-bold text-white truncate">
                      {movie.title}
                    </p>
                    <p className="text-[10px] md:text-xs text-grey-300/80 mt-0.5 truncate">
                      {movie.type} • {movie.genre}
                    </p>
                  </div>
                  {movie.rating && (
                    <p className="text-[10px] md:text-xs text-grey-200 font-semibold whitespace-nowrap">
                      ⭐ {movie.rating}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!hideArrows && !noScroll && (
          <>
            {/* Arrow Right (hidden on mobile) */}
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/70 hover:bg-black/90 p-2 rounded-full border border-grey-800 shadow-2xl opacity-0 group-hover/row:opacity-100 transition-all duration-300 focus:outline-none -right-2 md:-right-4 backdrop-blur-xs !hidden sm:!flex"
              aria-label="Geser Kanan"
            >
              <img
                src="arrow-right.png"
                alt="Panah Kanan"
                className="w-3.5 h-3.5 brightness-200"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
