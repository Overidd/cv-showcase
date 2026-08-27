import './Academy.css';

import {
  SectionTitle,
} from '@/templates/harvard/components';

import {
  Separator
} from '@/shared/components';

import type {
  AcademyProps
} from './academy.schema'

export const Academy = ({
  sectionName,
  collection,
  SectionItem,
}: AcademyProps) => {

  return (
    <section className='academy'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {
        collection.items.map((data) => (
          <SectionItem
            key={data.id}
            {...data}
          />
        ))
      }
    </section>
  )
}