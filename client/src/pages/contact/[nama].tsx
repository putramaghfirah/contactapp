import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Contact } from '../../types/Contact'
import { ArrowLeftIcon } from '@heroicons/react/solid'

interface Props {
  contact: Contact[]
}

const DetailContact = ({ contact }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Detail Page</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        {contact.map(contact => {
          return (
            <div
              key={contact.email}
              className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <div className="mt-2">
                <p className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                  {contact.nama}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {contact.email}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {contact.nohp}
                </p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-blue-600 rounded cursor-pointer hover:bg-blue-500">
                  Edit
                </a>
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-red-600 rounded cursor-pointer hover:bg-red-500">
                  Hapus
                </a>
              </div>

              <div className="flex items-center mt-4">
                <Link href="/" passHref>
                  <a className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                    <ArrowLeftIcon className="w-4 h-4 mr-1" />
                    Go Back
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await fetch(
    `http://localhost:4000/contact/${context.params.nama}`,
  )

  const data = await res.json()

  return {
    props: {
      contact: data,
    },
  }
}

// export const getStaticProps: GetStaticProps = async context => {
//   const res = await fetch(
//     `http://localhost:4000/contact/${context.params.nama}`,
//   )

//   const data = await res.json()

//   return {
//     props: {
//       contact: data,
//     },
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`http://localhost:4000/contact`)

//   const data = await res.json()

//   const namaUsers = data.map((data: { nama: Contact }) => data.nama)

//   console.log(namaUsers)

//   const paths = namaUsers.map((nama: { nama: Contact }) => ({
//     params: { nama },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }
export default DetailContact
