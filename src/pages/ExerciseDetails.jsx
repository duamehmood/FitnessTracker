import { RiAddLine, RiEditLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'
const ExerciseDetails = () => {
  return (
    <div>
      <Navbar title=" Bench Press" >
        <button ><RiAddLine  className="border-2 w-[30px] md:w-[35px] h-[30px] md:h-[35px] text-[#2563EB] md:p-[8px] p-[5px] rounded-md " /> </button>
        <button ><RiEditLine  className="border-2 w-[30px] md:w-[35px] h-[30px] md:h-[35px] text-[#22C55E] md:p-[8px] p-[5px] rounded-md " /> </button>
      </Navbar>
    </div>
  )
}

export default ExerciseDetails
