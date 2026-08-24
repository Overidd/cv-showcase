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
  items,
  Item
}: AcademyProps) => {

  return (
    <section className='academy'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {
        items.map((data) => (
          <Item
            key={data.id}
            {...data}
          />
        ))
      }
    </section>
  )
}