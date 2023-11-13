import React from "react";
import Interior1 from "../public/interior1.jpg";
import Interior2 from "../public/interior2.png";
import Interior3 from "../public/interior3.jpg";
import Interior4 from "../public/interior4.jpg";
import Interior5 from "../public/interior5.jpg";
import Interior6 from "../public/interior6.jpg";
import Interior7 from "../public/interior7.jpg";
import Interior8 from "../public/interior8.jpg";
import Interior9 from "../public/interior9.jpg";
import Interior10 from "../public/interior10.jpg";
import Interior11 from "../public/interior11.jpg";
import Interior12 from "../public/interior12.jpg";
import Interior13 from "../public/interior13.jpg";
import Interior14 from "../public/interior14.jpg";
import Interior15 from "../public/interior15.jpg";
import Interior16 from "../public/interior16.jpg";
import Interior17 from "../public/interior17.jpg";
import Interior18 from "../public/interior18.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const InteriorPage = () => {
  const images = [
    Interior1,
    Interior2,
    Interior3,
    Interior4,
    Interior5,
    Interior6,
    Interior7,
    Interior8,
    Interior9,
    Interior10,
    Interior11,
    Interior12,
    Interior13,
    Interior14,
    Interior15,
    Interior16,
    Interior17,
    Interior18,
  ];
  return (
    <section id="interiors" className="scroll-smooth pt-16 flex flex-col">
      <h1 className="text-3xl lg:text-4xl font-extrabold">Interiér</h1>
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

export default InteriorPage;
