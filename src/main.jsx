import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/stairs.jsx'
import NavbarContext from "./components/Context/NavbarContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Stairs>
      <NavbarContext>
        <App />
      </NavbarContext>
    </Stairs>
  </BrowserRouter>
)


