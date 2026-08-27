import './Project.css';

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
  collection,
  SectionItem,
}: ProjectProps) => {
  return (
    <section className='project'>
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
