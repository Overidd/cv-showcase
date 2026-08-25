import type React from 'react';
import { Title } from './Title';

interface ProgressBarProps {
  value: string | React.ReactNode;
  range: number;
  label?: string;
}

export function ProgressBar({
  value,
  label,
  range,
}: ProgressBarProps) {
  return (
    <div className='progress'>
      <div className='progress__header'>
        <p className='paragraph'>
          {value}
        </p>
      </div>

      <div className='progress__bar'>
        <div
          className='progress__value'
          style={{ width: `${range}%` }}
        />
      </div>

      {label && (
        <Title value={label} />
      )}
    </div>
  );
}