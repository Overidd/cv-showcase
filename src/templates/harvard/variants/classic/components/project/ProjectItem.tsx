import {
  Description,
  Link,
  Location,
  Name,
  ParagraphBody,
  Period,
} from '@/templates/harvard/components';

import type {
  ProjectItemProps
} from '.';

export const ProyectItem = ({
  date,
  description,
  link,
  location,
  name,
  paragraph,
}: ProjectItemProps) => {
  return (
    <article className='project__item'>

      <div className='project__item-header'>
        <div className='project__item-name-info'>
          {name.display && (
            <Name
              value={name.value}
            />
          )}

          {link.display && (
            <>
              <span className='proyect__separator'>
                —
              </span>

              <Link
                href={link.href}
                value={link.value}
              />
            </>
          )}
        </div>

        {location.display && (
          <Location
            value={location.value}
          />
        )}
      </div>

      <div className='project__item-subheader'>
        {description.display && (
          <Description
            value={description.value}
          />
        )}

        {date.display && (
          <Period
            value={date.value}
          />
        )}
      </div>

      {paragraph.display && (
        <ParagraphBody
          marker={paragraph.marker}
          value={paragraph.value}
        />
      )}
    </article>
  );
};
