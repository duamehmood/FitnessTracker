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
    },
    {
      "id": 2,
      "title": "Squats",
      "type": "Cardio",
      "icon": "🏃",
      "primaryMuscles": "Quads",
      "secondaryMuscles": "Glutes, Hamstrings",
      "caloriesPerMin": 6,
    },
    {
      "id": 3,
      "title": "Deadlift",
      "type": "Isolation",
      "icon": "💪",
      "primaryMuscles": "Back",
      "secondaryMuscles": "Glutes, Hamstrings",
      "caloriesPerMin": 10,
    },
    {
      "id": 4,
      "title": "Pull-ups",
      "type": "Compound",
      "icon": "🔥",
      "primaryMuscles": "Back",
      "secondaryMuscles": "Biceps, Core",
      "caloriesPerMin": 7,
    },

  ]

  return (
    <div>
      <Navbar title="Exercise Library" >
        <button className='p-1 hover:bg-red-500 text-[#9CA3AF]  hover:text-white transition-all duration-200  rounded cursor-pointer'> <RiCloseFill /> </button>
      </Navbar>

      <div className='bg-primary py-[50px]'>

        <div className="container mx-auto">

          <div className='p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] '>
            <div className='flex items-center gap-2 pb-4'>
              <div className='w-10 h-10 border border-[#3B82F64D] rounded-lg flex items-center justify-center  bg-[#3B82F633]'>
                <span>💪</span>
              </div>
              <h3 className='font-bold md:text-[20px] text-[18px] text-white'>Exercise Library</h3>
            </div>
            <input type="text" placeholder='Search exercises...' className='px-4 py-3 rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:ring-2 focus:ring-[#3B82F64D] focus:border-green-500 md:w-[320px] w-200px ' />
          </div>

          <div className='bg-[#1F293766] border border-[#37415166] my-[24px] rounded-2xl text-[#9CA3AF] font-[400] text-[14px] p-2  '>
            <div className="flex flex-wrap gap-2">
              <button className='px-[16px] py-[12px]  rounded-lg border border-[#22C55E4D] bg-[#22C55E33] text-[#4ADE80] cursor-pointer'>All</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200 cursor-pointer'>Chest</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200 cursor-pointer'>Back</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200 cursor-pointer'>Shoulders</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200 cursor-pointer'>Arms</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200 cursor-pointer'>Legs</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200 cursor-pointer'>Core</button>
              <button className='px-[16px] py-[12px] rounded-lg  hover:bg-[#3741514D] hover:text-white transition-all duration-200 cursor-pointer'>Cardio</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise, index) => (
              <AllExercisesCard key={exercise.id} exercise={exercise} index={index} />
            ))}
            <div className='p-[25px] bg-[#1F293766] border-dashed border-[#37415166] border-2 hover:border-[#22C55E80]  rounded-2xl transition-all text-center'>
              <div className='rounded-lg w-12 h-12 flex justify-center items-center border border-[#22C55E4D] bg-gradient-to-r from-[#22C55E33] to-[#16A34A33] mx-auto'>
                <span className='text-2xl text-[#4ADE80]'> <RiAddLine /> </span>
              </div>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white">
                Add Custom Exercise
              </h4>
              <p className='font-[400] text-[13px] pb-[16px] text-[#9CA3AF] '>Create your own exercise with custom parameters</p>
              <button className="  bg-[#22C55E] text-white px-[16px] py-[10px] font-[600] text-[14px] rounded-md">Create Exercise</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default AllExercises
