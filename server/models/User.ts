import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  familyMembers: [{
    name: String,
    role: { type: String, enum: ['parent', 'child'] },
    birthdate: Date
  }],
  createdAt: { type: Date, default: Date.now }
})

export default model('User', userSchema) 