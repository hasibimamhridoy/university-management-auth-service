import { IUser } from './users.interface'
import { User } from './users.model'
import config from '../../config'
import { genaretedUserId } from './users.utils'

export const createUserService = async (user: IUser): Promise<IUser | null> => {
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
    throw new Error('failed to create user')
  }

  return createdUser
}
