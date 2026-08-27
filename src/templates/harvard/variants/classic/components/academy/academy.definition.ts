import type {
  SectionDefinition
} from '@/core/definition';

import type {
  AcademySchema
} from '@/core/schema';

import type {
  AcademyProps
} from './academy.schema';

import {
  academySchema,
} from './academy.schema';

import {
  Academy
} from './Academy';

export const academyDefinition = {
  key: 'sectionAcademy',

  name: 'Seccion de educación',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true
  },

  interconnections: [],

  component: Academy,

  schema: academySchema

} satisfies SectionDefinition<AcademySchema, AcademyProps>