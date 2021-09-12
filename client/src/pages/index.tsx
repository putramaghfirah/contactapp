import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { PlusIcon } from '@heroicons/react/solid'

interface Props {
  nama: string
  email: string
  nohp: string
}

export const HomePage = (): JSX.Element => {
  const [users, setPeople] = useState<Props[]>([])

  useEffect(() => {
    fetchUsers()
    async function fetchUsers() {
      const res = await fetch('http://localhost:4000/contact')
      const data = await res.json()

      return setPeople(data)
    }
  }, [])
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-start justify-center m-8 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-2 dark:text-gray-100">
          Daftar Contacts
        </h1>
        <button className="flex items-center mb-2 px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
          <PlusIcon className="h-7 w-7" />
          <span className="mx-1">Add Contact</span>
        </button>
        {users.length !== 0 ? (
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          NoHP
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((person, index) => (
                        <tr key={person.email}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                {index + 1}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {person.nama}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {person.nohp}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                              href="/contact/[nama]"
                              as={`/contact/${person.nama}`}
                              passHref
                            >
                              <a className="text-indigo-600 hover:text-indigo-900">
                                Detail
                              </a>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-3xl font-bold dark:text-gray-100">
            Contact is empty!
          </h1>
        )}
      </div>
    </React.Fragment>
  )
}

export default HomePage
