  import Navbar from "../components/sections/Navbar"
import { RiCloseFill, RiSave3Fill } from "@remixicon/react"
import EditExerciseForm from "../components/utils/EditExerciseForm"
import { Link } from "react-router-dom"


const EditExercise = () => {
  return (
    <div>
      <Navbar title="Edit Exercise" >
        <Link to="/exercises/:id"> 
        <button className="hidden md:inline-flex text-[#9CA3AF] hover:text-white px-[16px] py-[10px] font-[400] text-[14px] border-[1px] rounded-md cursor-pointer transition-all duration-200">Cancel</button>
        </Link>
        <button className="hidden md:inline-flex bg-[#22C55E] hover:bg-[#299550] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md cursor-pointer transition-all duration-200">Update Exercise</button>
        <Link to="/exercises/:id">
        <button ><RiCloseFill size="30" className="border-2 text-[#ba4f4f] hover:text-[#e32828] p-[6px] rounded-md font-bold inline-flex md:hidden cursor-pointer transition-all duration-200" /> </button>
        </Link>
        <button ><RiSave3Fill size="30" className="border-2 text-[#2563EB] hover:text-[#0552f8] p-[6px] rounded-md font-bold inline-flex md:hidden cursor-pointer transition-all duration-200" /> </button>
      </Navbar>

      <div className="bg-primary py-[50px]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <EditExerciseForm />
          </div>
        </div>
      </div>

    </div>
  )
}

export default EditExercise
