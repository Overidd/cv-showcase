import type {
  SectionDefinition
} from '@/core/definition';

import type {
  LanguageSchema
} from '@/core/schema';

import type {
  LanguageProps
} from '.';

import {
  Language,
  LanguageItem,
  languageSchema,
} from '.';

export const languageDefinition = {
  key: 'sectionLanguage',

  name: 'Idioma',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true,
  },

  component: Language,

  interconnections: [],

  schema: languageSchema,

  item: {
    component: LanguageItem,
    config: {
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true,
      canAdd: true,
    }
  }
} satisfies SectionDefinition<LanguageSchema, LanguageProps>