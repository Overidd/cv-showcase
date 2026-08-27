import './Personalized.css';

import {
  Separator
} from '@/shared/components';

import type {
  PersonalizedProps
} from './personalized.schema';

import {
  SectionTitle,
} from '@/templates/harvard/components';

export const Personalized = ({
  collection,
  SectionItem,
  sectionName,
}: PersonalizedProps) => {
  return (
    <section className='personalized'>
      {sectionName.display && (
        <SectionTitle value={sectionName.value} />
      )}

      <Separator className='separator' />

      <div className={`personalized__group personalized__group--${collection.variant}`}>
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
