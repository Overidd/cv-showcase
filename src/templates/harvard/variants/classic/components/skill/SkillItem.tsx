import {
  Name
} from '@/templates/harvard/components'

import type {
  SkillItemProps
} from './skill.schema'

export const SkillItem = ({
  name,
  collection,
}: SkillItemProps) => {

  return (
    <article className='skill__item'>
      {name.display &&
        <Name
          value={name.value}
          className='paragraph'
        />
      }

      {/* "list" | "vignette" */}
      {collection.display &&
        <ul className={`skill__collection skill__collection--${collection.variant}`}>

          {collection.values.map((value) => (
            <li className='skill__collection-item paragraph'>
              {value}
            </li>
          ))}

        </ul>
      }
    </article>
  )
}