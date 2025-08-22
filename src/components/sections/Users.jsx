import React from 'react'

const Users = () => {
    return (
        <div className='bg-primary lg:py-[100px] md:py-[70px] py-[50px] text-center '>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-around items-center gap-6">
                    <div>
                        <h2 className='lg:text-[40px] md:text-[30px] text-[25px] font-bold bg-gradient-to-r from-[#4ADE80] to-[#34D399] bg-clip-text text-transparent '>50K+</h2>
                        <p className='text-[15px] font-[400] text-[#9CA3AF] '>Active Users</p>
                    </div>
                    <div>
                        <h2 className='lg:text-[40px] md:text-[30px] text-[25px] font-bold bg-gradient-to-r from-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent '>2M+</h2>
                        <p className='lg:text-[15px] text-[14px] font-[400] text-[#9CA3AF] '>Workouts Tracked</p>
                    </div>
                    <div>
                        <h2 className='lg:text-[40px] md:text-[30px] text-[25px] font-bold bg-gradient-to-r from-[#34D399] to-[#2DD4BF] bg-clip-text text-transparent '>500+</h2>
                        <p className='text-[15px] font-[400] text-[#9CA3AF] '>Exercise Database</p>
                    </div>
                    <div>
                        <h2 className='lg:text-[40px] md:text-[30px] text-[25px] font-bold bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] bg-clip-text text-transparent '>98%</h2>
                        <p className='text-[15px] font-[400] text-[#9CA3AF] '>Satisfaction Rate</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Users
