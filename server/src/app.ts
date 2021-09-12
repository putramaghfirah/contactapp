// library
import connectDb from './config/db'
import express, { Response, Request } from 'express'
const cors = require('cors') // cors to remove policy fetch

const app = express()
const PORT = 4000

// connect DB
connectDb()

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

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
