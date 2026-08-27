import {
  defineVariant
} from '@/core/interface';

import type {
  AchievementSchema,
  InferAchievementItemSchema,
  InferAchievementSchema,
} from '@/core/schema';

export const achievementSchema = {
  sectionName: {
    value: 'Logros Clave',
    display: true,
    isChangeDisplay: false,
  },

  collection: {
    variant: defineVariant({
      value: 'card',
      options: ['card', 'list', 'cart'],
    }),

    item: {
      name: {
        display: true,
        isChangeDisplay: true,
      },

      description: {
        display: true,
        isChangeDisplay: true,
      },
    },
  },
} satisfies AchievementSchema;

export type AchievementProps = InferAchievementSchema<typeof achievementSchema>;

export type AchievementItemProps = InferAchievementItemSchema<typeof achievementSchema>;
