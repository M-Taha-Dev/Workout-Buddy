import React, { useState } from 'react'
import { UseWorkoutContext } from '../Hooks/UseWorkoutsContext'

const WorkoutsForm = () => {
    const {dispatch} = UseWorkoutContext() 
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, seterror] = useState(null)

    const handleSubmit = async(e) => {
        console.log('point 1');
        e.preventDefault()
        const workout = {title, load, reps}
        console.log('point 2');
        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()

        if (!response.ok){
            seterror(json.error)
        }
        if(response.ok){
            dispatch({type: 'CREATE_WORKOUTS', payload: json} )
            seterror(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added!', json);
        }

    }
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add new Workouts</h3>
        <label>Exercise Title: </label>
        <input type='text' onChange={(e) => setTitle(e.target.value)}
        value={title}/>

        <label>Load (in KG): </label>
        <input type='number' onChange={(e) => setLoad(e.target.value)}
        value={load}/>

        <label>Reps: </label>
        <input type='number' onChange={(e) => setReps(e.target.value)}
        value={reps}/>

        <button >Add Workout</button>
        {error && <div className='error'>{error}</div>}
    </form>

  )
}

export default WorkoutsForm