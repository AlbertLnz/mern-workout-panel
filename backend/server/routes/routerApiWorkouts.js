import express from 'express'
import { getAllWorkouts, getOneWorkoutById, createWorkout } from '../controllers/workoutController.js'

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkoutById)

router.post('/', createWorkout)


export default router