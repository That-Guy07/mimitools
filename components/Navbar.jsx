import React from "react";
import { RiShareForwardFill, RiPagesLine } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { FaTools } from "react-icons/fa";
import { TbUserScreen } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="Navbar rounded-lg hover:bg-gray-100 shadow-lg py-4">
      <div className="flex justify-between items-center mx-auto max-w-4xl xl:max-w-6xl">
        <div className="flex items-center mx-3">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="focus:outline-none bg-red-600 text-gray-100 rounded-full p-2 m-2">
                  <VscThreeBars className="text-xl " />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <div className="font-semibold text-xl tracking-wide flex">
                        <span className="text-red-600">mini</span>
                        <span className="text-gray-100 bg-red-600 rounded-full px-2">
                          Tools
                        </span>
                      </div>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                  <div className="pt-8">
                    <ul className="space-y-4">
                      <li>
                        <Link href="/tools">
                          <div className="flex items-center">
                            <span className="bg-red-600 text-gray-100 rounded-full px-2 text-lg">
                              T
                            </span>
                            <span className="text-red-600 text-lg">ools</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/developer">
                          <div className="flex items-center">
                            <span className="bg-red-600 text-gray-100 rounded-full px-2 text-lg">
                              D
                            </span>
                            <span className="text-red-600 text-lg">
                              eveloper
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <div className="flex items-center">
                            <span className="bg-red-600 text-gray-100 rounded-full px-2 text-lg">
                              A
                            </span>
                            <span className="text-red-600 text-lg">bout</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <div className="flex">
                          <span className="bg-red-600 text-gray-100 rounded-full text-lg px-2">
                            S
                          </span>
                          <span className="text-red-600 text-lg">hare</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </SheetDescription>
              </SheetContent>
            </Sheet>
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
        <div className="hidden md:block">
          <ul className="space-x-4 flex">
            <li>
              <Link href="/tools">
                <div className="flex items-center bg-red-600 hover:bg-red-700 cursor-pointer text-gray-100 px-4 py-2 rounded-full">
                  <FaTools className="mr-2" />
                  <span>Tools</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/developer">
                <div className="flex items-center bg-red-600 hover:bg-red-700 cursor-pointer text-gray-100 px-4 py-2 rounded-full">
                  <TbUserScreen className="mr-2" />
                  <span>Developer</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="flex items-center bg-red-600 hover:bg-red-700 cursor-pointer text-gray-100 px-4 py-2 rounded-full">
                  <RiPagesLine className="mr-2" />
                  <span>About</span>
                </div>
              </Link>
            </li>
          </ul>
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
