import {
  ParagraphBody,
  Description,
  Title,
  Period,
  Location,
  Name,
  Link,
} from '@/templates/harvard/components';

import type {
  WorkExperienceItemProps
} from './';

export const WorkExperienceItem = ({
  paragraph,
  companyName,
  description,
  link,
  location,
  period,
  title,
}: WorkExperienceItemProps) => {

  return (
    <article className="work-experience__item">

      <div className="work-experience__item-header">

        <div className="work-experience__item-company-info">

          {companyName.display && (
            <Name
              value={companyName.value}
            />
          )}

          {link.display && (
            <>
              <span className="experience__separator">
                —
              </span>

              <Link
                href={link.href}
                value={link.value}
              />
            </>
          )}

        </div>

        {location.display && (
          <Location
            value={location.value}
          />
        )}

      </div>

      <div className="work-experience__item-subheader">

        {title.display && (
          <Title
            value={title.value}
          />
        )}

        {period.display && (
          <Period
            value={period.value}
          />
        )}

      </div>

      {description.display && (
        <Description
          value={description.value}
        />
      )}

      {paragraph.display && (
        <ParagraphBody
          marker={paragraph.marker}
          value={paragraph.value}
        />
      )}

    </article>
  );
};