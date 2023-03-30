import React from "react";

// import components
import Layout from "../components/Layout";
import Hero from "../parts/Prayerpage/Hero";
import PrayerList from "../parts/Prayerpage/PrayerList";

const Prayer = () => {
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
