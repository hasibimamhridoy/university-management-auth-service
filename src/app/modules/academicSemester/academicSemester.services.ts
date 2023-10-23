import ApiError from '../../../error/ApiError'
import { IAcademicSemester, academicSemesterTitleCodeMapper } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import httpStatus from 'http-status'
const createSemesterService = async (payload: IAcademicSemester): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }

  const result = await AcademicSemester.create(payload)
  return result
}

export const AcademicSemesterService = {
  createSemesterService
}
