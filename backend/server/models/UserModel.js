import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// How to create a static method (I prefer logic in controller...):
UserSchema.statics.signup = async function (email, password) {

  const emailExists = await this.findOne({ email }) // === await User.findOne(), but in the model I don't have the export of model 'User' !

  if(emailExists) {
    throw Error('Email already exists') // <-- jumps to catch block
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

const User = mongoose.model('User', UserSchema)

export default User