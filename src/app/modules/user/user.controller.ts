import { RequestHandler } from 'express'
import { IUser } from './user.interface'
import { UserService } from './user.services'

const createUserController: RequestHandler = async (req, res, next) => {
  //req-validatrion
  //body ---> object
  // data --> object

  try {
    const { ...user }: IUser = req.body
    const result = await UserService.createUserService(user)
    res.status(200).send({
      success: true,
      message: 'user created successfully',
      data: result
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const UserController = {
  createUserController
}
