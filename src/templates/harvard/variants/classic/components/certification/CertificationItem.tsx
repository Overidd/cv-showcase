import {
  Description,
  Name,
} from '@/templates/harvard/components';

import type {
  CertificationItemProps
} from './certification.schema';

export const CertificationItem = ({
  description,
  name,
}: CertificationItemProps) => {
  return (
    <article className='certification__item'>
      {name.display && (
        <Name
          value={name.value}
        />
      )}

      {description.display && (
        <>
          <span className='certification__separator'>
            —
          </span>

          <Description
            value={description.value}
          />
        </>
      )}
    </article>
  );
};
