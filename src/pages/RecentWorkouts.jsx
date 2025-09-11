import { RiFileDownloadLine, RiFilterLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'

const RecentWorkouts = () => {
  return (
    <>
      <Navbar title="Workout History" >
        <button ><RiFileDownloadLine className="border-2 text-[#2563EB]  md:p-[8px] p-[5px] md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-md font-bold " /> </button>
        <button ><RiFilterLine className="border-2 text-[#9333EA]  md:p-[8px] p-[5px] md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-md font-bold " /> </button>
      </Navbar>

      <div className="bg-primary py-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1F293766] p-[25px] rounded-xl border border-[#37415166]">
              <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-[#22C55E4D] bg-[#22C55E33]">
                <span>💪</span>
              </div>
              <div className='text-white font-bold text-[22px] pt-4'>25</div>
              <div className='text-[#D1D5DB] font-medium text-[13px] py-1'>Total Workouts</div>
              <div className='text-[#4ADE80] font-medium text-[11px] '>+3 this week</div>
            </div>
            <div className="bg-[#1F293766] p-[25px] rounded-xl border border-[#37415166]">
              <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-[#3B82F64D] bg-[#3B82F633]">
                <span>🕒</span>
              </div>
              <div className='text-white font-bold text-[22px] pt-4'>32.5</div>
              <div className='text-[#D1D5DB] font-medium text-[13px] py-1'>Hours Trained</div>
              <div className='text-[#60A5FA] font-medium text-[11px] '>~1.4h avg/workout</div>
            </div>
            <div className="bg-[#1F293766] p-[25px] rounded-xl border border-[#37415166]">
              <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-[#A855F74D] bg-[#9333EA33]">
                <span>🏋️‍♂️</span>
              </div>
              <div className='text-white font-bold text-[22px] pt-4'>245K</div>
              <div className='text-[#D1D5DB] font-medium text-[13px] py-1'>Total Volume (lbs)</div>
              <div className='text-[#C084FC] font-medium text-[11px] '>~10.2K avg/workout</div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default RecentWorkouts
