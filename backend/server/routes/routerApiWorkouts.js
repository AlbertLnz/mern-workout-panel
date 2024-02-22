import express from 'express'
import { getAllWorkouts, createWorkout } from '../controllers/workoutController.js'

const router = express.Router()

router.get('/', getAllWorkouts)

router.post('/', createWorkout)


export default router