import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

const createSemesterService = async (payload: IAcademicSemester): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload)
  return result
}

export const AcademicSemesterService = {
  createSemesterService
}
