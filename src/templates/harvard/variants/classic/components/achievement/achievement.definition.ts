import type {
  SectionDefinition
} from '@/core/definition';

import type {
  AchievementSchema
} from '@/core/schema';

import {
  Achievement,
  AchievementItem,
  achievementSchema,
} from '.';

import type {
  AchievementProps
} from '.';

export const achievementDefinition = {
  key: 'sectionAchievement',

  name: 'Logros Clave',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true,
  },

  interconnections: [],

  component: Achievement,

  item: {
    component: AchievementItem,

    config: {
      canAdd: true,
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true,
    },
  },

  schema: achievementSchema,

} satisfies SectionDefinition<AchievementSchema, AchievementProps>;
