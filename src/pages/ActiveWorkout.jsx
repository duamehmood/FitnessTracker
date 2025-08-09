import Navbar from "../components/sections/Navbar"
const ActiveWorkout = () => {
  return (
    <div>
       <Navbar title="Push Day Workout" >
        <button className=" text-[#4ADE80] bg-[#22C55E33] px-[16px] py-[10px] font-[400] text-[14px] rounded-md">45:32</button>
        <button className="text-[#EF4444] border-1 md:px-[16px] px-[8px] md:py-[10px] py-[4px] font-[600] text-[14px] rounded-md">End Workout</button>
      </Navbar>
    </div>
  )
}

export default ActiveWorkout
