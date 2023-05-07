'use client'

import React, { ComponentProps, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

interface Props extends ComponentProps<'button'> {
  className?: string
}

export default function ButtonTheme(props: Props): JSX.Element | null {
  const { className, ...rest } = props

  // hooks
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
    setMounted(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={clsx('transition duration-1000', className)}>
      <button
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-gray-200 dark:hover:bg-gray-700"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        {...rest}
      >
        {theme === 'light' && (
          <MoonIcon className="block h-6 w-6 text-gray-800" />
        )}
        {theme === 'dark' && (
          <SunIcon className="block h-6 w-6 text-yellow-500" />
        )}
      </button>
    </div>
  )
}
