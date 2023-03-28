import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import parts
import SurahCard from "./SurahCard";

const SurahList = ({ dataSurah }) => {
  const [filteredSurah, setFilteredSurah] = useState([]);
  const [searchSurah, setSearchSurah] = useState("");

  useEffect(() => {
    const searched =
      searchSurah === ""
        ? dataSurah
        : dataSurah.filter((item) =>
            item.transliteration.toLowerCase().includes(searchSurah)
          );

    setFilteredSurah(searched);
  }, [dataSurah, searchSurah]);

  // handle search surah by name
  const handleSearchSurah = (event) => {
    setSearchSurah(event.target.value.toLowerCase());
  };

  return (
    <section className="section pt-12">
      <div className="container grid gap-8">
        <form className="flex h-[56px] max-w-full items-center rounded-lg bg-white shadow-lg transition dark:bg-gray-800">
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
            return (
              <Link to={`/surah/${surah.surah_number}`} key={index}>
                <SurahCard surah={surah} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SurahList;
