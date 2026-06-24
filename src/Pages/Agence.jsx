import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  // gsap.registerPlugin(useGSAP);

  const imageArray = [
    "/team/1.jpg",
    "/team/2.jpg",
    "/team/3.jpg",
    "/team/4.jpg",
    "/team/5.jpg",
    "/team/6.jpg",
    "/team/7.jpg",
    "/team/8.jpg",
    "/team/9.jpg",
  ];

  React.useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useGSAP(
    () => {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 26.15%",
          end: "top -126%",
          // scrub: true,
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: "transform",
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const imageIndex = Math.min(
              Math.floor(self.progress * imageArray.length),
              imageArray.length - 1,
            );

            if (
              imageRef.current &&
              imageRef.current.src !== imageArray[imageIndex]
            ) {
              imageRef.current.src = imageArray[imageIndex];
            }
          },
          onRefresh: () => {
            console.log(imageDivRef.current.style.transform);
          },
        },
      });
    },
    { scope: imageDivRef },
  );

  return (
    <div>
      <div className="section1 py-1">
        <div
          ref={imageDivRef}
          className="absolute border-red-500 overflow-hidden h-[20vw] w-[15vw] rounded-[3vw] top-60 left-[30vw]"
        >
          <img
            className="h-full w-full object-cover"
            ref={imageRef}
            src={imageArray[0]}
            alt="Soixan7e Douze"
          />
        </div>
        <div className=" relative font-[font-2] ">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e <br></br>
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
