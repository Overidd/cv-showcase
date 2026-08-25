import {
  Description,
  Name,
  Period,
} from '@/templates/harvard/components';

import type {
  PersonalizedItemProps
} from './personalized.schema';

export const PersonalizedItem = ({
  date,
  description,
  name,
}: PersonalizedItemProps) => {
  return (
    <article className='personalized__item'>
      {name.display && (
        <Name
          value={name.value}
        />
      )}

      {date.display && (
        <Period
          value={date.value}
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
