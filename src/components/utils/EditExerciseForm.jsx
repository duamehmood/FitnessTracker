

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getExerciseById, updateExercise } from '../../api/exercise';  

const EditExerciseForm = () => {
    const { id } = useParams();  
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        primaryMuscle: '',
        secondaryMuscles: '',
        type: '',
        equipment: '',
        difficulty: '',
        calories: '',
        icon: '',
        description: '',
        tips: '',
        safetyNotes: '',
        instructions: ''
    });

    const [loading, setLoading] = useState(true);

    // Fetch existing exercise by ID
    useEffect(() => {
        const fetchExercise = async () => {
            try {
                const exercise = await getExerciseById(id);
                setForm({
                    title: exercise.title || '',
                    primaryMuscle: exercise.primaryMuscle || '',
                    secondaryMuscles: exercise.secondaryMuscles || '',
                    type: exercise.type || '',
                    equipment: exercise.equipment || '',
                    difficulty: exercise.difficulty || '',
                    calories: exercise.calories || '',
                    icon: exercise.icon || '',
                    description: exercise.description || '',
                    tips: exercise.tips || '',
                    safetyNotes: exercise.safetyNotes || '',
                    instructions: Array.isArray(exercise.instructions)
                        ? exercise.instructions.join('\n')
                        : exercise.instructions || ''
                });
            } catch (err) {
                console.error('Failed to fetch exercise', err);
            } finally {
                setLoading(false);
            }
        };

        fetchExercise();
    }, [id]);

    // Handle changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleIconChange = (e) => {
        setForm((prev) => ({
            ...prev,
            icon: e.target.value
        }));
    };

    // Submit updated exercise
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateExercise(id, {
                ...form,
                instructions: form.instructions.split('\n').map((s) => s.trim()).filter(Boolean)
            });

            if (result) {
                alert(result.msg || 'Exercise updated successfully');
                navigate('/exercises');  
            }
        } catch (err) {
            console.error('Update failed', err);
            alert('Failed to update exercise');
        }
    };

    if (loading) {
        return <div className="text-white">Loading exercise...</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-[#1F293766] border border-[#37415166] rounded-2xl p-[25px] backdrop-blur-12">
                <div className='flex items-center gap-2 pb-4'>
                    <div className='w-10 h-10 border border-[#22C55E4D] rounded-lg flex items-center justify-center  bg-[#22C55E33]'>
                        <span>💪</span>
                    </div>
                    <h3 className='font-bold md:text-[20px] text-[18px] text-white'>Edit Exercise Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2">Exercise Name *</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="e.g., Barbell Bench Press"
                            className="px-4 py-[15px] rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 "/>

                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Primary Muscle Group *</label>
                        <select
                            name="primaryMuscle"
                            value={form.primaryMuscle}
                            onChange={handleChange}
                            className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500">
                            <option value="" disabled>Select a muscle group</option>
                            <option value="chest">Chest</option>
                            <option value="back">Back</option>
                            <option value="shoulders">Shoulders</option>
                            <option value="biceps">Biceps</option>
                            <option value="triceps">Triceps</option>
                            <option value="forarms">Foramrms</option>
                            <option value="abs">Abs</option>
                            <option value="glutes">Glutes</option>
                            <option value="Quadricceps">Quadricceps</option>
                            <option value="hamstrings">Hamstrings</option>
                            <option value="calves">Calves</option>
                            <option value="Full Body">Full Body</option>
                        </select>

                        <label className="text-[14px] text-[#D1D5DB] font-[400] pt-4 pb-2">Secondary Muscle Groups</label>
                        <input
                            type="text"
                            name="secondaryMuscles"
                            value={form.secondaryMuscles}
                            onChange={handleChange}
                            placeholder="e.g., Triceps, Shoulders (comma separated)"
                            className="px-4 py-[15px] rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 " />

                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Exercise Type</label>
                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500" >
                            <option value="" disabled>Select type</option>
                            <option value="Compound">Compound</option>
                            <option value="Isolation">Isolation</option>
                            <option value="Cardio">Cardio</option>
                            <option value="Strength">Strength</option>
                            <option value="Flexibility">Flexibility</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2">Equipment</label>
                        <select
                            name="equipment"
                            value={form.equipment}
                            onChange={handleChange}
                            className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500" >
                            <option value="" disabled>Select equipment</option>
                            <option value="Barbell">Barbell</option>
                            <option value="Dumbbell">Dumbbell</option>
                            <option value="Cable Machine">Cable Machine</option>
                            <option value="Machine">Machine</option>
                            <option value="Body Weight">Body Weight</option>
                            <option value="Resistance Band">Resistance Band</option>
                            <option value="Kettlebell">Kettlebell</option>
                            <option value="Cardio Machine">Cardio Machine</option>
                            <option value="Other">Other</option>
                        </select>

                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Difficulty Level</label>
                        <select
                            name="difficulty"
                            value={form.difficulty}
                            onChange={handleChange}
                            className="text-white text-[15px] font-[400] bg-[#37415180] border border-[#4B556380] rounded-xl px-4 py-[15px] focus:outline-none focus:border-green-500">
                            <option value="" disabled>Select difficulty</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advance">Advance</option>
                        </select>

                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Calories per Minute (approx.)</label>
                        <input
                            type="number"
                            name="calories"
                            value={form.calories}
                            onChange={handleChange}
                            placeholder="e.g., 8"
                            min="1"
                            max="20"
                            className="px-4 py-[15px] rounded-xl bg-[#37415180] text-white placeholder-[#9CA3AF] font-[400] text-[15px] border border-[#4B556380] focus:outline-none focus:border-green-500 " />

                        <label className="text-[14px] text-[#D1D5DB] font-[400] pb-2 pt-4">Icon</label>
                        <div className="flex items-center gap-4.5 flex-wrap">
                            {["🏋️", "💪", "🔥", "⚡", "🏃", "🧘"].map((icon, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        name="icon"
                                        id={`icon${index}`}
                                        value={icon}
                                        checked={form.icon === icon}
                                        onChange={handleIconChange}
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
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder='Describe how to perform this exercise, including form tips and safety notes...'
                        rows="4"
                        className='w-full mt-2 px-4 py-3 rounded-xl border border-[#4B556380] bg-[#37415180] text-white placeholder-[#9CA3AF] focus:outline-none focus:border-green-500 font-[400] text-[15px]'
                    ></textarea>
                </div>
            </div>

            <div className="py-[32px]"></div>

            <div className="bg-[#1F293766] border border-[#37415166] rounded-2xl p-[25px] backdrop-blur-12">
                <h3 className='font-bold md:text-[20px] text-[18px] text-white pb-[25px]'>Step-by-Step Instructions</h3>
                <textarea
                    name="instructions"
                    value={form.instructions}
                    onChange={handleChange}
                    placeholder='Step 1: ...&#10;Step 2: ...'
                    rows="4"
                    className='w-full mt-2 px-4 py-3 rounded-xl border border-[#4B556380] bg-[#37415180] text-white placeholder-[#9CA3AF] focus:outline-none focus:border-green-500 font-[400] text-[15px]'
                ></textarea>
            </div>

            <div className="py-[32px]"></div>

            <div className="bg-[#1F293766] border border-[#37415166] rounded-2xl p-[25px] backdrop-blur-12">
                <h3 className='font-bold md:text-[20px] text-[18px] text-white pb-[25px]'>Tips & Safety Notes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-[14px] text-[#D1D5DB] font-[400] mb-2">Form Tips</label>
                        <textarea
                            name="tips"
                            value={form.tips}
                            onChange={handleChange}
                            placeholder='Key form cues and technique tips...'
                            rows="4"
                            className='w-full mt-2 px-4 py-3 rounded-xl border border-[#4B556380] bg-[#37415180] text-white placeholder-[#9CA3AF] focus:outline-none focus:border-green-500 font-[400] text-[15px]'
                        ></textarea>
                    </div>
                    <div>
                        <label className="text-[14px] text-[#D1D5DB] font-[400] mb-2">Safety Notes</label>
                        <textarea
                            name="safetyNotes"
                            value={form.safetyNotes}
                            onChange={handleChange}
                            placeholder='Important safety considerations and warnings...'
                            rows="4"
                            className='w-full mt-2 px-4 py-3 rounded-xl border border-[#4B556380] bg-[#37415180] text-white placeholder-[#9CA3AF] focus:outline-none   focus:border-green-500 font-[400] text-[15px]'
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl transition-all">
                    Save Changes
                </button>
            </div>
        </form>
    );
};

export default EditExerciseForm;

