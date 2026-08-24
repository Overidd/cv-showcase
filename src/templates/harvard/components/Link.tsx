// import type React from 'react';

// interface CompanyInfoProps {
//   companyName: {
//     display: boolean;
//     value: React.ReactNode;
//   };
//   link: {
//     display: boolean;
//     value: React.ReactNode;
//     href: string;
//   };
// }

// export const CompanyInfo = ({
//   companyName,
//   link,
// }: CompanyInfoProps) => {
//   return (
//     <div className='company-info'>
//       {companyName.display &&
//         <span className='company-name'>
//           {companyName.value}
//         </span>
//       }

//       {link.display &&
//         <>
//           <span className='experience__separator'>—</span>
//           <a
//             className='experience__link'
//             href={link.href}
//             target='_blank'
//             rel='noreferrer'
//           >
//             {link.value}
//           </a>
//         </>
//       }
//     </div>
//   )
// }

import type React from 'react';

interface CompanyProps {
  value: React.ReactNode;
  href: string;
}

export const Link = ({
  value,
  href,
}: CompanyProps) => {
  // if (!display) return null;

  return (
    <a
      className='link'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {value}
    </a>
  );
};