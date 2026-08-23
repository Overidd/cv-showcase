import './styles.css';

import {
  themeConfig
} from '@/core/config'

import {
  HarvardClassicTheme
} from './HarvardClassicTheme'

import { profileDefinition } from '../components/profile'
import { summaryDefinition } from '../components/summary';
import { workExperienceDefinition } from '../components/workExperience';

export const HarvardClassic = () => {

  const baseArgsProfile = {
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

  const baseArgsSummary = {
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

  const baseArgsWorkExperienceData = {
    sectionName: {
      display: true,
      value: 'Experiencia Laboral'
    },

    history: [
      {
        id: '1',
        title: {
          display: true,
          value: 'Desarrollador Frontend Senior'
        },

        companyName: {
          display: true,
          value: 'Tech Solutions S.A.'
        },

        description: {
          display: true,
          value: 'Responsable del desarrollo y mantenimiento de aplicaciones web utilizando React y TypeScript, liderando un equipo de 4 desarrolladores.'
        },

        achievement: {
          display: true,
          marker: 'circle' as const,
          value: 'Aumenté el rendimiento de la aplicación en un 40% mediante la optimización de renders.'
        },

        location: {
          display: true,
          value: 'Lima, Perú'
        },

        period: {
          display: true,
          value: '2021 - 2025'
        },

        link: {
          display: true,
          value: 'https://techsolutions.com',
          href: 'https://techsolutions.com',
        }
      },

      {
        id: '2',
        title: {
          display: true,
          value: 'Desarrollador Full Stack'
        },

        companyName: {
          display: true,
          value: 'Innovatech Perú'
        },

        description: {
          display: true,
          value: 'Diseñé y desarrollé aplicaciones empresariales utilizando React, Node.js y PostgreSQL, participando en todo el ciclo de desarrollo del producto.'
        },

        achievement: {
          display: true,
          marker: 'circle' as const,
          value: 'Reduje el tiempo de carga de las aplicaciones en un 35% mediante mejoras en arquitectura, consultas y manejo del estado.'
        },

        location: {
          display: true,
          value: 'Arequipa, Perú'
        },

        period: {
          display: true,
          value: '2019 - 2021'
        },

        link: {
          display: true,
          value: 'https://innovatech.pe',
          href: 'https://innovatech.pe',
        }
      },

      {
        id: '3',
        title: {
          display: true,
          value: 'Desarrollador Web Junior'
        },

        companyName: {
          display: true,
          value: 'Digital Creations'
        },

        description: {
          display: true,
          value: 'Participé en el desarrollo de sitios web y plataformas internas, implementando interfaces responsivas y componentes reutilizables con JavaScript y React.'
        },

        achievement: {
          display: true,
          marker: 'circle' as const,
          value: 'Implementé una biblioteca de componentes reutilizables que redujo significativamente el tiempo de desarrollo de nuevas interfaces.'
        },

        location: {
          display: true,
          value: 'Cusco, Perú'
        },

        period: {
          display: true,
          value: '2017 - 2019'
        },

        link: {
          display: true,
          value: 'https://digitalcreations.pe',
          href: 'https://digitalcreations.pe',
        }
      }
    ]
  };

  return (
    <div
      style={themeConfig(HarvardClassicTheme)}
      className='cv-var cv-harvard'
    >
      <profileDefinition.component
        {...baseArgsProfile}
      />

      <summaryDefinition.component
        {...baseArgsSummary}
      />

      <workExperienceDefinition.component
        {...baseArgsWorkExperienceData}
      />
    </div>
  )
}