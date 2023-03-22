import React from "react";
import { Link } from "react-router-dom";
import { RiMoonClearLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[768px]">
      <div className="container flex h-24 items-center justify-between">
        <Link to="/" className="text-[24px] font-extrabold text-white">
          Qur'an.
        </Link>

        <div className="inline-flex cursor-pointer items-center gap-1 text-white">
          <RiMoonClearLine size="20px" />
          <h3 className="text-[14px] font-bold">Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
