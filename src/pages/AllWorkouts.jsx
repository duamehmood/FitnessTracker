
import { RiAddLine } from "@remixicon/react"
import Navbar from "../components/sections/Navbar"
import AllWorkoutsCard from '../components/utils/AllWorkoutsCard'
import { fetchWorkouts } from '../api/workout';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Workouts");

  useEffect(() => {
    const getWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
      setFilteredWorkouts(data);  
    };
    getWorkouts();
  }, []);

const handleFilter = (category) => {
  setSelectedCategory(category);
  if (category === "All Workouts") {
    setFilteredWorkouts(workouts); 
  } else {
    setFilteredWorkouts(
      workouts.filter(workout => 
        workout.category?.toLowerCase() === category.toLowerCase() ));
  }
};


  return (
    <div>
      <Navbar title=" All Workouts" >
      </Navbar>

      <div className='bg-primary py-[50px]'>
        <div className="container mx-auto">

          <div className='p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] '>
            <div className='flex items-center gap-2 pb-4'>
              <div className='w-10 h-10 border border-[#22C55E4D] rounded-lg flex items-center justify-center  bg-[#22C55E33]'>
                <span>💪</span>
              </div>
              <h3 className='font-bold md:text-[20px] text-[18px] text-white'>My Workout Plans</h3>
            </div>
            <p className=" text-[#9CA3AF] font-[400] text-[14px] pb-3">Choose a workout plan to start your training session or create a new one.</p>
            <input 
              type="text" 
              placeholder='Search exercises...' 
              className='px-4 py-3 rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 md:w-[320px] w-200px ' />
          </div>
          <div className='bg-[#1F293766] border border-[#37415166] my-[24px] rounded-2xl text-[#9CA3AF] font-[400] text-[14px] p-2'>
            <div className="flex flex-wrap gap-2">
              {["All Workouts","Strength Training","Cardio","Flexibility"].map(category => (
                <button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={`px-[16px] py-[12px] rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "border border-[#22C55E4D] bg-[#22C55E33] text-[#4ADE80]"
                      : "hover:bg-[#3741514D] hover:text-white" }`} >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map((workout, index) => (
              <AllWorkoutsCard key={workout.id} workout={workout} index={index} />
            ))}
            <div className='p-[25px] bg-[#1F293766] border-dashed border-[#37415166] border-2 hover:border-[#22C55E80]  rounded-2xl transition-all text-center'>
              <Link to="/workouts/add">
                <div className='rounded-lg w-12 h-12 flex justify-center items-center border border-[#22C55E4D] bg-gradient-to-r from-[#22C55E33] to-[#16A34A33] mx-auto'>
                  <span className='text-2xl text-[#4ADE80]'> <RiAddLine /> </span>
                </div>
              </Link>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white">
                Create New Workout
              </h4>
              <p className='font-[400] text-[13px] pb-[16px] text-[#9CA3AF] '>
                Design your own custom workout plan with our workout planner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllWorkouts

