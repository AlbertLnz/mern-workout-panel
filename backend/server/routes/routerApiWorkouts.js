import express from 'express'
import { getAllWorkouts, getOneWorkoutById, createWorkout, updateWorkout } from '../controllers/workoutController.js'

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkoutById)

router.post('/', createWorkout)

router.patch('/:id', updateWorkout)


export default router