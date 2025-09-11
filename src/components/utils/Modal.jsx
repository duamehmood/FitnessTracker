
import { useEffect, useState } from 'react'
import { fetchExercises } from '../../api/exercise';
import { RiAddLine, RiCloseFill } from '@remixicon/react';

const Modal = ({ onClose, selectedExercises, setSelectedExercises }) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const getExercises = async () => {
            const data = await fetchExercises();
            setExercises(data);
        };
        getExercises();
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-[#1F2937] border border-[#37415166] rounded-2xl p-6 w-[420px] shadow-xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-white">Select Exercise</h2>
                    <button
                        onClick={onClose}
                        type="button"
                        className="p-2 rounded-lg hover:bg-[#374151] transition-all"
                    >
                        <RiCloseFill className="text-[#9CA3AF] hover:text-red-400" size={22} />
                    </button>
                </div>

                <div className="max-h-[300px] overflow-y-auto space-y-3 pr-1">
                    {exercises
                        .filter(exercise => !selectedExercises.some(sel => sel.id === exercise.id))
                        .map(exercise => (
                            <div
                                key={exercise.id}
                                className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#37415180] border border-[#4B556380] hover:border-green-500/60 transition-all duration-200"
                            >
                                <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 flex justify-center items-center rounded-lg bg-[#22C55E33]">
                                    <span>{exercise.icon}</span>
                                </div>
                                <div>
                                    <h4 className='text-white text-[16px] font-bold'>{exercise.title}</h4>
                                    <div className='text-[#9CA3AF] font-medium text-[13px]'>{exercise.primaryMuscle} .  {exercise.type} </div>
                                </div>
                            </div>
                                <button
                                    onClick={() => {
                                        setSelectedExercises([...selectedExercises, exercise]);
                                        onClose();
                                    }}
                                    type="button"
                                    className="px-2 py-1.5 text-[13px] bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white rounded-lg font-medium hover:opacity-90 transition-all"
                                >
                                    <RiAddLine/>
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Modal;
