import { RiCloseFill, RiAddLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'
import AllExercisesCard from '../components/utils/AllExercisesCard'

const AllExercises = () => {

  const exercises = [
    {
      "id": 1,
      "title": "Bench Press",
      "type": "Compound",
      "icon": "🏃‍♂️",
      "primaryMuscles": "Chest",
      "secondaryMuscles": "Triceps, Shoulders",
      "caloriesPerMin": 8,
      "bgGradientFrom": "#22C55E33",
      "bgGradientTo": "#16A34A33",
      "borderColor": "#22C55E4D",
      "badgeColor": "#4ADE80",
      "badgeBg": "#22C55E33",
      "hoverBorder": "#22C55E80"
    },
    {
      "id": 2,
      "title": "Squats",
      "type": "Cardio",
      "icon": "🏃",
      "primaryMuscles": "Quads",
      "secondaryMuscles": "Glutes, Hamstrings",
      "caloriesPerMin": 6,
      "bgGradientFrom": "#3B82F633",
      "bgGradientTo": "#2563EB33",
      "borderColor": "#3B82F64D",
      "badgeColor": "#FB923C",
      "badgeBg": "#F9731633",
      "hoverBorder": "#3B82F680"
    },
    {
      "id": 3,
      "title": "Deadlift",
      "type": "Isolation",
      "icon": "💪",
      "primaryMuscles": "Back",
      "secondaryMuscles": "Glutes, Hamstrings",
      "caloriesPerMin": 10,
      "bgGradientFrom": "#A855F733",
      "bgGradientTo": "#9333EA33",
      "borderColor": "#A855F74D",
      "badgeColor": "#60A5FA",
      "badgeBg": "#3B82F633",
      "hoverBorder": "#A855F780"
    },
    {
      "id": 4,
      "title": "Pull-ups",
      "type": "Compound",
      "icon": "🔥",
      "primaryMuscles": "Back",
      "secondaryMuscles": "Biceps, Core",
      "caloriesPerMin": 7,
      "bgGradientFrom": "#06B6D433",
      "bgGradientTo": "#0891B233",
      "borderColor": "#06B6D44D",
      "badgeColor": "#4ADE80",
      "badgeBg": "#22C55E33",
      "hoverBorder": "#06B6D480"
    },
    {
      "id": 5,
      "title": "Add Custom Exercise",
      "type": "Custom",
      "icon": <RiAddLine className="text-[#4ADE80]"/>,
      "bgGradientFrom": "#22C55E33",
      "bgGradientTo": "#16A34A33",
      "borderColor": "#22C55E4D",
      "hoverBorder": "#22C55E80"
    }
  ]
  
  return (
    <div>
      <Navbar title="Exercise Library" >
        <button> <RiCloseFill className='text-[#9CA3AF]' /> </button>
      </Navbar>

      <div className='bg-primary py-[50px]'>

        <div className="container mx-auto">

          <div className='p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] '>
            <div className='flex items-center gap-2 pb-4'>
              <div className='w-10 h-10 border border-[#3B82F64D] rounded-lg flex items-center justify-center  bg-gradient-from-r from-[#3B82F633] to-[#2563EB33]'>
                <span>💪</span>
              </div>
              <h3 className='font-bold md:text-[20px] text-[18px] text-white'>Exercise Library</h3>
            </div>
            <input type="text" placeholder='Search exercises...' className='px-4 py-3 rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:ring-2 focus:ring-[#3B82F64D] focus:border-blue-500 md:w-[320px] w-200px ' />
          </div>

          <div className='bg-[#1F293766] border border-[#37415166] my-[24px] rounded-2xl text-[#9CA3AF] font-[400] text-[14px] p-2  '>
            <div className="flex flex-wrap gap-2">
              <button className='px-[16px] py-[12px]  rounded-lg border border-[#22C55E4D] bg-[#22C55E33] text-[#4ADE80]'>All</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Chest</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Back</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Shoulders</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Arms</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Legs</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Core</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200'>Cardio</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <AllExercisesCard key={exercise.id} exercise={exercise} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default AllExercises
