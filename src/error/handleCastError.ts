import mongoose from 'mongoose'

const handleCastError = (error: mongoose.Error.CastError) => {
  const errorMessages = [
    {
      path: error.path,
      message: 'Invalid Object ID'
    }
  ]

  return {
    status: 400,
    message: 'Cast Error',
    errorMessages
  }
}

export default handleCastError
