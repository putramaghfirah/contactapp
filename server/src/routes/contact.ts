import { Response, Request, Router } from 'express'
const Contact = require('../models/contact')

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const contacts = await Contact.find()
  res.json(contacts)
})

router.get('/add', async (req: Request, res: Response) => {
  const contacts = await Contact.find()
  res.json(contacts)
})

router.get('/:nama', async (req: Request, res: Response) => {
  const contact = await Contact.find({ nama: req.params.nama })
  res.json(contact)
})

router.post('/', async (req: Request, res: Response) => {
  const contact = new Contact({
    nama: 'Putra Maghfirah',
    nohp: '082273297050',
    email: 'putra@gmail.com',
  })
  try {
    const saveContact = await contact.save()
    res.json(saveContact)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
