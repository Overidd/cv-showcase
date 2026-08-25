import type {
  SectionDefinition
} from '@/core/definition';

import type {
  PersonalizedSchema
} from '@/core/schema';

import {
  Personalized,
  PersonalizedItem,
  personalizedSchema,
} from '.';

import type {
  PersonalizedProps
} from '.';

export const personalizedDefinition = {
  key: 'sectionPersonalized',

  name: 'Personalizado',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true,
  },

  interconnections: [],

  component: Personalized,

  item: {
    component: PersonalizedItem,

    config: {
      canAdd: true,
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true,
    },
  },

  schema: personalizedSchema,

} satisfies SectionDefinition<PersonalizedSchema, PersonalizedProps>;
