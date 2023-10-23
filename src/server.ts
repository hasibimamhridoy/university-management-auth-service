import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, loggerError } from './shared/logger'
import { Server } from 'http'

let server: Server

process.on('uncaughtException', error => {
  // console.log('uncaughtException is detected , We are closing the connection')
  loggerError.error(error)
  process.exit(1)
})

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ums')
    // await mongoose.connect(config.database_url as string)
    logger.info('Database connection established')
    server = app.listen(process.env.PORT, () => {
      logger.info(`Example app listening on port : ${config.port}`)
    })
  } catch (error) {
    loggerError.error('Failed to connect database: ' + error)
  }

  //uncaughtRejection handle
  process.on('unhandledRejection', error => {
    // console.log('Unhandled Rejection is detected , We are closing the connection')
    logger.error('unhandledRejection -' + error)
    if (server) {
      server.close(() => {
        loggerError.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

// console.log(x);

process.on('SIGTERM', () => {
  logger.info('SIGTERM is recievd')

  if (server) {
    server.close()
  }
})
