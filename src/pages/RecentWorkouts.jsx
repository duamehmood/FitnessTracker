import { RiFileDownloadLine, RiFilterLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'

const RecentWorkouts = () => {
  return (
    <div>
        <Navbar title="Push Day Workout" >
        <button ><RiFileDownloadLine size="35" className="border-2 text-[#3B82F680] p-[8px] rounded-md font-bold " /> </button>
        <button ><RiFilterLine size="35" className="border-2 text-[#A855F780] p-[8px] rounded-md font-bold " /> </button>
      </Navbar>
    </div>
  )
}

export default RecentWorkouts
