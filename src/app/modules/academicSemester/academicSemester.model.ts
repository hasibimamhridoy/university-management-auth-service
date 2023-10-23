import mongoose from 'mongoose'
import status from 'http-status'

import { IAcademicSemester, AcademicSemesterModel } from './academicSemester.interface'
import {
  AcademicSemesterCodes,
  AcademicSemesterTitles,
  AcademicSemesterMonths
} from './academicSemester.constant'
import ApiError from '../../../error/ApiError'

const { Schema } = mongoose

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: AcademicSemesterTitles
    },
    year: {
      type: Number,
      required: true
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCodes
    },
    startMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterMonths
    },
    endMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterMonths
    }
  },
  { timestamps: true }
)

academicSemesterSchema.pre('save', async function (next) {
  const query = { title: this.title, year: this.year }
  const isExits = await AcademicSemester.findOne(query)

  if (isExits) {
    throw new ApiError(status.CONFLICT, 'Academic Semester is alrady exits in this year')
  } else {
    next()
  }
})

export const AcademicSemester = mongoose.model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
