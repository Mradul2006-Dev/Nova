import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

export const Context = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false)
  const [navbarColor, setNavbarColor] = useState('white')

  const locate = useLocation().pathname
  useEffect(() => {
    if (locate === '/projects' || locate === '/agence') {
      setNavbarColor('black')
    } else {
      setNavbarColor('white')
    }
  }, [locate])

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navbarColor, setNavbarColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>  
    </div>
  )
}

export default Context