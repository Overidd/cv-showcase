import {
  Location,
  ParagraphBody,
  Period,
  Title,
  Name,
} from '@/templates/harvard/components'

import type {
  AcademyItemProps
} from './academy.schema'

export const AcademyItem = ({
  location,
  name,
  paragraph,
  period,
  title
}: AcademyItemProps) => {

  return (
    <article
      className='academy__item'
    >

      <div className='academy__item-header'>
        {name.display &&
          <Name
            value={name.value}
          />
        }

        {location.display &&
          <Location value={location.value} />
        }
      </div>

      <div className='academy__item-subheader'>
        {title.display &&
          <Title value={title.value} />
        }

        {period.display &&
          <Period value={period.value} />
        }
      </div>

      {paragraph.display &&
        <ParagraphBody
          marker={paragraph.marker}
          value={paragraph.value}
        />
      }
    </article>
  )
}
