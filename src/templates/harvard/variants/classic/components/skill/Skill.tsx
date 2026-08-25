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
  items,
  Item
}: SkillProps) => {

  return (
    <section className='skill'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {items.map((data) => (
        <Item
          key={data.id}
          {...data}
        />
      ))}
    </section>
  )
}
