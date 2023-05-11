import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutsForm from '../components/WorkoutsForm'
import { UseWorkoutContext } from '../Hooks/UseWorkoutsContext'


const Home = () => {

    //const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = UseWorkoutContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
                //setWorkouts(json)   
            }
            else{
                console.log('error');
            }
        }
        fetchWorkouts()
    }, [])

  return (
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>
        <WorkoutsForm/>
    </div>
  )
}

export default Home