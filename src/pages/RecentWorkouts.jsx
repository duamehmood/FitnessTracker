import { RiFileDownloadLine, RiFilterLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'

const RecentWorkouts = () => {
  return (
    <div>
        <Navbar title="Push Day Workout" >
        <button ><RiFileDownloadLine  className="border-2 text-[#2563EB]  md:p-[8px] p-[5px] md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-md font-bold " /> </button>
        <button ><RiFilterLine  className="border-2 text-[#9333EA]  md:p-[8px] p-[5px] md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-md font-bold " /> </button>
      </Navbar>
    </div>
  )
}

export default RecentWorkouts
