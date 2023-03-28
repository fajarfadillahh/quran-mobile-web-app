import React, { useEffect, useState } from "react";

// import api
import { getAllSurah, getQuote } from "../api/Api";

// import components
import Layout from "../components/Layout";
import Hero from "../parts/Homepage/Hero";
import SurahList from "../parts/Homepage/SurahList";

const Home = () => {
  const [surah, setSurah] = useState([]);
  const [quote, setQuote] = useState({
    text: "",
    reference: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // get all surah
    getAllSurah()
      .then((result) => {
        setSurah(result);
      })
      .catch((error) => {
        console.error(error);
      });

    // get quote
    getQuote()
      .then((result) => {
        setQuote(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(quote);

  return (
    <>
      <Layout>
        <Hero dataQuote={quote} />
        <SurahList dataSurah={surah} />
      </Layout>
    </>
  );
};

export default Home;
