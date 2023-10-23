import { RequestHandler } from 'express'

import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterService } from './academicSemester.services'

const createAcademicSemesterController: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData }: IAcademicSemester = req.body
    const result = await AcademicSemesterService.createSemesterService(academicSemesterData)
    res.status(200).send({
      success: true,
      message: 'Academic Semester created successfully',
      data: result
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const AcademicSemesterController = {
  createAcademicSemesterController
}
