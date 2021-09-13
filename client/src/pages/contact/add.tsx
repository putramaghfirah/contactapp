import React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'

import { Contact } from '../../types/Contact'

const AddPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({ mode: 'onBlur' })

  async function onSubmit(props: Contact) {
    fetch('http://localhost:4000/contact/add', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        nama: props.nama,
        nohp: props.nohp,
        email: props.email,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => console.log('Contact is Created'))
  }
  return (
    <>
      <Head>
        <title>Add Contact</title>
      </Head>
      <div className="flex flex-wrap items-center justify-around mt-6">
        <section className="md:w-96 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg mb-3 font-semibold text-gray-700 capitalize dark:text-white">
            Add Data Contact
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  {...register('nama', { required: true })}
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {errors.nama && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *This field is required
                  </span>
                )}
              </div>

              <div className="mt-3">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="noHp"
                >
                  NoHp
                </label>
                <input
                  {...register('nohp', { required: true })}
                  id="noHp"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {errors.nohp && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *This field is required
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email
                </label>
                <input
                  {...register('email', { required: true })}
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {errors.email && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default AddPage
