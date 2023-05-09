import Link from 'next/link'
import React from 'react'

interface Props {
  contacts: Contact[]
}

export default function Table(props: Props) {
  const { contacts } = props
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-0"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  No Hp
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Email
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contacts.map(contact => (
                <tr key={contact._id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-0">
                    {contact.nama}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                    {contact.nohp}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                    {contact.email}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <Link
                      href={`/${contact._id}`}
                      className="mr-4 text-blue-600 hover:text-blue-900 dark:hover:text-blue-500"
                    >
                      Edit<span className="sr-only">, {contact.nama}</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-red-600 hover:text-red-900 dark:hover:text-red-500"
                    >
                      Hapus<span className="sr-only">, {contact.nama}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
