import React from "react";

// import parts
import HusnaCard from "./HusnaCard";

const HusnaList = ({ asmaulHusna }) => {
  return (
    <section className="section pt-12">
      <div className="container grid grid-cols-[repeat(2,max-content)] justify-center gap-8">
        {asmaulHusna?.map((husna) => {
          return <HusnaCard key={husna.number} asmaulHusna={husna} />;
        })}
      </div>
    </section>
  );
};

export default HusnaList;
