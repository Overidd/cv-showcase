import './Profile.css'

import type {
  ProfileProps
} from './profile.definition';

import {
  Photo,
  ContactInfo,
  Name,
} from '.';

export const Profile = ({
  contact,
  name,
  photo,
  title
}: ProfileProps) => {
  // name.
  return (
    <header className='profile'>
      {photo.display &&
        <Photo
          url={photo.value}
          variant={photo.variant}
          alt={'Foto de perfil'}
        />
      }
      <div className='profile-header__identity'>
        {name.display &&
          <Name
            value={name.value}
            variant={name.variant}
          />
        }

        {title.display &&
          <p>
            {title.value}
          </p>
        }
      </div>

      {contact.display &&
        <ContactInfo
          data={contact.children}
          variant={contact.variant}
        />
      }
    </header>
  )
}