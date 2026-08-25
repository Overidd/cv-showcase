import type React from 'react';
import { Title } from './Title';

interface ProgressBarProps {
  value: string | React.ReactNode;
  range: number;
  label?: string;
  Controller: React.ComponentType<React.PropsWithChildren>;
}

export function ProgressBar({
  value,
  label,
  range,
  Controller
}: ProgressBarProps) {
  return (
    <div className='progress'>
      <div className='progress__header'>
        <p className='paragraph'>
          {value}
        </p>
      </div>

      <Controller>
        <div className='progress__bar'>
          <div
            className='progress__value'
            style={{ width: `${range}%` }}
          />
        </div>
      </Controller>

      {label && (
        <Title value={label} />
      )}
    </div>
  );
}