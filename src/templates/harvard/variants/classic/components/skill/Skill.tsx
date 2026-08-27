import './Skill.css';

import {
  Separator
} from '@/shared/components';

import {
  SectionTitle
} from '@/templates/harvard/components';

import type {
  SkillProps
} from './skill.schema'

export const Skill = ({
  sectionName,
  collection,
  SectionItem,
}: SkillProps) => {

  return (
    <section className='skill'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {collection.items.map((data) => (
        <SectionItem
          key={data.id}
          {...data}
        />
      ))}
    </section>
  )
}
