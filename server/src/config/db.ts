import mongoose from 'mongoose'
import 'dotenv/config'

const MODE: string = process.env.MODE || 'production'
const DATABASE_LOCAL: string = process.env.DATABASE_LOCAL || ''
const DATABASE_URL: string = process.env.DATABASE_URL || ''
const connectDb = () => {
  return mongoose.connect(
    MODE === 'production' ? DATABASE_URL : DATABASE_LOCAL,
    err => {
      if (err) {
        console.log('Connection to DB failed!!')
        return
      }
      console.log('Connection to DB success')
    },
  )
}

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

export default connectDb
