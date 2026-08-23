import type React from 'react';

interface PeriodProps {
  value: React.ReactNode;
}

export const Period = ({
  value,
}: PeriodProps) => {
  return (
    <span className='period'>
      {value}
    </span>
  )
}