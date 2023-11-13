import React from "react";
import Project from "../public/pd.jpg";
import Image from "next/image";


const ProjectsPage = () => {
  return (
    <section id="projects" className="pt-8 lg:pt-16">
      <h1 className="text-3xl lg:text-4xl font-extrabold">
        Projektová dokumentácia
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] lg:w-[80%] m-auto">
        <div className="w-[100%] lg:w-[45%] mt-4 lg:mt-0">
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint
            perspiciatis itaque provident placeat, veniam esse atque inventore
            adipisci distinctio ratione excepturi quis amet non iusto
            voluptatum, aspernatur expedita error?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint
            perspiciatis itaque provident placeat, veniam esse atque inventore
            adipisci distinctio ratione excepturi quis amet non iusto
            voluptatum, aspernatur expedita error?
          </p>
        </div>
        <div className="w-[100%] lg:w-[45%] mt-4 lg:mt-0">
          <Image src={Project} alt="projektova dokumentacia" className="z-30" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
