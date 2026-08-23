import type React from 'react';

export interface SeparatorProps {
  className?: string;
}

export const Separator = ({
  className,
}: SeparatorProps): React.ReactElement => {
  return <hr className={className} />;
};