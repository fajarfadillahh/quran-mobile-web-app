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
    window.scrollTo(0, 0);

    getDailyPrayer()
      .then((result) => {
        setDailyPrayer(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <Hero />
        <PrayerList dataPrayer={dailyPrayer} />
      </Layout>
    </>
  );
};

export default Prayer;
