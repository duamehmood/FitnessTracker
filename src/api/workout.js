import { workouts } from "../data/workout";

async function fetchWorkouts() {
    const customWorkouts = localStorage.getItem("customWorkouts");
    const allWorkouts = [...workouts, ...(customWorkouts ? JSON.parse(customWorkouts) : [])];
    return allWorkouts;
}

async function getWorkoutById(id) {
    const allWorkouts = await fetchWorkouts();
    return allWorkouts.find(workout => workout.id === parseInt(id));
}

async function addWorkout(newWorkout) {
    const allWorkouts = await fetchWorkouts();
    newWorkout.id = allWorkouts.length ? Math.max(...allWorkouts.map(ex => ex.id)) + 1 : 1;
    const customWorkouts = localStorage.getItem("customWorkouts");
    const updatedWorkouts = customWorkouts ? JSON.parse(customWorkouts) : [];
    updatedWorkouts.push(newWorkout);
    localStorage.setItem("customWorkouts", JSON.stringify(updatedWorkouts));
    return {msg:"Workout Added Successfully",state:"success"};
}

async function isCustomWorkout(id) {
    const customWorkouts = localStorage.getItem("customWorkouts");
    const updatedWorkouts = customWorkouts ? JSON.parse(customWorkouts) : [];
    return updatedWorkouts.some(ex => ex.id === parseInt(id));
}

async function updateWorkout(id, workout) {
    if (!await isCustomWorkout(id)) return { msg: "You Can Update Custom Exercises Only", state: "error" };
    const customWorkouts = localStorage.getItem("customWorkouts");
    const updatedWorkouts = customWorkouts ? JSON.parse(customWorkouts) : [];
    const index = updatedWorkouts.findIndex(ex => ex.id === parseInt(id));
    if (index !== -1) {
        updatedWorkouts[index] = { ...updatedWorkouts[index], ...workout };
        localStorage.setItem("customWorkouts", JSON.stringify(updatedWorkouts));
        return { msg: "Updated Successfully", state: "success" };
    }
    return { msg: "Workout Not Found", state: "error" };
}

async function deleteWorkout(id) {
    if (!await isCustomWorkout(id)) return { msg: "You Can Delete Custom Workouts Only", state: "error" };
    const customWorkouts = localStorage.getItem("customWorkouts");
    const updatedWorkouts = customWorkouts ? JSON.parse(customWorkouts) : [];
    const index = updatedWorkouts.findIndex(ex => ex.id === parseInt(id));
    if (index !== -1) {
        updatedWorkouts.splice(index, 1);
        localStorage.setItem("customWorkouts", JSON.stringify(updatedWorkouts));
        return { msg: "Deleted Successfully", state: "success" };
    }
    return { msg: "Workout Not Found", state: "error" };
}

export {
    fetchWorkouts,
    getWorkoutById,
    addWorkout,
    isCustomWorkout,
    updateWorkout,
    deleteWorkout
};