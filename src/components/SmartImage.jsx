// src/components/SmartImage.jsx
import React, { useEffect, useState } from "react";

// --- UTILITY COMPONENT: SMART IMAGE COVERS ---
export default function SmartImage({
  src,
  alt,
  fallbackGrad,
  title,
  className,
  isLandscape,
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${
          fallbackGrad || "from-grey-700 to-grey-900"
        } flex flex-col justify-between p-3 rounded-md border border-grey-800 select-none`}
      >
        <div className="text-[8px] font-black tracking-wider text-brand-error uppercase">
          CHILL ORIGINAL
        </div>
        <div
          className={`${
            isLandscape ? "text-[10px]" : "text-xs"
          } font-black text-grey-100 line-clamp-3 uppercase tracking-tight`}
        >
          {title}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-cover`}
      onError={() => setHasError(true)}
    />
  );
}
