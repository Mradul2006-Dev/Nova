import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="flex items-center justify-center gap-4 font-[font-2]">
      <p className="absolute lg:w-100 w-72 lg:right-5 right-0 lg:bottom-40 bottom-28 font-[font-1] text-white lg:leading-relaxed leading-tight lg:text-xl text-sm">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </p>
      <div>
        <Link
          to="/projects"
          className="
          flex items-center justify-center
          lg:h-[6.2vw] 
          w-[32vw]
          rounded-full
          lg:border-4 border-2 border-white
          text-white
          text-[5.5vw] text-[3vw]
          lg:px-[3vw] px-[1vw]
          leading-none
          uppercase
          transition-all duration-300
          hover:border-lime-300
          hover:text-lime-300
          lg:pt-5 pt-1
        "
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
          to="/agence"
          className="
          flex items-center justify-center
          lg:h-[6.2vw] 
          w-[32vw]
          lg:border-4 border-2
          rounded-full
          border: border-white
          text-white
          lg:text-[6vw] text-[4vw]
          leading-none
          uppercase
          transition-all duration-300
          hover:border-lime-300
          hover:text-lime-300
          lg:pt-5 pt-1
          lg:px-[3vw] px-[1vw]
        "
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottom;
