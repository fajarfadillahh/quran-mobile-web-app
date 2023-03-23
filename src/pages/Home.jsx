import React from "react";

// import components
import Header from "../components/Header";

// import parts
import Hero from "../parts/Homepage/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main h-[3000px]">
        <Hero />
      </main>
    </>
  );
};

export default Home;
