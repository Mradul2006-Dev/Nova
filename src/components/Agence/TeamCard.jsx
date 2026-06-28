import React from 'react'

const TeamCard = ({ name, title, img }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-3">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={img}
          alt={name}
        />
      </div>
      <p className="font-[font-2] text-sm lg:text-base uppercase text-gray-500">
        {title}
      </p>
      <h3 className="font-[font-2] text-base lg:text-xl uppercase font-bold">
        {name}
      </h3>
    </div>
  )
}

export default TeamCard