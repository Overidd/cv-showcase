import type React from 'react';

interface SectionTitleProps {
  value: React.ReactNode;
}

export const SectionTitle = ({
  value,
}: SectionTitleProps) => {
  return (
    <h2 className='section-title'>
      {value}
    </h2>
  )
}