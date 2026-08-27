import type React from 'react';

import type {
  InferFieldSchema,
  InferParagraphSchema,
  InferVariant,
} from '@/core/interface';

import type {
  AcademySchema,
} from './academy.schema';

export type InferAcademyItemSchema<
  T extends AcademySchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<NonNullable<T['collection']>['item']> as K extends 'id' ? never : K]:
    K extends 'paragraph'
    ? InferParagraphSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>
    : InferFieldSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>;
  };

export type InferAcademySchema<
  T extends AcademySchema
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
        items: Array<InferAcademyItemSchema<T>>;
      } & (
        'variant' extends keyof NonNullable<T['collection']>
        ? {
          variant: InferVariant<NonNullable<NonNullable<T['collection']>['variant']>>;
        }
        : unknown
      );
      SectionItem: React.ComponentType<
        InferAcademyItemSchema<T>
      >;
    }
  );