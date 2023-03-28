import React, { useEffect, useState } from "react";

// import api
import { getAsmaulHusna } from "../api/Api";

// import components
import Layout from "../components/Layout";
import Hero from "../parts/Husnapage/Hero";
import HusnaList from "../parts/Husnapage/HusnaList";

const Husna = () => {
  const [asmaulHusna, setAsmaulHusna] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getAsmaulHusna()
      .then((result) => {
        setAsmaulHusna(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout>
      <Hero />
      <HusnaList asmaulHusna={asmaulHusna} />
    </Layout>
  );
};

export default Husna;
