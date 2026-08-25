import type { Meta, StoryObj } from '@storybook/react-vite';
import { Achievement } from './Achievement';
import type { AchievementProps } from './achievement.schema';
import { withHarvardTheme } from '../../template/HarvardClassic.decorator';
import { AchievementItem } from './AchievementItem';

const meta = {
  title: 'Templates/Harvard/Classic/Achievement',
  component: Achievement,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsAchievementData'],

  decorators: [withHarvardTheme],

  argTypes: {
    Item: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Achievement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const baseArgsAchievementData: AchievementProps = {
  sectionName: {
    display: true,
    value: 'LOGROS CLAVE',
  },

  group: {
    variant: 'card',
  },

  Item: AchievementItem,

  items: [
    {
      id: '1',
      name: {
        display: true,
        value: 'Tu logro',
      },
      description: {
        display: true,
        value: 'Describe lo que hiciste y el impacto que tuvo.',
      },
    },
    {
      id: '2',
      name: {
        display: true,
        value: 'Tu logro',
      },
      description: {
        display: true,
        value: 'Describe lo que hiciste y el impacto que tuvo.',
      },
    },
    {
      id: '3',
      name: {
        display: true,
        value: 'Tu logro',
      },
      description: {
        display: true,
        value: 'Describe lo que hiciste y el impacto que tuvo.',
      },
    },
  ],
};

export const CardVariant: Story = {
  name: 'Variante Card (Cuadrícula)',
  args: {
    ...baseArgsAchievementData,
    group: {
      variant: 'card',
    },
  },
};

export const ListVariant: Story = {
  name: 'Variante Lista',
  args: {
    ...baseArgsAchievementData,
    group: {
      variant: 'list',
    },
  },
};
