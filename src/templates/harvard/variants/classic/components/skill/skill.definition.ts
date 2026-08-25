import type {
  SectionDefinition
} from '@/core/definition';

import type {
  SkillSchema
} from '@/core/schema';

import type {
  SkillProps,
} from '.';

import {
  Skill,
  SkillItem,
  skillSchema
} from '.';

export const skillDefinition = {
  key: 'sectionSkill',

  name: 'Skill',

  config: {
    canDelete: true,
    canDragAndDrop: true,
    canDuplicate: true,
    canEdit: true
  },

  component: Skill,

  interconnections: [],

  schema: skillSchema,

  item: {
    component: SkillItem,

    config: {
      canAdd: true,
      canDelete: true,
      canDragAndDrop: true,
      canDuplicate: true,
      canEdit: true,
    }
  }

} satisfies SectionDefinition<SkillSchema, SkillProps>