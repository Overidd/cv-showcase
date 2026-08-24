import type {
  SectionDefinition
} from '@/core/definition';

import type {
  WorkExperienceSchema
} from '@/core/schema';

import {
  WorkExperience,
  WorkExperienceItem,
  workExperienceSchema,
} from '.';

import type {
  WorkExperienceProps
} from '.';

export const workExperienceDefinition = {
  key: 'sectionWorkExperience',

  name: 'Experiencia Laboral',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true
  },

  interconnections: [],

  component: WorkExperience,

  item: {
    component: WorkExperienceItem,

    config: {
      canAdd: true,
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true
    }
  },

  schema: workExperienceSchema,

} satisfies SectionDefinition<WorkExperienceSchema, WorkExperienceProps>