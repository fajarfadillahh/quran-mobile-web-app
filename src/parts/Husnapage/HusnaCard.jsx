import React from "react";

const HusnaCard = () => {
  return (
    <div className="w-[175px] rounded-md bg-white shadow-md transition hover:ring-2 hover:ring-green-600">
      <div className="grid gap-4 p-6">
        <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-green-600 text-[12px] font-bold text-white">
          1
        </span>

        <div className="grid gap-2 text-center">
          <h1 className="truncate text-[28px] font-bold text-gray-900">
            الرَّحْمَنُ
          </h1>

          <div className="overflow-hidden">
            <h3 className="truncate whitespace-nowrap text-[14px] font-extrabold text-green-600">
              Nama husna Nama husna
            </h3>
            <p className="text-[12px] text-gray-600">
              Lorem ipsum dolor sit, amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HusnaCard;
