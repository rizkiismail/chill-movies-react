// src/App.jsx
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import FilmPage from "./pages/FilmPage";
import DaftarSayaPage from "./pages/DaftarSayaPage";
import DashboardPage from "./pages/DashboardPage";

import { INITIAL_MEDIA_DATA } from "./data/mediaData";

export default function App() {
  const [view, setView] = useState("login");
  const isAuthPage = view === "login" || view === "register";
  const [mediaItems, setMediaItems] = useState(INITIAL_MEDIA_DATA);

  const handleAddItem = (newItem) => setMediaItems([newItem, ...mediaItems]);
  const handleUpdateItem = (updatedItem) =>
    setMediaItems(
      mediaItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    );
  const handleDeleteItem = (id) =>
    setMediaItems(mediaItems.filter((item) => item.id !== id));

  const userAdded = mediaItems.filter((item) =>
    item.id.toString().startsWith("user_"),
  );
  const originalItems = mediaItems.filter(
    (item) => !item.id.toString().startsWith("user_"),
  );

  const userFilms = userAdded.filter((item) => item.type === "Film");
  const userSeries = userAdded.filter((item) => item.type === "Series");
  const allFilms = mediaItems.filter((item) => item.type === "Film");
  const allSeries = mediaItems.filter((item) => item.type === "Series");

  return (
    <div className="min-h-screen bg-[#181A1C] text-grey-100 antialiased font-sans flex flex-col pt-1">
      {!isAuthPage && <Navbar currentView={view} setView={setView} />}

      <main className="flex-grow">
        {view === "login" && <LoginPage setView={setView} />}

        {view === "register" && <RegisterPage setView={setView} />}
        {/* 1. HOME VIEW */}
        {view === "home" && (
          <HomePage originalItems={originalItems} userAdded={userAdded} />
        )}

        {/* 2. SERIES VIEW */}
        {view === "series" && (
          <SeriesPage allSeries={allSeries} userSeries={userSeries} />
        )}

        {/* 3. FILM VIEW */}
        {view === "film" && (
          <FilmPage allFilms={allFilms} userFilms={userFilms} />
        )}

        {/* 4. DAFTAR SAYA VIEW */}
        {view === "daftar-saya" && <DaftarSayaPage />}

        {/* 5. DASHBOARD VIEW */}
        {view === "dashboard" && (
          <DashboardPage
            items={mediaItems}
            onAddItem={handleAddItem}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        )}
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}
