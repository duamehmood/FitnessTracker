import { RiCloseFill, RiAddLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'

const AllExercises = () => {
  return (
    <div>
      <Navbar title="Exercise Library" >
        <button> <RiCloseFill className='text-[#9CA3AF]' /> </button>
      </Navbar>

      <div className='bg-primary py-[50px]'>

        <div className="container mx-auto">

          <div className='p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] '>
            <div className='flex items-center gap-2 pb-4'>
              <div className='w-10 h-10 border border-[#3B82F64D] rounded-lg flex items-center justify-center  bg-gradient-from-r from-[#3B82F633] to-[#2563EB33]'>
                <span>💪</span>
              </div>
              <h3 className='font-bold md:text-[20px] text-[18px] text-white'>Exercise Library</h3>
            </div>
            <input type="text" placeholder='Search exercises...' className='px-4 py-3 rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:ring-2 focus:ring-[#3B82F64D] focus:border-blue-500 md:w-[320px] w-200px ' />
          </div>

          <div className='bg-[#1F293766] border border-[#37415166] my-[24px] rounded-2xl text-[#9CA3AF] font-[400] text-[14px] p-2  '>
            <div className="flex flex-wrap gap-2">
              <button className='px-[16px] py-[12px]  rounded-lg border border-[#22C55E4D] bg-[#22C55E33] text-[#4ADE80]'>All</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Chest</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Back</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Shoulders</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Arms</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Legs</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Core</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Cardio</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-[25px] bg-[#1F293766] border border-[#37415166] hover:border-[#22C55E80] rounded-2xl transition-all ">
              <div className="flex items-start justify-between">
                <div className="bg-gradient-to-r from-[#22C55E33] to-[#16A34A33] border border-[#22C55E4D] rounded-lg w-12 h-12 flex justify-center items-center  ">
                  <span className="text-2xl">🏃‍♂️</span>
                </div>
                <span className="text-[12px] font-[400] text-[#4ADE80] px-[12px] py-[6px] bg-[#22C55E33] rounded-full ">Compound</span>
              </div>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px]  text-white ">Bench Press</h4>
              <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px] ">Primary: Chest | Secondary: Triceps, Shoulders</p>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-[400] text-[#6B7280] ">~8 cal/min</p>
                <RiAddLine size="20" className='text-[#60A5FA]' />
              </div>
            </div>

            <div className="p-[25px] bg-[#1F293766] border border-[#37415166] hover:border-[#3B82F680] rounded-2xl  transition-all">
              <div className="flex items-start justify-between">
                <div className="bg-gradient-to-r from-[#3B82F633] to-[#2563EB33] border border-[#3B82F64D] rounded-lg w-12 h-12 flex justify-center items-center  ">
                  <span className="text-2xl">🏃</span>
                </div>
                <span className="text-[12px] font-[400] text-[#FB923C] px-[12px] py-[6px] bg-[#F9731633] rounded-full ">Cardio</span>
              </div>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white ">Squats</h4>
              <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px] ">Primary: Quads | Secondary: Glutes, Hamstrings</p>
              <div className="flex items-center justify-between" >
                <p className="text-[11px] font-[400] text-[#6B7280] ">~6 cal/min</p>
                <RiAddLine size="20" className='text-[#60A5FA]' />
              </div>
            </div>

            <div className="p-[25px] bg-[#1F293766] border border-[#37415166] hover:border-[#A855F780] rounded-2xl  transition-all">
              <div className="flex items-start justify-between">
                <div className="bg-gradient-to-r from-[#A855F733] to-[#9333EA33] border border-[#A855F74D] rounded-lg w-12 h-12 flex justify-center items-center  ">
                  <span className="text-2xl">💪</span>
                </div>
                <span className="text-[12px] font-[400] text-[#60A5FA] px-[12px] py-[6px] bg-[#3B82F633] rounded-full ">Isolation</span>
              </div>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white ">Deadlift</h4>
              <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px] ">Primary: Back | Secondary: Glutes, Hamstrings</p>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-[400] text-[#6B7280] ">~10 cal/min</p>
                <RiAddLine size="20" className='text-[#60A5FA]' />
              </div>
            </div>

            <div className="p-[25px] bg-[#1F293766] border border-[#37415166] hover:border-[#06B6D480] rounded-2xl transition-all">
              <div className="flex items-start justify-between">
                <div className="bg-gradient-to-r from-[#06B6D433] to-[#0891B233] border border-[#06B6D44D] rounded-lg w-12 h-12 flex justify-center items-center  ">
                  <span className="text-2xl">🔥</span>
                </div>
                <span className="text-[12px] font-[400] text-[#4ADE80] px-[12px] py-[6px] bg-[#22C55E33] rounded-full ">Compound</span>
              </div>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white ">Pull-ups</h4>
              <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px] ">Primary: Back | Secondary: Biceps, Core</p>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-[400] text-[#6B7280] ">~7 cal/min</p>
                <RiAddLine size="20" className='text-[#60A5FA]' />
              </div>
            </div>

            <div className="p-[25px] bg-[#1F293766] border-2 border-dashed border-[#37415166] hover:border-[#22C55E80] rounded-2xl text-center  transition-all">
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-[#22C55E33] to-[#16A34A33] border border-[#22C55E4D] rounded-lg w-12 h-12 flex justify-center items-center  ">
                  <span className="text-2xl"><RiAddLine className="text-[#4ADE80]" /></span>
                </div>
              </div>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white ">Add Custom Exercise</h4>
              <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px] ">Create your own exercise with custom parameters</p>
              <button className="hidden md:inline-flex bg-[#22C55E] text-white px-[16px] py-[10px] font-[700] text-[13  px] rounded-md"> Create Exercise</button>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AllExercises
