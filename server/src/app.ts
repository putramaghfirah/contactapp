// library
import connectDb from './config/db'
import express, { Response, Request } from 'express'
import cors from 'cors'
import contactRoute from './routes/contact'

const app = express()
const PORT = 4000

// connect DB
connectDb()

// middlewares
app.use(cors()) // policy
app.use(express.json()) // body parser json
app.use(express.urlencoded({ extended: true })) // form-urlencode

// import routes
// const contactRouter = require('./routes/contact')

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
