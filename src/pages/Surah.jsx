import React from "react";

// import components
import Header from "../components/Header";

// import parts
import Hero from "../parts/Surahpage/Hero";
import SurahList from "../parts/Surahpage/SurahList";

const Surah = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <SurahList />
      </main>
    </>
  );
};

export default Surah;
