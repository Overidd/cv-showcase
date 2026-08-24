import type {
  Meta,
  StoryObj
} from '@storybook/react-vite';

import {
  Academy
} from './Academy';

import {
  withHarvardTheme
} from '../../template';

import type {
  AcademyProps
} from './academy.schema';
import { AcademyItem } from './AcademyItem';

const meta = {
  title: 'Templates/Harvard/Classic/Academy',
  component: Academy,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  decorators: [withHarvardTheme],

  excludeStories: ['academyData'],

  argTypes: {
    Item: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

} satisfies Meta<typeof Academy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const academyData: AcademyProps = {
  sectionName: {
    display: true,
    value: 'Educación',
  },

  Item: AcademyItem,

  items: [
    {
      id: '1',
      title: {
        display: true,
        value: 'Ingeniería de Software',
      },
      name: {
        display: true,
        value: 'Universidad Nacional de Ingeniería',
      },
      location: {
        display: true,
        value: 'Lima, Perú',
      },
      period: {
        display: true,
        value: '2019 - 2024',
      },
      paragraph: {
        display: true,
        value: 'Hola mundo',
        marker: 'all'
      }
    },
    {
      id: '2',
      title: {
        display: true,
        value: 'Desarrollo de Aplicaciones Web',
      },
      name: {
        display: true,
        value: 'Cibertec',
      },
      location: {
        display: true,
        value: 'Lima, Perú',
      },
      period: {
        display: true,
        value: '2017 - 2019',
      },
      paragraph: {
        display: true,
        value: 'Hola mundo',
        marker: 'all'
      }
    },
    {
      id: '3',
      title: {
        display: true,
        value: 'Educación Secundaria',
      },
      name: {
        display: true,
        value: 'I.E. José María Arguedas',
      },
      location: {
        display: true,
        value: 'Cusco, Perú',
      },
      period: {
        display: true,
        value: '2012 - 2016',
      },
      paragraph: {
        display: true,
        value: 'Hola mundo',
        marker: 'all'
      }
    },
  ],
};

export const LongContent: Story = {
  name: 'Contenido completo',
  args: academyData
};