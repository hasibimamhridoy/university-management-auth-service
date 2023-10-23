import { z } from 'zod'
import {
  AcademicSemesterCodes,
  AcademicSemesterTitles,
  AcademicSemesterMonths
} from './academicSemester.constant'

export const academicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...(AcademicSemesterTitles as [string, ...string[]])], {
      required_error: 'Title is required'
    }),
    year: z.number({
      required_error: 'Year is required'
    }),
    code: z.enum([...(AcademicSemesterCodes as [string, ...string[]])], {
      required_error: 'Code is required'
    }),
    startMonth: z.enum([...(AcademicSemesterMonths as [string, ...string[]])], {
      required_error: 'Start Month is Required'
    }),
    endMonth: z.enum([...(AcademicSemesterMonths as [string, ...string[]])], {
      required_error: 'End Month is Required'
    })
  })
})

export const AcademicSemesterValidation = {
  academicSemesterZodSchema
}
