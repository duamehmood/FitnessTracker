import { exercises } from "../data/exercise";

async function fetchExercises() {
    const customExercises = localStorage.getItem("customExercises");
    const allExercises = [...exercises, ...(customExercises ? JSON.parse(customExercises) : [])];
    return allExercises;
}

async function getExerciseById(id) {
    const allExercises = await fetchExercises();
    return allExercises.find(exercise => exercise.id === parseInt(id));
}

async function addExercise(newExercise) {
    const allExercises = await fetchExercises();
    newExercise.id = allExercises.length ? Math.max(...allExercises.map(ex => ex.id)) + 1 : 1;
    const customExercises = localStorage.getItem("customExercises");
    const updatedExercises = customExercises ? JSON.parse(customExercises) : [];
    updatedExercises.push(newExercise);
    localStorage.setItem("customExercises", JSON.stringify(updatedExercises));
    return {msg:"Exercise Added Successfully",state:"success"};
}

async function isCustomExercise(id) {
    const customExercises = localStorage.getItem("customExercises");
    const updatedExercises = customExercises ? JSON.parse(customExercises) : [];
    return updatedExercises.some(ex => ex.id === parseInt(id));
}

async function updateExercise(id, exercise) {
    if (!await isCustomExercise(id)) return { msg: "You Can Update Custom Exercises Only", state: "error" };
    const customExercises = localStorage.getItem("customExercises");
    const updatedExercises = customExercises ? JSON.parse(customExercises) : [];
    const index = updatedExercises.findIndex(ex => ex.id === parseInt(id));
    if (index !== -1) {
        updatedExercises[index] = { ...updatedExercises[index], ...exercise };
        localStorage.setItem("customExercises", JSON.stringify(updatedExercises));
        return { msg: "Updated Successfully", state: "success" };
    }
    return { msg: "Exercise Not Found", state: "error" };
}

async function deleteExercise(id) {
    if (!await isCustomExercise(id)) return { msg: "You Can Delete Custom Exercises Only", state: "error" };
    const customExercises = localStorage.getItem("customExercises");
    const updatedExercises = customExercises ? JSON.parse(customExercises) : [];
    const index = updatedExercises.findIndex(ex => ex.id === parseInt(id));
    if (index !== -1) {
        updatedExercises.splice(index, 1);
        localStorage.setItem("customExercises", JSON.stringify(updatedExercises));
        return { msg: "Deleted Successfully", state: "success" };
    }
    return { msg: "Exercise Not Found", state: "error" };
}

export {
    fetchExercises,
    getExerciseById,
    addExercise,
    isCustomExercise,
    updateExercise,
    deleteExercise
};