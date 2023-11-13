"use client";

import Watermark from "@/components/Watermark";
import React from "react";
import Card from "@/components/Card";
import Interior from "../../public/interior2.png";
import Exterior from "../../public/exterior1.jpg";
import ArchitectonicStudies from "../../public/archStudy.jpg";
import SmallConstruction from "../../public/drobne_stavby.jpg";
import ProjectDocumentation from "../../public/projektova_dokumentacia.jpg";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/logo-bp.png";
import InteriorPage from "@/components/InteriorPage";
import ProjectsPage from "@/components/ProjectsPage";
import ArchitectonicStudyPage from "@/components/ArchitectonicStudyPage";
import ExteriorPage from "@/components/ExteriorPage";
import SmallConstructsPage from "@/components/SmallConstructsPage";

const Portfolio = () => {
  return (
    <div>
      <Watermark text="Portfólio" opacity={90} />
      <h1 className="lg:hidden text-7xl font-extrabold text-gray-800 mt-20">
        Portfólio
      </h1>
      <Image
        src={Logo}
        alt="logo"
        className="lg:hidden fixed top-36 left-14 opacity-10"
      />

      <div className="mt-10 lg:mt-80 w-[100vw]">
        <div className="w-[80%] flex flex-col lg:flex-row justify-around items-center m-auto">
          <Link href={"/portfolio#interiors"}>
            <Card
              image={Interior}
              alt={"interiér"}
              heading="Interiér"
              description="Lorem ipsum dolor sit amet bla bla bla..."
            />
          </Link>
          <Link href={"/portfolio#projects"} className="mt-10 lg:mt-0">
            <Card
              image={ProjectDocumentation}
              alt={"projektová dokumentácia"}
              heading="Projektová dokumentácia"
              description="Lorem ipsum dolor sit amet bla bla bla..."
            />
          </Link>
          <Link href={"/portfolio#architectonics"} className="mt-10 lg:mt-0">
            <Card
              image={ArchitectonicStudies}
              alt={"architektonická štúdia"}
              heading="Architektonická štúdia"
              description="Lorem ipsum dolor sit amet bla bla bla..."
            />
          </Link>
        </div>
        <div className="w-[80%] flex flex-col lg:flex-row justify-around items-center m-auto lg:mt-10">
          <Link href={"/portfolio#exteriors"} className="mt-10 lg:mt-0">
            <Card
              image={Exterior}
              alt={"exteriér"}
              heading="Exteriér"
              description="Lorem ipsum dolor sit amet bla bla bla..."
            />
          </Link>
          <Link href={"/portfolio#smallConstructs"} className="mt-10 lg:mt-0">
            <Card
              image={SmallConstruction}
              alt={"drobná stavba"}
              heading="Drobná stavba"
              description="Lorem ipsum dolor sit amet bla bla bla..."
            />
          </Link>
        </div>
      </div>

      <InteriorPage />
      <ProjectsPage />
      <ArchitectonicStudyPage />
      <ExteriorPage />
      <SmallConstructsPage />
    </div>
  );
};

export default Portfolio;
