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
import EditExercise from "../pages/EditExercise"

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
        path: "/exercises",
        element: <AllExercises />,
      },
      {
        path: "/exercises/add",
        element: <AddExercise />,
      },
      {
        path: "/exercises/edit/:id",
        element: <EditExercise />,
      },
      {
        path: "/exercises/:id",
        element: <ExerciseDetails />,
      },
      {
        path: "/workouts",
        element: <AllWorkouts />,
      },
      {
        path: "/workouts/add",
        element: <AddWorkout />,
      },
      {
        path: "/workouts/edit/:id",
        element: <WorkOutDetails />,
      },
      {
        path: "/workouts/:id",
        element: <RecentWorkouts />,
      },
      {
        path: "/workouts/active",
        element: <ActiveWorkout />,
      },
      {
        path: "/workouts/recent",
        element: <ActiveWorkout />,
      },

    ]
  }

])


export default Routes
