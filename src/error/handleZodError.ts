import { ZodError, ZodIssue } from 'zod'
import { IGenericErrorResponse } from '../interfaces/common'
import { iErrorMessages } from '../interfaces/error'

export const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errorMessages: iErrorMessages[] = error?.issues?.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message
    }
  })

  return {
    status: 400,
    message: 'Validation Error from zod',
    errorMessages
  }
}
