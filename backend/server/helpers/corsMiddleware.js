import cors from 'cors' // all with * if I use directly in app.js --> app.use(cors())

const ACCEPTED_ORIGINS = [
  'http://localhost:5173', // <- development
  'http://localhost:8080', // <- development
  'http://localhost:3000',  // <- development
  'https://myworkout.com',  // <- producion
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})