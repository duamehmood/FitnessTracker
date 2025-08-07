import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import AllExercises from "../pages/AllExercises"
import AddExercise from "../pages/AddExercise"
import ExerciseDetails from "../pages/ExerciseDetails"
import AllWorkouts from "../pages/AllWorkouts"
import AddWorkout from "../pages/AddWorkout"
import WorkOutDetails from "../pages/WorkOutDetails"
import RecentWorkouts from "../pages/RecentWorkouts"
import ActiveWorkout from "../pages/ActiveWorkout"
import Home from "../pages/Home"
import Layout from "../components/sections/Layout"

const Routes = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/allExercises",
        element: <AllExercises />,
      },
      {
        path: "/addExercise",
        element: <AddExercise />,
      },
      {
        path: "/exerciseDetails/:id",
        element: <ExerciseDetails />,
      },
      {
        path: "/allWorkouts",
        element: <AllWorkouts />,
      },
      {
        path: "/addWorkout",
        element: <AddWorkout />,
      },
      {
        path: "/workoutDetails/:id",
        element: <WorkOutDetails />,
      },
      {
        path: "/recentWorkouts",
        element: <RecentWorkouts />,
      },
      {
        path: "/activeWorkout",
        element: <ActiveWorkout />,
      },

    ]
  }

])


export default Routes
