
import { RiSettings2Line } from "@remixicon/react"
import Navbar from "../components/sections/Navbar"

const Dashboard = () => {
  return (
    <div>
      
       <Navbar title="FitTracker Pro" >
        <RiSettings2Line size="40" className="border-1 border-[#4B5563] text-white p-[8px] rounded-md "/>
        <button className="bg-[#22C55E] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md">Start Workout</button>
      </Navbar>

    </div>
  )
}

export default Dashboard
