import React from 'react'
import Hero from './Hero/Hero'
import Header from './Header/Header'
import Servis from './Servis/Servis'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'





const App = () => {
  return (
    <div>
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/aboutus' element={<AboutUs />} />
        {/* <Route path='/register'element={<Regis/>}/> */}
      </Routes>
    </div>
  )
}

export default App

