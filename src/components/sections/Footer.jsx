import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0f172a] text-center py-[30px] border-t-[1px] border-[#33415580]'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center gap-3'>
          <div className="flex items-center gap-2">
            <span className="bg-secondary text-white font-[700]  w-6 h-6 flex items-center justify-center rounded">
              F
            </span>
            <span className="font-[700] text-[18px] text-secondary">FitTracker Pro</span>
          </div>
          <p className='text-[#9CA3AF] text-[14px] font-[400]'>© 2025 FitTracker Pro. All rights reserved. Built for serious athletes.</p>
        </div>
      </div>


    </div>
  )
}

export default Footer
