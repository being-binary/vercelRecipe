import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Recipe from './pages/Recipe'
import MouseTracker from './components/MouseTracker'

function App() {
  let [data, setData] = useState([])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home obj={{data, setData}} />} />
          <Route path='/fullRecipe' element={<Recipe/>} />
          <Route path='/mousetracker' element={<MouseTracker/>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
