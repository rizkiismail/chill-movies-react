// src/pages/DashboardPage.jsx
import React, { useState } from "react";
import { Pencil, Plus, Trash2, Upload } from "lucide-react";
import SmartImage from "../components/SmartImage";
import { GENRES, GRADIENTS } from "../data/mediaData";

// --- COMPONENT: DASHBOARD CRUD PAGE ---
export default function DashboardPage({
  items,
  onAddItem,
  onUpdateItem,
  onDeleteItem,
}) {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    type: "Film",
    genre: "Aksi",
    rating: "5.0/5",
    img: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, img: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (isEditing) {
      onUpdateItem(formData);
      setIsEditing(false);
    } else {
      onAddItem({
        ...formData,
        id: "user_" + Date.now(),
        badge: "Baru",
        grad: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
      });
    }

    setFormData({
      id: null,
      title: "",
      type: "Film",
      genre: "Aksi",
      rating: "5.0/5",
      img: "",
    });
  };

  const startEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  return (
    <div className="pt-20 md:pt-24 px-4 md:px-10 min-h-screen">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-grey-100">
          Dashboard Konten
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        <div className="bg-[#1e2022] p-5 md:p-6 rounded-xl border border-grey-800 shadow-xl">
          <h2 className="text-base md:text-lg font-bold text-grey-100 mb-4 flex items-center gap-2">
            {isEditing ? (
              <Pencil className="w-4 h-4 text-brand-primary" />
            ) : (
              <Plus className="w-4 h-4 text-brand-primary" />
            )}
            {isEditing ? "Ubah Data Konten" : "Tambah Konten Baru"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] md:text-xs font-semibold text-grey-400 mb-1.5 uppercase tracking-wider">
                Judul Konten
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-grey-900 border border-grey-800 rounded-lg p-2.5 text-xs md:text-sm text-grey-100 focus:outline-none focus:border-brand-primary"
                placeholder="Masukkan judul..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] md:text-xs font-semibold text-grey-400 mb-1.5 uppercase tracking-wider">
                  Jenis
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full bg-grey-900 border border-grey-800 rounded-lg p-2.5 text-xs md:text-sm text-grey-100 focus:outline-none"
                >
                  <option value="Film">Film</option>
                  <option value="Series">Series</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-semibold text-grey-400 mb-1.5 uppercase tracking-wider">
                  Rating
                </label>
                <input
                  type="text"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  className="w-full bg-grey-900 border border-grey-800 rounded-lg p-2.5 text-xs md:text-sm text-grey-100 focus:outline-none"
                  placeholder="4.8/5"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] md:text-xs font-semibold text-grey-400 mb-1.5 uppercase tracking-wider">
                Poster
              </label>

              <div className="space-y-2">
                <input
                  type="text"
                  value={formData.img}
                  onChange={(e) =>
                    setFormData({ ...formData, img: e.target.value })
                  }
                  className="w-full bg-grey-900 border border-grey-800 rounded-lg p-2.5 text-xs text-grey-100 focus:outline-none"
                  placeholder="Masukkan URL Gambar..."
                />

                <label className="cursor-pointer inline-flex bg-grey-800 hover:bg-grey-700 text-grey-300 px-3 py-2 rounded-lg text-xs font-medium transition items-center gap-1.5 border border-grey-700">
                  <Upload className="w-3.5 h-3.5" /> Upload File
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[10px] md:text-xs font-semibold text-grey-400 mb-1.5 uppercase tracking-wider">
                Genre
              </label>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {GENRES.map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setFormData({ ...formData, genre: g })}
                    className={`px-2.5 py-1 text-[11px] rounded-full transition ${
                      formData.genre === g
                        ? "bg-brand-primary text-white"
                        : "bg-grey-900 text-grey-400"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white py-2.5 rounded-lg text-xs md:text-sm font-semibold transition mt-2"
            >
              {isEditing ? "Simpan Perubahan" : "Publish Konten"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 bg-[#1e2022] rounded-xl border border-grey-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-grey-900/50 text-grey-400 uppercase font-semibold">
                <tr>
                  <th className="px-4 md:px-6 py-3.5">Konten</th>
                  <th className="px-4 md:px-6 py-3.5">Tipe</th>
                  <th className="px-4 md:px-6 py-3.5">Genre</th>
                  <th className="px-4 md:px-6 py-3.5 text-center">Aksi</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-grey-800/60">
                {items.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-grey-900/30 text-grey-300 transition"
                  >
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-10 rounded bg-grey-900 overflow-hidden flex-shrink-0">
                          <SmartImage
                            src={item.img}
                            alt={item.title}
                            fallbackGrad={item.grad}
                            title={item.title}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-grey-100 line-clamp-1 max-w-[120px] md:max-w-none">
                            {item.title}
                          </div>
                          <div className="text-[10px] md:text-[11px] text-grey-500 font-semibold mt-0.5">
                            ⭐ {item.rating}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 md:px-6 py-3">
                      <span
                        className={`px-2 py-0.5 text-[9px] font-bold rounded ${
                          item.type === "Film"
                            ? "bg-indigo-950 text-indigo-400"
                            : "bg-emerald-950 text-emerald-400"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td className="px-4 md:px-6 py-3 text-grey-400 text-xs">
                      {item.genre}
                    </td>

                    <td className="px-4 md:px-6 py-3 text-center">
                      <div className="flex items-center justify-center gap-2.5">
                        <button
                          onClick={() => startEdit(item)}
                          className="p-1 text-grey-400 hover:text-brand-primary"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onDeleteItem(item.id)}
                          className="p-1 text-grey-400 hover:text-brand-error"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
