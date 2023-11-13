"use client";

import Carousel from "@/components/Carousel";
import Img1 from "../public/1.png";
import Img2 from "../public/2.jpg";
import Img3 from "../public/3.jpg";
import Img4 from "../public/4.jpg";
import Img5 from "../public/6.jpg";
import Img6 from "../public/7.jpg";

import OfCanvas from "@/components/OfCanvas";

export default function Home() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <main className="h-[90vh] mt-14 flex-col justify-center items-center p-5 overflow-hidden animate-fadeIn">
      <Carousel images={images} />
      <OfCanvas />
    </main>
  );
}
