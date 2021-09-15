import React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import validator from 'validator'

import { Contact } from '../../types/Contact'
import Alert from '@components/Alert'
import { useAlert } from '../../store/useAlert'
import router from 'next/router'

const AddPage = (): JSX.Element => {
  const setActive = useAlert(state => state.setActive)
  const {
    register,
    handleSubmit,
    setError,
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
    })
      .then(res => {
        if (res.status === 400) {
          setError('nama', {
            type: 'manual',
            message: 'Name already exists!',
          })
        } else {
          setActive(true)
          setTimeout(() => {
            setActive(false)
            router.push('/')
          }, 1000)
        }
      })
      .catch(errors => {
        console.log(errors)
      })
  }
  return (
    <>
      <Head>
        <title>Add Contact</title>
      </Head>
      <div className="flex flex-col items-center justify-around mt-6">
        <Alert title="contact data added successfully" />
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
                {errors.nama?.type === 'required' && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *This field is required
                  </span>
                )}
                {errors.nama?.type === 'manual' && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *Name already exists!
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
                  {...register('nohp', {
                    required: true,
                    validate: v =>
                      validator.isMobilePhone(v, 'id-ID') || '*Invalid Nohp',
                  })}
                  id="noHp"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {errors.nohp?.type === 'required' && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *This field is required
                  </span>
                )}
                {errors.nohp?.type === 'validate' && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    {errors.nohp.message}
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
                  {...register('email', {
                    required: true,
                    validate: v => validator.isEmail(v) || '*Invalid Email',
                  })}
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {errors.email?.type === 'required' && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *This field is required
                  </span>
                )}
                {errors.email?.type === 'validate' && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    {errors.email.message}
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
