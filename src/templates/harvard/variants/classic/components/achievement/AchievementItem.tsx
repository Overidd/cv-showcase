import {
  Description,
  Name,
} from '@/templates/harvard/components';

import type {
  AchievementItemProps
} from './achievement.schema';

export const AchievementItem = ({
  description,
  name,
}: AchievementItemProps) => {
  return (
    <article className='achievement__item'>
      {name.display && (
        <Name
          value={name.value}
        />
      )}

      {description.display && (
        <Description
          value={description.value}
        />
      )}
    </article>
  );
};
