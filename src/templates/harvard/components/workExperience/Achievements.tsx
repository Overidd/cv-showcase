import { cx } from '@/helper'
import type React from 'react';

interface AchievementItem {
  id: string;
  value: React.ReactNode;
}

interface AchievementsProps {
  marker: string;
  data: AchievementItem[];
}

export const Achievements = ({
  marker,
  data,
}: AchievementsProps) => {
  return (
    <ul className={cx(
      'achievements',
      `achievements--${marker}`
    )}>
      {data.map(({ id, value }) => (
        <li
          className='achievement-item'
          key={id}
        >
          {value}
        </li>
      ))}
    </ul>
  )
}