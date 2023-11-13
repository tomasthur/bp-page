import React from "react";
import Image from "next/image";
import ArchStudy1 from "../public/archStudy.jpg";
import ArchStudy2 from "../public/archStudy2.jpg";
import ArchStudy3 from "../public/archStudy3.jpg";

const ArchitectonicStudyPage = () => {
  const images = [ArchStudy1, ArchStudy2, ArchStudy3];

  return (
    <section id="architectonics" className="pt-16">
      <h1 className="text-3xl lg:text-4xl font-extrabold">
        Architektonická štúdia
      </h1>
      <div className="w-[90%] flex flex-col m-auto mt-4 lg:mt-8">
        <p className="text-xl text-gray-500 lg:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          labore repudiandae voluptas, iusto similique, nulla iste sed
          accusantium voluptates autem facilis, sapiente laborum animi
          praesentium itaque odio eaque enim? Nemo!
        </p>
        <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center mt-4">
          {images.map((img: any) => (
            <Image
              key={img}
              src={img}
              alt="architektonicka studia"
              className="z-20 w-[100%] lg:w-[30%] mb-4 lg:mb-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectonicStudyPage;
