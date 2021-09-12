// library
import express, { Response, Request } from 'express'
const cors = require('cors') // cors to remove policy fetch
const mongoose = require('mongoose') // mongoose
require('dotenv/config') // dotenv to catch DB_CONNECTION

const app = express()
const PORT = 4000

// middlewares
app.use(cors())

// import routes
const contactRoute = require('./routes/contact')

// router
app.use('/contact', contactRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

// page not found
app.use('/', (req: Request, res: Response) => {
  res.status(404).send('404 Page not found :(')
})

// database connect
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('connected to DB!')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
