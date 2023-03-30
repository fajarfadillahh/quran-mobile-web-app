import React from "react";
import { Collapse } from "react-collapse";
import { RiArrowUpSLine } from "react-icons/ri";

const PrayerAccordion = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-white shadow-lg">
      <div className="flex h-[72px] w-full cursor-pointer items-center justify-between px-4 text-gray-900">
        <h1 className="font-bold">Doa Sebelum Makan</h1>
        <RiArrowUpSLine className="1.3rem" />
      </div>

      <Collapse isOpened={true}>
        <div className="grid h-max w-full gap-4 py-[20px] px-4">
          <h1 className="text-right text-[24px] font-bold text-gray-900">
            اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ
            النَّارِ
          </h1>

          <div className="grid gap-2">
            <p className="text-[14px] font-semibold text-green-600 dark:text-amber-400">
              Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar
            </p>
            <h3 className="text-[14px] font-bold text-gray-900 dark:text-white">
              Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan
              kepada kami dan peliharalah kami dari siksa api neraka
            </h3>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default PrayerAccordion;
