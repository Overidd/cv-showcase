import type { Meta, StoryObj } from '@storybook/react-vite';
import { withHarvardTheme } from '../..';
import { summaryDefinition } from './summary.definition';
import type { SummaryProps } from './summary.schema';

const meta = {
  title: 'Templates/Harvard/Classic/Sumary',
  component: summaryDefinition.component,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  decorators: [withHarvardTheme],

} satisfies Meta<typeof summaryDefinition.component>;

export default meta;

type Story = StoryObj<typeof meta>;


const baseArgs: SummaryProps = {
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

export const LongContent: Story = {
  name: 'Contenido exntenso',

  args: {
    ...baseArgs
  }
};