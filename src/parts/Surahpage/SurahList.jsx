import React from "react";

// import parts
import SurahAyat from "./SurahAyat";

const SurahList = () => {
  return (
    <section className="section pt-12">
      <div className="container">
        <div className="grid justify-center gap-8">
          <SurahAyat />
        </div>
      </div>
    </section>
  );
};

export default SurahList;
