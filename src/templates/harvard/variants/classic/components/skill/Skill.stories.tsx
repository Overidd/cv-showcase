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

      group: {
        display: true,
        variant: 'vignette',
        values: [
          { value: 'React', label: 'Advanced', range: 90 },
          { value: 'TypeScript', label: 'Intermediate', range: 75 },
          { value: 'JavaScript', label: 'Advanced', range: 95 },
          { value: 'Next.js', label: 'Intermediate', range: 80 },
          { value: 'HTML5', label: 'Expert', range: 100 },
          { value: 'CSS3', label: 'Advanced', range: 90 },
          { value: 'Tailwind CSS', label: 'Advanced', range: 85 },
        ],
      },
    },

    {
      id: '2',
      name: {
        value: 'Backend Development',
        display: true,
      },

      group: {
        display: true,
        variant: 'progress-bar',
        values: [
          { value: 'Node.js', label: 'Intermediate', range: 70 },
          { value: 'Express.js', label: 'Intermediate', range: 75 },
          { value: 'REST APIs', label: 'Advanced', range: 85 },
          { value: 'Prisma', label: 'Intermediate', range: 65 },
          { value: 'MySQL', label: 'Intermediate', range: 70 },
          { value: 'PostgreSQL', label: 'Intermediate', range: 75 },
        ],
      },
    },

    {
      id: '3',
      name: {
        value: 'Programming Languages',
        display: true,
      },

      group: {
        display: true,
        variant: 'list',
        values: [
          { value: 'TypeScript', label: 'Intermediate', range: 75 },
          { value: 'JavaScript', label: 'Advanced', range: 95 },
          { value: 'Python', label: 'Basic', range: 45 },
          { value: 'Java', label: 'Basic', range: 40 },
          { value: 'SQL', label: 'Intermediate', range: 70 },
        ],
      },
    },

    {
      id: '4',
      name: {
        value: 'Tools & Technologies',
        display: true,
      },

      group: {
        display: true,
        variant: 'list',
        values: [
          { value: 'Git', label: 'Advanced', range: 85 },
          { value: 'GitHub', label: 'Advanced', range: 90 },
          { value: 'Docker', label: 'Basic', range: 50 },
          { value: 'VS Code', label: 'Expert', range: 95 },
          { value: 'Storybook', label: 'Intermediate', range: 65 },
          { value: 'Figma', label: 'Intermediate', range: 60 },
        ],
      },
    },

    {
      id: '5',
      name: {
        value: 'Cloud & Deployment',
        display: true,
      },

      group: {
        display: true,
        variant: 'list',
        values: [
          { value: 'AWS', label: 'Basic', range: 40 },
          { value: 'Vercel', label: 'Advanced', range: 90 },
          { value: 'Render', label: 'Intermediate', range: 70 },
          { value: 'Firebase', label: 'Intermediate', range: 65 },
          { value: 'Supabase', label: 'Intermediate', range: 60 },
        ],
      },
    },

    {
      id: '6',
      name: {
        value: 'Soft Skills',
        display: true,
      },

      group: {
        display: true,
        variant: 'list',
        values: [
          { value: 'Problem Solving', label: 'Expert', range: 95 },
          { value: 'Teamwork', label: 'Advanced', range: 90 },
          { value: 'Communication', label: 'Advanced', range: 85 },
          { value: 'Adaptability', label: 'Advanced', range: 90 },
          { value: 'Critical Thinking', label: 'Advanced', range: 85 },
        ],
      },
    },
  ],
};

export const LongContent: Story = {
  name: 'Contenido completo',
  args: baseArgsSkill,
};