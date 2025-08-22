import React from 'react'

const Hero = () => {
  return (
     <div className="bg-primary md:py-[100px] py-[80px] text-center ">
        <div className="container mx-auto">
          <div>
            <h1 className=' text-white font-bold lg:text-[60px] md:text-[50px] sm:text-[40px] text-[36px] xl:px-60 lg:px-30 md:px-10 sm:px-10 leading-[100%]'>
              Transform Your
              <span className="bg-gradient-to-l from-[#4ADE80] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent"> Fitness Journey</span>
            </h1>
            <p className='text-[#D1D5DB] font-[400] sm:text-[18px] text-[16px] py-[20px] 2xl:px-82 xl:px-60 lg:px-30 sm:px-5'>
              The ultimate free workout planner and tracker with smart analytics, personalized
              progress tracking, and seamless workout management.
            </p>
            <div className="flex sm:flex-row flex-col justify-center items-center lg:gap-4 gap-3">
              <button className='font-bold sm:text-[16px] text-[14px]  cursor-pointer rounded-full px-[30px] py-[10px] bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white sm:w-auto w-full '>Start Now</button>
              <button className='font-bold sm:text-[16px] text-[14px] border-2 border-[#4B5563] rounded-full px-[30px] py-[10px] cursor-pointer text-[#dbe0e6] sm:w-auto w-full'>Watch Demo</button>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Hero
