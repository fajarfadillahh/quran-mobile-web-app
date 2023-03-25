import React from "react";
import { NavLink } from "react-router-dom";
import { FaQuran, FaPray, FaStarAndCrescent } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className="fixed left-0 bottom-0 flex h-[84px] w-full items-center justify-center bg-white shadow-[-6px_0_15px_rgba(0,0,0,0.2)]">
      <div className="container">
        <ul className="flex items-center justify-around">
          <NavLink
            to="/"
            className="inline-flex flex-col items-center gap-1 text-gray-600"
          >
            <FaQuran size="1.5rem" />
            <span className="text-[14px] font-extrabold">Quran</span>
          </NavLink>
          <NavLink
            to="/prayer"
            className="inline-flex flex-col items-center gap-1 text-gray-600"
          >
            <FaPray size="1.5rem" />
            <span className="text-[14px] font-extrabold">Prayer</span>
          </NavLink>
          <NavLink
            to="/husna"
            className="inline-flex flex-col items-center gap-1 text-gray-600"
          >
            <FaStarAndCrescent size="1.5rem" />
            <span className="text-[14px] font-extrabold">Husna</span>
          </NavLink>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
