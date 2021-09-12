import { GetServerSideProps } from 'next'
// import { GetStaticPaths, GetStaticProps } from 'next'
// import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Contact } from '../../types/Contact'
// import { useRouter } from 'next/router'

interface Props {
  contact: Contact[]
}

const DetailContact = ({ contact }: Props): JSX.Element => {
  // const [contact, setContact] = useState<Contact[]>([])
  // const router = useRouter()
  // const { nama } = router.query

  // useEffect(() => {
  //   console.log(router)
  //   if (!router.isReady) return
  //   fetch(`http://localhost:4000/contact/${nama}`)
  //     .then(res => res.json())
  //     .then(data => setContact(data))
  // }, [router.isReady])

  return (
    <>
      <Head>
        <title>Detail Page</title>
      </Head>
      {contact.map(contact => {
        return (
          <div
            key={contact.email}
            className="text-3xl font-bold  dark:text-gray-100"
          >
            {contact.email}
            {contact.nama}
            {contact.nohp}
          </div>
        )
      })}
      <Link href="/" passHref>
        <a className="font-semibold text-blue-600 hover:text-blue-700">
          Go back
        </a>
      </Link>
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