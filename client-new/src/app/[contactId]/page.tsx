import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'

import getContact from '@/lib/getContact'
import updateContact from '@/lib/updateContact'

import Button from '@/components/Button'
import { Input } from '@/components/Input'
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
    // revalidatePath(`/${contactId}`)
    redirect('/')
  }

  return (
    <div className="mt-5 min-h-screen flex-col flex items-center">
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
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}
