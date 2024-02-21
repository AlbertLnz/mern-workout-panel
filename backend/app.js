import express from 'express'
import dotenv from 'dotenv'
import { myMiddleware } from './server/helpers/exampleMiddleware.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', myMiddleware, (_req, res) => {
  res.send('Hola mundo!')
})



app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
