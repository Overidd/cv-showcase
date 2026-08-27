import type React from 'react';

import type {
  InferFieldSchema,
  InferParagraphSchema,
  InferVariant,
} from '@/core/interface';

import type {
  SummarySchema,
} from './summary.schema';

export type InferSummaryItemSchema<
  T extends SummarySchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<NonNullable<T['collection']>['item']> as K extends 'id' ? never : K]:
    K extends 'summary'
    ? InferParagraphSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>
    : InferFieldSchema<NonNullable<NonNullable<T['collection']>['item']>[K]>;
  };

export type InferSummarySchema<
  T extends SummarySchema
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
        items: Array<InferSummaryItemSchema<T>>;
      } & (
        'variant' extends keyof NonNullable<T['collection']>
        ? {
          variant: InferVariant<NonNullable<NonNullable<T['collection']>['variant']>>;
        }
        : unknown
      );
      SectionItem: React.ComponentType<
        InferSummaryItemSchema<T>
      >;
    }
  );