import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="flex items-center justify-center gap-4 font-[font-2]">
      <Link
        to="/projects"
        className="
          flex items-center justify-center
          h-[6.2vw] 
          w-[32vw]
          rounded-full
          border-3 border-white
          text-white
          text-[5.5vw]
          px-[3vw]
          leading-none
          uppercase
          transition-all duration-300
          hover:border-lime-300
          hover:text-lime-300
          pt-5
        "
      >
        Projects
      </Link>

      <Link
        to="/agence"
        className="
          flex items-center justify-center
          h-[6.2vw] 
          w-[32vw]
          border-3
          rounded-full
          border: border-white
          text-white
          text-[6vw]
          leading-none
          uppercase
          transition-all duration-300
          hover:border-lime-300
          hover:text-lime-300
          pt-5
        "
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottom;
