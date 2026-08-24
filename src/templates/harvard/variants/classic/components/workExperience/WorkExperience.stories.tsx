import type { Meta, StoryObj } from '@storybook/react-vite';
import { WorkExperience } from './WorkExperience';
import type { WorkExperienceProps } from './workExperience.schema';
import { withHarvardTheme } from '../../template/HarvardClassic.decorator';
import { WorkExperienceItem } from './WorkExperienceItem';

const meta = {
  title: 'Templates/Harvard/Classic/WorkExperience',
  component: WorkExperience,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsWorkExperienceData'],

  decorators: [withHarvardTheme],

  argTypes: {
    Item: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

} satisfies Meta<typeof WorkExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const baseArgsWorkExperienceData: WorkExperienceProps = {
  sectionName: {
    display: true,
    value: 'Experiencia Laboral'
  },

  Item: WorkExperienceItem,

  items: [
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

      paragraph: {
        display: true,
        marker: 'circle',
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

      paragraph: {
        display: true,
        marker: 'circle',
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

      paragraph: {
        display: true,
        marker: 'circle',
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

export const LongContent: Story = {
  name: 'Contenido completo',
  args: baseArgsWorkExperienceData
};