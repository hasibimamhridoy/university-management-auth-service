import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf, prettyPrint } = format
require('winston-daily-rotate-file')
import DailyRotateFile from 'winston-daily-rotate-file'

const transportSuccess: DailyRotateFile = new DailyRotateFile({
  filename: path.join(process.cwd(), 'logs', 'winston', 'successess', 'um-%DATE%-Success.log'),
  datePattern: 'YYYY-DD-MM-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
})
const transportError: DailyRotateFile = new DailyRotateFile({
  filename: path.join(process.cwd(), 'logs', 'winston', 'errors', 'um-%DATE%-Error.log'),
  datePattern: 'YYYY-DD-MM-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
})

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  return `
    Date : ${date.toDateString()}${hour}:${min}:${sec} 
    Label: ${label}
    Lavel: ${level} 
    Message : ${message}
    `
})

export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'Success!' }), timestamp(), prettyPrint(), myFormat),
  transports: [new transports.Console(), transportSuccess]
})

export const loggerError = createLogger({
  level: 'error',
  format: combine(label({ label: 'Error!' }), timestamp(), prettyPrint(), myFormat),
  transports: [new transports.Console(), transportError]
})
