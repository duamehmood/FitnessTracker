import React from 'react'
import Navbar from "../components/sections/Navbar"
import { RiSave3Fill } from "@remixicon/react"
import EditWorkoutForm from '../components/utils/EditWorkoutForm' 

const EditWorkout = () => {
  return (
    <div>
      <Navbar title="Edit Workout Planner" >
        
      </Navbar>

      <div className="bg-primary py-[50px]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <EditWorkoutForm />
          </div>
        </div>
      </div>

    </div>
  )
}

export default EditWorkout
