import Workout from "../models/WorkoutModel.js";
import mongoose from "mongoose";

export const getAllWorkouts = async (_req, res) => {

  try {
    
    const workouts = await Workout.find({}).sort({createdAt: -1}) // Descending order
    res.json(workouts).status(200)

  } catch (error) {
   
    res.json({ error: error.message }).status(500)

  }

}

export const getOneWorkoutById = async (req, res) => {

  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: 'Bad Request - ID invalid' }).status(400)
  }

  const workout = await Workout.findById(id)
  // const workout = await Workout.findOne({ _id: id })

  if(!workout) {
    return res.json({ error: 'Error 404 - Not Found' }).status(404)
  }

  res.json(workout).status(200)

}

export const createWorkout = async (req, res) => {

  const { title, reps, load } = req.body

  try {
    
    const workoutCreated = await Workout.create({ title, reps, load })
    res.json({ message: 'Workout created', workoutCreated }).status(201)

  } catch (error) {
    
    res.json({ error: error.message }).status(400)

  }


}