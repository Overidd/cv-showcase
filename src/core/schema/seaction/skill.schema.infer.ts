import type React from 'react';

import type {
  InferFieldCollectionSchema,
  InferFieldSchema,
  InferVariant,
  TValueRange,
} from '@/core/interface';

import type {
  SkillSchema,
} from './skill.schema';

export type InferSkillItemSchema<
  T extends SkillSchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
    K extends 'collection'
    ? InferFieldCollectionSchema<
      NonNullable<T['item']>[K],
      TValueRange<React.ReactNode>[]
    > & (
      'variant' extends keyof NonNullable<T['item']>[K]
      ? {
        variant: InferVariant<
          NonNullable<T['item']>[K]['variant']
        >;
      }
      : object
    )
    : InferFieldSchema<
      NonNullable<T['item']>[K]
    >;
  };

export type InferSkillSchema<
  T extends SkillSchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'item'
  ? Array<InferSkillItemSchema<T>>
  : never;
} & (
    T['item'] extends undefined
    ? Record<string, never>
    : {
      Item: React.ComponentType<
        InferSkillItemSchema<T>
      >;
    }
  );