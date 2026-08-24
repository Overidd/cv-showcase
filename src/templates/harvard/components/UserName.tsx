import type React from 'react'

export type VariantName = 'uppercase' | 'capitalize'

interface NameProps {
  value: React.ReactNode,
  variant?: VariantName
}

export const UserName = ({
  value,
  variant = 'uppercase'
}: NameProps) => {

  return (
    <h1 className={`name name--${variant}`}>
      {value}
    </h1>
  )
}