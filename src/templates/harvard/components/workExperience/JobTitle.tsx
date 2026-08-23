import type React from 'react';

interface JobTitleProps {
  value: React.ReactNode;
}

export const JobTitle = ({
  value,
}: JobTitleProps) => {
  return (
    <h3 className='job-title'>
      {value}
    </h3>
  )
}