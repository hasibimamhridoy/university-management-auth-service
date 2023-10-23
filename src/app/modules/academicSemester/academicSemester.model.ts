import mongoose from 'mongoose'
import { IAcademicSemester, AcademicSemesterModel } from './academicSemester.interface'
import {
  AcademicSemesterCodes,
  AcademicSemesterTitles,
  AcademicSemesterMonths
} from './academicSemester.constant'

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

export const AcademicSemester = mongoose.model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
