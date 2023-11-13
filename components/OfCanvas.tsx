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
          <div className="flex flex-col h-[100%] justify-center items-start ps-10">
            <p className="text-white font-bold text-lg">Adresa:</p>
            <p className="text-white">Ulica XX, 05561, Jaklovce</p>
            <p className="text-white font-bold text-lg mt-4">Kontakt:</p>
            <p className="text-white">email: email@gmail.com</p>
            <p className="text-white">telefónne číslo: 090x xxx xxx</p>
            <p className="text-white font-bold text-lg mt-4">Sledujte nás:</p>
            <Image
              src={Instagram}
              alt="instagram-logo"
              className="w-[10%] mt-4 cursor-pointer lg:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110"
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
