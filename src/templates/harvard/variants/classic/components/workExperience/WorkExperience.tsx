// WorkExperience.tsx
import { Separator } from '@/shared/components';
import './WorkExperience.css';

import type {
  WorkExperienceProps
} from './workExperience.schema';

import {
  ParagraphBody,
  Description,
  Title,
  Period,
  SectionTitle,
  Location,
  Name,
  Link
} from '@/templates/harvard/components';

export const WorkExperience = ({
  sectionName,
  items,
}: WorkExperienceProps) => {

  return (
    <section className='work-experience'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {
        items.map(({
          id,
          paragraph,
          companyName,
          description,
          link,
          location,
          period,
          title
        }) =>
          <article
            className='work-experience__item'
            key={id}
          >
            <div className='work-experience__item-header'>
              <div className='work-experience__item-company-info'>
                {companyName.display &&
                  <Name
                    value={companyName.value}
                  />
                }
                {link.display &&
                  <>
                    <span className='experience__separator'>—</span>
                    <Link
                      href={link.href}
                      value={link.value}
                    />
                  </>
                }
              </div>

              {location.display &&
                <Location value={location.value} />
              }
            </div>

            <div className='work-experience__item-subheader'>
              {title.display &&
                <Title value={title.value} />
              }

              {period.display &&
                <Period value={period.value} />
              }
            </div>

            {description.display &&
              <Description value={description.value} />
            }

            {paragraph.display &&
              <ParagraphBody
                marker={paragraph.marker}
                value={paragraph.value}
              />
            }
          </article>
        )
      }
    </section>
  )
}