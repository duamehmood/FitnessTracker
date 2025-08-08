import { RiFileDownloadLine, RiRefreshLine } from "@remixicon/react"
import Navbar from "../components/sections/Navbar"

const WorkOutDetails = () => {
  return (
    <div>
        <Navbar title="Push Day Workout" >
        <button ><RiFileDownloadLine size="35" className="border-2 text-[#3B82F680] p-[8px] rounded-md font-bold " /> </button>
        <button ><RiRefreshLine size="35" className="border-2 text-[#22C55E] p-[8px] rounded-md font-bold " /> </button>
      </Navbar>
    </div>
  )
}

export default WorkOutDetails
