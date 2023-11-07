"use client";

import Watermark from "@/components/Watermark";
import React, { useState } from "react";
import Card from "@/components/Card";
import Interior from "../../public/interiery.jpg";
import Exterior from "../../public/exteriery.jpg";
import ArchitectonicStudies from "../../public/architektonicke_studie.png";
import SmallConstruction from "../../public/drobne_stavby.jpg";
import ProjectDocumentation from "../../public/projektova_dokumentacia.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Portfolio = () => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <div>
      <Watermark text="Portfolio" opacity={90} />

      <div className="flex w-[80vw] justify-between p-10 m-auto mt-80">
        <Link href={"/portfolio#interiors"} scroll={true}>
          <Card
            image={Interior}
            alt={"interier"}
            heading="Interiery"
            description="Lorem ipsum dolor sit amet bla bla bla..."
          />
        </Link>
        <Link href={"/portfolio#projects"} scroll>
          <Card
            image={ProjectDocumentation}
            alt={"projektova dokumentacia"}
            heading="Projektova dokumentacia"
            description="Lorem ipsum dolor sit amet bla bla bla..."
          />
        </Link>
        <Link href={"/portfolio#architectonics"}>
          <Card
            image={ArchitectonicStudies}
            alt={"architektonicke studie"}
            heading="Architektonicke studie"
            description="Lorem ipsum dolor sit amet bla bla bla..."
          />
        </Link>
      </div>
      <div className="flex w-[60vw] m-auto justify-around">
        <Link href={"/portfolio#exteriors"}>
          <Card
            image={Exterior}
            alt={"exterier"}
            heading="Exteriery"
            description="Lorem ipsum dolor sit amet bla bla bla..."
          />
        </Link>
        <Link href={"/portfolio#smallConstructs"}>
          <Card
            image={SmallConstruction}
            alt={"drobne stavby"}
            heading="Drobne stavby"
            description="Lorem ipsum dolor sit amet bla bla bla..."
          />
        </Link>
      </div>
      <section id="interiors" className="scroll-smooth">
        <h1 className=" text-4xl h-[80vh] scroll-smooth ">Interiery</h1>
      </section>
      <section id="projects">
        <h1 className=" text-4xl h-[80vh] mt-10">Projektova dokumentacia</h1>
      </section>
      <section id="architectonics">
        <h1 className=" text-4xl h-[80vh]">Architektonicke studie</h1>
      </section>
      <section id="exteriors">
        <h1 className=" text-4xl h-[80vh]">Exteriery</h1>
      </section>
      <section id="smallConstructs">
        <h1 className=" text-4xl h-[80vh]">Drobne stavby</h1>
      </section>
    </div>
  );
};

export default Portfolio;
