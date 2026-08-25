import type { Meta, StoryObj } from '@storybook/react-vite';
import { Project } from './Project';
import type { ProjectProps } from './project.schema';
import { withHarvardTheme } from '../../template/HarvardClassic.decorator';
import { ProyectItem } from './ProjectItem';

const meta = {
  title: 'Templates/Harvard/Classic/Proyect',
  component: Project,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  excludeStories: ['baseArgsProjectData'],

  decorators: [withHarvardTheme],

  argTypes: {
    Item: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Project>;

export default meta;
type Story = StoryObj<typeof meta>;

export const baseArgsProjectData: ProjectProps = {
  sectionName: {
    display: true,
    value: 'Proyectos',
  },

  Item: ProyectItem,

  items: [
    {
      id: '1',
      name: {
        display: true,
        value: 'Nombre del Proyecto',
      },

      link: {
        display: true,
        value: 'github.com/usuario/proyecto',
        href: 'https://github.com',
      },

      location: {
        display: true,
        value: 'Ubicación',
      },

      date: {
        display: true,
        value: '2023 - 2025',
      },

      description: {
        display: true,
        value: 'Breve resumen de tu trabajo',
      },

      paragraph: {
        display: true,
        marker: 'circle',
        value: '¿Cuál fue un resultado exitoso de tu trabajo? (por ejemplo, recaudé $3,000 para la caridad)',
      },
    },

    {
      id: '2',
      name: {
        display: true,
        value: 'Plataforma E-Commerce Multitienda',
      },

      link: {
        display: true,
        value: 'ecommerce-demo.com',
        href: 'https://ecommerce-demo.com',
      },

      location: {
        display: true,
        value: 'Remoto',
      },

      date: {
        display: true,
        value: '2023 - 2024',
      },

      description: {
        display: true,
        value: 'Arquitectura y desarrollo de solución de comercio electrónico de alto rendimiento.',
      },

      paragraph: {
        display: true,
        marker: 'circle',
        value: 'Optimicé los tiempos de respuesta del checkout en un 45% y aumenté la tasa de conversión en un 20%.',
      },
    },
  ],
};

export const LongContent: Story = {
  name: 'Contenido completo',
  args: baseArgsProjectData,
};
