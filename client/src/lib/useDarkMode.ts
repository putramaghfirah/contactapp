import { useState, useEffect } from 'react'

export default function useDarkMode(): readonly ['dark' | 'light', () => void] {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light'
    setTheme(localTheme as 'light' | 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add(theme)
  }, [theme])

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else setTheme('light')
  }

  return [theme, toggleTheme] as const
}
