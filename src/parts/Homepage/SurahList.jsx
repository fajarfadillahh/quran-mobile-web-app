import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// import api
import { getAllSurah } from "../../api/Api";

// import parts
import SurahCard from "./SurahCard";

const SurahList = () => {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    getAllSurah()
      .then((response) => {
        setSurah(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="section pt-12">
      <div className="container grid gap-8">
        <form className="flex h-[56px] max-w-full items-center rounded-lg bg-white shadow-lg">
          <div className="inline-flex h-full min-w-[56px] items-center justify-center">
            <RiSearchLine className="text-[1.5rem] text-green-600" />
          </div>
          <input
            type="text"
            placeholder="Surah apa yang ingin kamu baca?"
            className="h-full w-full bg-transparent pr-6 font-bold text-gray-900 outline-none placeholder:font-semibold placeholder:text-gray-600"
          />
        </form>

        <div className="grid gap-4">
          {surah?.map((surah, index) => {
            return <SurahCard key={index} surah={surah} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SurahList;
