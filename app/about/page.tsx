"use client";

import React, { useState } from "react";
import Logo from "../../public/logo-bp.png";
import Image from "next/image";
import Watermark from "@/components/Watermark";

const About = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-20 animate-fadeIn">
        <Watermark text="O nás" opacity={90} />
        <div className="w-[100vw] p-3 md:p-0 md:w-[50vw] flex flex-col z-10">
          <h1 className="md:hidden text-7xl font-extrabold text-gray-800 mb-7">
            O nás
          </h1>
          <Image
            src={Logo}
            alt="logo"
            className="md:hidden fixed top-36 left-14 opacity-10"
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
          <div className="flex flex-col md:flex-row justify-around items-center mt-4 md:mt-10">
            <div className="mt-5 mb-5 max-w-[50%] md:mb-0 md:mt-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2 z-20">
                Ing.arch. Patricia Kerulova
              </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                esse quas sunt facere explicabo, atque repudiandae ea optio odit
                vero amet similique, vel consequatur rem modi ab magnam
                distinctio? Atque.
              </p>
            </div>
            <div className="max-w-[50%]">
              <h3 className="text-xl font-bold text-gray-800 mb-2 z-20">
                Bc. Beata Simkova
              </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed
                quo impedit numquam, ad laboriosam aut reiciendis, quidem sint
                sit, aspernatur consequuntur? Quo rerum ducimus adipisci
                deleniti eos enim excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
