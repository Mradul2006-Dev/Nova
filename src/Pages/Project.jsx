import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Project = () => {
  const project = [
    {
      image1: "/Images/Project_Images/img1.jpg",
      image2: "/Images/Project_Images/img2.jpg",
    },
    {
      image1: "/Images/Project_Images/img3.jpg",
      image2: "/Images/Project_Images/img4.jpg",
    },
    {
      image1: "/Images/Project_Images/img5.jpg",
      image2: "/Images/Project_Images/img14.jpg",
    },
    {
      image1: "/Images/Project_Images/img7.jpg",
      image2: "/Images/Project_Images/img8.jpg",
    },
    {
      image1: "/Images/Project_Images/img9.jpg",
      image2: "/Images/Project_Images/img10.jpg",
    },
    {
      image1: "/Images/Project_Images/img11.jpg",
      image2: "/Images/Project_Images/img12.jpg",
    },
    {
      image1: "/Images/Project_Images/img13.jpg",
      image2: "/Images/Project_Images/img14.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    if (window.innerWidth < 1024) return;
    // console.log(document.querySelectorAll(".hero"));
    // console.log(document.querySelector(".lol"));
    gsap.from(".hero", {
      height: "100px",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 150%",
        end: "top -800%",
        scrub: 0.1,
      },
    });
  });

  return (
    <div className="lg:px-4 ">
      <div className="pt-[45vh]">
        <h2 className="font-[font-2] lg:text-[9.5vw] text-7xl uppercase">
          Projets
        </h2>
      </div>
      <div className="lol">
        {project.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero w-full lg:h-[850px] h-[300px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-3 overflow-hidden"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

// import { useGSAP } from "@gsap/react";
// import ProjectCard from "../components/projects/ProjectCard";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Project = () => {
//   const project = [
//     {
//       image1: "/Images/Project_Images/img1.jpg",
//       image2: "/Images/Project_Images/img2.jpg",
//     },
//     {
//       image1: "/Images/Project_Images/img3.jpg",
//       image2: "/Images/Project_Images/img4.jpg",
//     },
//     {
//       image1: "/Images/Project_Images/img5.jpg",
//       image2: "/Images/Project_Images/img14.jpg",
//     },
//     {
//       image1: "/Images/Project_Images/img7.jpg",
//       image2: "/Images/Project_Images/img8.jpg",
//     },
//     {
//       image1: "/Images/Project_Images/img9.jpg",
//       image2: "/Images/Project_Images/img10.jpg",
//     },
//     {
//       image1: "/Images/Project_Images/img11.jpg",
//       image2: "/Images/Project_Images/img12.jpg",
//     },
//     {
//       image1: "/Images/Project_Images/img13.jpg",
//       image2: "/Images/Project_Images/img14.jpg",
//     },
//   ];

//   useGSAP(() => {
//     if (window.innerWidth < 1024) return;

//     document.querySelectorAll(".hero").forEach((card) => {
//       gsap.fromTo(
//         card,
//         {
//           height: 100,
//         },
//         {
//           height: 850,
//           ease: "none",
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//             markers: true,
//           },
//         },
//       );
//     });
//   }, []);

//   return (
//     <div className="lg:px-4">
//       <div className="pt-[45vh]">
//         <h2 className="font-[font-2] lg:text-[9.5vw] text-7xl uppercase">
//           Projets
//         </h2>
//       </div>
//       <div className="lol">
//         {project.map(function (elem, idx) {
//           return (
//             <div
//               key={idx}
//               className="hero w-full lg:h-[850px] h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-4 overflow-hidden"
//             >
//               <ProjectCard image1={elem.image1} image2={elem.image2} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Project;
