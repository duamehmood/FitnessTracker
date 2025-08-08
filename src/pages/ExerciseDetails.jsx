import { RiAddLine, RiEditLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'
const ExerciseDetails = () => {
  return (
    <div>
      <Navbar title=" Bench Press" >
        <button ><RiAddLine size="35" className="border-2 text-[#3B82F68] p-[8px] rounded-md " /> </button>
        <button ><RiEditLine size="35" className="border-2 text-[#22C55E] p-[8px] rounded-md " /> </button>
      </Navbar>
    </div>
  )
}

export default ExerciseDetails
