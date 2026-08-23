import {
  themeConfig
} from '@/core/config'

import {
  HarvardClassicTheme
} from './HarvardClassicTheme'

import { Profile, profileDefinition, type ProfileProps } from './components/profile'
import { Summary, summaryDefinition, type SummaryProps } from './components/summary';

export const HarvardClassic = () => {

  const baseArgsProfile: ProfileProps = {
    name: {
      value: 'Pepe Elías García Fernández',
      variant: profileDefinition.schema.name.variant.value,
      display: profileDefinition.schema.name.display
    },

    title: {
      value: 'Senior Frontend Software Engineer',
      display: profileDefinition.schema.title.display
    },

    contact: {
      variant: profileDefinition.schema.contact.variant?.value,

      display: profileDefinition.schema.contact.display,

      children: profileDefinition.schema.contact.children,
    },

    photo: {
      value: profileDefinition.schema.photo.value,
      variant: profileDefinition.schema.photo.variant.value,
      display: profileDefinition.schema.photo.display,
    },
  };

  const baseArgsSummary: SummaryProps = {
    contents: {
      ...summaryDefinition.schema.contents,
      data: [
        {
          id: 'asdasd',
          value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum amet magnam vero. Porro dolorum numquam deleniti dolor iure. Voluptatem odit consequatur incidunt omnis itaque, reiciendis aliquam. Quasi impedit eos beatae!'
        },
        {
          id: 'asda123',
          value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quo, placeat adipisci perferendis incidunt saepe possimus inventore molestias ab assumenda magni atque hic at eveniet eos corrupti architecto quidem provident?'
        }
      ]
    }
  }
  return (
    <div
      style={themeConfig(HarvardClassicTheme)}
      className='cv-var cv-harvard'
    >
      <Profile
        {...baseArgsProfile}
      />

      <Summary
        {...baseArgsSummary}
      />

    </div>
  )
}