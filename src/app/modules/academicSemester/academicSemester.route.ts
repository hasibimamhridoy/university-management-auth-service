import express from 'express'
import validateRequestMiddleWare from '../../middleware/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.validation'
import { AcademicSemesterController } from './academicSemester.controller'
const semesterRouter = express.Router()

semesterRouter.post(
  '/create-semester',
  validateRequestMiddleWare(AcademicSemesterValidation.academicSemesterZodSchema),
  AcademicSemesterController.createAcademicSemesterController
)

export const AcademicSemesterRoutes = {
  semesterRouter
}
