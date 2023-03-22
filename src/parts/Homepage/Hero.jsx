import React from "react";

// import image
import HeroImg from "../../assets/images/quran-img.png";

const Hero = () => {
  return (
    <section className="section bg-gradient-to-tl from-green-600 to-green-500 pt-32">
      <div className="container grid justify-items-center gap-8">
        <img src={HeroImg} alt="hero img" className="max-w-[180px]" />

        <div className="text-center">
          <h1 className="section-title max-w-[330px] pb-4 text-[18px] text-white">
            "Barang siapa membaca satu huruf dari kitab Allah, maka dibalas satu
            kebaikan dan satu kebaikan dilipatgandakan menjadi sepuluh."
          </h1>
          <p className="section-text text-white">~ H.R. At-Tirmidzi ~</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
