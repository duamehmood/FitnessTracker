import { RiCloseFill } from '@remixicon/react'
import Navbar from '../components/sections/Navbar'

const AllExercises = () => {
  return (
    <div>
     <Navbar title="Exercise Library" >
        <button> <RiCloseFill className='text-[#9CA3AF]'/> </button>
      </Navbar>
    </div>
  )
}

export default AllExercises
