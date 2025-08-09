
import { RiAddLine, RiSearchLine } from "@remixicon/react"
import Navbar from "../components/sections/Navbar"

const AllWorkouts = () => {
  return (
    <div>
     <Navbar title=" All Workouts" >
        <button ><RiSearchLine className="border-2  w-[30px] md:w-[35px] h-[30px] md:h-[35px]  md:p-[8px] p-[5px] text-[#22C55E] rounded-md " /> </button>
        <button ><RiAddLine  className="border-2  w-[30px] md:w-[35px] h-[30px] md:h-[35px] text-[#2563EB] md:p-[8px] p-[5px] rounded-md " /> </button>
      </Navbar>
    </div>
  )
}

export default AllWorkouts
