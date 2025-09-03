
import Navbar from "../components/sections/Navbar"
import { RiSave3Fill } from "@remixicon/react"
import AddWorkoutForm from "../components/utils/AddWorkoutForm"
import exercises from "../data/exercise"

const AddWorkout = () => {
  return (
    <div>
       <Navbar title=" Workout Planner" >
        <button className="hidden md:inline-flex bg-[#22C55E] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md">Save Plan</button>
        <button ><RiSave3Fill size="30" className="border-2 text-[#2563EB] p-[5px] rounded-md font-bold inline-flex md:hidden " /> </button>
      </Navbar>

      <div className="bg-primary py-[50px]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AddWorkoutForm />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddWorkout
