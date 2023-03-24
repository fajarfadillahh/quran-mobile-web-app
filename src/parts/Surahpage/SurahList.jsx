import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import api
import { getSurahById } from "../../api/Api";

// import parts
import SurahAyat from "./SurahAyat";

const SurahList = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    // automatic to top
    window.scrollTo(0, 0);

    getSurahById(id)
      .then((response) => {
        setSurah(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <section className="grid gap-12 pb-16">
      <div className="bg-gradient-to-tl from-green-600 to-green-500 pt-32 pb-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-arabic text-[84px] font-bold text-white">
            {surah.arabic}
          </h1>
          <h3 className="-mt-7 text-[28px] font-extrabold text-white">
            {surah.latin}
          </h3>
          <p className="font-semibold text-white">({surah.translation})</p>
        </div>
      </div>

      <div className="container">
        <div className="grid gap-8">
          {surah.ayat?.map((surah, index) => {
            return <SurahAyat key={index} surah={surah} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SurahList;
