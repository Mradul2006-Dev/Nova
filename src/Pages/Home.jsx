import Vdo from "../components/home/Vdo"
import HomeHero from "../components/home/HomeHero"
import HomeBottom from "../components/home/HomeBottom"

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed h-screen w-screen">
        <Vdo />
      </div>
      <div className="relative z-0 h-screen w-screen pb-3 overflow-hidden flex flex-col justify-between">
        <HomeHero />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home
