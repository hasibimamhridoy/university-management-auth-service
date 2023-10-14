import express, { Application, Request, Response } from 'express'

import cors from 'cors'

const app: Application = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req: Request, res: any) => {
  res.send('Woking fineaa')
})

export default app
