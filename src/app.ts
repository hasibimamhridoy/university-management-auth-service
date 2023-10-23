import express, { Application } from 'express'

import cors from 'cors'
import errorHandler from './app/middleware/errorHandler'
import { routeErrorHandle } from './app/middleware/404RouteErrorHandle'
import { UserRoutes } from './app/modules/user/user.route'
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
import ApiError from './error/ApiError'
// import ApiError from './error/ApiError'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/api/v1/users', UserRoutes.userRouter)
app.use('/api/v1/academic-semester', AcademicSemesterRoutes.semesterRouter)

app.get('/', async (req, res, next) => {
  // Promise.reject(new Error("Server unhandled error"))
  // console.log(a);

  next(new ApiError(404, 'Testing error logger'))
})

//global
app.use(errorHandler)

// 404 Route Handler
app.use(routeErrorHandle)

export default app
