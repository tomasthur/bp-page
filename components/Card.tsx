import React, { useState } from "react";
import Image from "next/image";

interface CardType {
    image: any;
    alt: string;
    heading?: string;
    description: string;
    onClick?: () => void;
}

const Card = ({image, alt, heading, description, onClick}: CardType) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-[60vw] lg:w-[20vw] z-20 bg-transparent overflow-hidden shadow-2xl cursor-pointer transition-all"
      onClick={onClick}
    >
      <Image src={image} alt={alt} />
      <div
        className={`absolute bottom-[0px] lg:bottom-[-220px] bg-gray-200 opacity-60 transition-all ${
          hover ? "lg:bottom-[0px]" : ""
        }`}
      >
        <h1 className="font-bold">{heading}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
