import type React from 'react';

interface JobTitleProps {
  value: React.ReactNode;
}

export const Title = ({
  value,
}: JobTitleProps) => {
  return (
    <h3 className='title'>
      {value}
    </h3>
  )
}