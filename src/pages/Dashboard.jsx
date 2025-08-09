
import { RiSettings2Line } from "@remixicon/react"
import Navbar from "../components/sections/Navbar"

const Dashboard = () => {
  return (
    <div>
      
       <Navbar title="FitTracker Pro" >
        <RiSettings2Line className=" border-1 border-[#4B5563] text-white md:p-[8px] p-[6px] rounded-md md:w-[40px] w-[30px] md:h-[40px] h-[30px]"/>
        <button className="bg-[#22C55E] text-white md:px-[16px] px-[8px] md:py-[10px] py-[4px] font-[600] text-[14px] cursor-pointer rounded-md">Start Workout</button>
      </Navbar>

    </div>
  )
}

export default Dashboard
