import React from "react";

const SurahAyat = () => {
  return (
    <div className="grid gap-3">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-[14px] font-bold text-white">
          1
        </span>
        <h1 className="max-w-[330px] text-right text-[32px] font-bold text-gray-900">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h1>
      </div>

      <div className="grid gap-2">
        <p className="text-[14px] font-semibold text-amber-600">
          Bismillāhir-raḥmānir-raḥīm(i).
        </p>
        <h3 className="font-bold text-gray-900">
          Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.
        </h3>
      </div>
    </div>
  );
};

export default SurahAyat;
