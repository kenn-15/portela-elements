import React from 'react'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3
}

export default function Heading({ level = 1, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const size =
    level === 1
      ? 'text-3xl md:text-4xl'
      : level === 2
        ? 'text-2xl md:text-3xl'
        : 'text-xl'

  return (
    <Tag className={`${size} font-semibold leading-tight`} {...props}>
      {children}
    </Tag>
  )
}
