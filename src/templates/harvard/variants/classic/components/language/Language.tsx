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
  collection,
  SectionItem,
}: LanguageProps) => {

  return (
    <section className='language'>
      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      <ul className='language__list'>
        {collection.items.map((data) => (
          <SectionItem
            key={data.id}
            {...data}
          />
        ))}
      </ul>
    </section>
  )
}
