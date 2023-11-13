import React from "react";
import Image from "next/image";
import SmallConstruction from "../public/drobne_stavby.jpg";

const SmallConstructsPage = () => {
  return (
    <section id="smallConstructs">
      <h1 className="text-3xl lg:text-4xl font-extrabold">Drobné stavby</h1>
      <div className="flex flex-col lg:flex-row justify-between m-auto items-center w-[90%]">
        <div className="w-[90%] lg:w-[45%]">
          <p className="text-xl text-gray-500 lg:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus labore repudiandae voluptas, iusto similique, nulla
            iste sed accusantium voluptates autem facilis, sapiente laborum
            animi praesentium itaque odio eaque enim? Nemo!
          </p>
        </div>
        <div className="w-[90%] lg:w-[45%]">
          <Image src={SmallConstruction} alt="Drobna stavba" className="my-4 lg:my-0" />
        </div>
      </div>
    </section>
  );
};

export default SmallConstructsPage;
