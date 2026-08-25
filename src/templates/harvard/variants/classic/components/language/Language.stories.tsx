
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Language } from './Language';
import { withHarvardTheme } from '../../template';
import type { LanguageProps } from './language.schema';
import { LanguageItem } from './LanguageItem';

const meta = {
  title: 'Templates/Harvard/Classic/Language',

  component: Language,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsLenguage'],

  decorators: [withHarvardTheme],

  argTypes: {
    Item: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Language>;

export default meta;
type Story = StoryObj<typeof meta>;


export const baseArgsLenguage: LanguageProps = {
  Item: LanguageItem,

  sectionName: {
    display: true,
    value: 'Idioma'
  },

  items: [
    {
      id: '1',
      language: {
        display: true,
        variant: 'progress-bar',
        value: {
          value: 'Español',
          label: 'Nativo',
          range: 100,
          Controller: ({ children }) => <>{children}</>
        }
      }
    },
    {
      id: '2',
      language: {
        display: true,
        variant: 'progress-bar',
        value: {
          value: 'Inglés',
          label: 'Avanzado',
          range: 85,
          Controller: ({ children }) => <>{children}</>
        }
      }
    },
    {
      id: '3',
      language: {
        display: true,
        variant: 'progress-bar',
        value: {
          value: 'Portugués',
          label: 'Intermedio',
          range: 65,
          Controller: ({ children }) => <>{children}</>
        }
      }
    }
  ]
}

export const LongContent: Story = {
  name: 'Contenido completo',
  args: baseArgsLenguage,
};