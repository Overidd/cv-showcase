import { cx } from '@/helper'
import type React from 'react';

interface AchievementsProps {
  marker: string;
  value: React.ReactNode;
}

export const Achievement = ({
  marker,
  value,
}: AchievementsProps) => {
  return (
    <div className={cx(
      'achievement',
      `achievement--${marker}`
    )}>
      <p
        className='paragraph achievement-item'
      >
        {value}
      </p>
    </div>
  )
}