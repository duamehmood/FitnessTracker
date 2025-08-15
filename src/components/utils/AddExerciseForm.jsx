import React from 'react'

const AddExerciseForm = () => {
  return (
    <div className="bg-[#1F293766] border border-[#37415166] rounded-2xl p-[25px] backdrop-blur-12">
      <div className='flex items-center gap-2 pb-4'>
        <div className='w-10 h-10 border border-[#22C55E4D] rounded-lg flex items-center justify-center  bg-[#22C55E33]'>
          <span>💪</span>
        </div>
        <h3 className='font-bold md:text-[20px] text-[18px] text-white'>Exercise Information</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2">Exercise Name *</label>
          <input type="text" placeholder="e.g., Barbell Bench Press" className="px-4 py-[15px] rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 " />

          <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Primary Muscle Group *</label>
          <select className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500">
            <option value="" disabled selected>Select a muscle group</option>
            <option className="text-green-400" value="chest">Chest</option>
            <option className="text-green-400 bg-green-100" value="back">Back</option>
            <option className="text-green-400 bg-green-100" value="shoulders">Shoulders</option>
            <option className="text-green-400 bg-green-100" value="biceps">Biceps</option>
            <option className="text-green-400 bg-green-100" value="triceps">Triceps</option>
            <option className="text-green-400 bg-green-100" value="forarms">Foramrms</option>
            <option className="text-green-400 bg-green-100" value="abs">Abs</option>
            <option className="text-green-400 bg-green-100" value="glutes">glutes</option>
            <option className="text-green-400 bg-green-100" value="Quadricceps">Quadricceps</option>
            <option className="text-green-400 bg-green-100" value="hamstrings">Hamstrings</option>
            <option className="text-green-400 bg-green-100" value="calves">Calves</option>
            <option className="text-green-400 bg-green-100" value="Full Body">Full Body</option>
          </select>

          <label className="text-[14px] text-[#D1D5DB] font-[400] pt-4 pb-2">Secondary Muscle Groups</label>
          <input type="text" placeholder="e.g., Triceps, Shoulders (comma separated)" className="px-4 py-[15px] rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 " />

          <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Exercise Type</label>
          <select className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500">
            <option className="text-green-400 bg-green-100" value="Compound">Compound</option>
            <option className="text-green-400 bg-green-100" value="Isolation">Isolation</option>
            <option className="text-green-400 bg-green-100" value="Cardio">Cardio</option>
            <option className="text-green-400 bg-green-100" value="Strength">Strength</option>
            <option className="text-green-400 bg-green-100" value="Flexibility">Flexibility</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2">Equipment</label>
          <select className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500">
            <option value="" disabled selected>Select equipment</option>
            <option className="text-green-400 bg-green-100" value="Barbell">Barbell</option>
            <option className="text-green-400 bg-green-100" value="Dumbbell">Dumbbell</option>
            <option className="text-green-400 bg-green-100" value="Cable Machine">Cable Machine</option>
            <option className="text-green-400 bg-green-100" value="Machine">Machine</option>
            <option className="text-green-400 bg-green-100" value="Body Weight">Body Weight</option>
            <option className="text-green-400 bg-green-100" value="Resistance Band">Resistance Band</option>
            <option className="text-green-400 bg-green-100" value="Kettlebell">Kettlebell</option>
            <option className="text-green-400 bg-green-100" value="Cardio Machine">Cardio Machine</option>
            <option className="text-green-400 bg-green-100" value="Other">Other</option>
          </select>

          <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Difficulty Level</label>
          <select className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500">
            <option className="text-green-400 bg-green-100" value="Beginner">Beginner</option>
            <option className="text-green-400 bg-green-100" value="Intermediate">Intermediate</option>
            <option className="text-green-400 bg-green-100" value="Advance">Advance</option>
          </select>

          <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Calories per Minute (approx.)</label>
          <input type="number" placeholder="e.g., 8" min="1" max="20" className="px-4 py-[15px] rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 " />

          <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Icon</label>
          <div className="flex items-center gap-4.5 flex-wrap">
            {["🏋️", "💪", "🔥", "⚡", "🏃", "🧘"].map((icon, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="icon"
                  id={`icon${index}`}
                  value={icon}
                  className="hidden peer" />
                <label
                  htmlFor={`icon${index}`}
                  className="lg:w-13 w-11 md:h-13 h-11 border border-[#4B556380] rounded-lg flex items-center justify-center bg-[#37415180] cursor-pointer transition-all duration-200 hover:border-[#22C55E4D] hover:bg-[#22C55E33] peer-checked:border-[#22C55E4D] peer-checked:bg-[#22C55E33]">
                  <span className="text-2xl">{icon}</span>
                </label>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className=' pt-4'>
        <label className="text-[14px] text-[#D1D5DB] font-[400] mb-2">Description</label>
        <textarea placeholder='Describe how to perform this exercise, including form tips and safety notes...' rows="4" className='w-full mt-2 px-4 py-3 rounded-xl border border-[#4B556380] bg-[#37415180] text-white placeholder-[#9CA3AF] focus:outline-none focus:border-green-500 font-[400] text-[15px]' ></textarea>
      </div>
    </div>
  )
}

export default AddExerciseForm
