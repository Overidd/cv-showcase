import type { Meta, StoryObj } from '@storybook/react-vite';
import { Certification } from './Certification';
import type { CertificationProps } from './certification.schema';
import { withHarvardTheme } from '../../template/HarvardClassic.decorator';
import { CertificationItem } from './CertificationItem';

const meta = {
  title: 'Templates/Harvard/Classic/Certification',
  component: Certification,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsCertificationData'],

  decorators: [withHarvardTheme],

  argTypes: {
    Item: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Certification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const baseArgsCertificationData: CertificationProps = {
  sectionName: {
    display: true,
    value: 'Certificaciones',
  },

  Item: CertificationItem,

  items: [
    {
      id: '1',
      name: {
        display: true,
        value: 'Nombre del Certificado',
      },
      description: {
        display: true,
        value: '¿Qué institución emitió el certificado y cuándo?',
      },
    },
    {
      id: '2',
      name: {
        display: true,
        value: 'Nombre del Certificado',
      },
      description: {
        display: true,
        value: '¿Qué institución emitió el certificado y cuándo?',
      },
    },
    {
      id: '3',
      name: {
        display: true,
        value: 'Nombre del Certificado',
      },
      description: {
        display: true,
        value: '¿Qué institución emitió el certificado y cuándo?',
      },
    },
  ],
};

export const Default: Story = {
  name: 'Por defecto',
  args: baseArgsCertificationData,
};
