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
    getSurahById(id)
      .then((response) => {
        setSurah(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <section className="section pt-12">
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
