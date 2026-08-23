import type { Meta, StoryObj } from '@storybook/react-vite';
import { WorkExperience } from './WorkExperience';
import type { WorkExperienceProps } from './workExperience.schema';
import { withHarvardTheme } from '../../HarvardClassic.decorator';

const meta = {
  title: 'Templates/Harvard/Classic/WorkExperience',
  component: WorkExperience,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  decorators: [withHarvardTheme],

} satisfies Meta<typeof WorkExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

const workExperienceData: WorkExperienceProps = {
  sectionName: {
    display: true,
    value: 'Experiencia Laboral'
  },

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

  achievements: {
    display: true,
    marker: 'circle',
    data: [
      {
        id: 'ach-1',
        value: 'Aumenté el rendimiento de la aplicación en un 40% mediante la optimización de renders.'
      },
      {
        id: 'ach-2',
        value: 'Lideré la migración de 15 módulos de JavaScript a TypeScript.'
      },
      {
        id: 'ach-3',
        value: 'Implementé un sistema de diseño reutilizado en 6 proyectos internos.'
      },
      {
        id: 'ach-4',
        value: 'Reduje en un 30% el tiempo de carga inicial de la plataforma.'
      }
    ]
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
};

export const LongContent: Story = {
  name: 'Contenido completo',
  args: workExperienceData
};