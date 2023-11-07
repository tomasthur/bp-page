"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../public/logo-bp-menu.png";
import Image from "next/image";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full fixed top-0 bg-gray-100 shadow z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-2 md:block">
              <Link href={"/"} onClick={() => setNavbar(false)}>
                <Image
                  src={Logo}
                  alt="logo"
                  className=" w-36 md:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110"
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar((p) => !p)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-800 animate-fadeIn"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-800 animate-fadeIn"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center relative md:block pb-0 ${
                navbar ? "block animate-openMenu" : "hidden"
              }`}
            >
              <ul className="flex flex-col items-center justify-center space-y-10 md:flex md:flex-row md:space-x-6 md:space-y-0 pb-3 md:pb-0">
                <li className="text-gray-800 animate-fadeIn md:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
                  <Link href={"/"} onClick={() => setNavbar(false)}>
                    DOMOV
                  </Link>
                </li>
                <li className="text-gray-800 animate-fadeIn md:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
                  <Link href={"/portfolio"} onClick={() => setNavbar(false)}>
                    PORTFÓLIO
                  </Link>
                </li>
                <li className="text-gray-800 animate-fadeIn md:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
                  <Link href={"/about"} onClick={() => setNavbar(false)}>
                    O NÁS
                  </Link>
                </li>
                <li className="text-gray-800 animate-fadeIn md:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
                  <Link href={"/pricelist"} onClick={() => setNavbar(false)}>
                    CENNÍK
                  </Link>
                </li>
                <li className="text-gray-800 animate-fadeIn md:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
                  <Link href={"/contact"} onClick={() => setNavbar(false)}>
                    KONTAKT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
