import { NextFunction, Request, Response } from 'express'
import { IUser } from './user.interface'
import { UserService } from './user.services'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createUserController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body
  const result = await UserService.createUserService(user)
  next()

  const responseData = {
    status: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result
  }
  sendResponse(res, responseData)
})

export const UserController = {
  createUserController
}
