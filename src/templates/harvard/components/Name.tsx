import type React from 'react';

interface NameProps {
  className?: string;
  value: React.ReactNode;
}

export const Name = ({
  className,
  value,
}: NameProps) => {

  return (
    <span className={`name ${className}`}>
      {value}
    </span>
  );
};