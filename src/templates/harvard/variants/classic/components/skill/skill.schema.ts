import {
  defineVariant
} from '@/core/interface';

import type {
  InferSkillItemSchema,
  InferSkillSchema,
  SkillSchema
} from '@/core/schema';

export const skillSchema = {
  sectionName: {
    value: 'Skill',
    display: true,
    isChangeDisplay: false
  },

  item: {
    name: {
      display: true,
      isChangeDisplay: true
    },

    group: {
      display: true,
      isChangeDisplay: true,
      variant: defineVariant({
        value: 'list',
        options: ['vignette', 'list', 'progress-bar']
      })
    }
  }

} satisfies SkillSchema;

export type SkillProps = InferSkillSchema<typeof skillSchema>;

export type SkillItemProps = InferSkillItemSchema<typeof skillSchema>;