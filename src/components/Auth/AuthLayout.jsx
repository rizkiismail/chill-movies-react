import React from "react";

export default function AuthLayout({ background, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
