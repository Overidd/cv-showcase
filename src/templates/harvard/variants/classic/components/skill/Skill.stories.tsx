import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skill } from './Skill';
import { withHarvardTheme } from '../../template';
import type { SkillProps } from './skill.schema';
import { SkillItem } from './SkillItem';

const meta = {
  title: 'Templates/Harvard/Classic/Skill',

  component: Skill,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsSkill'],

  decorators: [withHarvardTheme],

  argTypes: {
    Item: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const baseArgsSkill: SkillProps = {
  sectionName: {
    value: 'Skills',
    display: true,
  },

  Item: SkillItem,

  items: [
    {
      id: '1',
      name: {
        value: 'Frontend Development',
        display: true,
      },

      collection: {
        display: true,
        variant: 'vignette',
        values: [
          'React',
          'TypeScript',
          'JavaScript',
          'Next.js',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
        ],
      },
    },

    {
      id: '2',
      name: {
        value: 'Backend Development',
        display: true,
      },

      collection: {
        display: true,
        variant: 'list',
        values: [
          'Node.js',
          'Express.js',
          'REST APIs',
          'Prisma',
          'MySQL',
          'PostgreSQL',
        ],
      },
    },

    {
      id: '3',
      name: {
        value: 'Programming Languages',
        display: true,
      },

      collection: {
        display: true,
        variant: 'list',
        values: [
          'TypeScript',
          'JavaScript',
          'Python',
          'Java',
          'SQL',
        ],
      },
    },

    {
      id: '4',
      name: {
        value: 'Tools & Technologies',
        display: true,
      },

      collection: {
        display: true,
        variant: 'list',
        values: [
          'Git',
          'GitHub',
          'Docker',
          'VS Code',
          'Storybook',
          'Figma',
        ],
      },
    },

    {
      id: '5',
      name: {
        value: 'Cloud & Deployment',
        display: true,
      },

      collection: {
        display: true,
        variant: 'list',
        values: [
          'AWS',
          'Vercel',
          'Render',
          'Firebase',
          'Supabase',
        ],
      },
    },

    {
      id: '6',
      name: {
        value: 'Soft Skills',
        display: true,
      },

      collection: {
        display: true,
        variant: 'list',
        values: [
          'Problem Solving',
          'Teamwork',
          'Communication',
          'Adaptability',
          'Critical Thinking',
        ],
      },
    },
  ],
};

export const LongContent: Story = {
  name: 'Contenido completo',
  args: baseArgsSkill,
};