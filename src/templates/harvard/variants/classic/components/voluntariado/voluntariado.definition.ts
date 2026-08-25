import type {
  SectionDefinition
} from '@/core/definition';

import type {
  VoluntariadoSchema
} from '@/core/schema';

import {
  Voluntariado,
  VoluntariadoItem,
  voluntariadoSchema,
} from '.';

import type {
  VoluntariadoProps
} from '.';

export const voluntariadoDefinition = {
  key: 'sectionVoluntariado',

  name: 'Voluntariado',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true,
  },

  interconnections: [],

  component: Voluntariado,

  item: {
    component: VoluntariadoItem,

    config: {
      canAdd: true,
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true,
    },
  },

  schema: voluntariadoSchema,

} satisfies SectionDefinition<VoluntariadoSchema, VoluntariadoProps>;
