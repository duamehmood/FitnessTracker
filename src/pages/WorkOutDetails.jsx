import { RiFileDownloadLine, RiRefreshLine } from "@remixicon/react"
import Navbar from "../components/sections/Navbar"
import WorkoutDetailCard from "../components/utils/WorkoutDetailCard"

const WorkOutDetails = () => {
  return (
    <>
      <Navbar title="Push Day Workout" >
        <button ><RiFileDownloadLine className="border-2 text-[#2563EB] md:p-[8px] p-[5px] md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-md font-bold " /> </button>
        <button ><RiRefreshLine className="border-2 text-[#22C55E]  md:p-[8px] p-[5px] md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-md font-bold " /> </button>
      </Navbar>

      <div className="bg-primary py-[40px] sm:py-[50px]">
        <div className="container mx-auto">
          <div className="space-y-8 ">
            <div className="p-4 sm:p-6 md:p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] text-white">
              <div className="flex items-start gap-3 sm:gap-4 pb-6">
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex justify-center items-center rounded-xl bg-[#22C55E33]">
                  <span className="text-xl sm:text-2xl md:text-3xl">💪</span>
                </div>
                <div>
                  <h2 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-bold">
                    Push Day Workout
                  </h2>
                  <p className="text-[#9CA3AF] text-[13px] sm:text-[14px] md:text-[15px] font-[400]">
                    A workout focusing on pushing movements, targeting chest, shoulders, and triceps pushing movements, targeting chest, shoulders, and triceps.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                <div className="bg-[#3741514D] rounded-xl py-4 text-center">
                  <div className="text-[#4ADE80] text-[20px] font-bold">8,500</div>
                  <div className="text-[#9CA3AF] text-[13px] font-medium">Total Volume (lbs)</div>
                </div>
                <div className="bg-[#3741514D] rounded-xl py-4 text-center">
                  <div className="text-[#60A5FA] text-[20px] font-bold">12</div>
                  <div className="text-[#9CA3AF] text-[13px] font-medium">Total Sets</div>
                </div>
                <div className="bg-[#3741514D] rounded-xl py-4 text-center">
                  <div className="text-[#C084FC] text-[20px] font-bold">4</div>
                  <div className="text-[#9CA3AF] text-[13px] font-medium"> Exercises</div>
                </div>
                <div className="bg-[#3741514D] rounded-xl py-4 text-center">
                  <div className="text-[#FB923C] text-[20px] font-bold">420</div>
                  <div className="text-[#9CA3AF] text-[13px] font-medium">Calories Burned</div>
                </div>
              </div>
            </div>
            <div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <WorkoutDetailCard/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkOutDetails
