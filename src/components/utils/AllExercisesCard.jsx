
import { RiAddLine } from '@remixicon/react'

const AllExercisesCard = ({ exercise }) => {

  const isCustom = exercise.type === "Custom";

  return (
    <div
      className={`p-[25px] bg-[#1F293766] border border-[#37415166] hover:border-[${exercise.hoverBorder}] ${isCustom ? "border-dashed border-2  justify-center text-center" : ""} rounded-2xl transition-all`}>
      <div className="flex items-start justify-between">
        <div
          className={`bg-gradient-to-r from-[${exercise.bgGradientFrom}] to-[${exercise.bgGradientTo}] border border-[${exercise.borderColor}] rounded-lg w-12 h-12 flex justify-center items-center ${isCustom ? "mx-auto" : ""}`}>
          <span className="text-2xl">{exercise.icon}</span>
        </div>
        {!isCustom && (
          <span
            className={`text-[12px] font-[400] text-[${exercise.badgeColor}] px-[12px] py-[6px] bg-[${exercise.badgeBg}] rounded-full`}>
            {exercise.type}
          </span>
        )}
      </div>
      <h4 className={`font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white`}>
        {exercise.title}
      </h4>
      {isCustom ? (
        <>
          <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px] ">Create your own exercise with custom parameters</p>
          <button className=" bg-[#22C55E] text-white px-[16px] py-[10px] font-[700] text-[13px] rounded-md"> Create Exercise</button>
        </>
      ) : (
        <>
          {exercise.primaryMuscles && (
            <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px]">
              Primary: {exercise.primaryMuscles} | Secondary: {exercise.secondaryMuscles}
            </p>
          )}
          <div className="flex items-center justify-between">
            {exercise.caloriesPerMin ? (
              <p className="text-[11px] font-[400] text-[#6B7280]">
                ~{exercise.caloriesPerMin} cal/min
              </p>
            ) : (
              <span />
            )}
            <RiAddLine size="20" className="text-[#60A5FA]" />
          </div>
        </>
      )}
    </div>
  )
}

export default AllExercisesCard
