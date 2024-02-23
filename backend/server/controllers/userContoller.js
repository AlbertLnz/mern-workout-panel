import User from '../models/UserModel.js'

export const loginUser = async (_req, res) => {

  res.status(200).json('hello user')
  
}

export const singupUser = async (req, res) => {

  const { email, password } = req.body

  try {
    
    const user = await User.signup(email, password)
    res.status(201).json({ message: 'User created!', user })

  } catch (error) {
    
    res.status(500).json({ message: error.message })

  }
  
}