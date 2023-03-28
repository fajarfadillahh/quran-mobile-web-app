import React from "react";

// import parts
import HusnaCard from "./HusnaCard";

const HusnaList = () => {
  return (
    <section className="section pt-12">
      <div className="container grid grid-cols-2 gap-8">
        <HusnaCard />
        <HusnaCard />
      </div>
    </section>
  );
};

export default HusnaList;
