import type React from 'react';

interface NameProps {
  value: React.ReactNode;
}

export const Name = ({
  value,
}: NameProps) => {

  return (
    <span className='name'>
      {value}
    </span>
  );
};