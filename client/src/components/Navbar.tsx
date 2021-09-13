import Link from 'next/link'

import ToggleDark from '@components/ToggleDark'

const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-[#EFF4F6] shadow dark:bg-[#1A202C]">
      <div className="px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link href="/" passHref>
                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-xl hover:text-gray-700 dark:hover:text-gray-300">
                  ContactApp
                </a>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-between">
            <div className="flex flex-row items-center mx-8">
              <Link href="/" passHref>
                <a className="px-2 py-1  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                  Home
                </a>
              </Link>
              <Link href="/about" passHref>
                <a className="px-2 py-1  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                  About
                </a>
              </Link>
            </div>

            <div className="flex items-center">
              <ToggleDark />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
