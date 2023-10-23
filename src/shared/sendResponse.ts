import { Response } from 'express'

type IResponse<T> = {
  status: number
  success: boolean
  message?: string | null
  data: T | null
}

const sendResponse = <T>(res: Response, data: IResponse<T>): void => {
  const resData: IResponse<T> = {
    status: data.status,
    success: data.success,
    message: data.message || null,
    data: data?.data || null
  }

  res.status(data.status).json(resData)
}

export default sendResponse
