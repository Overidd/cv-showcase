import type {
  InferFieldSchema,
  InferParagraphSchema,
} from '@/core/interface';

import type {
  AcademySchema,
} from './academy.schema';

type InferAcademyItems<T> =
  T extends Array<infer TItem>
  ? Array<
    {
      id: string;
    } & {
      [K in keyof TItem as K extends 'id' ? never : K]:
      K extends 'paragraph'
      ? InferParagraphSchema<TItem[K]>
      : InferFieldSchema<TItem[K]>;
    }
  >
  : never;

export type InferAcademySchema<
  T extends AcademySchema
> = {
    [K in keyof T]:
    K extends 'items'
    ? InferAcademyItems<T[K]>
    : K extends 'sectionName'
    ? InferFieldSchema<T[K]>
    : K extends 'title'
    ? InferFieldSchema<T[K]>
    : never;
  };