import React from "react";

const SurahCard = () => {
  return (
    <div className="flex h-[72px] items-center justify-between rounded-md bg-white px-4 shadow-lg transition hover:ring-2 hover:ring-green-600">
      <div className="inline-flex items-center gap-4">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600 font-bold text-white">
          1
        </span>

        <div>
          <div className="inline-flex items-center gap-1">
            <h3 className="section-title">Nama surah</h3>
            <p className="section-text text-[12px]">(Arti surah)</p>
          </div>
          <p className="section-text text-[12px]">Gol. surah - Jum. ayat</p>
        </div>
      </div>

      <h1 className="font-arabic text-[24px] font-bold text-gray-900">
        الفاتحة
      </h1>
    </div>
  );
};

export default SurahCard;
