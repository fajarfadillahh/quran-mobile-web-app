import React from "react";
import { Link } from "react-router-dom";
import { RiMoonClearLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[768px] bg-green-200">
      <div className="container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="text-[24px] font-extrabold -tracking-tighter text-gray-900"
        >
          Qur'an.
        </Link>

        <div className="inline-flex cursor-pointer items-center gap-1 text-gray-900">
          <RiMoonClearLine size="20px" />
          <h3 className="text-[14px] font-bold -tracking-tighter">Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
