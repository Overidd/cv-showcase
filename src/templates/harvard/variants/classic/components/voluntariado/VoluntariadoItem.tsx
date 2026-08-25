import {
  Description,
  Name,
  Period,
  Title,
} from '@/templates/harvard/components';

import type {
  VoluntariadoItemProps
} from './voluntariado.schema';

export const VoluntariadoItem = ({
  date,
  description,
  name,
  title,
}: VoluntariadoItemProps) => {
  return (
    <article className='voluntariado__item'>
      <div className='voluntariado__item-header'>
        {name.display && (
          <Name
            value={name.value}
          />
        )}
      </div>

      <div className='voluntariado__item-subheader'>
        {title.display && (
          <Title
            value={title.value}
          />
        )}

        {date.display && (
          <Period
            value={date.value}
          />
        )}
      </div>

      {description.display && (
        <Description
          value={description.value}
        />
      )}
    </article>
  );
};
