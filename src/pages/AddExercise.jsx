
import Navbar from "../components/sections/Navbar"

const AddExercise = () => {
  return (
    <div>
      <Navbar title="Add New Exercise" >
        <button className=" text-[#9CA3AF] px-[16px] py-[10px] font-[400] text-[14px] border-[1px] rounded-md">Cancel</button>
        <button className="bg-[#22C55E] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md">Save Exercise</button>
      </Navbar>

    </div>
  )
}

export default AddExercise
