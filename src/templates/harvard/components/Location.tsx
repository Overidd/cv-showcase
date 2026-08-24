import type React from 'react';

interface LocationProps {
  value: React.ReactNode;
}

export const Location = ({
  value,
}: LocationProps) => {
  return (
    <span className='location'>
      {value}
    </span>
  )
}