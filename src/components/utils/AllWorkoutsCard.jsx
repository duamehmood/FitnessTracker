
import { RiDeleteBinLine, RiEyeLine } from '@remixicon/react';
import { Link } from 'react-router-dom';

const colorArr = [
    {
        hover: "hover:border-[#22C55E80]",
        badge: { bg: "bg-[#22C55E33]", text: "text-[#4ADE80]" },
        icon: { bg: "bg-[#22C55E33]", border: "border-[#22C55E4D]", color: "text-[#22C55E]" }
    },
    {
        hover: "hover:border-[#A855F780]",
        badge: { bg: "bg-[#A855F733]", text: "text-[#A855F7]" },
        icon: { bg: "bg-[#A855F733]", border: "border-[#A855F74D]", color: "text-[#A855F7]" }
    },
    {
        hover: "hover:border-[#3B82F680]",
        badge: { bg: "bg-[#3B82F633]", text: "text-[#60A5FA]" },
        icon: { bg: "bg-[#3B82F633]", border: "border-[#3B82F64D]", color: "text-[#3B82F6]" }
    },
    {
        hover: "hover:border-[#FB923C80]",
        badge: { bg: "bg-[#F9731633]", text: "text-[#FB923C]" },
        icon: { bg: "bg-[#F9731633]", border: "border-[#FB923C4D]", color: "text-[#FB923C]" }
    },

];

const AllWorkoutsCard = ({ workout, index }) => {
    const color = colorArr[index % 4];

    // number of exercises
    const exerciseCount = workout.exercises.length;

    // number of sets (sum of all sets inside exercises)
    const setCount = workout.exercises.reduce((acc, ex) => acc + ex.sets.length, 0);

    return (
        <div className={`p-[25px] bg-[#1F293766] border border-[#37415166] ${color.hover} rounded-2xl transition-all`}>
            <Link to={`/workouts/${workout.id}`}>

                <div className="flex items-start justify-between pb-4">
                    <h4 className="font-[700] md:text-[18px] text-[16px] text-white">
                        {workout.name}
                    </h4>
                    {workout.category && (
                        <div className={`text-[12px] font-[400] ${color.badge.text} px-[12px] py-[6px] ${color.badge.bg} rounded-full`}>
                            {workout.category}
                        </div>
                    )}
                </div>
                <p className="text-[13px] text-[#9CA3AF] font-[400] pb-[18px]">{workout.desc}</p>

                <div className="flex items-center justify-around text-center pb-4">
                    <div>
                        <span className='text-[18px] font-bold text-[#FB923C] ' >{exerciseCount} </span>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] ">Exercises</p>
                    </div>
                    <div>
                        <span className='text-[18px] font-bold text-[#60A5FA] '>{setCount} </span>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] ">Sets</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] py-[13px] text-white text-[13px] font-bold w-full rounded-lg transition-all duration-200  cursor-pointer">
                        Start Workout
                    </button>
                    <button className="border border-[#4B556380] rounded-lg p-3 flex items-center justify-center transition-all duration-200 hover:border-[#4ADE80] hover:bg-[#1F2937] cursor-pointer">
                        <RiEyeLine size={20} className="text-[#9CA3AF] " />
                    </button>
                </div>


            </Link>
        </div>
    )
}

export default AllWorkoutsCard;



