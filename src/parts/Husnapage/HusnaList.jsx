import React from "react";

// import parts
import HusnaCard from "./HusnaCard";

const HusnaList = ({ asmaulHusna }) => {
  return (
    <section className="section pt-12">
      <div className="container grid grid-cols-[repeat(2,max-content)] justify-center gap-4">
        {asmaulHusna?.map((husna) => {
          return <HusnaCard key={husna.number} husna={husna} />;
        })}
      </div>
    </section>
  );
};

export default HusnaList;
