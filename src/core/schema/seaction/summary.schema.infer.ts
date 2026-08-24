import type React from 'react';

import type {
  InferFieldSchema,
  InferParagraphSchema,
} from '@/core/interface';

import type {
  SummarySchema,
} from './summary.schema';

export type InferSummaryItemSchema<
  T extends SummarySchema
> = {
  id: string;
} & {
    [K in keyof NonNullable<T['item']> as K extends 'id' ? never : K]:
    K extends 'summary'
    ? InferParagraphSchema<NonNullable<T['item']>[K]>
    : InferFieldSchema<NonNullable<T['item']>[K]>;
  };

export type InferSummarySchema<
  T extends SummarySchema
> = {
  [K in keyof T as K extends 'item' ? 'items' : K]:
  K extends 'sectionName'
  ? InferFieldSchema<T[K]>
  : K extends 'item'
  ? Array<InferSummaryItemSchema<T>>
  : never;
} & (
    T['item'] extends undefined
    ? Record<string, never>
    : {
      Item: React.ComponentType<
        InferSummaryItemSchema<T>
      >;
    }
  );