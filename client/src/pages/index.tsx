import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { PlusIcon } from '@heroicons/react/solid'
import { Contact } from '../types/Contact'
import router from 'next/router'

// interface Props {
//   users: Contact[]
// }

export const HomePage = (): JSX.Element => {
  const [users, setUsers] = useState<Contact[]>([])
  // const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true)
      setHasError(false)
      try {
        const res = await fetch('http://localhost:4000/contact/')
        const data = await res.json()
        if (data.length === 0) {
          setIsEmpty(true)
        } else setUsers(data)
      } catch (error) {
        setHasError(true)
      }
      // setIsLoading(false)
    }

    fetchData()
  }, [])
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-start justify-center m-5 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-2 dark:text-gray-100">
          Daftar Contacts
        </h1>
        <button
          onClick={() => router.push('/contact/add')}
          className="flex items-center mb-2 px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700"
        >
          <PlusIcon className="h-7 w-7" />
          <span className="mx-1">Add Contact</span>
        </button>
        {hasError && (
          <h1 className="text-3xl font-bold dark:text-gray-100">
            Something went wrong!
          </h1>
        )}
        {isEmpty ? (
          <h1 className="text-3xl font-bold dark:text-gray-100">
            Contact is empty!
          </h1>
        ) : (
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow-md overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider"
                        >
                          NoHP
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-600 text-gray-900 dark:bg-gray-800 dark:text-white">
                      {users.map((person, index) => (
                        <tr key={person.nama}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="text-sm font-medium">
                                {index + 1}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium ">
                              {person.nama}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {person.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">{person.nohp}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                              href="contact/[nama]"
                              as={`/contact/${person.nama}`}
                              passHref
                            >
                              <a className="text-blue-500 hover:text-blue-600">
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
        )}
      </div>
    </React.Fragment>
  )
}

export default HomePage
