import './Achievement.css';

import {
  Separator
} from '@/shared/components';

import type {
  AchievementProps
} from './achievement.schema';

import {
  SectionTitle,
} from '@/templates/harvard/components';

export const Achievement = ({
  collection,
  SectionItem,
  sectionName,
}: AchievementProps) => {

  return (
    <section className='achievement'>
      {sectionName.display && (
        <SectionTitle value={sectionName.value} />
      )}

      <Separator className='separator' />

      <div className={`achievement__group achievement__group--${collection.variant}`}>
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
