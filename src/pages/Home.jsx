import React from "react";

// import components
import Header from "../components/Header";

// import parts
import Hero from "../parts/Homepage/Hero";
import SurahList from "../parts/Homepage/SurahList";

const Home = () => {
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

export default Home;
