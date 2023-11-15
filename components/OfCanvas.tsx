import React, { useState } from "react";
import Image from "next/image";
import Instagram from "../public/instagram-logo.png";

const OfCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`offcanvas ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-inner">
          <div className="flex flex-col h-[100%] justify-center items-start ps-4">
            <p className="text-white font-bold text-lg mt-4">
              Ing.arch. Patrícia Humeňanská
            </p>
            <p className="text-white">email: humenanska.pb@gmail.com</p>
            <p className="text-white">telefónne číslo: +421 907 375 902</p>
            <p className="text-white font-bold text-lg mt-4">
              Bc. Beáta Šimková
            </p>
            <p className="text-white">email: simkova.pb@gmail.com</p>
            <p className="text-white">telefónne číslo: +421 903 838 666</p>
            <p className="text-white font-bold text-lg mt-4">Sledujte nás:</p>
            <Image
              src={Instagram}
              alt="instagram-logo"
              className="w-[30px] mt-4 cursor-pointer lg:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={() => window.open("https://www.instagram.com/bejocka/")}
            />
          </div>
        </div>
      </div>
      <button
        className={`hidden lg:block lg:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110 fixed bottom-2 right-5 z-50 ${
          isOpen ? "text-white" : "text-black"
        }`}
        onClick={toggleMenu}
      >
        | |
      </button>
    </>
  );
};

export default OfCanvas;
