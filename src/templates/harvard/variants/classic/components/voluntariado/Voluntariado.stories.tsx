import type { Meta, StoryObj } from '@storybook/react-vite';
import { Voluntariado } from './Voluntariado';
import type { VoluntariadoProps } from './voluntariado.schema';
import { withHarvardTheme } from '../../template/HarvardClassic.decorator';
import { VoluntariadoItem } from './VoluntariadoItem';

const meta = {
  title: 'Templates/Harvard/Classic/Voluntariado',
  component: Voluntariado,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsVoluntariadoData'],

  decorators: [withHarvardTheme],

  argTypes: {
    SectionItem: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Voluntariado>;

export default meta;
type Story = StoryObj<typeof meta>;

export const baseArgsVoluntariadoData: VoluntariadoProps = {
  sectionName: {
    display: true,
    value: 'Voluntariado',
  },

  SectionItem: VoluntariadoItem,
  collection: {
    items: [
      {
        id: '1',
        name: {
          display: true,
          value: 'Nombre de la Organización',
        },
        title: {
          display: true,
          value: 'Título',
        },
        date: {
          display: true,
          value: 'Período de fechas',
        },
        description: {
          display: true,
          value: 'Describe la organización o el proyecto en el que trabajaste.',
        },
      },
      {
        id: '2',
        name: {
          display: true,
          value: 'Cruz Roja Internacional',
        },
        title: {
          display: true,
          value: 'Coordinador de Voluntarios',
        },
        date: {
          display: true,
          value: '2022 - 2023',
        },
        description: {
          display: true,
          value: 'Lideré iniciativas de apoyo comunitario y gestión logística para campañas de salud.',
        },
      },
    ],
  }
};

export const Default: Story = {
  name: 'Por defecto',
  args: baseArgsVoluntariadoData,
};
