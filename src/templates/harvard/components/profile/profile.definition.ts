import type {
  InferProfileSchema,
  ProfileSchema
} from '@/core/schema';

import type {
  SectionDefinition
} from '@/core/definition';

import {
  defineVariant
} from '@/core/interface';

import {
  Profile
} from '.'

const profileSchema = {
  name: {
    variant: defineVariant({
      value: 'capitalize',
      options: [
        'uppercase',
        'capitalize',
      ],
    }),

    isChangeDisplay: false,
    display: true,
  },

  title: {
    isChangeDisplay: true,
    display: true,
  },

  contact: {
    display: true,
    isChangeDisplay: false,

    variant: defineVariant({
      value: 'icon',
      options: ['list', 'icon']
    }),

    children: [
      {
        key: 'phone',
        value: '+51 953 565 511',
        isChangeDisplay: true,
        display: true,
      },

      {
        key: 'email',
        value: 'pepe@gmail.com',
        isChangeDisplay: true,
        display: true,
      },

      {
        key: 'linkedin',
        value: 'https://linkedin.com/in/pepe',
        isChangeDisplay: true,
        display: true,
      },

      {
        key: 'additionalLink',
        value: 'https://github.com/Overidd',
        isChangeDisplay: true,
        display: true,
      },

      {
        key: 'location',
        value: 'Av. San Felipe',
        isChangeDisplay: true,
        display: true,
      },

      {
        key: 'birthdate',
        value: '12-08-1999',
        isChangeDisplay: true,
        display: true,
      },

      {
        key: 'nationality',
        value: 'Perú',
        isChangeDisplay: true,
        display: true,
      },
    ],
  },

  photo: {
    value: '/image/photoDefaul.svg',

    variant: defineVariant({
      value: 'square',
      options: ['square', 'circular'],
    }),

    isChangeDisplay: true,

    display: true,
  },
} satisfies ProfileSchema;

export type ProfileProps = InferProfileSchema<typeof profileSchema>;


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