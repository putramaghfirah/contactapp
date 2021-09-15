import React from 'react'
import { GetServerSideProps } from 'next'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import validator from 'validator'
import router from 'next/router'

import { Contact } from '../../../types/Contact'
import Alert from '@components/Alert'
import { useAlert } from '../../../store/useAlert'

interface Props {
  contact: Contact
}

const EditPage = ({ contact }: Props): JSX.Element => {
  const setActive = useAlert(state => state.setActive)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Contact>({ mode: 'onBlur' })

  function onSubmit(props: Contact) {
    fetch('http://localhost:4000/contact/update', {
      // Adding method type
      method: 'PUT',
      // Adding body or contents to send
      body: JSON.stringify({
        _id: props._id,
        nama: props.nama,
        nohp: props.nohp,
        email: props.email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => {
        if (res.status === 400) {
          setError('nama', {
            type: 'validate',
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
        <title>Edit Contact</title>
      </Head>
      <div className="flex flex-col items-center justify-around mt-6">
        <Alert title="Contact data edited successfully" />
        <section className="md:w-96 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg mb-3 font-semibold text-gray-700 capitalize dark:text-white">
            Edit Data Contact
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('_id', { required: true })}
              type="hidden"
              value={contact._id}
            />
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
                  defaultValue={contact.nama}
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                {errors.nama?.type === 'required' && (
                  <span className="dark:text-red-400 text-red-500 text-xs animate-slideDownFade">
                    *This field is required
                  </span>
                )}
                {errors.nama?.type === 'validate' && (
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
                  defaultValue={contact.nohp}
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
                  defaultValue={contact.email}
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
                Edit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await fetch(
    `http://localhost:4000/contact/${context.params.nama}`,
  )

  const data = await res.json()

  console.log(data)
  if (data.statusCode === 403) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      contact: data,
    },
  }
}

export default EditPage
