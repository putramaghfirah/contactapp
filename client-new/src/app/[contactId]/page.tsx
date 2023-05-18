import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import getContact from '@/lib/getContact'
import updateContact from '@/lib/updateContact'

import { Input } from '@/components/Input'
import { SubmitButton } from '@/components/SubmitButton'
interface Props {
  params: {
    contactId: string
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { contactId } = props.params

  const contactData: Promise<Contact> = getContact(contactId)
  const contact = await contactData

  if (!contact) {
    return {
      title: 'Kontak tidak ditemukan',
    }
  }

  return {
    title: `${contact.nama}`,
    description: `Detail kontak ${contact.nama}`,
  }
}

export default async function ContactPage(props: Props) {
  const { contactId } = props.params

  const contactData: Promise<Contact> = getContact(contactId)
  const contact = await contactData

  if (!contact) return notFound()

  async function handleSubmit(data: any) {
    'use server'
    const nama = data.get('nama')
    const email = data.get('email')
    const nohp = data.get('nohp')

    await updateContact({ nama, email, nohp, _id: contactId })
    // await new Promise(resolve => setTimeout(resolve, 2000))
    revalidatePath(`/${contactId}`)
    // redirect('/')
  }

  return (
    <div className="mt-5 flex min-h-screen flex-col items-center">
      <p>Hello {contact?.nama}👋</p>
      <form action={handleSubmit} className="flex flex-col space-y-3">
        <Input id="nama" name="nama" label="Nama" defaultValue={contact.nama} />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          defaultValue={contact.email}
        />
        <Input
          id="nohp"
          name="nohp"
          label="Nomor Hp"
          defaultValue={contact.nohp}
        />
        <SubmitButton>Update</SubmitButton>
      </form>
    </div>
  )
}
