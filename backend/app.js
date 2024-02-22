import express from 'express'
import dotenv from 'dotenv'
import routerApi from './server/routes/routerApiWorkouts.js'
import connectDB from './server/config/db.js'
import { corsMiddleware } from './server/helpers/corsMiddleware.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// Connect MongoDB
connectDB()

// Middlewares
app.use(express.json())
app.use(corsMiddleware())

// Routers
app.use('/api/workouts', routerApi)


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
