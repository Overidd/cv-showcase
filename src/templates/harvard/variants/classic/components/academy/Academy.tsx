import './Academy.css';

import {
  ParagraphBody,
  Location,
  Name,
  Period,
  SectionTitle,
  Title
} from '@/templates/harvard/components';

import {
  Separator
} from '@/shared/components';

import type {
  AcademyProps
} from './academy.schema'

export const Academy = ({
  sectionName,
  items
}: AcademyProps) => {

  return (
    <section className='academy'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {
        items.map(({
          id,
          location,
          name,
          period,
          title,
          paragraph
        }) => (
          <article
            className='academy__item'
            key={id}
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
        ))
      }
    </section>
  )
}