import React from "react";
import Image from "next/image";
import Watermark from "@/components/Watermark";

import Logo from "../../public/logo-bp.png";

const Contact = () => {
  return (
    <div>
      <Watermark text={"Kontakt"} opacity={100} />
      <h1 className="lg:hidden text-7xl font-extrabold text-gray-800 mt-20">
        Kontakt
      </h1>
      <Image
        src={Logo}
        alt="logo"
        className="lg:hidden fixed top-36 left-14 opacity-10"
      />
      <div className="w-[90%] m-auto mt-10 lg:mt-80 flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col w-[100%] lg:w-[45%] lg:border-r-2 border-black mb-6 lg:mb-0">
          <div className="mb-6 z-30">
            <p className="font-bold">Adresa:</p>
            <p className="z-30">Ulica XX, 05561, Jaklovce</p>
          </div>
          <div className="mb-6 z-30">
            <p className="font-bold">Kontakt:</p>
            <p className="z-30">email: email@gmail.com</p>
            <p className="z-30">telefonne cislo: 090x xxx xxx</p>
          </div>
          <div className="flex">
            <button className="font-bold me-5 cursor-pointer z-30 lg:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
              Instagram
            </button>
            <button className="font-bold me-5 cursor-pointer z-30 lg:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
              Facebook
            </button>
            <button className="font-bold cursor-pointer z-30 lg:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110">
              LinkedIn
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[100%] lg:w-[45%]">
          <div className="flex flex-col">
            <label htmlFor="fullName">Celé meno</label>
            <input
              type="text"
              id="fullName"
              className="border-b-2 bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="border-b-2 bg-transparent"
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <label htmlFor="message">Správa</label>
            <textarea id="message" className="border-b-2 bg-transparent" />
          </div>
          <div className="flex w-[85%] mt-8">
            <button className="bg-black text-white p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
              Odoslať správu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
