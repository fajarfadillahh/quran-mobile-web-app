import React from "react";

// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import parts
import SurahList from "../parts/Surahpage/SurahList";

const Surah = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Navbar />
        <SurahList />
      </main>
      <Footer />
    </>
  );
};

export default Surah;
