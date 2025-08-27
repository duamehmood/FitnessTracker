import { RiArrowRightSLine } from '@remixicon/react'

const Work = () => {
    return (
        <div className='bg-[#1e293b] lg:py-[100px] md:py-[70px] py-[50px] text-center'>
            <div className="container mx-auto">
                <h2 className='text-white font-bold lg:text-[35px] md:text-[30px] text-[25px] text-center leading-[110%]'> How It <span className='bg-gradient-to-r from-[#4ADE80] to-[#60A5FA] bg-clip-text text-transparent '> Works</span> </h2>
                <p className='text-[16px] font-[400] text-[#9CA3AF] 2xl:px-105 xl:px-85 lg:px-55 sm:px-20 pt-2 text-center md:pb-10 pb-6'>Get started with FitTracker Pro in just three simple steps</p>

                <div className=' flex items-center justify-center flex-wrap md:flex-nowrap gap-4 '>
                    <div>
                        <div className='lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 border rounded-xl mx-auto flex items-center justify-center bg-[#16A34A33] border-[#22C55E4D] '>
                            <span className='lg:text-lg'>📝</span>
                        </div>
                        <h4 className='lg:text-[18px] text-[16px] font-bold text-white lg:pt-4 pt-2 lg:pb-3 pb-1'>Plan Your Workout</h4>
                        <p className='text-[#9CA3AF] lg:text-[16px] text-[14px] font-[400]'>Create personalized workout plans with our
                            extensive exercise library and smart
                            recommendations.</p>
                    </div>
                    <div className='flex items-center '>
                        <div className=' xl:w-18 lg:w-15 md:w-8 w-5 h-0.5 bg-gradient-to-r from-[#4ADE80] to-[#60A5FA]'></div>
                        <RiArrowRightSLine className='text-[#60A5FA]' />
                    </div>
                    <div>
                        <div className='lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 border rounded-xl mx-auto flex items-center justify-center bg-[#2563EB33] border-[#3B82F64D] '>
                            <span className='text-xl'>⏱️</span>
                        </div>
                        <h4 className='lg:text-[18px] text-[16px] font-bold text-white lg:pt-4 pt-2 lg:pb-3 pb-1'>Track Progress</h4>
                        <p className='text-[#9CA3AF] lg:text-[16px] text-[14px] font-[400]'>Log your workouts in real-time with intuitive tracking
                            tools and automatic calculations.</p>
                    </div>
                    <div className='flex items-center '>
                        <div className=' xl:w-18 lg:w-15 md:w-8 w-5 h-0.5 bg-gradient-to-r from-[#60A5FA] to-[#22D3EE]'></div>
                        <RiArrowRightSLine className='text-[#22D3EE] ' />
                    </div>
                    <div>
                        <div className='lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 border rounded-xl mx-auto flex items-center justify-center bg-[#0891B233] border-[#06B6D44D] '>
                            <span className='text-lg'>📈</span>
                        </div>
                        <h4 className='lg:text-[18px] text-[16px] font-bold text-white lg:pt-4 pt-2 lg:pb-3 pb-1'>Analyze Results</h4>
                        <p className='text-[#9CA3AF] lg:text-[16px] text-[14px] font-[400]'>View detailed analytics and insights to optimize
                            your training and achieve your goals faster.</p>
                    </div>
                </div>
                <div className="flex justify-center lg:gap-5 md:gap-x-3 gap-x-2 gap-y-4 flex-wrap md:pt-13 pt-7">
                    <div className='lg:py-3 py-2 lg:px-5 px-3 bg-[#22C55E33] rounded-full'>
                        <p className='text-[13px] text-[#4ADE80] font-[400] '>500+ Exercises</p>
                    </div>
                    <div className='lg:py-3 py-2 lg:px-5 px-3 bg-[#3B82F633] rounded-full'>
                        <p className='text-[13px] text-[#60A5FA] font-[400] '>Real-time Tracking</p>
                    </div>
                    <div className='lg:py-3 py-2 lg:px-5 px-3 bg-[#06B6D433] rounded-full'>
                        <p className='text-[13px] text-[#22D3EE] font-[400] '>Smart Analytics</p>
                    </div>
                    <div className='lg:py-3 py-2 lg:px-5 px-3 bg-[#A855F733] rounded-full'>
                        <p className='text-[13px] text-[#C084FC] font-[400] '>Progress Charts</p>
                    </div>
                    <div className='lg:py-3 py-2 lg:px-5 px-3 bg-[#F9731633] rounded-full'>
                        <p className='text-[13px] text-[#FB923C] font-[400] '>Personal Records</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
