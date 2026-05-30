// src/pages/FilmPage.jsx
import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

export default function FilmPage({ allFilms, userFilms }) {
  return (
    <>
      <Hero
        title="The Batman"
        description="Ketika seorang pembunuh berantai sadis mulai membunuh tokoh-tokoh politik penting di Gotham, Batman terpaksa menyelidiki korupsi tersembunyi di kota tersebut."
        bannerImg="/posters/the-batman-banner.png"
        ageBadge="16+"
      />
      <div className="mt-8 md:mt-10 relative z-20">
        <MovieRow
          title="Melanjutkan Tonton Film"
          variant="continue"
          hideArrows
          noScroll
          data={allFilms.slice(0, 4)}
        />
        <MovieRow title="Film Persembahan Chill" data={allFilms.slice(4, 8)} />
        <MovieRow
          title="Top Rating Film Hari ini"
          data={allFilms.slice(2, 6)}
        />
        <MovieRow title="Film Trending" data={allFilms.slice(5, 9)} />
        <MovieRow title="Rilis Baru" data={allFilms.slice(0, 8)} />
      </div>
    </>
  );
}
