import type {
  InferCollectionSchema,
  InferFieldSchema,
} from '@/core/interface';

import type {
  SummarySchema
} from './summary.schema';

export type InferSummarySchema<
  T extends SummarySchema
> = {
    [K in keyof T]:
    K extends 'sectionName'
    ? InferFieldSchema<T[K]>
    : K extends 'title'
    ? InferFieldSchema<T[K]>
    : K extends 'contents'
    ? InferCollectionSchema<T[K]>
    : never;
  };
/*
 
export type InferSummarySchema<
T extends SummarySchema
> = {
[K in keyof T]:
  K extends 'sectionName' | 'title'
    ? InferFieldSchema<T[K]>
    : K extends 'contents'
      ? InferCollectionSchema<T[K]>
      : never;
};

--------
type InferSummaryField<T> =
  T extends Field
    ? InferFieldSchema<T>
    : T extends FieldCollection<infer TValue>
      ? FieldCollection<TValue>
      : never;

export type InferSummarySchema<
  T extends SummarySchema
> = {
  [K in keyof T]: InferSummaryField<T[K]>;
};

*/