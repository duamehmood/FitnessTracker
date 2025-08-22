import React from 'react'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Features from '../components/Features'
import Users from '../components/sections/Users'
import Ready from '../components/sections/Ready'

const Home = () => {
  return (
    <div>
      <Navbar title="FitTracker Pro" >
        <button className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white md:px-3 px-2 md:py-2 py-1 font-[600] text-[14px] rounded-full cursor-pointer">Start Now</button>
      </Navbar>
      <Hero />
      <Features />
      <Users/>
      <Ready/>

    </div>
  )
}

export default Home
