import { useEffect, useState } from 'react'
import { RiCloseFill, RiDeleteBinLine } from '@remixicon/react';
import Modal from '../utils/Modal'

const WorkoutForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExercises, setSelectedExercises] = useState([]);

    const [form, setForm] = useState({
        name: '',
        category: '',
        desc: '',
    });

    const submitForm = () => {
        const data = {
            name: "",
            category: "",
            desc: "",
            exercises: selectedExercises.map(ex => ({ id: ex.id, sets: [] }))
        }
    }

    useEffect(() => {
        console.log(selectedExercises);
    }, [selectedExercises]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addExercise(form)
        if (result) {
            alert(result.msg)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='bg-[#1F293766] border border-[#37415166] rounded-2xl p-[25px]'>
                <h3 className='font-bold md:text-[20px] text-[18px] text-white pb-4'>Workout Plan Details</h3>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4                                                              ">
                    <div className='flex flex-col'>
                        <label className='text-[#D1D5DB] text-[14px] font-[400] pb-2'>Plan Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder='e.g., Push Day, Upper Body...' className="px-4 py-[15px] rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 " />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2">Category</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500" >
                            <option className="text-green-900 bg-green-100" value="Strength Training">Strength Training</option>
                            <option className="text-green-900 bg-green-100" value="Cardio">Cardio</option>
                            <option className="text-green-900 bg-green-100" value="Flexibility">Flexibility</option>
                            <option className="text-green-900 bg-green-100" value="Mixed">Mixed</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col pt-4">
                    <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2">Description (Optional)</label>
                    <textarea name="desc"
                        value={form.desc}
                        onChange={handleChange}
                        rows="4" placeholder='Brief description of this workout plan...' className='px-4 py-3 rounded-2xl border border-[#4B556380] bg-[#37415180] placeholder-[#9CA3AF] text-white text-[15px] font-medium focus:outline-none focus:border-green-500 ' ></textarea>
                </div>
            </div>

            <div className="py-[20px] "></div>
            <div className='bg-[#1F293766] border border-[#37415166] rounded-2xl p-[25px]'>
                <div className="flex justify-between items-center pb-4">
                    <h3 className='font-bold md:text-[20px] text-[18px] text-white pb-4'>Exercises</h3>
                    <button onClick={() => { setIsModalOpen(true) }} className='font-medium text-[#22C55E] text-[15px] border-2 border-[#22C55E80] rounded-lg px-[14px] py-[10px] cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-200'>
                        + Add Exercise
                    </button>
                </div>

                {selectedExercises.map((exercise, index) => (
                    <div key={index} className="border border-[#4B556366] p-[17px] rounded-2xl mb-4">
                        <div className="flex gap-2 justify-between items-center pb-4">
                            <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 flex justify-center items-center rounded-lg bg-[#22C55E33]">
                                    <span>{exercise.icon}</span>
                                </div>
                                <div>
                                    <h4 className='text-white text-[16px] font-bold'>{exercise.title}</h4>
                                    <div className='text-[#9CA3AF] font-medium text-[13px]'>{exercise.primaryMuscle} .  {exercise.type} </div>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <RiDeleteBinLine onClick={() => { setSelectedExercises(selectedExercises.filter(ex => ex !== exercise)) }} className='text-[#F87171] hover:text-red-300 transition-colors duration-200' />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='grid grid-cols-4 gap-2 text-[14px] text-[#9CA3AF] font-medium pb-2'>
                                <span>Set</span>
                                <span>Reps</span>
                                <span>Weight</span>
                                <span></span>
                            </div>
                            <div className="grid grid-cols-4 gap-2 items-center pb-3">
                                <span className='text-[16px] font-medium text-[#D1D5DB]'>1</span>
                                <div className="px-3 py-2 rounded-lg bg-[#37415180] border border-[#4B556380] text-white text-center ">12</div>
                                <div className="px-3 py-2 rounded-lg bg-[#37415180] border border-[#4B556380] text-white text-center ">135</div>
                                <button className='flex justify-center'>
                                    <RiCloseFill className='text-[#F87171] hover:text-red-300 transition-colors duration-200' />
                                </button>
                                <span className='text-[16px] font-medium text-[#D1D5DB]'>2</span>
                                <div className="px-3 py-2 rounded-lg bg-[#37415180] border border-[#4B556380] text-white text-center ">12</div>
                                <div className="px-3 py-2 rounded-lg bg-[#37415180] border border-[#4B556380] text-white text-center ">135</div>
                                <button className='flex justify-center'>
                                    <RiCloseFill className='text-[#F87171] hover:text-red-300 transition-colors duration-200' />
                                </button>
                            </div>
                            <button className="w-full py-2 border border-dashed border-[#4B556380] rounded-lg text-[#9CA3AF] hover:text-green-400 hover:border-green-500/50 transition-all duration-200 text-sm">
                                + Add Set
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-7 rounded-md transition-all">
                    Add Workout
                </button>
            </div>
            
            {isModalOpen &&
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    selectedExercises={selectedExercises}
                    setSelectedExercises={setSelectedExercises}
                />}
        </form>


    )
}

export default WorkoutForm