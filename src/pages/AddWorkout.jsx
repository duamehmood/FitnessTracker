
import Navbar from "../components/sections/Navbar"
import { RiSave3Fill } from "@remixicon/react"
import AddWorkoutForm from "../components/utils/AddWorkoutForm"
import {exercises} from "../data/exercise"

const AddWorkout = () => {
  return (
    <div>
       <Navbar title=" Workout Planner" >
      </Navbar>

      <div className="bg-primary py-[50px]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AddWorkoutForm />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddWorkout
