import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium'
  const styles =
    variant === 'primary'
      ? `${base} bg-primary-500 text-white hover:bg-primary-600`
      : `${base} bg-transparent text-primary-700 hover:bg-primary-50`

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}
