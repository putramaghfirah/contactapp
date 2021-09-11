import express, { Response, Request } from 'express'

const app = express()
const PORT = 4000

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Servers')
})

app.use('/', (req: Request, res: Response) => {
  res.status(404).send('404 Page not found :(')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
