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
    SectionItem: {
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

  SectionItem: SkillItem,
  collection: {

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
            { value: 'React', label: 'Advanced', range: 90, Controller: ({ children }) => <>{children}</> },
            { value: 'TypeScript', label: 'Intermediate', range: 75, Controller: ({ children }) => <>{children}</> },
            { value: 'JavaScript', label: 'Advanced', range: 95, Controller: ({ children }) => <>{children}</> },
            { value: 'Next.js', label: 'Intermediate', range: 80, Controller: ({ children }) => <>{children}</> },
            { value: 'HTML5', label: 'Expert', range: 100, Controller: ({ children }) => <>{children}</> },
            { value: 'CSS3', label: 'Advanced', range: 90, Controller: ({ children }) => <>{children}</> },
            { value: 'Tailwind CSS', label: 'Advanced', range: 85, Controller: ({ children }) => <>{children}</> },
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
            { value: 'Node.js', label: 'Intermediate', range: 70, Controller: ({ children }) => <>{children}</> },
            { value: 'Express.js', label: 'Intermediate', range: 75, Controller: ({ children }) => <>{children}</> },
            { value: 'REST APIs', label: 'Advanced', range: 85, Controller: ({ children }) => <>{children}</> },
            { value: 'Prisma', label: 'Intermediate', range: 65, Controller: ({ children }) => <>{children}</> },
            { value: 'MySQL', label: 'Intermediate', range: 70, Controller: ({ children }) => <>{children}</> },
            { value: 'PostgreSQL', label: 'Intermediate', range: 75, Controller: ({ children }) => <>{children}</> },
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
            { value: 'TypeScript', label: 'Intermediate', range: 75, Controller: ({ children }) => <>{children}</> },
            { value: 'JavaScript', label: 'Advanced', range: 95, Controller: ({ children }) => <>{children}</> },
            { value: 'Python', label: 'Basic', range: 45, Controller: ({ children }) => <>{children}</> },
            { value: 'Java', label: 'Basic', range: 40, Controller: ({ children }) => <>{children}</> },
            { value: 'SQL', label: 'Intermediate', range: 70, Controller: ({ children }) => <>{children}</> },
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
            { value: 'Git', label: 'Advanced', range: 85, Controller: ({ children }) => <>{children}</> },
            { value: 'GitHub', label: 'Advanced', range: 90, Controller: ({ children }) => <>{children}</> },
            { value: 'Docker', label: 'Basic', range: 50, Controller: ({ children }) => <>{children}</> },
            { value: 'VS Code', label: 'Expert', range: 95, Controller: ({ children }) => <>{children}</> },
            { value: 'Storybook', label: 'Intermediate', range: 65, Controller: ({ children }) => <>{children}</> },
            { value: 'Figma', label: 'Intermediate', range: 60, Controller: ({ children }) => <>{children}</> },
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
            { value: 'AWS', label: 'Basic', range: 40, Controller: ({ children }) => <>{children}</> },
            { value: 'Vercel', label: 'Advanced', range: 90, Controller: ({ children }) => <>{children}</> },
            { value: 'Render', label: 'Intermediate', range: 70, Controller: ({ children }) => <>{children}</> },
            { value: 'Firebase', label: 'Intermediate', range: 65, Controller: ({ children }) => <>{children}</> },
            { value: 'Supabase', label: 'Intermediate', range: 60, Controller: ({ children }) => <>{children}</> },
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
            { value: 'Problem Solving', label: 'Expert', range: 95, Controller: ({ children }) => <>{children}</> },
            { value: 'Teamwork', label: 'Advanced', range: 90, Controller: ({ children }) => <>{children}</> },
            { value: 'Communication', label: 'Advanced', range: 85, Controller: ({ children }) => <>{children}</> },
            { value: 'Adaptability', label: 'Advanced', range: 90, Controller: ({ children }) => <>{children}</> },
            { value: 'Critical Thinking', label: 'Advanced', range: 85, Controller: ({ children }) => <>{children}</> },
          ],
        },
      },
    ],
  }
};

export const LongContent: Story = {
  name: 'Contenido completo',
  args: baseArgsSkill,
};