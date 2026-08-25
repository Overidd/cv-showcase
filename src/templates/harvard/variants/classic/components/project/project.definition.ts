import type {
  SectionDefinition
} from '@/core/definition';

import type {
  ProjectSchema
} from '@/core/schema';

import {
  Project,
  ProyectItem,
  projectSchema,
} from '.';

import type {
  ProjectProps
} from '.';

export const projectDefinition = {
  key: 'sectionProyect',

  name: 'Proyectos',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true
  },

  interconnections: [],

  component: Project,

  item: {
    component: ProyectItem,

    config: {
      canAdd: true,
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true
    }
  },

  schema: projectSchema,

} satisfies SectionDefinition<ProjectSchema, ProjectProps>;
