import React from "react";

const ProjectCard = (props) => {
  return (<>

        <div className="lg:w-1/2 w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden lg:h-full h-[200px]">
          <img
            className="w-full h-full object-cover"
            src={props.image1}
            alt="Project Image"
          />
          <div className="h-full transition-all opacity-0 group-hover:opacity-100 w-full bg-black/10 top-0 left-0 justify-center absolute flex items-center ">
            <h2 className="font-[font-1] text-6xl border-4 pt-4 px-8 text-white border-white rounded-full uppercase">
              Vior le projet
            </h2>
          </div>
        </div>
       <div className="lg:w-1/2 w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden lg:h-full h-[200px]">
          <img
            className="w-full h-full object-cover"
            src={props.image2}
            alt="Project Image"
          />
          <div className="h-full transition-all opacity-0 group-hover:opacity-100 w-full bg-black/10 top-0 left-0 justify-center absolute flex items-center ">
            <h2 className="font-[font-1] text-6xl border-4 pt-4 px-8 text-white border-white rounded-full uppercase">
              Vior le projet
            </h2>
          </div>
        </div>
  </>
  );
};

export default ProjectCard;
