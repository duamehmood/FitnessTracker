const colorArr = [
    {
        hover: "hover:border-[#22C55E]",
        icon: { bg: "bg-[#22C55E33]", border: "border-[#22C55E4D]" }
    },
    {
        hover: "hover:border-[#3B82F6]",
        icon: { bg: "bg-[#3B82F633]", border: "border-[#3B82F64D]" }
    },
    {
        hover: "hover:border-[#06B6D4]",
        icon: { bg: "bg-[#0891B233]", border: "border-[#06B6D44D]" }
    },
    {
        hover: "hover:border-[#F97316]",
        icon: { bg: "bg-[#EA580C33]", border: "border-[#F973164D]" }
    },
    {
        hover: "hover:border-[#10B981]",
        icon: { bg: "bg-[#05966933]", border: "border-[#10B9814D]" }
    },
    {
        hover: "hover:border-[#6366F1]",
        icon: { bg: "bg-[#4F46E533]", border: "border-[#6366F14D]" }
    }
];

const FeatureCard = ({ feature, index }) => {
    const color = colorArr[index % colorArr.length];

    return (
        <div className={`bg-[#1F293766] border border-[#37415166] rounded-xl p-[33px] text-start transition-all ${color.hover}`}>
            <div className={`w-10 h-10 border rounded-lg flex items-center justify-center ${color.icon.bg} ${color.icon.border}`}>
                <span>{feature.icon}</span>
            </div>
            <h3 className='text-white font-bold md:text-[18px] text-[16px] pt-4 md:pb-3 pb-2'>{feature.title}</h3>
            <p className='text-[#9CA3AF] text-[14px] font-[400]'>{feature.desc}</p>
        </div>
    )
}

export default FeatureCard

