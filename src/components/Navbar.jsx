import React from "react";
import { NavLink } from "react-router-dom";
import { FaQuran, FaPrayingHands, FaStarAndCrescent } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className="fixed inset-x-0 bottom-0 z-50 mx-auto flex h-[84px] max-w-[480px] items-center justify-center bg-white shadow-[0_-6px_15px_rgba(0,0,0,0.08)]">
      <div className="container">
        <ul className="flex items-center justify-around">
          <NavLink
            to="/"
            className="navbar inline-flex flex-col items-center gap-1 text-gray-600"
          >
            <FaQuran size="1.5rem" />
            <span className="text-[14px] font-extrabold">Quran</span>
          </NavLink>
          <NavLink
            to="/prayer"
            className="navbar inline-flex flex-col items-center gap-1 text-gray-600"
          >
            <FaPrayingHands size="1.5rem" />
            <span className="text-[14px] font-extrabold">Prayer</span>
          </NavLink>
          <NavLink
            to="/husna"
            className="navbar inline-flex flex-col items-center gap-1 text-gray-600"
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
