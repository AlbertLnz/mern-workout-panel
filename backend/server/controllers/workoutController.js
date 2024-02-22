import Workout from "../models/WorkoutModel.js";

export const getAllWorkouts = async (_req, res) => {

  try {
    
    const workouts = await Workout.find({}).sort({createdAt: -1}) // Descending order
    res.json(workouts).status(200)

  } catch (error) {
   
    res.json({ error: error.message }).status(500)

  }

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