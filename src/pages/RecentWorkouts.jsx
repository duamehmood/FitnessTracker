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
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="bg-[#1F293766] border border-[#37415166] rounded-xl">
                  <div className="flex justify-between pb-[25px] border-b border-[#37415166] p-[25px]">
                    <h2 className='text-white text-[20px] font-bold '>Recent Workouts</h2>
                    <div className="flex gap-3 items-center">
                      <span className='text-[#4ADE80] text-[13px] font-medium px-3 py-2 rounded-lg border border-[#22C55E4D] transition-all duration-200 bg-[#22C55E33]'>All</span>
                      <span className='text-[#9CA3AF] font-medium text-[13px] px-3 py-2 rounded-lg hover:bg-gray-700/30 hover:text-white transition-all duration-200 '>This Week</span>
                      <span className='text-[#9CA3AF] font-medium text-[13px] px-3 py-2 rounded-lg hover:bg-gray-700/30 hover:text-white transition-all duration-200 '>This Month</span>
                    </div>
                  </div>
                  <div className="p-[25px]">
                    <div className="bg-[#1F293766] border border-[#37415166] rounded-xl hover:border-green-500/50 p-[20px]">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <div className="w-11 h-11 flex justify-center items-center rounded-lg bg-[#22C55E33]">
                            <span>💪</span>
                          </div>
                          <h3 className='text-white font-bold text-[18px]'>Push Day</h3>
                        </div>
                        <div className='text-center'>
                          <div className='text-[#4ADE80] text-[13px] font-bold'>8,500 lbs</div>
                          <div className='text-[#9CA3AF] font-medium text-[11px]'>Total Volume</div>
                        </div>
                      </div>
                      <div className='flex items-center gap-2 py-4'>
                        <div className='bg-[#3B82F633] text-[#60A5FA] px-2 py-1 rounded text-[12px] font-medium'>Bench Press</div>
                        <div className='bg-[#A855F733] text-[#C084FC] px-2 py-1 rounded text-[12px] font-medium'>Shoulder Press </div>
                        <div className='bg-[#F9731633] text-[#FB923C] px-2 py-1 rounded text-[12px] font-medium'>Tricep Dips</div>
                        <div className='bg-[#06B6D433] text-[#22D3EE] px-2 py-1 rounded text-[12px] font-medium'>Incline Dumbell Press</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className='flex gap-3 items-center'>
                          <div className='text-[#9CA3AF] text-[12px] font-medium'>4 exercises</div>
                          <div className='text-[#9CA3AF] text-[12px] font-medium'>13 sets</div>
                          <div className='text-[#9CA3AF] text-[12px] font-medium'>~420 cal</div>
                        </div>
                        <div className='text-[13px] text-[#60A5FA]'>View Details</div>
                      </div>
                    </div>
                    <div className="bg-[#1F293766] border border-[#37415166] rounded-xl hover:border-blue-500/50 p-[20px] mt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <div className="w-11 h-11 flex justify-center items-center rounded-lg bg-[#3B82F633]">
                            <span>🏃</span>
                          </div>
                          <h3 className='text-white font-bold text-[18px]'>Cardio Session</h3>
                        </div>
                        <div className='text-center'>
                          <div className='text-[#60A5FA] text-[13px] font-bold'>450 cal</div>
                          <div className='text-[#9CA3AF] font-medium text-[11px]'>Burned</div>
                        </div>
                      </div>
                      <div className='flex items-center gap-2 py-4'>
                        <div className='bg-[#22C55E33] text-[#4ADE80] px-2 py-1 rounded text-[12px] font-medium'>Treadmill</div>
                        <div className='bg-[#F9731633] text-[#FB923C] px-2 py-1 rounded text-[12px] font-medium'>Cycling </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className='flex gap-3 items-center'>
                          <div className='text-[#9CA3AF] text-[12px] font-medium'>2 exercises</div>
                          <div className='text-[#9CA3AF] text-[12px] font-medium'>6.2 miles</div>
                          <div className='text-[#9CA3AF] text-[12px] font-medium'>avg 140 bpm</div>
                        </div>
                        <div className='text-[13px] text-[#60A5FA]'>View Details</div>
                      </div>
                    </div>
                    <div className="text-center pt-7">
                      <button className="px-8 py-3 border border-[#4B556380] text-[#9CA3AF] hover:border-green-500/50 hover:text-green-400 rounded-lg transition-all duration-200">Load More Workouts</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='bg-[#1F293766] border border-[#37415166] rounded-xl p-[20px]' >
                  <h3 className='text-white text-[17px] font-bold '>This Week</h3>
                  <div className="flex justify-between items-center">
                    <p className='text-[15px] font-medium text-[#9CA3AF] pt-4 pb-3 '>Workouts</p>
                    <p className='text-white font-bold text-[15px]'>3/4</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className='text-[15px] font-medium text-[#9CA3AF]  pb-3 '>Total Volume</p>
                    <p className='text-[#4ADE80] font-bold text-[15px]'>24.3K lbs</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className='text-[15px] font-medium text-[#9CA3AF] '>Calories</p>
                    <p className='text-[#FB923C] font-bold text-[15px]'>1,240</p>
                  </div>
                  <p className='pt-4 text-[#9CA3AF] text-[11px] font-medium'>75% of weekly goal completed</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentWorkouts
