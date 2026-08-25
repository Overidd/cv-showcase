import {
  defineVariant
} from '@/core/interface';

import type {
  InferPersonalizedItemSchema,
  InferPersonalizedSchema,
  PersonalizedSchema,
} from '@/core/schema';

export const personalizedSchema = {
  sectionName: {
    value: 'Personalizado',
    display: true,
    isChangeDisplay: false,
  },

  group: {
    variant: defineVariant({
      value: 'card',
      options: ['card', 'list', 'cart'],
    }),
  },

  item: {
    name: {
      display: true,
      isChangeDisplay: true,
    },

    date: {
      display: true,
      isChangeDisplay: true,
    },

    description: {
      display: true,
      isChangeDisplay: true,
    },
  },
} satisfies PersonalizedSchema;

export type PersonalizedProps = InferPersonalizedSchema<typeof personalizedSchema>;

export type PersonalizedItemProps = InferPersonalizedItemSchema<typeof personalizedSchema>;
