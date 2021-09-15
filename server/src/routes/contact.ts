/* eslint-disable no-throw-literal */
import { Response, Request, Router } from 'express'
import { Contact } from '../models/Contact'
import { check, validationResult, body } from 'express-validator'

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

router.post(
  '/add',
  [
    body('nama').custom(async value => {
      const duplicate = await Contact.findOne({ nama: value })
      if (duplicate) {
        throw new Error('Name already exists!')
      }
      return true
    }),
    check('email', 'Invalid email').isEmail(),
    check('nohp', 'Invalid nohp').isMobilePhone('id-ID'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log({ message: errors.array() })
      return res.status(400).send({ message: errors.array() })
    } else {
      const contact = new Contact({
        nama: req.body.nama,
        email: req.body.email,
        nohp: req.body.nohp,
      })
      const saveContact = await contact.save()
      console.log(saveContact)
      res.status(201).json(saveContact)
    }
  },
)

router.delete('/:nama', async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findOne({ nama: req.params.nama })

    if (!contact) throw 'Contact not found!'

    const contactDelete = await Contact.deleteOne({ _id: contact._id })
    console.log(contactDelete)
    res.status(200).json(contactDelete)
  } catch (error) {
    res.status(403).json({ message: error })
    console.log(error)
  }
})

router.get('/:nama', async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findOne({ nama: req.params.nama })
    if (!contact) throw 'Data not found!'
    res.status(200).json(contact)
  } catch (error) {
    res.status(403).json({ message: error, statusCode: 403 })
    console.log(error)
  }
})

module.exports = router
