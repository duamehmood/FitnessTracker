
import { RiAddLine, RiEditLine } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getExerciseById } from '../api/exercise'

const ExerciseDetails = () => {
  const { id } = useParams()
  const [exercise, setExercise] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExerciseById(id)
      setExercise(data)
    }
    fetchData()
  }, [id])

  if (!exercise) return <p className="text-white p-6">Loading...</p>

  const toArray = (val) => {
    if (!val) return []
    return Array.isArray(val) ? val : val.split('\n').map(s => s.trim()).filter(Boolean)
  }

  const instructions = toArray(exercise.instructions)
  const formTips = toArray(exercise.formTips || exercise.tips)
  const safetyNotes = toArray(exercise.safetyNotes)

  return (
    <>
      <Navbar title={exercise.title}>
        <Link to="/exercises/add">
          <button className='cursor-pointer hover:text-[#3068df]'>
            <RiAddLine className="border-2 w-[26px] sm:w-[30px] md:w-[35px] h-[26px] sm:h-[30px] md:h-[35px] text-[#2563EB] p-[4px] sm:p-[5px] md:p-[8px] rounded-md " />
          </button>
        </Link>
        <Link to={`/exercises/edit/${exercise.id}`}>
          <button className='cursor-pointer hover:text-[#38c76c]'>
            <RiEditLine className="border-2 w-[26px] sm:w-[30px] md:w-[35px] h-[26px] sm:h-[30px] md:h-[35px] text-[#22C55E] p-[4px] sm:p-[5px] md:p-[8px] rounded-md" />
          </button>
        </Link>
      </Navbar>

      <div className="bg-primary py-[40px] sm:py-[50px]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-4 sm:p-6 md:p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] text-white">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex justify-center items-center rounded-xl bg-[#22C55E33]">
                    <span className="text-xl sm:text-2xl md:text-3xl">{exercise.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-bold">
                      {exercise.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-[12px] sm:text-[14px] font-[400] pt-1 pb-4 sm:pb-5">
                      {exercise.type && (
                        <span className="px-[10px] py-[5px] sm:px-[12px] sm:py-[7px] bg-[#22C55E33] text-[#4ADE80] rounded-full">
                          {exercise.type}
                        </span>
                      )}
                      {exercise.equipment && (
                        <span className="px-[10px] py-[5px] sm:px-[12px] sm:py-[7px] bg-[#3B82F633] text-[#60A5FA] rounded-full">
                          {exercise.equipment}
                        </span>
                      )}
                      {exercise.difficulty && (
                        <span className="px-[10px] py-[5px] sm:px-[12px] sm:py-[7px] bg-[#A855F733] text-[#C084FC] rounded-full">
                          {exercise.difficulty}
                        </span>
                      )}
                    </div>
                    {exercise.description && (
                      <p className="text-[#9CA3AF] text-[13px] sm:text-[14px] md:text-[15px] font-[400]">
                        {exercise.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-[35px] sm:pt-[45px] pb-[20px] sm:pb-[25px]">
                  {exercise.primaryMuscle && (
                    <div>
                      <h3 className="font-bold text-[16px] sm:text-[18px] pb-[10px] sm:pb-[12px]">Primary Muscles</h3>
                      <div className="bg-[#22C55E1A] border border-[#22C55E33] rounded-lg">
                        <div className="flex items-center gap-2 p-[10px] sm:p-[13px]">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></div>
                          <span className="text-[#4ADE80] text-[13px] sm:text-[14px]">{exercise.primaryMuscle}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {exercise.secondaryMuscles && (
                    <div>
                      <h3 className="font-bold text-[16px] sm:text-[17px] md:text-[18px] pb-[10px] sm:pb-[12px]">Secondary Muscles</h3>
                      <div className="text-[#60A5FA] flex flex-col gap-2">
                        {exercise.secondaryMuscles.split(',').map((m, i) => (
                          <div className="bg-[#3B82F61A] border border-[#3B82F633] rounded-lg" key={i}>
                            <div className="flex items-center gap-2 p-[8px] sm:p-[9px]">
                              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                              <span className="text-[13px] sm:text-[14px]">{m.trim()}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {exercise.calories && (
                    <div className="bg-[#3741514D] rounded-xl text-center py-[14px] sm:py-[16px]">
                      <div className="text-[15px] sm:text-[17px] font-bold text-[#FB923C]">~{exercise.calories}</div>
                      <p className="text-[12px] sm:text-[13px] font-[400] text-[#9CA3AF]">cal/min</p>
                    </div>
                  )}
                  {exercise.difficulty && (
                    <div className="bg-[#3741514D] rounded-xl text-center py-[14px] sm:py-[16px]">
                      <div className="text-[15px] sm:text-[17px] font-bold text-[#4ADE80]">{exercise.difficulty}</div>
                      <p className="text-[12px] sm:text-[13px] font-[400] text-[#9CA3AF]">Effectiveness</p>
                    </div>
                  )}
                  {exercise.equipment && (
                    <div className="bg-[#3741514D] rounded-xl text-center py-[14px] sm:py-[16px]">
                      <div className="text-[15px] sm:text-[17px] font-bold text-[#60A5FA]">{exercise.equipment}</div>
                      <p className="text-[12px] sm:text-[13px] font-[400] text-[#9CA3AF]">Equipment</p>
                    </div>
                  )}
                </div>
              </div>

              {instructions.length > 0 && (
                <div className="p-4 sm:p-6 md:p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766] text-white">
                  <h3 className="font-bold text-[17px] sm:text-[18px] md:text-[19px] pb-4 sm:pb-5">Step-by-Step Instructions</h3>
                  {instructions.map((step, i) => (
                    <div className="flex gap-2 sm:gap-3 pb-3 sm:pb-4" key={i}>
                      <div className="bg-[#22C55E33] rounded-lg w-8 h-8 flex items-center justify-center">
                        <span className="text-sm font-bold text-[#4ADE80]">{i + 1}</span>
                      </div>
                      <p className="text-[#9CA3AF]">{step}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              {formTips.length > 0 && (
                <div className="p-4 sm:p-6 md:p-[25px] border border-[#37415166] rounded-2xl bg-[#1F293766]">
                  <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-white pb-3 sm:pb-4">Form Tips</h3>
                  {formTips.map((tip, i) => (
                    <div className="flex gap-2 sm:gap-3 pb-3 sm:pb-4" key={i}>
                      <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                      <p className="text-[#D1D5DB] text-[13px] font-[400]">{tip}</p>
                    </div>
                  ))}
                </div>
              )}

              {safetyNotes.length > 0 && (
                <div className="p-4 sm:p-6 md:p-[25px] rounded-2xl bg-[#1F293766] border border-[#EF444433]">
                  <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-white pb-3 sm:pb-4">Safety Notes</h3>
                  {safetyNotes.map((note, i) => (
                    <div className="flex gap-2 sm:gap-3 pb-3 sm:pb-4" key={i}>
                      <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
                      <p className="text-[#D1D5DB] text-[13px] font-[400]">{note}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExerciseDetails


