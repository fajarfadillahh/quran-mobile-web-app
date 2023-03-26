import React from "react";

// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import parts
import Hero from "../parts/Homepage/Hero";
import SurahList from "../parts/Homepage/SurahList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Navbar />
        <Hero />
        <SurahList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
