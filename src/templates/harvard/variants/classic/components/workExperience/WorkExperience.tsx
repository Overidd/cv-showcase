import './WorkExperience.css';

import {
  Separator
} from '@/shared/components';

import type {
  WorkExperienceProps
} from './workExperience.schema';

import {
  SectionTitle,
} from '@/templates/harvard/components';

export const WorkExperience = ({
  sectionName,
  collection,
  SectionItem,
}: WorkExperienceProps) => {

  return (
    <section className='work-experience'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {collection.items.map((data) =>
        <SectionItem
          key={data.id}
          {...data}
        />
      )}
    </section>
  )
}