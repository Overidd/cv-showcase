import './Voluntariado.css';

import {
  Separator
} from '@/shared/components';

import type {
  VoluntariadoProps
} from './voluntariado.schema';

import {
  SectionTitle,
} from '@/templates/harvard/components';

export const Voluntariado = ({
  collection,
  SectionItem,
  sectionName,
}: VoluntariadoProps) => {

  return (
    <section className='voluntariado'>
      {sectionName.display && (
        <SectionTitle value={sectionName.value} />
      )}

      <Separator className='separator' />

      {collection.items.map((data) => (
        <SectionItem
          key={data.id}
          {...data}
        />
      ))}
    </section>
  );
};
