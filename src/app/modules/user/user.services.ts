import { IUser } from './user.interface'
import { User } from './user.model'
import config from '../../../config/index'
import { genaretedUserId } from './user.utils'
import ApiError from '../../../error/ApiError'

const createUserService = async (user: IUser): Promise<IUser | null> => {
  /**
   *  ------------auto genareted incrimental id
   */
  const id = await genaretedUserId()

  /**
   * -------------set the genareted id
   */
  user.id = id

  /**
   * -------------default password
   */
  if (!user.password) {
    user.password = config.DEFAULT_STUDENT_PASS as string
  }

  /**
   * -------------create the user password
   */
  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new ApiError(400, 'failed to create user')
  }

  return createdUser
}

export const UserService = {
  createUserService
}
