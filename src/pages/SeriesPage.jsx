// src/pages/SeriesPage.jsx
import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

export default function SeriesPage({ allSeries, userSeries }) {
  return (
    <>
      <Hero
        title="All of Us Are Dead"
        description="Sebuah sekolah menengah menjadi titik nol ledakan wabah virus zombie. Para siswa yang terperangkap harus bertarung untuk keluar atau terinfeksi menjadi monster mengerikan."
        bannerImg="/posters/all-of-us-are-dead-banner.png"
        ageBadge="18+"
      />
      <div className="mt-8 md:mt-10 relative z-20">
        <MovieRow
          title="Melanjutkan Tonton Series"
          variant="continue"
          data={allSeries.slice(0, 3)}
          noScroll
        />
        <MovieRow
          title="Series Persembahan Chill"
          data={allSeries.slice(1, 4)}
        />
        <MovieRow
          title="Top Rating Series Hari ini"
          data={[...allSeries].sort((a, b) => b.rating - a.rating).slice(0, 4)}
        />
        <MovieRow title="Series Trending" data={allSeries.slice(0, 5)} />
        <MovieRow title="Rilis Baru" data={allSeries} />
      </div>
    </>
  );
}
