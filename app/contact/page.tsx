"use client";

import React from "react";
import Image from "next/image";
import Watermark from "@/components/Watermark";

import Logo from "../../public/logo-bp.png";
import Instagram from "../../public/ig-logo.png";

const Contact = () => {
  return (
    <div className="animate-fadeIn">
      <Watermark />
      <h1 className={`hidden lg:block text-[18vw] font-extrabold m-auto text-black z-10`}>
        Kontakt
      </h1>
      <h1 className="lg:hidden text-7xl font-extrabold text-gray-800 mt-20">
        Kontakt
      </h1>
      <Image
        src={Logo}
        alt="logo"
        className="lg:hidden fixed top-36 left-14 opacity-10"
      />
      <div className="w-[90%] lg:w-[100%] h-[80%] m-auto lg:px-10 flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col w-[100%] lg:w-[45%] lg:border-r-2 border-black mb-6 lg:mb-0">
          <div className="mb-6 z-30">
            <p className="font-bold">Ing.arch. Patrícia Keruľová</p>
            <p className="z-30">email: humenanska.pb@gmail.com</p>
            <p className="z-30">telefónne číslo: +421 907 375 902</p>
          </div>
          <div className="mb-6 z-30">
            <p className="font-bold">Bc. Beáta Šimková</p>
            <p className="z-30">email: simkova.pb@gmail.com</p>
            <p className="z-30">telefónne číslo: +421 903 838 666</p>
          </div>
          <p className="font-bold text-lg">Sledujte nás:</p>
          <Image
            src={Instagram}
            alt="instagram-logo"
            className="w-[20px] md:w-[30px] mt-2 lg:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            onClick={() => window.open("https://www.instagram.com/bejocka/")}
          />
        </div>
        <div className="flex flex-col w-[100%] lg:w-[45%]">
          <div className="flex flex-col">
            <label htmlFor="fullName">Celé meno</label>
            <input
              type="text"
              id="fullName"
              className="border-b-2 bg-transparent z-30"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="border-b-2 bg-transparent z-30"
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <label htmlFor="message">Správa</label>
            <textarea id="message" className="border-b-2 bg-transparent z-30" />
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
