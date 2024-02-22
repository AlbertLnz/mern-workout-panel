import express from 'express'
import { getAllWorkouts, getOneWorkoutById, createWorkout, updateWorkout, deleteWorkout } from '../controllers/workoutController.js'

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkoutById)

router.post('/', createWorkout)

// PUT - PATCH - DELETE need an extra: -->  'CORS Pre-flight'
router.options('/:id', (req, res) => {

  const ACCEPTED_ORIGINS = [
    'http://localhost:5173', // <- development
    'http://localhost:8080', // <- development
    'http://localhost:3000',  // <- development
    'https://myworkout.com',  // <- producion
  ]

  const origin = req.header('origin')

  if(ACCEPTED_ORIGINS.includes(origin)) {    
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
  }

  res.send()

})

router.patch('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)


export default router