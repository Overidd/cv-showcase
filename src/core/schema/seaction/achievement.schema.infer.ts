import type React from 'react';

import type {
  InferFieldSchema,
  InferVariant,
} from '@/core/interface';

import type {
  AchievementSchema,
} from './achievement.schema';

export type InferAchievementItemSchema<
  T extends AchievementSchema
> = {
  id: string;
} & {
  [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
  InferFieldSchema<NonNullable<T['item']>[K]>;
};

export type InferAchievementSchema<
  T extends AchievementSchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'group'
  ? (
      T['group'] extends undefined
      ? never
      : {
          variant: InferVariant<NonNullable<T['group']>['variant']>;
        }
    )
  : K extends 'item'
  ? Array<InferAchievementItemSchema<T>>
  : never;
} & (
  T['item'] extends undefined
  ? Record<string, never>
  : {
    Item: React.ComponentType<
      InferAchievementItemSchema<T>
    >;
  }
);
