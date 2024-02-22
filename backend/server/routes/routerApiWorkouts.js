import express from 'express'
import { getAllWorkouts, getOneWorkoutById, createWorkout, updateWorkout, deleteWorkout } from '../controllers/workoutController.js'

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkoutById)

router.post('/', createWorkout)

router.patch('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)


export default router