import type {
  SectionDefinition
} from '@/core/definition';

import type {
  WorkExperienceSchema
} from '@/core/schema';

import {
  WorkExperience,
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

  schema: workExperienceSchema,

} satisfies SectionDefinition<WorkExperienceSchema, WorkExperienceProps>