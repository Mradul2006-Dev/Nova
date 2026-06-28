import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Agence from './Pages/Agence.jsx'
import Projects from './Pages/Project.jsx'
import Navbar from './components/Navigation/Navbar.jsx'
import FullScreenNav from './components/Navigation/FullScreenNav.jsx'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* <Link className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium mx-4 hover:scale-105" to="/">
  Home
</Link>

<Link className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium mx-4 hover:scale-105" to="/agence">
  Agence
</Link>

<Link className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium mx-4 hover:scale-105" to="/projects">
  Projects
</Link> */}

      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
