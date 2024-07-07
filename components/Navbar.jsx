import React from "react";
import { RiShareForwardFill } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="Navbar rounded-lg hover:bg-gray-100 shadow-lg mx-auto max-w-4xl py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center mx-3">
          <div className="bg-red-600 text-gray-100 rounded-full p-2 mr-2 md:hidden">
            <VscThreeBars className="text-xl " />
          </div>
          <Link href="/">
            <div className="font-semibold text-xl tracking-wide flex">
              <span className="text-red-600">mini</span>
              <span className="text-gray-100 bg-red-600 rounded-full px-2">
                Tools
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center bg-red-600 hover:bg-red-700 cursor-pointer text-gray-100 mr-3 p-2 md:px-4 md:py-2 rounded-full">
          <span className="hidden md:block font-medium">Share</span>
          <RiShareForwardFill className="text-xl md:ml-1" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
