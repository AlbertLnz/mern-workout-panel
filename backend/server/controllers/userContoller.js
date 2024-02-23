import User from '../models/UserModel.js'
import validator from "validator";
import createToken from '../utils/createJWT.js';

export const loginUser = async (_req, res) => {

  res.status(200).json('hello user')
  
}

export const singupUser = async (req, res) => {

  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({ error: 'All fields must be filled!' })
  }

  if(!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Email is not valid!' })
  }

  if(!validator.isStrongPassword(password)) {
    return res.status(400).json({ error: 'Password is not enough strong!' })
  }

  try {
    
    const user = await User.signup(email, password)
    const token = createToken(user._id)

    res.status(201).json({ message: 'User created!', user, token })

  } catch (error) {
    
    res.status(500).json({ message: error.message })

  }
  
}