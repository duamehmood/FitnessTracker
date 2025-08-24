
import { RiStarFill } from '@remixicon/react'

const colorArr = [
    {
        icon: { bg: "bg-[#22C55E33]" }  
    },
    {
        icon: { bg: "bg-[#3B82F633]" }  
    },
    {
        icon: { bg: "bg-[#0891B233]" }  
    },
    {
        icon: { bg: "bg-[#EA580C33]" } 
    },
    {
        icon: { bg: "bg-[#05966933]" }  
    },
    {
        icon: { bg: "bg-[#4F46E533]" }  
    }
];

const ReviewsCard = ({ review, index }) => {
    const color = colorArr[index % colorArr.length] || { icon: { bg: "bg-[#374151]" } };

    return (
        <div className='bg-[#1F293766] border border-[#37415166] p-5 rounded-xl'>
            <div className="flex gap-3 text-start items-start pb-5">
                <div className={`${color.icon.bg} rounded-full w-9 h-9 flex justify-center items-center`}>
                    <span className='font-bold text-[14px] text-white '>{review.initial}</span>
                </div>
                <div>
                    <h5 className='text-white text-[14px] font-bold leading-[100%] pb-[1px] '>
                        {review.name}
                    </h5>
                    <p className='text-[13px] font-[400] text-[#9CA3AF] '>
                        {review.profession}
                    </p>
                </div>
            </div>
            <p className='text-[#D1D5DB] text-[14px] font-[400] text-start pb-7'>
                {review.desc}
            </p>
            <div className='flex items-center gap-1'>
                {Array.from({ length: review.rating || 5 }).map((_, i) => (
                    <RiStarFill key={i} size="10" className='text-[#FACC15]' />
                ))}
            </div>
        </div>
    )
}

export default ReviewsCard

