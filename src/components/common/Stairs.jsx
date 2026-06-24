import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.set(".stair", {
      y: 0,
      height: "100%",
    });

    tl.set(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: 0.25,
        from: "end",
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: 0.25,
        from: "end",
      },
    });

    tl.set(stairParentRef.current, {
      display: "none",
    });
    tl.from(pageRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, [currentPath]);

  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed top-0 "
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
