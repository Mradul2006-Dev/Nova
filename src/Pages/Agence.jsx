import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/Images/team_Images/1.jpg",
    "/Images/team_Images/2.jpg",
    "/Images/team_Images/3.jpg",
    "/Images/team_Images/4.jpg",
    "/Images/team_Images/5.jpg",
    "/Images/team_Images/6.jpg",
    "/Images/team_Images/7.jpg",
    "/Images/team_Images/8.jpg",
    "/Images/team_Images/9.jpg",
  ];

  const teamMembers = [
    { name: "Carl", title: "Directeur Principal", img: "/Images/team_Images/1.jpg" },
    { name: "Camille", title: "Directrice Artistique", img: "/Images/team_Images/2.jpg" },
    { name: "Sophie", title: "Conceptrice", img: "/Images/team_Images/3.jpg" },
    { name: "Hugo", title: "Stratège", img: "/Images/team_Images/4.jpg" },
    { name: "Chantal", title: "Conseillère", img: "/Images/team_Images/5.jpg" },
    { name: "Mylene", title: "Directrice de création", img: "/Images/team_Images/6.jpg" },
    { name: "Meggie", title: "Directrice conseil", img: "/Images/team_Images/7.jpg" },
    { name: "Claire", title: "Conseiller", img: "/Images/team_Images/8.jpg" },
    { name: "Michele", title: "Maquettiste", img: "/Images/team_Images/9.jpg" },
  ]

  React.useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const isMobile = window.innerWidth < 1024;

  useGSAP(() => {
    // ✅ Image pin animation
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: isMobile ? "top 15%" : "top 15.15%",
        end: isMobile ? "top -80%" : "top -126%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 15,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const imageIndex = Math.min(
            Math.floor(self.progress * imageArray.length),
            imageArray.length - 1,
          );
          if (imageRef.current && imageRef.current.src !== imageArray[imageIndex]) {
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });

    // ✅ White to black transition
    gsap.to(".transition-section", {
      backgroundColor: "#000000",
      color: "#ffffff",
      scrollTrigger: {
        trigger: ".transition-section",
        start: "top 20%",
        end: "bottom 20%",
        scrub: 0.5,
      },
    });

    // ✅ Team name floating animation
    document.querySelectorAll(".team-row").forEach(function (row, idx) {
      const nameEl = row.querySelector(".name-text");
      const isEven = idx % 2 === 0;

      gsap.fromTo(
        nameEl,
        { x: isEven ? "-33%" : "0%" },
        {
          x: isEven ? "0%" : "-33%",
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
  });

  return (
    <div>
      {/* ===== SECTION 1 - Hero ===== */}
      <div className="section1 py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[40vw] lg:w-[15vw] w-[35vw] lg:rounded-3xl rounded-2xl lg:top-60 top-30 left-[30vw]"
        >
          <img
            className="h-full w-full object-cover"
            ref={imageRef}
            src={imageArray[0]}
            alt="Soixan7e Douze"
          />
        </div>
        <div className="relative font-[font-2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl text-xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre
              créativité. On reste humbles et on dit non aux gros egos, même le
              vôtre. Une marque est vivante. Elle a des valeurs, une
              personnalité, une histoire. Si on oublie ça, on peut faire de bons
              chiffres à court terme, mais on la tue à long terme. C'est pour ça
              qu'on s'engage à donner de la perspective, pour bâtir des marques
              influentes.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2 - White to Black transition ===== */}
      <div className="transition-section bg-white py-20 px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-t border-black pt-10">
          <p className="text-xl lg:text-2xl font-[font-2]">
            <span className="font-bold">Nos projets_</span> naissent dans
            l'humilité, grandissent dans la curiosité et vivent grâce à la
            créativité sous toutes ses formes.
          </p>
          <p className="text-xl lg:text-2xl font-[font-2]">
            <span className="font-bold">Notre création_</span> bouillonne dans
            un environnement où le talent a le goût d'exploser. Où on se sent
            libre d'être la meilleure version de soi-même.
          </p>
          <p className="text-xl lg:text-2xl font-[font-2]">
            <span className="font-bold">Notre culture_</span> c'est l'ouverture
            aux autres. Point. Tout l'équipage participe à bâtir une agence dont
            on est fiers.
          </p>
        </div>
      </div>

      {/* ===== SECTION 3 - Black Team ===== */}
      <div className="bg-black text-white">
        <h2 className="font-[font-2] text-4xl lg:text-6xl uppercase px-6 lg:px-20 border-t border-white pt-8 mb-10">
          Notre équipe
        </h2>

        {teamMembers.map(function (member, idx) {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className="team-row relative h-[50vw] lg:h-[35vw] border-t border-white/20 overflow-hidden flex items-center"
            >
              {/* ✅ Floating Name */}
              <div className="name-text absolute whitespace-nowrap font-[font-2] text-[18vw] uppercase text-[#CCFF00] leading-none">
                {member.name}&nbsp;&nbsp;&nbsp;&nbsp;
                {member.name}&nbsp;&nbsp;&nbsp;&nbsp;
                {member.name}
              </div>

              {/* ✅ Image center */}
              <div className="absolute left-1/2 -translate-x-1/2 h-[40vw] lg:h-[28vw] w-[28vw] lg:w-[18vw] rounded-2xl overflow-hidden z-10">
                <img
                  className="h-full w-full object-cover"
                  src={member.img}
                  alt={member.name}
                />
              </div>

              {/* ✅ Title */}
              <p className="absolute bottom-4 right-6 lg:right-20 font-[font-2] text-sm lg:text-lg uppercase text-white/70 z-10">
                {member.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Agence;