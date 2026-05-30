// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

export default function HomePage({ originalItems, userAdded }) {
  return (
    <>
      <Hero
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai recruit lebih banyak tentara, termasuk siswa sekolah menengah."
        bannerImg="/posters/duty-after-school-banner.png"
        ageBadge="18+"
      />
      <div className="mt-8 md:mt-10 relative z-20">
        <MovieRow
          title="Melanjutkan Tonton Film"
          variant="continue"
          noScroll
          data={originalItems
            .filter((item) => item.type === "Film")
            .slice(0, 4)}
        />
        <MovieRow
          title="Top Rating Film dan Series Hari ini"
          data={originalItems.slice(4, 9)}
        />
        <MovieRow title="Film Trending" data={originalItems.slice(4, 9)} />
        <MovieRow
          title="Rilis Baru"
          data={[...userAdded, ...originalItems.slice(9, 13)]}
        />
      </div>
    </>
  );
}
