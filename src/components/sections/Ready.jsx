import React from 'react'

const Ready = () => {
    return (
        <div className='bg-primary lg:py-[100px] md:py-[70px] py-[50px] text-center '>
            <div className="container mx-auto">
                <div>
                    <h4 className='text-[40px] font-bold text-white px-95 leading-[100%] '>Ready to Transform Your
                        Fitness?</h4>
                    <p className='text-[18px] font-[400] text-[#D1D5DB] pt-4 pb-5 px-82 '>Join thousands of athletes who have revolutionized their fitness journey with FitTracker
                        Pro - completely free!</p>
                    <div className="flex sm:flex-row flex-col justify-center items-center lg:gap-4 gap-3">
                        <button className='font-bold sm:text-[16px] text-[14px]  cursor-pointer rounded-full px-[30px] py-[10px] bg-white text-[#0F172A] sm:w-auto w-full '>Start Now</button>
                        <button className='font-bold sm:text-[16px] text-[14px] border-2 border-[#4B5563] rounded-full px-[30px] py-[10px] cursor-pointer text-[#dbe0e6] sm:w-auto w-full'>Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ready
