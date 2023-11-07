import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col p-5 animate-fadeIn z-10">
        <div className="flex justify-start items-end">
          <h1 className="text-6xl font-thin">Kontaktujte nás</h1>
          <p className="text-gray-500 text-sm ms-9">
            Radi Vám odpovieme na Vaše otázky
            <br /> v čo najkratšom čase...
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[50vw] items-start ms-4 relative">
            <div className="flex justify-between mt-16 w-[85%]">
              <div className="flex flex-col">
                <label htmlFor="fullName">Celé meno</label>
                <input
                  type="text"
                  id="fullName"
                  className="border-b-2 bg-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" className="border-b-2" />
              </div>
            </div>
            <div className="flex w-[85%] mt-8">
              <div className="flex flex-col w-[100%]">
                <label htmlFor="subject">Predmet spravy</label>
                <input type="text" id="subject" className="border-b-2" />
              </div>
            </div>
            <div className="flex w-[85%] mt-8">
              <div className="flex flex-col w-[100%]">
                <label htmlFor="message">Sprava</label>
                <textarea id="message" className="border-b-2" />
              </div>
            </div>
            <div className="flex w-[85%] mt-8">
              <button className="bg-black text-white p-3 rounded-full">
                Odoslat spravu
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[30vw]">
            <h1 className="text-2xl">Dalsie kontaktne udaje</h1>
            <p className="z-10">telefonne cislo: 090X XXX XXX</p>
            <p className="z-10">
              Adresa: Ulicova 29,
              <br />
              Jaklovce, 05501
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
