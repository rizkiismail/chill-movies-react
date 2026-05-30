import React from "react";

export default function AuthInput({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-white mb-2">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-12 rounded-full bg-transparent border border-white/20 px-5 text-white outline-none"
      />
    </div>
  );
}
