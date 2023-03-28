import React from "react";

// import components
import Layout from "../components/Layout";
import Hero from "../parts/Homepage/Hero";
import SurahList from "../parts/Homepage/SurahList";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <SurahList />
      </Layout>
    </>
  );
};

export default Home;
