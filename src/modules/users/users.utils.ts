import { User } from './users.model'

export const findLastUserId = async () => {
  /**
   * Find the last user  because of we need to get the last create id.
   */
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1
    })
    .lean()

  return lastUser?.id
}

export const genaretedUserId = async () => {
  /**
   * Create current id. If find any user then increment one the previous user id otherwise create a brand new id at the first time
   */
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')

  /**
   * Increment by one
   */
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return incrementId
}
