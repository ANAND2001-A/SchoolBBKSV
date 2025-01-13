import React from "react";
import img from "../src/assets/calling.gif";

const Floating = () => {
  const phoneNumber = "+91 9918341985";

  return (
    <div className="fixed bottom-4 right-4 animate-bounce">
      <a
        href={`tel:${phoneNumber}`}
        className="bg-[#4FDBF6] hover:bg-[#4F79F6] text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Call Phone Number"
      >
        <img
          src={img}
          alt="Call Icon"
          className="w-10 h-10"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Floating;
