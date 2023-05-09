import React, { ComponentProps, forwardRef } from 'react'

interface Props extends ComponentProps<'input'> {
  id: string
  label: string
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, label, type = 'text', ...rest } = props
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        ref={ref}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...rest}
      />
    </div>
  )
})
