import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

// import custom hooks
import useColorMode from "../hooks/useColorMode";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-[480px] bg-transparent transition">
      <div className="container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="text-[24px] font-extrabold text-white transition"
        >
          Qur'an.
        </Link>

        <div
          className="inline-flex cursor-pointer items-center gap-1 text-white transition"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          {colorMode === "light" ? (
            <>
              <RiMoonClearFill size="20px" />
              <h3 className="text-[14px] font-bold">Dark Mode</h3>
            </>
          ) : (
            <>
              <RiSunFill size="20px" />
              <h3 className="text-[14px] font-bold">Light Mode</h3>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
