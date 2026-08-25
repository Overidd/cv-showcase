import './Proyect.css';

import {
  Separator
} from '@/shared/components';

import type {
  ProjectProps
} from './project.schema';

import {
  SectionTitle,
} from '@/templates/harvard/components';

export const Project = ({
  sectionName,
  items,
  Item
}: ProjectProps) => {
  return (
    <section className='project'>
      {sectionName.display && (
        <SectionTitle value={sectionName.value} />
      )}

      <Separator className='separator' />

      {items.map((data) => (
        <Item
          key={data.id}
          {...data}
        />
      ))}
    </section>
  );
};
