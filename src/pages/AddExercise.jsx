import Navbar from "../components/sections/Navbar"
import { RiCloseFill, RiSave3Fill } from "@remixicon/react"
import AddExerciseForm from "../components/utils/AddExerciseForm"


const AddExercise = () => {
  return (
    <div>
      <Navbar title="Add New Exercise" >
        <button className="hidden md:inline-flex text-[#9CA3AF] hover:text-white px-[16px] py-[10px] font-[400] text-[14px] border-[1px] rounded-md cursor-pointer transition-all duration-200">Cancel</button>
        <button className="hidden md:inline-flex bg-[#22C55E] hover:bg-[#299550] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md cursor-pointer transition-all duration-200">Save Exercise</button>
        <button ><RiCloseFill size="30" className="border-2 text-[#ba4f4f] hover:text-[#e32828] p-[5px] rounded-md font-bold inline-flex md:hidden cursor-pointer transition-all duration-200" /> </button>
        <button ><RiSave3Fill size="30" className="border-2 text-[#2563EB] hover:text-[#0552f8] p-[5px] rounded-md font-bold inline-flex md:hidden cursor-pointer transition-all duration-200" /> </button>
      </Navbar>

      <div className="bg-primary py-[50px]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">

            <AddExerciseForm />

            <div className="py-[32px]"></div>

            <div className="bg-[#1F293766] border border-[#37415166] rounded-2xl p-[25px] backdrop-blur-12">
              <h3 className='font-bold md:text-[20px] text-[18px] text-white pb-[25px]'>Tips & Safety Notes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="text-[14px] text-[#D1D5DB] font-[400] mb-2">Form Tips</label>
                  <textarea placeholder='Key form cues and technique tips...' rows="4" className='w-full mt-2 px-4 py-3 rounded-xl border border-[#4B556380] bg-[#37415180] text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F64D] focus:border-green-500 font-[400] text-[15px]' ></textarea>
                </div>
                <div>
                   <label className="text-[14px] text-[#D1D5DB] font-[400] mb-2">Safety Notes</label>
                  <textarea placeholder='Important safety considerations and warnings...' rows="4" className='w-full mt-2 px-4 py-3 rounded-xl border border-[#4B556380] bg-[#37415180] text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F64D] focus:border-green-500 font-[400] text-[15px]' ></textarea>
                </div>

              </div>
              


            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddExercise
