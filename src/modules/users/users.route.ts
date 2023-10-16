import express from 'express'
import { createUserController } from './user.controller'

export const userRouter = express.Router()

userRouter.post('/create-user', createUserController)
