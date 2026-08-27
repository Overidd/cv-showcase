import type { Meta, StoryObj } from '@storybook/react-vite';
import { Personalized } from './Personalized';
import type { PersonalizedProps } from './personalized.schema';
import { withHarvardTheme } from '../../template/HarvardClassic.decorator';
import { PersonalizedItem } from './PersonalizedItem';

const meta = {
  title: 'Templates/Harvard/Classic/Personalized',
  component: Personalized,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsPersonalizedData'],

  decorators: [withHarvardTheme],

  argTypes: {
    SectionItem: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Personalized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const baseArgsPersonalizedData: PersonalizedProps = {
  sectionName: {
    display: true,
    value: 'Personalizado',
  },

  collection: {
    variant: 'card',

    items: [
      {
        id: '1',
        name: {
          display: true,
          value: 'Título Personalizado',
        },
        date: {
          display: true,
          value: 'Período de fechas',
        },
        description: {
          display: true,
          value: 'Descripción Personalizada',
        },
      },
      {
        id: '2',
        name: {
          display: true,
          value: 'Título Personalizado',
        },
        date: {
          display: true,
          value: 'Período de fechas',
        },
        description: {
          display: true,
          value: 'Descripción Personalizada',
        },
      },
      {
        id: '3',
        name: {
          display: true,
          value: 'Título Personalizado',
        },
        date: {
          display: true,
          value: 'Período de fechas',
        },
        description: {
          display: true,
          value: 'Descripción Personalizada',
        },
      },
    ],
  },

  SectionItem: PersonalizedItem,

};

export const CardVariant: Story = {
  name: 'Variante Card (Cuadrícula)',
  args: {
    ...baseArgsPersonalizedData,
    collection: {
      ...baseArgsPersonalizedData.collection,
      variant: 'card',
    },
  },
};

export const ListVariant: Story = {
  name: 'Variante Lista',
  args: {
    ...baseArgsPersonalizedData,
    collection: {
      ...baseArgsPersonalizedData.collection,
      variant: 'list',
    },
  },
};

