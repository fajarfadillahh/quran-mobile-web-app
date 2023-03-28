import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import api
import { getSurahById } from "../api/Api";

// import components
import Layout from "../components/Layout";
import Hero from "../parts/Surahpage/Hero";
import SurahList from "../parts/Surahpage/SurahList";

const Surah = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getSurahById(id)
      .then((result) => {
        setSurah(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Layout>
        <Hero />
        <SurahList dataSurah={surah} />
      </Layout>
    </>
  );
};

export default Surah;
