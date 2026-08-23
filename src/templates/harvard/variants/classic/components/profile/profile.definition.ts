import type {
  ProfileSchema
} from '@/core/schema';

import type {
  SectionDefinition
} from '@/core/definition';

import {
  Profile,
  profileSchema,
} from '.'

import type {
  ProfileProps
} from '.'

export const profileDefinition = {
  key: 'sectionProfile',

  name: 'Sección Perfil',

  component: Profile,

  interconnections: [],

  config: {
    canDelete: false,
    canDragAndDrop: false,
    canDuplicate: false,
    canEdit: true
  },

  schema: profileSchema,

} satisfies SectionDefinition<ProfileSchema, ProfileProps>;