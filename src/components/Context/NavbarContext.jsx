import React, { createContext, useState } from 'react'

export const NavbarContext = createContext()

export const Context = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  )
}

export default Context