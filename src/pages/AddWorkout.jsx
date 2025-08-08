
import Navbar from "../components/sections/Navbar"

const AddWorkout = () => {
  return (
    <div>
       <Navbar title=" Workout Planner" >
        <button className=" text-[#9CA3AF] px-[16px] py-[10px] font-[400] text-[14px] border-[1px] rounded-md">Save Draft</button>
        <button className="bg-[#22C55E] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md">Save Plan</button>
      </Navbar>
    </div>
  )
}

export default AddWorkout
