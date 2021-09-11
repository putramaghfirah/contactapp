import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const custom404 = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-5xl text-center dark:text-white">
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </h1>
        <p className="text-lg text-center mt-2 dark:text-white">
          Page not found.
        </p>
        <p className="text-lg text-center dark:text-white">
          Return to{' '}
          <Link href="/" passHref>
            <a className="text-blue-600 font-bold">Home Page</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default custom404
