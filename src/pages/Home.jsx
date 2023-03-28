import React, { useEffect, useState } from "react";

// import api
import { getAllSurah } from "../api/Api";

// import components
import Layout from "../components/Layout";
import Hero from "../parts/Homepage/Hero";
import SurahList from "../parts/Homepage/SurahList";

const Home = () => {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getAllSurah()
      .then((response) => {
        setSurah(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <Hero />
        <SurahList dataSurah={surah} />
      </Layout>
    </>
  );
};

export default Home;
