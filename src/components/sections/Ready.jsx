import React from 'react'

const Ready = () => {
    return (
        <div className='bg-primary lg:py-[70px] py-[50px] text-center '>
            <div className="container mx-auto">
                <div>
                    <h2 className='lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold text-white 2xl:px-95 xl:px-80 lg:px-50 leading-[100%] '>Ready to Transform Your
                        Fitness?</h2>
                    <p className='md:text-[18px] sm:text-[16px] text-[15px] font-[400] text-[#D1D5DB] pt-4 pb-5 2xl:px-82 xl:px-55 lg:px-30 '>Join thousands of athletes who have revolutionized their fitness journey with FitTracker
                        Pro - completely free!</p>
                    <div className="flex sm:flex-row flex-col justify-center items-center lg:gap-4 gap-2">
                        <button className='font-bold sm:text-[16px] text-[14px]  cursor-pointer rounded-full px-[30px] py-[10px] bg-white text-[#0F172A] sm:w-auto w-full '>Start Now</button>
                        <button className='font-bold sm:text-[16px] text-[14px] border-2 border-[#4B5563] rounded-full px-[30px] py-[10px] cursor-pointer text-[#dbe0e6] sm:w-auto w-full'>Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ready
