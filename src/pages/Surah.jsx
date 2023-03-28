import React from "react";

// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import parts
import SurahList from "../parts/Surahpage/SurahList";
import Layout from "../components/Layout";

const Surah = () => {
  return (
    <>
      <Layout>
        <SurahList />
      </Layout>
    </>
  );
};

export default Surah;
