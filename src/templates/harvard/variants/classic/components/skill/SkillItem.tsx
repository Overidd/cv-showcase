import {
  Name,
  ProgressBar
} from '@/templates/harvard/components'

import type {
  SkillItemProps
} from './skill.schema'

export const SkillItem = ({
  name,
  group,
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
      {group.display &&
        <ul className={`skill__collection skill__collection--${group.variant}`}>

          {group.variant === 'progress-bar' &&
            group.values.map(({ range, label, value }) => (
              <li className='skill__collection-item paragraph'>
                <ProgressBar
                  range={range}
                  label={label}
                  value={value}
                />
              </li>
            ))
          }

          {group.variant !== 'progress-bar' &&
            group.values.map(({ value }) => (
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