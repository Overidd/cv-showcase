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
  group,
  Item,
  items,
  sectionName,
}: AchievementProps) => {
  return (
    <section className='achievement'>
      {sectionName.display && (
        <SectionTitle value={sectionName.value} />
      )}

      <Separator className='separator' />

      <div className={`achievement__group achievement__group--${group.variant}`}>
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
