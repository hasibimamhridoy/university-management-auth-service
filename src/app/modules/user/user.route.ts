import express from 'express'
import { UserController } from './user.controller'
import validateRequestMiddleWare from '../../middleware/validateRequest'
import { crateUserZodSchema } from './user.validation'
const userRouter = express.Router()

userRouter.post(
  '/create-user',
  validateRequestMiddleWare(crateUserZodSchema),
  UserController.createUserController
)

export const UserRoutes = {
  userRouter
}
