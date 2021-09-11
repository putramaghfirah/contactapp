import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export function SecondPage(): JSX.Element {
  const [mahasiswa, setMahasiswa] = useState<{ nama: string; nim: string }>()
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMahasiswa(data)
      })
  }, [])
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-gray-800">
          <h1 className="text-4xl font-bold pt-4 dark:text-gray-100">
            Welcome to <span className="text-blue-600">Second Page!</span>
          </h1>
          <p className="text-2xl mt-1 dark:text-gray-100">
            Starter template with tailwindcss, typescript, and eslint
          </p>
          {mahasiswa && (
            <div className="text-2xl mt-1 dark:text-gray-100">
              {mahasiswa.nama} {mahasiswa.nim}
            </div>
          )}

          <p className="text-lg dark:text-gray-100">
            Go to page{' '}
            <Link href="/" passHref>
              <a className="text-blue-600 font-bold">Home</a>
            </Link>
          </p>
        </main>
      </div>
    </>
  )
}

export default SecondPage
