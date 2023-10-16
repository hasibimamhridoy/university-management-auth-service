import { Request, Response } from 'express'
import { IUser } from './users.interface'
import { createUserService } from './users.services'

export const createUserController = async (req: Request, res: Response) => {
  const user: IUser = req.body

  const result = await createUserService(user)

  try {
    if (result) {
      res.status(200).send({
        success: true,
        message: 'user created successfully',
        data: result
      })
    }
  } catch (error) {
    res.status(200).send({
      success: false,
      message: 'Failed to create user: ' + error
    })
  }
}
