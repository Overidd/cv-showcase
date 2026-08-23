import type React from 'react';

interface CompanyInfoProps {
  companyName: {
    display: boolean;
    value: React.ReactNode;
  };
  link: {
    display: boolean;
    value: React.ReactNode;
    href: string;
  };
}

export const CompanyInfo = ({
  companyName,
  link,
}: CompanyInfoProps) => {
  return (
    <div className='company-line'>
      {companyName.display &&
        <span className='company-name'>
          {companyName.value}
        </span>
      }

      {link.display && link.value &&
        <>
          <span className='experience__separator'>—</span>
          <a
            className='work-experience__link'
            href={link.href}
            target='_blank'
            rel='noreferrer'
          >
            {link.value}
          </a>
        </>
      }
    </div>
  )
}