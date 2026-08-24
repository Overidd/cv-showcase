import { cx } from '@/helper'
import type React from 'react';

interface AchievementsProps {
  marker: string;
  value: React.ReactNode;
}

export const ParagraphBody = ({
  marker,
  value,
}: AchievementsProps) => {
  return (
    <div className={cx(
      'paragraph-body',
      `paragraph-body--${marker}`
    )}>
      <p
        className='paragraph paragraph-body__item'
      >
        {value}
      </p>
    </div>
  )
}