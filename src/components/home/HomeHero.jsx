import Vdo from "./Vdo";

const HomeHero = () => {
  return (
    <div className="p-8 text-white font-[font-1] lg:mt-0 mt-50 pt-6 text-center">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[9.5vw] leading-[12vw] justify-center flex items-center">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[9.5vw] leading-[12vw] items-start justify-center flex ">
        qui <div className="h-[8vw] w-[13vw] rounded-full overflow-hidden"><Vdo /></div> génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[9.5vw] leading-[12vw] justify-center flex item-center">
        la créativité
      </div>
    </div>
  )
}

export default HomeHero
