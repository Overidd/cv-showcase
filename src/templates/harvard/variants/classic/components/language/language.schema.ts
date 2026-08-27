import {
  defineVariant
} from '@/core/interface';

import type {
  InferLanguageItemSchema,
  InferLanguageSchema,
  LanguageSchema
} from '@/core/schema';

export const languageSchema = {

  sectionName: {
    display: true,
    isChangeDisplay: false,
    value: 'Idioma'
  },

  collection: {
    item: {
      language: {
        display: true,
        isChangeDisplay: true,
        variant: defineVariant({
          value: 'list',
          options: ['vignette', 'list', 'progress-bar']
        })
      }
    }
  }
} satisfies LanguageSchema;

export type LanguageProps = InferLanguageSchema<typeof languageSchema>;
export type LanguageItemProps = InferLanguageItemSchema<typeof languageSchema>;