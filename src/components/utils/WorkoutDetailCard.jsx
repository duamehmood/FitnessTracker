import React from 'react'

const WorkoutDetailCard = () => {
    return (
        <div className="bg-[#1F293766] border border-[#4B556366] p-[17px] rounded-2xl mb-4">
            <div className="flex gap-2 justify-between items-center pb-4">
                <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 flex justify-center items-center rounded-lg bg-[#22C55E33]">
                        <span>💪</span>
                    </div>
                    <div>
                        <h4 className='text-white text-[16px] font-bold'>Bench Press</h4>
                        <div className='text-[#9CA3AF] font-medium text-[13px]'>chest .  compound </div>
                    </div>
                </div>
                <div>
                    <button className="text-[#60A5FA] font-medium text-[13px]">
                        View Details
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 border-b border-[#4B55634D] text-[13px] font-bold text-[#9CA3AF] py-4'>
                <span>Set</span>
                <span>Reps</span>
                <span>Weight</span>
                <span>Volume</span>
            </div>
            <div className="grid grid-cols-4 gap-2 py-4 border-b border-[#4B55634D]">
                <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#22C55E]">
                    <span className='text-[12px] font-bold text-white'>1</span>
                </div>
                <div className="text-white font-bold ">12</div>
                <div className="  text-white font-bold ">135</div>
                <div className=" text-white font-bold ">135</div>
            </div>
            <div className="grid grid-cols-4 gap-2 py-4 border-b border-[#4B55634D]">
                <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#22C55E]">
                    <span className='text-[12px] font-bold text-white'>2</span>
                </div>
                <div className="text-white font-bold ">12</div>
                <div className="  text-white font-bold ">135</div>
                <div className=" text-white  font-bold">135</div>
            </div>
            <div className="grid grid-cols-4 gap-2 py-4 ">
                <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#22C55E]">
                    <span className='text-[12px] font-bold text-white'>3</span>
                </div>
                <div className="text-white font-bold ">12</div>
                <div className="  text-white font-bold ">135</div>
                <div className=" text-white font-bold ">135</div>
            </div>
        </div>
        
    )
}

export default WorkoutDetailCard
