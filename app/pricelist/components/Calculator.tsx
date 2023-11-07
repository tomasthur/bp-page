import Link from "next/link";
import React from "react";

const Calculator = ({
  calculator,
  setCalculator,
  result,
  setResult,
  services,
}: any) => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center mt-8 pb-5">
      <h1 className=" text-gray-800 my-4 text-4xl">Cenova kalkulacka</h1>
      <div className=" flex flex-col justify-around items-center w-[90vw]">
        <div className="flex flex-col w-[70%]">
          <label htmlFor="place">
            <b>Potrebujem navrhnut [m2]:</b>
          </label>
          <input
            type="number"
            id="place"
            value={calculator.area}
            onChange={(e) =>
              setCalculator({ ...calculator, area: +e.target.value })
            }
            className="border-b-2 z-50 bg-transparent"
          />
        </div>
        <div className="flex flex-col w-[70%] mt-5">
          <label htmlFor="interesting">
            <b>Mam zaujem o:</b>
          </label>
          <select
            id="interesting"
            className="border-b-2 z-50 bg-transparent"
            onChange={(e) =>
              setCalculator({
                ...calculator,
                servicePrice: +e.target.value,
              })
            }
          >
            <option value={0}>Vyberte moznost</option>
            {services.map((item: any) => (
              <option key={item.id} value={item.priceNumber}>
                {item.serviceType}
              </option>
            ))}
          </select>
        </div>
      </div>
      {result > 0 && (
        <div className="flex flex-col items-center animate-fadeIn mt-4">
          <p>
            Predpokladana suma daneho projektu / vizualizacie je{" "}
            <b>{result} eur.</b>
          </p>
          <p>Suma sa vsak moze lisit v zavislosti od viacerych okolnosti. </p>
          <p>
            Pre ziskanie presnej sumy nas prosim{" "}
            <Link className="font-bold" href={"/contact"}>
              kontaktujte.
            </Link>
          </p>
        </div>
      )}
      <button
        className="bg-gray-400 p-2 rounded-lg mt-4 hover:bg-gray-500 z-50"
        onClick={() => setResult(calculator.area * calculator.servicePrice)}
        disabled={calculator.area == 0 || calculator.servicePrice == 0}
      >
        Vypocitaj!
      </button>
    </div>
  );
};

export default Calculator;
