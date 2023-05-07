import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { ReactNode } from 'react'

import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink'

const buttonStyles = cva(
  'inline-flex items-center rounded border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0',
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
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
)

interface Props extends VariantProps<typeof buttonStyles>, ButtonOrLinkProps {
  className?: string
  isLoading?: boolean
  children?: ReactNode
}

export default function Button(props: Props) {
  const {
    intent = 'primary',
    size = 'medium',
    className,
    isLoading,
    children,
    ...rest
  } = props
  return (
    <ButtonOrLink
      className={clsx(
        buttonStyles({ intent, size }),
        className,
        isLoading && 'cursor-not-allowed opacity-75',
      )}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? 'Loading...' : children}
    </ButtonOrLink>
  )
}
