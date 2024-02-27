import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'

export const authMiddleware = async (req, res, next) => {

  const { authorization } = req.headers // === 'Bearer tokenString'
  
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required!' })
  }
  
  const token = authorization.split(' ')[1]
  
  try {
    
    const { _id } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    
    console.log(error)
    res.status(401).json({ error: 'Request is not authorized!' })

  }

}