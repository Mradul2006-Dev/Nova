import Vdo from "./Vdo";

const HomeHero = () => {
  return (
    <div className="p-8 text-white font-[font-1] pt-6 text-center">
      <div className="text-[9.5vw] uppercase leading-[9.5vw] justify-center flex item-center">
        L'étincelle
      </div>
      <div className="text-[9.5vw] uppercase leading-[9.5vw] item-start justify-center flex item-center">
        qui <div className="h-[8vw] w-[13vw] rounded-full overflow-hidden"><Vdo /></div> génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[9.5vw] justify-center flex item-center">
        la créativité
      </div>
    </div>
  )
}

export default HomeHero
