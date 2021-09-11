import React, { FC } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import useDarkMode from '../lib/useDarkMode'

interface Props {}

const ToggleDark: FC<Props> = () => {
  const [theme, setTheme] = useDarkMode()

  return (
    <div className="absolute top-5 right-5 transition duration-1000">
      <button onClick={() => setTheme()}>
        {theme === 'light' ? (
          <MoonIcon className="h-7 w-7 text-[#1A202C]" />
        ) : (
          <SunIcon className="h-7 w-7 text-yellow-500" />
        )}
      </button>
    </div>
  )
}

export default ToggleDark
