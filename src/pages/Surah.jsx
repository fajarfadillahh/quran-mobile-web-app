import React from "react";

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

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
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Surah;
