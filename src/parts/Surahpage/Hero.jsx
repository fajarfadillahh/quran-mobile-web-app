import React from "react";

const Hero = () => {
  return (
    <section className="section bg-gradient-to-tl from-green-600 to-green-500 pt-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-arabic text-[84px] font-bold text-white">
            الفاتحة
          </h1>
          <h3 className="-mt-7 text-[28px] font-extrabold text-white">
            Al-Fatihah
          </h3>
          <p className="font-semibold text-white">(Pembuka)</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
