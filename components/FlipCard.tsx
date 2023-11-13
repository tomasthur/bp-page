import React from "react";
import Image from "next/image";

interface FlipCardType {
  image: any;
  name: string;
  description: string;
  alt: string;
}

const FlipCard = ({ image, name, description, alt }: FlipCardType) => {
  return (
    <div className="w-[100%] h-96 lg:w-[50%] m-auto mb-4 lg:mb-">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3 className="text-xl font-bold text-gray-800 mb-2 z-20">
              {name}
            </h3>
            <p>{description}</p>
          </div>
          <div className="flip-card-back">
            <Image src={image} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
