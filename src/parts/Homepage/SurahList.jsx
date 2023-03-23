import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// import api
import { getAllSurah } from "../../api/Api";

// import parts
import SurahCard from "./SurahCard";

const SurahList = () => {
  const [surah, setSurah] = useState([]);
  const [filteredSurah, setFilteredSurah] = useState([]);
  const [searchSurah, setSearchSurah] = useState("");

  useEffect(() => {
    getAllSurah()
      .then((response) => {
        setSurah(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const searched =
      searchSurah === ""
        ? surah
        : surah.filter((item) =>
            item.nama_latin.toLowerCase().includes(searchSurah.toLowerCase())
          );

    setFilteredSurah(searched);
  }, [surah, searchSurah]);

  // handle search surah by name
  const handleSearchSurah = (event) => {
    setSearchSurah(event.target.value);
  };

  return (
    <section className="section pt-12">
      <div className="container grid gap-8">
        <form className="flex h-[56px] max-w-full items-center rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <div className="inline-flex h-full min-w-[56px] items-center justify-center">
            <RiSearchLine className="text-[1.5rem] text-green-600" />
          </div>
          <input
            type="text"
            placeholder="Surah apa yang ingin kamu baca?"
            onChange={handleSearchSurah}
            className="h-full w-full bg-transparent pr-6 font-bold text-gray-900 outline-none placeholder:font-semibold placeholder:text-gray-600 dark:text-white dark:placeholder:text-gray-300"
          />
        </form>

        <div className="grid gap-4">
          {filteredSurah?.map((surah, index) => {
            return <SurahCard key={index} surah={surah} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SurahList;
