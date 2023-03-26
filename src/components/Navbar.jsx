import React from "react";
import { NavLink } from "react-router-dom";
import { FaQuran, FaPrayingHands, FaStarAndCrescent } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto flex h-[84px] max-w-[480px] items-center justify-center bg-white shadow-[0_-6px_15px_rgba(0,0,0,0.1)] transition dark:bg-gray-900">
      <div className="container">
        <ul className="flex items-center justify-around">
          {[
            [<FaQuran />, "Quran", "/"],
            [<FaPrayingHands />, "Prayer", "/prayer"],
            [<FaStarAndCrescent />, "Husna", "/husna"],
          ].map(([icon, text, link]) => {
            return (
              <NavLink
                to={link}
                key={text}
                className="navbar-active inline-flex flex-col items-center gap-1 text-gray-600 dark:text-gray-500"
              >
                <span className="text-[1.5rem]">{icon}</span>
                <p className="text-[14px] font-extrabold">{text}</p>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
