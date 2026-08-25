import './Language.css';

import {
  SectionTitle
} from '@/templates/harvard/components'

import {
  Separator
} from '@/shared/components'

import type {
  LanguageProps
} from './language.schema'

export const Language = ({
  sectionName,
  items,
  Item
}: LanguageProps) => {
  return (
    <section className='language'>
      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      <ul className='language__list'>
        {items.map((data) => (
          <Item
            key={data.id}
            {...data}
          />
        ))}
      </ul>
    </section>
  )
}
