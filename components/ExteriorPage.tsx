import React from "react";
import Image from "next/image";
import Ext1 from "../public/exterior1.jpg";
import Ext2 from "../public/exterior2.jpg";
import Ext3 from "../public/exterior3.jpg";
import Ext4 from "../public/exterior4.jpg";
import { Carousel } from "react-responsive-carousel";

const ExteriorPage = () => {
    const images = [Ext1, Ext2, Ext3, Ext4];
  return (
    <section id="exteriors" className="pt-16">
      <h1 className="text-3xl lg:text-4xl font-bold">Exteriér</h1>

      <p className="text-xl text-gray-500 text-center w-[900%] m-auto mt-8 lg:w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint
        perspiciatis itaque provident placeat, veniam esse atque inventore
        adipisci distinctio ratione excepturi quis amet non iusto voluptatum,
        aspernatur expedita error?
      </p>

      <Carousel
        infiniteLoop
        autoFocus
        showIndicators={true}
        showStatus={true}
        showArrows={true}
        className="w-[100%] lg:w-[80%] m-auto mt-6"
        swipeable={true}
      >
        {images.map((image: any, index: any) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="h-auto lg:h-[70vh] object-cover self-center"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ExteriorPage;
