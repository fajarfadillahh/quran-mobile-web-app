import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

// import custom hooks
import useColorMode from "../hooks/useColorMode";

const Header = () => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [headerBgColor, setHeaderBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [colorMode, setColorMode] = useColorMode();

  // handle scrolling for sticky header
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setStickyHeader(true);
      setHeaderBgColor("bg-white shadow-lg dark:bg-gray-900");
      setTextColor("text-gray-900 dark:text-white");
    } else {
      setStickyHeader(false);
      setHeaderBgColor("bg-transparent shadow-none");
      setTextColor("text-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stickyHeader]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 mx-auto max-w-[480px] transition ${headerBgColor}`}
    >
      <div className="container flex h-24 items-center justify-between">
        <Link
          to="/"
          className={`text-[24px] font-extrabold transition ${textColor}`}
        >
          Qur'an.
        </Link>

        <div
          className={`inline-flex cursor-pointer items-center gap-1 transition ${textColor}`}
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
