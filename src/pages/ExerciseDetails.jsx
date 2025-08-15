import { RiAddLine, RiEditLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'
const ExerciseDetails = () => {
  return (
    <div>
      <Navbar title=" Bench Press" >
        <button ><RiAddLine className="border-2 w-[30px] md:w-[35px] h-[30px] md:h-[35px] text-[#2563EB] md:p-[8px] p-[5px] rounded-md " /> </button>
        <button ><RiEditLine className="border-2 w-[30px] md:w-[35px] h-[30px] md:h-[35px] text-[#22C55E] md:p-[8px] p-[5px] rounded-md " /> </button>
      </Navbar>

      <div className='bg-primary py-[50px]'>
        <div className="container mx-auto">

          <div className='p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] text-white'>

            <div className="grid lg:grid-colos-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start gap-4">
                  <div className='w-14 h-17 flex justify-center items-center rounded-xl bg-[#22C55E33]'>
                    <span className="text-3xl">🏋️</span>
                  </div>
                  <div>
                    <h2 className='text-[30px] font-bold '>Bench Press</h2>
                    <div className='flex gap-3 text-[14px] font-[400] pt-1 pb-5'>
                      <span className='px-[12px] py-[7px] bg-[#22C55E33] text-[#4ADE80] rounded-full'>Compound</span>
                      <span className='px-[12px] py-[7px] bg-[#3B82F633] text-[#60A5FA] rounded-full'>Barbell</span>
                      <span className='px-[12px] py-[7px] bg-[#A855F733] text-[#C084FC] rounded-full'>Intermediate</span>
                    </div>
                    <p className='text-[#9CA3AF] text-[15px] font-[400] '>The bench press is a fundamental compound exercise that primarily targets the chest muscles while engaging the shoulders and triceps as secondary movers.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pb-6">
                  
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>



    </div>



  )
}

export default ExerciseDetails
