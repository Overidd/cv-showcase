import { ContactItem } from './ContactItem';

interface ContactInfoProps {
  variant: 'list' | 'icon';

  data: {
    key: string;
    value: string;
    display: boolean
  }[];
}

export const ContactInfo = ({
  variant,
  data,
}: ContactInfoProps) => {

  if (variant === 'list') {
    return (
      <ul className={`contact-info contact-info--${variant}`}>
        {
          data.map(({ display, value }, index) => (
            display && (
              <li
                className={`${index === 0 ? 'li-style--desactive' : ''} contact-item`}
                key={`${index}-${value}`}
              >
                <span className='contact-item__value'>
                  {value}
                </span>
              </li>
            )
          ))
        }
      </ul>
    );
  };

  const ICON_MAP = {
    address: 'location',
    location: 'location',
    email: 'email',
    phone: 'phone',
    linkedin: 'linkedin',
    birthdate: 'calendar',
    nationality: 'flag',
    additionalLink: 'link',
  } as const;

  type ContactIconKey = keyof typeof ICON_MAP;

  return (
    <div className={`contact-info contact-info--${variant}`}>
      {data.map(({ key, display, value }) => {
        const iconKey = key as ContactIconKey;
        const icon = ICON_MAP[iconKey];

        if (!display || !icon) return null;

        return (
          <ContactItem
            key={key}
            icon={icon}
            value={value}
          />
        );
      })}
    </div>
  );
};