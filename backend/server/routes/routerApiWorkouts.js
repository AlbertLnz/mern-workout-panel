import express from 'express'
import Workout from '../models/WorkoutModel.js'

const router = express.Router()

router.get('/', (_req, res) => {

  res.send('API test')

})

router.post('/', async (req, res) => {

  const { title, reps, load } = req.body

  try {
    
    const workoutCreated = await Workout.create({ title, reps, load })
    res.json({ message: 'Workout created', workoutCreated }).status(201)

  } catch (error) {
    
    res.json({ error: error.message }).status(400)

  }

})


export default router