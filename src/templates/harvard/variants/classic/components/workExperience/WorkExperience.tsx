// WorkExperience.tsx
import './WorkExperience.css';

import type {
  WorkExperienceProps
} from './workExperience.schema';

import {
  Achievements,
  CompanyInfo,
  Description,
  JobTitle,
  Period,
  SectionTitle,
  Location
} from '@/templates/harvard/components';

export const WorkExperience = ({
  sectionName,
  title,
  companyName,
  description,
  achievements,
  location,
  period,
  link,
}: WorkExperienceProps) => {

  return (
    <section className='work-experience'>
      {sectionName.display &&
        <SectionTitle value={sectionName.value} />
      }

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

      {achievements.display && achievements.data && achievements.data.length > 0 &&
        <Achievements
          marker={achievements.marker}
          data={achievements.data}
        />
      }
    </section>
  )
}