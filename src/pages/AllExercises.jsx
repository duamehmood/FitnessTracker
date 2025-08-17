
import { RiCloseFill, RiAddLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'
import AllExercisesCard from '../components/utils/AllExercisesCard'
import { fetchExercises } from '../api/exercise';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchExercises();
      setExercises(data);
      setFilteredExercises(data); // initially show all
    };
    getExercises();
  }, []);

  // handle category filter
  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredExercises(exercises);
    } else {
      setFilteredExercises(
        exercises.filter(ex => 
          ex.primaryMuscle?.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };

  return (
    <div>
      <Navbar title="Exercise Library" >
        <button className='p-1 hover:bg-red-500 text-[#9CA3AF]  hover:text-white transition-all duration-200  rounded cursor-pointer'> 
          <RiCloseFill /> 
        </button>
      </Navbar>

      <div className='bg-primary py-[50px]'>
        <div className="container mx-auto">

          {/* Search Box */}
          <div className='p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] '>
            <div className='flex items-center gap-2 pb-4'>
              <div className='w-10 h-10 border border-[#3B82F64D] rounded-lg flex items-center justify-center  bg-[#3B82F633]'>
                <span>💪</span>
              </div>
              <h3 className='font-bold md:text-[20px] text-[18px] text-white'>Exercise Library</h3>
            </div>
            <input 
              type="text" 
              placeholder='Search exercises...' 
              className='px-4 py-3 rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 md:w-[320px] w-200px ' 
            />
          </div>

          {/* Filter Buttons */}
          <div className='bg-[#1F293766] border border-[#37415166] my-[24px] rounded-2xl text-[#9CA3AF] font-[400] text-[14px] p-2'>
            <div className="flex flex-wrap gap-2">
              {["All","Chest","Back","Shoulders","Arms","Legs"].map(category => (
                <button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={`px-[16px] py-[12px] rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "border border-[#22C55E4D] bg-[#22C55E33] text-[#4ADE80]"
                      : "hover:bg-[#3741514D] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Exercises Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise, index) => (
              <AllExercisesCard key={exercise.id} exercise={exercise} index={index} />
            ))}
            
            {/* Add Custom Exercise Button */}
            <div className='p-[25px] bg-[#1F293766] border-dashed border-[#37415166] border-2 hover:border-[#22C55E80]  rounded-2xl transition-all text-center'>
              <Link to="/exercises/add">
                <div className='rounded-lg w-12 h-12 flex justify-center items-center border border-[#22C55E4D] bg-gradient-to-r from-[#22C55E33] to-[#16A34A33] mx-auto'>
                  <span className='text-2xl text-[#4ADE80]'> <RiAddLine /> </span>
                </div>
              </Link>
              <h4 className="font-[700] md:text-[18px] text-[16px] pt-[16px] pb-[8px] text-white">
                Add Custom Exercise
              </h4>
              <p className='font-[400] text-[13px] pb-[16px] text-[#9CA3AF] '>
                Create your own exercise with custom parameters
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AllExercises
