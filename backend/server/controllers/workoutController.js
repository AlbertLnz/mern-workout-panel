import Workout from "../models/WorkoutModel.js";
import mongoose from "mongoose";

const ACCEPTED_ORIGINS = [
  'http://localhost:5173', // <- development
  'http://localhost:8080', // <- development
  'http://localhost:3000',  // <- development
  'https://myworkout.com',  // <- producion
]

export const getAllWorkouts = async (req, res) => {

  const origin = req.header('origin')

  if(ACCEPTED_ORIGINS.includes(origin)) {    
    res.header('Access-Control-Allow-Origin', origin)
  }

  try {
    
    const workouts = await Workout.find({}).sort({createdAt: -1}) // Descending order
    res.status(200).json(workouts)

  } catch (error) {
   
    res.status(500).json({ error: error.message })

  }

}

export const getOneWorkoutById = async (req, res) => {

  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Bad Request - ID invalid' })
  }

  const workout = await Workout.findById(id)
  // const workout = await Workout.findOne({ _id: id })

  if(!workout) {
    return res.status(404).json({ error: 'Error 404 - Not Found' })
  }

  res.status(200).json(workout)

}

export const createWorkout = async (req, res) => {

  const { title, reps, load } = req.body

  try {
    
    const workoutCreated = await Workout.create({ title, reps, load })
    res.status(201).json({ message: 'Workout created', workoutCreated })

  } catch (error) {
    
    res.status(400).json({ error: error.message })

  }

}

export const updateWorkout = async (req, res) => {

  console.log(req.body)
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Bad Request - ID invalid' })
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true }) // { new: true } <- to see the object updated!

  if(!workout) {
    return res.status(404).json({ error: 'Bad Request - ID invalid' })
  }

  res.status(200).json({ message: 'Workout updated!', workout})

}

export const deleteWorkout = async (req, res) => {

  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Bad Request - ID invalid' })
  }

  const workout = await Workout.findOneAndDelete({ _id: id })

  if(!workout) {
    return res.status(404).json({ error: 'Bad Request - ID invalid' })
  }

  res.status(200).json({ message: 'Workout deleted!', workout})

}
