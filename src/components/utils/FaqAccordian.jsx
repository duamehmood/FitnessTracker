 import { RiAddFill, RiCloseFill } from '@remixicon/react'
import { useState } from 'react'

const FaqAccordian = ({ faq }) => {
  const [accordianOpen, setAccordianOpen] = useState(false)

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl mb-4 bg-[#1F293766] border border-[#37415166] text-white">
      <div
        className={`px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl transition-colors duration-300 ${
          accordianOpen ? 'bg-[#37415133]' : '' }`}>
        <button
          onClick={() => setAccordianOpen(!accordianOpen)}
          className="flex justify-between items-center w-full cursor-pointer text-left">
          <span className="font-bold text-[14px] sm:text-[15px] md:text-[16px]">
            {faq.question}
          </span>
          {accordianOpen ? (
            <RiCloseFill size="18" className="text-[#4ADE80]" /> ) : ( <RiAddFill size="18" className="text-[#4ADE80]" />)}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-6 ${
          accordianOpen
            ? 'grid-rows-[1fr] opacity-100 pt-3 sm:pt-4 pb-3 sm:pb-4'
            : 'grid-rows-[0fr] opacity-0'}`} >
        <p className="overflow-hidden whitespace-pre-line text-[13px] sm:text-[14px] md:text-[15px] font-[400] text-[#D1D5DB]">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default FaqAccordian
