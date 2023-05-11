const Workout = require('../models/workout')
const mongoose = require('mongoose')
// get all workouts

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}
// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json({ error: 'invalid id' })
    }
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'no such workout found' })
    }
    res.status(200).json(workout)
}
// create new workout

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)

    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json({ error: 'invalid id' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: 'no file found' })
    }
    res.status(200).json(workout)
}
// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json({ error: 'invalid object id' })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: 'unable to find the item' })
    }
    res.status(200).json(workout)
}
module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout
}