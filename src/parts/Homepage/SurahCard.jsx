import React from "react";

const SurahCard = ({ surah }) => {
  return (
    <div className="flex min-h-[72px] items-center justify-between rounded-md bg-white p-4 shadow-lg transition hover:ring-2 hover:ring-green-600">
      <div className="inline-flex items-center gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-[14px] font-bold text-white">
          {surah.nomor_surah}
        </span>

        <div className="max-w-[180px] overflow-hidden">
          <div className="flex items-center gap-1">
            <h3 className="section-title whitespace-nowrap">
              {surah.nama_latin}
            </h3>
            <p className="section-text truncate text-[12px]">({surah.arti})</p>
          </div>
          <p className="section-text text-[12px]">
            Gol. Surah - {surah.jumlah_ayat} Ayat
          </p>
        </div>
      </div>

      <h1 className="font-arabic text-[24px] font-bold text-gray-900">
        {surah.nama_surah}
      </h1>
    </div>
  );
};

export default SurahCard;
