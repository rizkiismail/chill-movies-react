import React from "react";

export default function GoogleButton({ children }) {
  return (
    <button
      className="
      w-full
      h-12
      rounded-full
      border
      border-white/20
      text-white
      flex
      items-center
      justify-center
      gap-3
      "
    >
      <img src="/google-icon.png" alt="Google" className="w-5 h-5" />

      {children}
    </button>
  );
}
