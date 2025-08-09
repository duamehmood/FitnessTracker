
import Navbar from "../components/sections/Navbar"
import { RiCloseFill, RiSave3Fill } from "@remixicon/react"

const AddExercise = () => {
  return (
    <div>
      <Navbar title="Add New Exercise" >
        <button className="hidden md:inline-flex text-[#9CA3AF] px-[16px] py-[10px] font-[400] text-[14px] border-[1px] rounded-md">Cancel</button>
        <button className="hidden md:inline-flex bg-[#22C55E] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md">Save Exercise</button>
        <button ><RiCloseFill size="30" className="border-2 text-[#ba4f4f] p-[5px] rounded-md font-bold inline-flex md:hidden " /> </button>
        <button ><RiSave3Fill size="30" className="border-2 text-[#2563EB] p-[5px] rounded-md font-bold inline-flex md:hidden " /> </button>
      </Navbar>

    </div>
  )
}

export default AddExercise
