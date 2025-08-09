import React from 'react'
import Navbar from '../components/sections/Navbar'

const Home = () => {
  return (
    <div>

      <Navbar title="FitTracker Pro" >
        <button className="bg-[#22C55E] text-white md:px-3 px-2 md:py-2 py-1 font-[600] text-[14px] rounded-full cursor-pointer">Start Now</button>
      </Navbar>

    </div>
  )
}

export default Home
