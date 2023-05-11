const express = require('express')
const Workout = require('../models/workout')
const {createWorkout, getWorkout, getWorkouts,updateWorkout,
    deleteWorkout} = require('../controller/workoutController')

const router = express.Router()

// this will get general workouts
router.get('/', getWorkouts)

// this will get single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router