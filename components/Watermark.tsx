import React from "react";
import Logo from "../public/logo-bp.png";
import Image from "next/image";

interface WaterMarkType {
  text: string;
  opacity: number;
}

const Watermark = ({ text, opacity }: WaterMarkType) => {
  return (
    <div className="hidden lg:flex justify-start w-[30vw] pr-16">
      <h1 className={`absolute top-0 opacity-${opacity} left-6 text-[18vw] font-extrabold m-auto text-black z-10`}>
        {text}
      </h1>
      <Image
        src={Logo}
        alt="logo"
        className="fixed top-0 left-14 opacity-10 z-0"
      />
    </div>
  );
};

export default Watermark;
