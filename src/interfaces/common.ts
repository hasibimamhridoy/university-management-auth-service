import { iErrorMessages } from './error'

export type IGenericErrorResponse = {
  status: number
  message: string
  errorMessages: iErrorMessages[]
}
