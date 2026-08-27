import type React from 'react';

import type {
  InferFieldSchema,
  InferVariant,
  ValueRange,
} from '@/core/interface';

import type {
  LanguageSchema,
} from './language.schema';

export type InferLanguageItemSchema<
  T extends LanguageSchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<NonNullable<T['collection']>['item']> as K extends 'id' ? never : K]:
    K extends 'language'
    ? InferFieldSchema<
      NonNullable<NonNullable<T['collection']>['item']>[K],
      ValueRange<React.ReactNode>
    > & (
      'variant' extends keyof NonNullable<NonNullable<T['collection']>['item']>[K]
      ? {
        variant: InferVariant<
          NonNullable<NonNullable<T['collection']>['item']>[K]['variant']
        >;
      }
      : unknown
    )
    : InferFieldSchema<
      NonNullable<NonNullable<T['collection']>['item']>[K]
    >;
  };

export type InferLanguageSchema<
  T extends LanguageSchema
> = {
  [K in keyof T as K extends 'collection' ? never : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : never;
} & (
    NonNullable<T['collection']> extends never | undefined
    ? unknown
    : {
      collection: {
        items: Array<InferLanguageItemSchema<T>>;
      } & (
        'variant' extends keyof NonNullable<T['collection']>
        ? {
          variant: InferVariant<NonNullable<NonNullable<T['collection']>['variant']>>;
        }
        : unknown
      );
      SectionItem: React.ComponentType<
        InferLanguageItemSchema<T>
      >;
    }
  );