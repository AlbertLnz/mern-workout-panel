import express from 'express'
import dotenv from 'dotenv'
import routerApi from './server/routes/routerApiWorkouts.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// Routers
app.use('/api/workouts', routerApi)

// Middlewares
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
