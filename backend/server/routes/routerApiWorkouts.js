import express from 'express'
import { createWorkout } from '../controllers/workoutController.js'

const router = express.Router()

router.get('/', (_req, res) => {

  res.send('API test')

})

router.post('/', createWorkout)


export default router