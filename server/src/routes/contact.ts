import { Response, Request, Router } from 'express'
const Contact = require('../models/contact')

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
  } catch (error) {
    res.status(400).json({ message: error })
    console.log(error)
  }
})

router.post('/add', async (req: Request, res: Response) => {
  // Contact.insertMany({
  //   nama: req.body.nama,
  //   email: req.body.email,
  //   nohp: req.body.nohp,
  // })
  // Contact.insertMany(req.body)
  const contact = new Contact({
    nama: req.body.nama,
    email: req.body.email,
    nohp: req.body.nohp,
  })
  try {
    const saveContact = await contact.save()
    res.status(201).json(saveContact)
    console.log(req.body)
  } catch (error) {
    res.status(403).json({ message: error })
    console.log(error)
  }
})

router.get('/:nama', async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findOne({ nama: req.params.nama })
    // eslint-disable-next-line no-throw-literal
    if (!contact) throw 'Data not found!'
    res.status(200).json(contact)
  } catch (error) {
    res.status(403).json({ message: error })
    console.log(error)
  }
})

module.exports = router
