import { NextFunction, Request, Response } from 'express'

import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterService } from './academicSemester.services'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

// const createAcademicSemesterController = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { ...academicSemesterData }: IAcademicSemester = req.body
//     const result = await AcademicSemesterService.createSemesterService(academicSemesterData)

//     console.log("result from controller ------ ",result);

//     const responseData = {
//       status: httpStatus.OK,
//       success: true,
//       message: 'Academic Semister created successfully',
//       data: result
//     }
//     sendResponse(res, responseData)

//     next()

//   }
// )

const createAcademicSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData }: IAcademicSemester = req.body
    const result = await AcademicSemesterService.createSemesterService(academicSemesterData)
    console.log('result from controller ------ ', result)
    const responseData = {
      status: httpStatus.OK,
      success: true,
      message: 'Academic Semister created successfully',
      data: result
    }
    sendResponse(res, responseData)
    next()
  }
)

export const AcademicSemesterController = {
  createAcademicSemesterController
}
