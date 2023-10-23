import mongoose from 'mongoose'
import { IUser, UserModel } from './user.interface'
const { Schema } = mongoose

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export const User = mongoose.model<IUser, UserModel>('User', userSchema)
