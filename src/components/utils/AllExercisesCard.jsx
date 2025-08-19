
import { RiDeleteBinLine } from '@remixicon/react';
import { Link } from 'react-router-dom';

const colorArr = [
  {
    hover: "hover:border-[#22C55E80]",
    badge: { bg: "bg-[#22C55E33]", text: "text-[#4ADE80]" },
    icon: { bg: "bg-[#22C55E33]", border: "border-[#22C55E4D]", color: "text-[#22C55E]" }
  },
  {
    hover: "hover:border-[#FB923C80]",
    badge: { bg: "bg-[#F9731633]", text: "text-[#FB923C]" },
    icon: { bg: "bg-[#F9731633]", border: "border-[#FB923C4D]", color: "text-[#FB923C]" }
  },
  {
    hover: "hover:border-[#3B82F680]",
    badge: { bg: "bg-[#3B82F633]", text: "text-[#60A5FA]" },
    icon: { bg: "bg-[#3B82F633]", border: "border-[#3B82F64D]", color: "text-[#3B82F6]" }
  },
  {
    hover: "hover:border-[#A855F780]",
    badge: { bg: "bg-[#A855F733]", text: "text-[#A855F7]" },
    icon: { bg: "bg-[#A855F733]", border: "border-[#A855F74D]", color: "text-[#A855F7]" }
  }
];

const AllExercisesCard = ({ exercise, index }) => {
  const color = colorArr[index % 4];

  return (
    <div className={`p-[25px] bg-[#1F293766] border border-[#37415166] ${color.hover} rounded-2xl transition-all`}>
      <Link to={`/exercises/${exercise.id}`}>
        <div className="flex items-start justify-between">
          <div className={`rounded-lg w-12 h-12 flex justify-center items-center ${color.icon.bg} border ${color.icon.border}`}>
            <span className={`text-2xl ${color.icon.color}`}>{exercise.icon}</span>
          </div>
          {exercise.type && (
            <span className={`text-[12px] font-[400] ${color.badge.text} px-[12px] py-[6px] ${color.badge.bg} rounded-full`}>
              {exercise.type}
            </span>
          )}
        </div>

        <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white">
          {exercise.title}
        </h4>

        {(exercise.primaryMuscle || exercise.secondaryMuscles) && (
          <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px]">
            {exercise.primaryMuscle && `Primary: ${exercise.primaryMuscle}`}
            {exercise.secondaryMuscles && ` | Secondary: ${exercise.secondaryMuscles}`}
          </p>
        )}

        <div className="flex items-center justify-between">
          {exercise.calories && (
            <p className="text-[11px] font-[400] text-[#6B7280]">
              ~{exercise.calories} cal/min
            </p>
          )}
          <RiDeleteBinLine size="20" className='text-[#F87171] '/>
        </div>
      </Link>
    </div>
  )
}

export default AllExercisesCard;



