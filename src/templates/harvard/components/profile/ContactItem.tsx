
import type {
  IconSmallType,
} from '../../icons'

import {
  IconSmall
} from '../../icons'

type ContactItemProps = {
  icon: IconSmallType;
  value: string;
};

export const ContactItem = ({
  icon,
  value,
}: ContactItemProps) => {

  const Icon = IconSmall[icon]

  return (
    <div className="contact-item">
      <Icon className='contact-item__icon' />

      <span className="contact-item__value">
        {value}
      </span>
    </div>
  );
}