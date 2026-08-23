// WorkExperience.tsx
import { Separator } from '@/shared/components';
import './WorkExperience.css';

import type {
  WorkExperienceProps
} from './workExperience.schema';

import {
  Achievement,
  CompanyInfo,
  Description,
  JobTitle,
  Period,
  SectionTitle,
  Location
} from '@/templates/harvard/components';

export const WorkExperience = ({
  sectionName,
  history,
}: WorkExperienceProps) => {

  return (
    <section className='work-experience'>

      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

      <Separator className='separator' />

      {
        history.map(({
          id,
          achievement,
          companyName,
          description,
          link,
          location,
          period,
          title
        }) =>
          <article
            className='work-experience__history'
            key={id}
          >
            <div className='work-experience__header'>
              <CompanyInfo
                companyName={companyName}
                link={link}
              />

              {location.display &&
                <Location value={location.value} />
              }
            </div>

            <div className='work-experience__subheader'>
              {title.display &&
                <JobTitle value={title.value} />
              }

              {period.display &&
                <Period value={period.value} />
              }
            </div>

            {description.display &&
              <Description value={description.value} />
            }

            {achievement.display &&
              <Achievement
                marker={achievement.marker}
                value={achievement.value}
              />
            }
          </article>
        )
      }
    </section>
  )
}