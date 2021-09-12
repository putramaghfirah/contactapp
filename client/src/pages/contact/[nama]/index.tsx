import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DetailContact = (): JSX.Element => {
  const router = useRouter()
  const { nama } = router.query
  return (
    <React.Fragment>
      <div className="text-3xl font-bold  dark:text-gray-100">{nama}</div>
      <Link href="/" passHref>
        <a className="font-semibold text-blue-600 hover:text-blue-700">
          Go back
        </a>
      </Link>
    </React.Fragment>
  )
}

export default DetailContact
