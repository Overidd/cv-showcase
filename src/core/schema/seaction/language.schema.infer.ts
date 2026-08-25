import type React from 'react';

import type {
  InferFieldSchema,
  InferVariant,
  TValueRange,
} from '@/core/interface';

import type {
  LanguageSchema,
} from './language.schema';


export type InferLanguageItemSchema<
  T extends LanguageSchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
    K extends 'language'
    ? InferFieldSchema<
      NonNullable<T['item']>[K],
      TValueRange<React.ReactNode>
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


export type InferLanguageSchema<
  T extends LanguageSchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'title'
  ? InferFieldSchema<T[K]>
  : K extends 'item'
  ? Array<InferLanguageItemSchema<T>>
  : never;
} & (
    T['item'] extends undefined
    ? Record<string, never>
    : {
      Item: React.ComponentType<
        InferLanguageItemSchema<T>
      >;
    }
  );