import React from 'react'
import { UseWorkoutContext } from '../Hooks/UseWorkoutsContext'

const WorkoutDetails = ({workout}) => {
    const {dispatch} = UseWorkoutContext()
    const handleClick = async() => {
        const response = await fetch('/api/workout/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }

    }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (KG): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span >
            <button onClick={handleClick}>
                Delete
            </button>
        </span>


    </div>
  )
}

export default WorkoutDetails