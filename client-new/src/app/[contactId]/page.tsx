import getContact from '@/lib/getContact'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-lg text-gray-900 dark:text-gray-100">
        {contact.nama} 👋
      </p>
    </div>
  )
}
