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
  group,
  Item,
  items,
  sectionName,
}: PersonalizedProps) => {
  return (
    <section className='personalized'>
      {sectionName.display && (
        <SectionTitle value={sectionName.value} />
      )}

      <Separator className='separator' />

      <div className={`personalized__group personalized__group--${group.variant}`}>
        {items.map((data) => (
          <Item
            key={data.id}
            {...data}
          />
        ))}
      </div>
    </section>
  );
};
