import './Certification.css';

import {
  Separator
} from '@/shared/components';

import type {
  CertificationProps
} from './certification.schema';

import {
  SectionTitle,
} from '@/templates/harvard/components';

export const Certification = ({
  collection,
  SectionItem,
  sectionName,
}: CertificationProps) => {

  return (
    <section className='certification'>
      {sectionName.display && (
        <SectionTitle value={sectionName.value} />
      )}

      <Separator className='separator' />

      <div className='certification__items'>
        {collection.items.map((data) => (
          <SectionItem
            key={data.id}
            {...data}
          />
        ))}
      </div>
    </section>
  );
};
