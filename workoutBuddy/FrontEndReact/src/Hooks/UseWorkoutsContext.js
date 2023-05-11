import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const UseWorkoutContext = () => {
    const context = useContext(WorkoutsContext)
    return context
}