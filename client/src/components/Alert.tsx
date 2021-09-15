import React from 'react'
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import { useAlert } from '../store/useAlert'

interface Props {
  title: string
}

const Alert = ({ title }: Props): JSX.Element => {
  const { isActive, setActive } = useAlert(state => ({
    isActive: state.isActive,
    setActive: state.setActive,
  }))
  return (
    <>
      {isActive && (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <CheckCircleIcon className="w-5 h-5" />
          </span>
          <span className="inline-block align-middle mr-8">{title}</span>
          <button
            onClick={() => setActive(!isActive)}
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  )
}

export default Alert
