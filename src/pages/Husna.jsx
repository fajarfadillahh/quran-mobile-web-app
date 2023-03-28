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
    getAsmaulHusna();
  }, []);

  return (
    <Layout>
      <Hero />
      <HusnaList />
    </Layout>
  );
};

export default Husna;
