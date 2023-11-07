import React, { useState } from "react";

const OfCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`offcanvas ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-inner">
          <div className="menu-content">
            <h1 className="text-white">Canva v ciernej farne</h1>
          </div>
        </div>
      </div>
      <button
        className={`hidden md:block md:hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110 fixed bottom-2 right-5 z-50 ${
          isOpen ? "text-white" : "text-black"
        }`}
        onClick={toggleMenu}
      >
        | |
      </button>
    </>
  );
};

export default OfCanvas;
