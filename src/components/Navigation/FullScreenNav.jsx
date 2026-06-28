import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../Context/NavbarContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  const tl = gsap.timeline();

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
        delay: 0.2,
      height: "100%",
      stagger: { amount: -0.3 },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: { amount: 0.3 },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.25 },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: { amount: -0 },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsap.to(".fullscreennav", {
          display: "block",
        });
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen],
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white h-screen w-full overflow-hidden absolute z-50"
    >
      <div className="h-screen w-screen fixed ">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full p-5 items-start justify-between">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
              fill="currentColor"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div onClick={() => setNavOpen(false)} className="lg:h-32 h-20 lg:w-32 w-20 relative cursor-pointer ">
            <div className="lg:h-44  h-28 -rotate-45 origin-top absolute w-0.5 bg-lime-300"></div>
            <div className="lg:h-44 h-28 right-0 rotate-45 origin-top absolute w-0.5 bg-lime-300"></div>
          </div>
        </div>
        <div className="py-36">
          <div className="link origin-top relative border-t-1 border-white ">
            <h1 className="font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
              Projets
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-lime-300">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  POUR TAUT VOIR
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="image1"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  POUR TAUT VOIR
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="image2"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  POUR TAUT VOIR
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="Project Image"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  POUR TAUT VOIR
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="Project Image"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t-1 border-white ">
            <h1 className="font-[font-2] lg:text-[7vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
              Agence
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-lime-300">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[4.5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Know Us
                </h2>
                <img
                  className="lg:h-24 h-7 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/0e/95/bf/0e95bf6e31bbd1ecd7170513afdf7182.jpg"
                  alt="image1"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[4.5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Know Us
                </h2>
                <img
                  className="lg:h-24 h-7 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/e0/ff/c9/e0ffc9bb2c2d6b576ecba537d11ffa3f.jpg"
                  alt="image2"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[4.5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Know Us
                </h2>
                <img
                  className="lg:h-24 h-7 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/0e/95/bf/0e95bf6e31bbd1ecd7170513afdf7182.jpg"
                  alt="Project Image"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[4.5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Know Us
                </h2>
                <img
                  className="lg:h-24 h-7 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/e0/ff/c9/e0ffc9bb2c2d6b576ecba537d11ffa3f.jpg"
                  alt="Project Image"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t-1 border-white ">
            <h1 className="font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
              Contacts
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-lime-300">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Send Us A Fax
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/236x/eb/70/60/eb70609780833a72d2d811ed43566e4b.jpg"
                  alt="image1"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Send Us A Fax
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/01/a4/99/01a49973b5af10fcdef7f2c19fc4db3c.jpg"
                  alt="image2"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Send Us A Fax
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/236x/eb/70/60/eb70609780833a72d2d811ed43566e4b.jpg"
                  alt="image1"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Send Us A Fax
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/01/a4/99/01a49973b5af10fcdef7f2c19fc4db3c.jpg"
                  alt="image2"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative  border-y-1 border-white ">
            <h1 className="font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
              Blog
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-lime-300">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Read Articles
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/31/d9/4c/31d94c1f561ce6133f48811dd608dfec.jpg"
                  alt="image1"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Read Articles
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/474x/e2/bd/96/e2bd968269da490e1225c2bd046fa0f6.jpg"
                  alt="image2"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Read Articles
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/736x/31/d9/4c/31d94c1f561ce6133f48811dd608dfec.jpg"
                  alt="image1"
                />
                <h2 className="whitespace-nowrap font-[font-2] lg:text-[7vw] text-[5vw] uppercase lg:leading-[0.8] lg:pt-5 pt-2 text-center">
                  Read Articles
                </h2>
                <img
                  className="lg:h-24 h-8 rounded-full lg:w-60 w-24 shrink-0 object-cover"
                  src="https://i.pinimg.com/474x/e2/bd/96/e2bd968269da490e1225c2bd046fa0f6.jpg"
                  alt="image2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
