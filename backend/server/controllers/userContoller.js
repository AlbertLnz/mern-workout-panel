import User from '../models/UserModel.js'
import validator from "validator";
import createToken from '../utils/createJWT.js';
import bcrypt from 'bcrypt'

export const loginUser = async (req, res) => {

  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({ error: 'All fields must be filled!' })
  }

  try {
    
    const user = await User.findOne({ email })

    if(!user) {
      throw Error('Incorrect email!')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
      throw Error('Incorrect password!')
    }

    const token = createToken(user._id)

    res.status(200).json({ message: 'Login in successfully!', user, token })

  } catch (error) {
    
    res.status(500).json({ message: error.message })

  }

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

  const exists = await User.findOne({ email })
  if (exists) {
    return res.status(400).json({ error: 'Email already in use!' })
  }

  try {
    
    const user = await User.signup(email, password)
    const token = createToken(user._id)

    res.status(201).json({ message: 'User created!', user, token })

  } catch (error) {
    
    res.status(500).json({ message: error.message })

  }
  
}