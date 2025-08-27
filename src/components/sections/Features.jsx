import React from 'react'
import FeatureCard from '../utils/FeatureCard'
import { features } from '../../data/exercise'

const Features = () => {
    return (
        <div className='bg-[#1e293b] lg:py-[100px] md:py-[70px] py-[50px] text-center'>
            <div className="container mx-auto">
                <div>
                    <h2 className='text-white font-bold lg:text-[35px] md:text-[30px] text-[25px] leading-[100%]' >Powerful Features for <span className='bg-gradient-to-r from-[#4ADE80] to-[#60A5FA] bg-clip-text text-transparent '> Serious Athletes</span> </h2>
                    <p className='text-[16px] font-[400] text-[#9CA3AF] 2xl:px-105 xl:px-85 lg:px-55 sm:px-20 pt-2 pb-5'>Everything you need to plan, track, and optimize your workouts with
                        precision and intelligence.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                        {features.map((feature, index) => (
                            <FeatureCard key={feature.id} feature={feature} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
