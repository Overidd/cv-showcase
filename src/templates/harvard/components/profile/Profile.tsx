import './Profile.css'
import type { ProfileProps } from './profile.config';


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
        <Name
          value={name.value}
          variant={name.variant}
        />
        <p>
          {title.value}
        </p>
      </div>
      <ContactInfo
        data={contact.children}
        variant={contact.variant}
      />
    </header>
  )
}