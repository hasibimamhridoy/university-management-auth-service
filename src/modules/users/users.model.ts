import mongoose, { Model } from 'mongoose'
import { IUser } from './users.interface'
const { Schema } = mongoose

type UserModel = Model<IUser, object>

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