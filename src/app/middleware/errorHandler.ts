/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express'
import mongoose from 'mongoose'
import ApiError from '../../error/ApiError'
import handleCastError from '../../error/handleCastError'
import handleValidationError from '../../error/handleValidationError'
import { iErrorMessages } from '../../interfaces/error'
import config from '../../config'
import { loggerError } from '../../shared/logger'
import { ZodError } from 'zod'
import { handleZodError } from '../../error/handleZodError'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development' ? console.log('Error: ' + error.message) : loggerError.error(error)

  let status = 500
  let message = 'Something went wrong.'
  let errorMessages: iErrorMessages[] = []
  const stack = error.stack

  if (error instanceof mongoose.Error.CastError) {
    const simplified = handleCastError(error)
    status = simplified.status
    message = simplified.message
    errorMessages = simplified.errorMessages
  } else if (error instanceof mongoose.Error.ValidationError) {
    const simplified = handleValidationError(error)
    status = simplified.status
    message = simplified.message
    errorMessages = simplified.errorMessages
  } else if (error instanceof ZodError) {
    const simplified = handleZodError(error)

    console.log('from zod error instance--------', simplified)
    status = simplified.status
    message = simplified.message
    errorMessages = simplified.errorMessages
  } else if (error instanceof ApiError) {
    status = error.status
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message
          }
        ]
      : []
  } else if (error instanceof Error) {
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message
          }
        ]
      : []
  }

  res.status(status).json({
    success: false,
    message,
    errorMessages,
    stack
  })
}

export default errorHandler
