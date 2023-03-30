import React, { useEffect, useState } from "react";

// import api
import { getDailyPrayer } from "../api/Api";

// import components
import Layout from "../components/Layout";
import Hero from "../parts/Prayerpage/Hero";
import PrayerList from "../parts/Prayerpage/PrayerList";

const Prayer = () => {
  const [dailyPrayer, setDailyPrayer] = useState([]);

  useEffect(() => {
    getDailyPrayer();
  }, []);

  return (
    <>
      <Layout>
        <Hero />
        <PrayerList />
      </Layout>
    </>
  );
};

export default Prayer;
