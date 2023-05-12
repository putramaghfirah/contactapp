'use client'

import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink'

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      intent: {
        primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
        success:
          'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white',
      },
      size: {
        small: 'px-2.5 py-1.5 text-xs',
        medium: 'px-4 py-2 text-sm',
        large: 'px-4 py-2 text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      fullWidth: false,
    },
  },
)

export interface Props
  extends VariantProps<typeof buttonStyles>,
    ButtonOrLinkProps {
  className?: string
}

export default function Button(props: Props) {
  const {
    intent = 'primary',
    size = 'medium',
    fullWidth,
    className,
    ...rest
  } = props
  return (
    <ButtonOrLink
      className={clsx(buttonStyles({ intent, size, fullWidth }), className)}
      {...rest}
    />
  )
}
