"use client";

import React, { useState } from "react";
import Logo from "../../public/logo-bp.png";
import Image from "next/image";
import Link from "next/link";
import Calculator from "./components/Calculator";
import Watermark from "@/components/Watermark";

interface CalculatorType {
  area: number;
  servicePrice: number;
}

const PriceList = () => {
  const [calculator, setCalculator] = useState<CalculatorType>({
    area: 0,
    servicePrice: 0,
  });
  const [result, setResult] = useState(0);

  const services = [
    {
      id: 0,
      serviceType: "INTERIÉR 2D",
      price: "6 eur",
      priceNumber: 6,
      note: "záleží od typu miestnosti, jej veľkosi a jej funkcie",
      content:
        "Slúži na čo najefektívnejšie rozvrhnutie interiéru / priestoru. Obsahuje pôdorys so základnými rozmermi, rozvrhnutie nábytkov a jednotlivého zariadenia, prípadne dispozičné zmeny spočívajúce v pridaní / odobraní priečky, časti priečky, zmene umiestnenia dverí, okna a pod. Cena obsahuje 2 riešenia Vašej dispozície.",
    },
    {
      id: 1,
      serviceType: "INTERIÉR 3D",
      price: "15 eur",
      priceNumber: 15,
      note: "záleží od typu miestnosti, jej veľkosi a jej funkcie",
      content:
        "Slúži na získanie konkrétnej predstavy o budúcom vzhľade Vášho interiéru. Obsahuje zdigitalizovanie dodaných podkladov, návrh interiéru, fotorealistickú 3D vizualizáciu, konzultáciu návrhu a 1 súbor úprav podľa Vašich požiadaviek, dispozičný návrh rozmiestnenia použitých prvkov v interiéri ( pohľad zhora ), zoznam použitých solitérnych ( zakúpiteľných ) prvkov v interiéri, zoznam použitých dekorov navrhovaných nábytkov.",
    },
    {
      id: 2,
      serviceType: "PROJEKTOVÁ DOKUMENTÁCIA 2D",
      price: "10 eur",
      priceNumber: 10,
      note: "záleží od typu objektu, jeho veľkosi a jeho funkcie",
      content:
        "Slúži ako podklad pre stavebné povolenie. Obsahuje situáciu, pôdorysy, rezy a pohľady V prípade zmenu stavy stavby (rekonštrukcie) sa dokumentácia delí na dve časti - búracie práce a nový stav. Dokumentácia neslúži ako podklad pre realizáciu. Jej podrobnosť je však postačujúca pre úradné kroky, oslovenie stavebnej relizačnej firmy či nacenenie jednotlibých jej častí, prípadne celku.",
    },
    {
      id: 3,
      serviceType: "PROJEKTOVÁ DOKUMENTÁCIA 3D + VIZUALIZÁCIE",
      price: "10 eur",
      priceNumber: 10,
      note: "záleží od typu objektu, jeho veľkosi a jeho funkcie",
      content:
        "Vyhotovuje sa ako doplnenie projektovej dokumentácie pre Vašu lepšiu predstavivosť a pre uspokojenie Vašich vízií. Nie je to potrebná súčasť projektovej dokumentácie pre stavebné povolenie. Výsledok je 3D model a 5 exteriérových vizualizácií.",
    },
    {
      id: 4,
      serviceType: "EXTERIÉRY 2D",
      price: "6 eur",
      priceNumber: 6,
      note: "záleží od typu objektu, jeho veľkosi a jeho funkcie",
      content:
        "Slúži na čo najefektívnejšie rozvrhnutie vonkajších priestorov. Obsahuje pôdorys so základnými rozmermi, pohľady, typické rezy, rozvrhnutie záhradných objektov a rozvrhnutie zelene.",
    },
    {
      id: 5,
      serviceType: "EXTERIÉRY 3D + VIZUALIZÁCIE",
      price: "15 eur",
      priceNumber: 15,
      note: "záleží od typu objektu, jeho veľkosi a jeho funkcie",
      content:
        "Vyhotovuje sa ako doplnenie projektovej dokumentácie pre Vašu lepšiu predstavivosť a pre uspokojenie Vašich vízií. Nie je to potrebná súčasť projektovej dokumentácie pre stavebné povolenie. Výsledok je 3D model a 5 exteriérových vizualizácií.",
    },
    {
      id: 6,
      serviceType: "DROBNÁ STAVBA 2D",
      price: "5 eur",
      priceNumber: 5,
      note: "záleží od typu objektu, jeho veľkosi a jeho funkcie",
      content:
        "Pod drobnou stavbou sa rozumie objekt do 25m2 s maximálnou výškou do 5m. Ide o napríklad prístrešky, kôlne, zastrešenie pre kontajnery, garáže a pod. Na tento druh stavby sa nevyžaduje stavebné povolenie. Avšak je nevyhnuté podať ohlásenie drobnej stavby, ku ktorému sa dokladá požadovaná projektová dokumentácia.",
    },
    {
      id: 7,
      serviceType: "DROBNÁ STAVBA 3D + VIZUALIZÁCIE",
      price: "8 eur",
      priceNumber: 8,
      note: "záleží od typu objektu, jeho veľkosi a jeho funkcie",
      content:
        "Vyhotovuje sa ako doplnenie projektovej dokumentácie pre Vašu lepšiu predstavivosť a pre uspokojenie Vašich vízií. Nie je to potrebná súčasť projektovej dokumentácie pre stavebné povolenie. Výsledok je 3D model a 5 exteriérových vizualizácií.",
    },
  ];

  return (
    <div className="animate-fadeIn">
      <Watermark text="Cenník" opacity={90} />
      <div className="flex flex-col justify-center items-center mt-64">
        <h3 className="font-bold text-xl">
          Uvedene ceny su predbezne a su vylucne orientacne
        </h3>
        <table className="max-w-[90vw] overflow-hidden mt-8">
          <thead className="bg-gray-400">
            <tr>
              <th>Druh sluzby</th>
              <th>Cena za m2</th>
              <th>Poznamky</th>
              <th>Obsah</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item) => (
              <tr
                key={item.id}
                className={` ${
                  item.id % 2 !== 0 ? "bg-gray-200" : "bg-gray-100"
                }`}
              >
                <td>
                  <b>{item.serviceType}</b>
                </td>
                <td>{item.price}</td>
                <td className="max-w-[50vw] md:max-w-[30vw]">{item.note}</td>
                <td className="max-w-[50vw] md:max-w-[30vw] p-4">
                  {item.content}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Calculator
          calculator={calculator}
          setCalculator={setCalculator}
          result={result}
          setResult={setResult}
          services={services}
        />
      </div>
    </div>
  );
};

export default PriceList;
