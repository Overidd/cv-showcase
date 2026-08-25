import type {
  InferProjectItemSchema,
  InferProjectSchema,
  ProjectSchema
} from '@/core/schema';

export const projectSchema = {
  sectionName: {
    display: true,
    isChangeDisplay: false,
    value: 'Proyectos'
  },

  item: {
    name: {
      display: true,
      isChangeDisplay: true,
    },

    link: {
      display: true,
      isChangeDisplay: true,
    },

    location: {
      display: true,
      isChangeDisplay: true,
    },

    date: {
      display: true,
      isChangeDisplay: true,
    },

    description: {
      display: true,
      isChangeDisplay: true,
    },

    paragraph: {
      display: true,
      isChangeDisplay: true,
      marker: 'circle',
    }
  }
} satisfies ProjectSchema;

export type ProjectProps = InferProjectSchema<typeof projectSchema>;

export type ProjectItemProps = InferProjectItemSchema<typeof projectSchema>;
