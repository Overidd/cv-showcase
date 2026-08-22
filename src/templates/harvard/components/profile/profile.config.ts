import type {
  InferProfileProps,
  ProfilePropsConfig,
  SectionConfig
} from '@/core/config';

import {
  defineVariant
} from '@/core/config';

import {
  Profile
} from '.'

export const profileProps = {
  name: {
    value: '',
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
    value: '',
    isChangeDisplay: true,
    display: true,
  },

  contact: {
    value: '',
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
        value: '',
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
        value: '',
        isChangeDisplay: true,
        display: true,
      },

      {
        key: 'nationality',
        value: '',
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
} satisfies ProfilePropsConfig;

export type ProfileProps = InferProfileProps<typeof profileProps>;


export const profileConfig = {
  key: 'sectionProfile',

  name: 'Sección Perfil',

  component: Profile,

  interconnections: [],

  config: {
    isDelete: false,
    isDragAndDrop: false,
    isDuplicate: false,
    isEdit: true
  },

  props: profileProps,

} satisfies SectionConfig<'sectionProfile', ProfileProps>;
