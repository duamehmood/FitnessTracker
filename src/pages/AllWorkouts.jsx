
import { RiAddLine, RiSearchLine } from "@remixicon/react"
import Navbar from "../components/sections/Navbar"

const AllWorkouts = () => {
  return (
    <div>
     <Navbar title=" All Workouts" >
        <button ><RiSearchLine size="35" className="border-2 text-[#22C55E80] p-[8px] rounded-md " /> </button>
        <button ><RiAddLine size="35" className="border-2 text-[#3B82F680] p-[8px] rounded-md " /> </button>
      </Navbar>
    </div>
  )
}

export default AllWorkouts
