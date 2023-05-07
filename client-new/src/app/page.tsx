import getAllContacts from '@/lib/getAllContacts'

import Button from '@/components/Button'
import Table from '@/components/TableContacts'

export const metadata = {
  title: 'Contact App',
}

export default async function HomePage() {
  const contactsData: Promise<Contact[]> = getAllContacts()

  const contacts = await contactsData
  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
            Contact
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            A list of all the contact including their name, no hp, and email
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button>Tambah Kontak</Button>
        </div>
      </div>
      <Table contacts={contacts} />
    </div>
  )
}
