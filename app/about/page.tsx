"use client";

import React, { useState } from "react";
import Logo from "../../public/logo-bp.png";
import Image from "next/image";
import Watermark from "@/components/Watermark";
import FlipCard from "@/components/FlipCard";
import Bejka from "../../public/simkova_beata.jpg";
import Patka from "../../public/humenanska_patricia.jpg";

const About = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-20 animate-fadeIn">
        <Watermark />
        <h1
          className={`hidden lg:block absolute left-8 top-4 text-[18vw] font-extrabold m-auto text-black z-10`}
        >
          O nás
        </h1>
        <div className="w-[100vw] p-3 lg:p-0 lg:w-[50vw] flex flex-col z-10">
          <h1 className="lg:hidden text-7xl font-extrabold text-gray-800 mb-7">
            O nás
          </h1>
          <Image
            src={Logo}
            alt="logo"
            className="lg:hidden fixed top-36 left-14 opacity-10"
          />
          <p className="text-xl text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            aperiam porro nam earum ex, sunt neque laudantium accusantium aut
            temporibus dicta ad natus asperiores hic alias soluta aspernatur quo
            voluptatem.
          </p>
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            quidem laudantium. Delectus pariatur quidem laborum odit ex possimus
            id fugit corrupti illo enim consequatur minima, harum ipsa aliquam
            blanditiis nemo!
          </p>
          <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center m-auto mt-4 lg:mt-10">
            <FlipCard
              image={Patka}
              name="Ing.arch. Patrícia Keruľová"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse quas sunt facere explicabo, atque repudiandae ea optio odit vero amet similique, vel consequatur rem modi ab magnam distinctio? Atque."
              alt="Patricia Humenanska"
            />
            <FlipCard
              image={Bejka}
              name="Bc. Beáta Šimková"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse quas sunt facere explicabo, atque repudiandae ea optio odit vero amet similique, vel consequatur rem modi ab magnam distinctio? Atque."
              alt="Beata Simkova"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
