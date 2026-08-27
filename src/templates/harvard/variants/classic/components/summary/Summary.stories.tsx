import type { Meta, StoryObj } from '@storybook/react-vite';
import { withHarvardTheme } from '../..';
import { summaryDefinition } from './summary.definition';
import type { SummaryProps } from './summary.schema';
import { SummaryItem } from './SummaryItem';

const meta = {
  title: 'Templates/Harvard/Classic/Sumary',
  component: summaryDefinition.component,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsSummary'],

  decorators: [withHarvardTheme],

  argTypes: {
    SectionItem: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof summaryDefinition.component>;

export default meta;

type Story = StoryObj<typeof meta>;


export const baseArgsSummary: SummaryProps = {
  SectionItem: SummaryItem,
  collection: {
    items: [
      {
        id: 'asdasd',
        summary: {
          value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum amet magnam vero. Porro dolorum numquam deleniti dolor iure. Voluptatem odit consequatur incidunt omnis itaque, reiciendis aliquam. Quasi impedit eos beatae!',
          display: true,
        }

      },
      {
        id: '2',
        summary: {
          value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quo, placeat adipisci perferendis incidunt saepe possimus inventore molestias ab assumenda magni atque hic at eveniet eos corrupti architecto quidem provident?',
          display: true
        }
      }
    ]
  }
}

export const LongContent: Story = {
  name: 'Contenido exntenso',

  args: baseArgsSummary
};