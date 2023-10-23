import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      console.log('im reach here --------- ', error)
      next(error)
    }
  }
}

// export const catchAsync =
//   (fn: RequestHandler): RequestHandler =>
//   (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch(error => {
//       console.log("im reach here --------- ",error);
//       next(error)
//     })
//   }

export default catchAsync
