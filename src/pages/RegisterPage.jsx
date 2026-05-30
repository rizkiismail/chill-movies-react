import React from "react";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import GoogleButton from "../components/auth/GoogleButton";

export default function RegisterPage({ setView }) {
  return (
    <AuthLayout background="/register-bg.jpg">
      <div className="w-full max-w-[530px] backdrop-blur-md bg-black/30 rounded-3xl p-10">
        <div className="flex justify-center mb-8">
          <img src="/Logo.png" alt="Logo" className="h-12" />
        </div>

        <h1 className="text-center text-white text-5xl font-bold">Daftar</h1>

        <p className="text-center text-white/80 mt-3 mb-8">Selamat datang!</p>

        <div className="space-y-6">
          <AuthInput label="Username" placeholder="Masukkan username" />

          <AuthInput
            label="Kata Sandi"
            type="password"
            placeholder="Masukkan kata sandi"
          />

          <AuthInput
            label="Konfirmasi Kata Sandi"
            type="password"
            placeholder="Masukkan kata sandi"
          />
        </div>

        <button
          onClick={() => setView("home")}
          className="w-full h-12 rounded-full bg-white/20 text-white mt-8"
        >
          Daftar
        </button>

        <div className="text-center text-white/60 my-4">Atau</div>

        <GoogleButton>Daftar dengan Google</GoogleButton>

        <div className="mt-5 text-center text-white/70">
          Sudah punya akun?
          <button onClick={() => setView("login")} className="ml-2">
            Masuk
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
