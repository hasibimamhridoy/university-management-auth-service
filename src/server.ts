import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connection established')
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port --  ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect database: ' + error)
  }
}

main()
