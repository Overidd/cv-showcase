import {
  Name,
  ProgressBar
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

      {/* "list" | "vignette" | "progress-bar" */}
      {collection.display &&
        <ul className={`skill__collection skill__collection--${collection.variant}`}>

          {collection.variant === 'progress-bar' &&
            collection.values.map(({ range, label, value }) => (
              <li className='skill__collection-item paragraph'>
                <ProgressBar
                  range={range}
                  label={label}
                  value={value}
                />
              </li>
            ))
          }

          {collection.variant !== 'progress-bar' &&
            collection.values.map(({ value }) => (
              <li className='skill__collection-item paragraph'>
                {value}
              </li>
            ))
          }
        </ul>
      }
    </article>
  )
}