import React from "react";
import { RiSearchLine } from "react-icons/ri";

// import parts
import SurahCard from "./SurahCard";

const SurahList = () => {
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

        <div className="grid gap-6">
          <SurahCard />
        </div>
      </div>
    </section>
  );
};

export default SurahList;
