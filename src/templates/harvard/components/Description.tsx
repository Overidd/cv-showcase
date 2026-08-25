import type React from 'react';

interface DescriptionProps {
  value: React.ReactNode;
}
export const Description = ({
  value,
}: DescriptionProps) => {
  return (
    <p className='description paragraph'>
      {value}
    </p>
  )
}