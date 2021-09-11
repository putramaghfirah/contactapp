import express, { Response, Request } from 'express'
const cors = require('cors')

const app = express()
const PORT = 4000

// middlewares
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  const mhs = {
    nama: 'putra',
    nim: '123',
  }
  res.json(mhs)
})

app.use('/', (req: Request, res: Response) => {
  res.status(404).send('404 Page not found :(')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
