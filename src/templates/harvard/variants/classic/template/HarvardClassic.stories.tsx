import type { Meta, StoryObj } from '@storybook/react-vite';

import { HarvardClassic } from './HarvardClassicCopy';

const meta = {
  title: 'Templates/Harvard/Classic/Template',
  component: HarvardClassic,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HarvardClassic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {};